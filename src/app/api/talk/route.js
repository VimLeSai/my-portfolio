import {
  convertToModelMessages,
  createUIMessageStream,
  createUIMessageStreamResponse,
  streamText,
} from 'ai';
import { buildSystemPrompt } from '@/lib/talk/prompt';
import { retrieveContext } from '@/lib/talk/retrieve';
import { rateLimit, clientIp } from '@/lib/talk/rate-limit';
import { saveSession } from '@/lib/talk/session';
import { textFromUiMessage } from '@/lib/talk/sanitize';
import { getTalkModel, getTalkModelInfo, talkConfigured } from '@/lib/talk/model';
import {
  checkUserInput,
  clampUserText,
  guardedTruncateMessages,
  scrubOutput,
  GUARDRAIL_LIMITS,
} from '@/lib/talk/guardrails';

export const maxDuration = 60;

export async function GET() {
  const info = getTalkModelInfo();
  return Response.json({
    ok: true,
    configured: info.configured,
    provider: info.provider,
    model: info.model,
  });
}

function blockedJson(reply, status = 400) {
  return Response.json({ error: reply, message: reply }, { status });
}

function guardrailStreamResponse(reply) {
  const id = `guard-${Date.now()}`;
  const stream = createUIMessageStream({
    execute: async ({ writer }) => {
      writer.write({ type: 'start' });
      writer.write({ type: 'text-start', id });
      writer.write({ type: 'text-delta', id, delta: reply });
      writer.write({ type: 'text-end', id });
      writer.write({ type: 'finish' });
    },
  });
  return createUIMessageStreamResponse({ stream });
}

/** Scrub secret-like patterns from the raw SSE/UI stream body. */
function scrubStreamResponse(response) {
  if (!response?.body) return response;
  const decoder = new TextDecoder();
  const encoder = new TextEncoder();
  let pending = '';

  const transform = new TransformStream({
    transform(chunk, controller) {
      pending += decoder.decode(chunk, { stream: true });
      const parts = pending.split('\n');
      pending = parts.pop() || '';
      for (const line of parts) {
        controller.enqueue(encoder.encode(`${scrubOutput(line)}\n`));
      }
      if (pending.length > 8000) {
        controller.enqueue(encoder.encode(scrubOutput(pending)));
        pending = '';
      }
    },
    flush(controller) {
      if (pending) {
        controller.enqueue(encoder.encode(scrubOutput(pending)));
      }
    },
  });

  return new Response(response.body.pipeThrough(transform), {
    status: response.status,
    statusText: response.statusText,
    headers: response.headers,
  });
}

export async function POST(request) {
  if (!talkConfigured()) {
    return blockedJson(
      "Talk isn't wired on this deploy yet — drop an email at /contact and I'll reply myself.",
      503,
    );
  }

  const ip = clientIp(request);
  const limited = rateLimit(`talk:${ip}`, {
    limit: GUARDRAIL_LIMITS.rateLimit,
    windowMs: GUARDRAIL_LIMITS.rateWindowMs,
  });
  if (!limited.ok) {
    return blockedJson(
      `I'm getting a lot of questions right now. Try again in about ${limited.retryAfterSec}s.`,
      429,
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return blockedJson('Bad request', 400);
  }

  const rawSize = JSON.stringify(body || {}).length;
  if (rawSize > 48_000) {
    return blockedJson('That request is too large.', 413);
  }

  const sessionId = clampUserText(body.sessionId || '')
    .replace(/[^a-zA-Z0-9_-]/g, '')
    .slice(0, 64);
  const messages = guardedTruncateMessages(body.messages || []);

  if (!messages.length) {
    return blockedJson('No messages', 400);
  }

  const lastUser = [...messages].reverse().find((m) => m.role === 'user');
  const query = clampUserText(textFromUiMessage(lastUser));

  const gate = checkUserInput(query);
  if (!gate.ok) {
    return guardrailStreamResponse(gate.reply);
  }

  const { context } = await retrieveContext(query, { k: 6 });
  const system = buildSystemPrompt(context);

  const result = streamText({
    model: getTalkModel(),
    system,
    messages: await convertToModelMessages(messages),
    temperature: 0.5,
    maxOutputTokens: 700,
    async onFinish({ text }) {
      if (!sessionId) return;
      const safe = scrubOutput(text);
      const next = [
        ...messages,
        {
          id: `asst-${Date.now()}`,
          role: 'assistant',
          parts: [{ type: 'text', text: safe }],
        },
      ];
      await saveSession(sessionId, { messages: next });
    },
  });

  return scrubStreamResponse(result.toUIMessageStreamResponse());
}
