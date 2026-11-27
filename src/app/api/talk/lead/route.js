import { rateLimit, clientIp } from '@/lib/talk/rate-limit';
import {
  mailConfigured,
  sendTalkLead,
  emailTranscriptToVisitor,
} from '@/lib/talk/mail';
import { saveSession } from '@/lib/talk/session';
import { sanitize, isValidEmail } from '@/lib/talk/sanitize';

export async function POST(request) {
  if (!mailConfigured()) {
    return Response.json(
      {
        error:
          "Email isn't wired on this deploy. Use the contact form at /contact instead.",
      },
      { status: 503 },
    );
  }

  const ip = clientIp(request);
  const limited = rateLimit(`talk-lead:${ip}`, {
    limit: 8,
    windowMs: 60 * 60 * 1000,
  });
  if (!limited.ok) {
    return Response.json(
      { error: 'Too many emails from this network. Try again later.' },
      { status: 429 },
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Bad request' }, { status: 400 });
  }

  const email = sanitize(body.email || '');
  const name = sanitize(body.name || '');
  const sessionId = sanitize(body.sessionId || '').slice(0, 64);
  const mode = body.mode === 'resume' ? 'resume' : 'lead';
  const messages = Array.isArray(body.messages) ? body.messages : [];

  if (!isValidEmail(email)) {
    return Response.json({ error: 'Need a real email.' }, { status: 400 });
  }

  try {
    if (mode === 'resume') {
      const { resumeLink } = await emailTranscriptToVisitor({
        email,
        messages,
        sessionId,
      });
      if (sessionId) {
        await saveSession(sessionId, { messages, email });
      }
      return Response.json({
        ok: true,
        mode,
        resumeLink,
        message: 'Sent — check your inbox for the transcript and resume link.',
      });
    }

    const { resumeLink } = await sendTalkLead({
      email,
      name,
      messages,
      sessionId,
    });
    if (sessionId) {
      await saveSession(sessionId, { messages, email });
    }
    return Response.json({
      ok: true,
      mode,
      resumeLink,
      message: "Got it — I'll see it in my inbox. Or use /contact if you prefer the form.",
    });
  } catch (err) {
    console.error('[talk/lead]', err);
    return Response.json(
      { error: 'Could not send email. Try /contact.' },
      { status: 500 },
    );
  }
}
