import { rateLimit, clientIp } from '@/lib/talk/rate-limit';
import { sanitize } from '@/lib/talk/sanitize';

export const maxDuration = 30;

export async function POST(request) {
  if (!process.env.OPENAI_API_KEY) {
    return Response.json({ error: 'TTS not configured' }, { status: 503 });
  }

  const ip = clientIp(request);
  const limited = rateLimit(`talk-tts:${ip}`, {
    limit: 30,
    windowMs: 10 * 60 * 1000,
  });
  if (!limited.ok) {
    return Response.json({ error: 'Rate limited' }, { status: 429 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Bad request' }, { status: 400 });
  }

  const text = sanitize(body.text || '').slice(0, 2000);
  if (!text) {
    return Response.json({ error: 'Missing text' }, { status: 400 });
  }

  const model = process.env.OPENAI_TTS_MODEL || 'tts-1';
  const voice = process.env.OPENAI_TTS_VOICE || 'onyx';

  const res = await fetch('https://api.openai.com/v1/audio/speech', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model,
      voice,
      input: text,
      response_format: 'mp3',
    }),
  });

  if (!res.ok) {
    const errText = await res.text();
    console.error('[talk/tts]', res.status, errText);
    return Response.json({ error: 'TTS failed' }, { status: 502 });
  }

  const audio = await res.arrayBuffer();
  return new Response(audio, {
    headers: {
      'Content-Type': 'audio/mpeg',
      'Cache-Control': 'no-store',
    },
  });
}
