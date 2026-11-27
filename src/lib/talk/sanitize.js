export function sanitize(str) {
  if (!str) return '';
  return String(str).replace(/<[^>]*>?/gm, '').trim();
}

export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email || '');
}

export function truncateMessages(messages, { maxTurns = 20, maxChars = 8000 } = {}) {
  const sliced = (messages || []).slice(-maxTurns);
  let total = 0;
  const out = [];
  for (let i = sliced.length - 1; i >= 0; i--) {
    const m = sliced[i];
    const text =
      typeof m.content === 'string'
        ? m.content
        : Array.isArray(m.parts)
          ? m.parts
              .filter((p) => p.type === 'text')
              .map((p) => p.text)
              .join('')
          : '';
    const len = text.length;
    if (total + len > maxChars && out.length) break;
    total += len;
    out.unshift(m);
  }
  return out;
}

export function textFromUiMessage(message) {
  if (!message) return '';
  if (typeof message.content === 'string') return message.content;
  if (Array.isArray(message.parts)) {
    return message.parts
      .filter((p) => p.type === 'text')
      .map((p) => p.text)
      .join('');
  }
  return '';
}
