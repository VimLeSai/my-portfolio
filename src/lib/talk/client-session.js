const SESSION_KEY = 'talk:sessionId';
const MESSAGES_KEY = 'talk:messages';
const SPEAK_KEY = 'talk:speak';

export function getOrCreateSessionId() {
  if (typeof window === 'undefined') return null;
  let id = window.localStorage.getItem(SESSION_KEY);
  if (!id) {
    id =
      typeof crypto !== 'undefined' && crypto.randomUUID
        ? crypto.randomUUID()
        : `t-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
    window.localStorage.setItem(SESSION_KEY, id);
  }
  return id;
}

export function setSessionId(id) {
  if (typeof window === 'undefined' || !id) return;
  window.localStorage.setItem(SESSION_KEY, id);
}

export function loadLocalMessages() {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.localStorage.getItem(MESSAGES_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveLocalMessages(messages) {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(MESSAGES_KEY, JSON.stringify(messages || []));
  } catch {
    // quota — ignore
  }
}

export function clearLocalTalk() {
  if (typeof window === 'undefined') return;
  window.localStorage.removeItem(MESSAGES_KEY);
  // keep session id so rate-limit identity is stable, or rotate:
  window.localStorage.removeItem(SESSION_KEY);
}

export function getSpeakEnabled() {
  if (typeof window === 'undefined') return false;
  return window.localStorage.getItem(SPEAK_KEY) === '1';
}

export function setSpeakEnabled(on) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(SPEAK_KEY, on ? '1' : '0');
}

export function messageText(message) {
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
