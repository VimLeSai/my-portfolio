const buckets = new Map();

/**
 * Simple in-memory IP rate limit. Fine for a single Node/Vercel isolate.
 * @returns {{ ok: boolean, retryAfterSec?: number }}
 */
export function rateLimit(key, { limit = 20, windowMs = 10 * 60 * 1000 } = {}) {
  const now = Date.now();
  let entry = buckets.get(key);
  if (!entry || now - entry.start > windowMs) {
    entry = { start: now, count: 0 };
    buckets.set(key, entry);
  }
  entry.count += 1;
  if (entry.count > limit) {
    const retryAfterSec = Math.ceil((entry.start + windowMs - now) / 1000);
    return { ok: false, retryAfterSec };
  }
  return { ok: true };
}

export function clientIp(request) {
  const xf = request.headers.get('x-forwarded-for');
  if (xf) return xf.split(',')[0].trim();
  return request.headers.get('x-real-ip') || 'unknown';
}
