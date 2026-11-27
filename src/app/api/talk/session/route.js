import { getSession, saveSession, clearSession } from '@/lib/talk/session';
import { sanitize } from '@/lib/talk/sanitize';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const id = sanitize(searchParams.get('id') || '').slice(0, 64);
  if (!id) {
    return Response.json({ error: 'Missing id' }, { status: 400 });
  }

  const session = await getSession(id);
  if (!session) {
    return Response.json({ messages: null, persisted: false });
  }

  return Response.json({
    messages: session.messages || [],
    email: session.email || null,
    updatedAt: session.updatedAt || null,
    persisted: true,
  });
}

export async function PUT(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Bad request' }, { status: 400 });
  }

  const id = sanitize(body.sessionId || '').slice(0, 64);
  if (!id) {
    return Response.json({ error: 'Missing sessionId' }, { status: 400 });
  }

  const ok = await saveSession(id, {
    messages: body.messages || [],
    email: body.email ? sanitize(body.email) : undefined,
  });

  return Response.json({ ok, persisted: ok });
}

export async function DELETE(request) {
  const { searchParams } = new URL(request.url);
  const id = sanitize(searchParams.get('id') || '').slice(0, 64);
  if (!id) {
    return Response.json({ error: 'Missing id' }, { status: 400 });
  }
  await clearSession(id);
  return Response.json({ ok: true });
}
