import { Redis } from '@upstash/redis';

const TTL_SECONDS = 60 * 60 * 24 * 30; // 30 days

let redis = null;

function getRedis() {
  if (redis) return redis;
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;
  redis = new Redis({ url, token });
  return redis;
}

export function sessionsEnabled() {
  return Boolean(
    process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN,
  );
}

function key(id) {
  return `talk:${id}`;
}

export async function getSession(sessionId) {
  if (!sessionId || !/^[\w-]{8,64}$/.test(sessionId)) return null;
  const r = getRedis();
  if (!r) return null;
  try {
    return await r.get(key(sessionId));
  } catch (err) {
    console.warn('[talk] session get failed', err?.message);
    return null;
  }
}

export async function saveSession(sessionId, payload) {
  if (!sessionId || !/^[\w-]{8,64}$/.test(sessionId)) return false;
  const r = getRedis();
  if (!r) return false;
  try {
    await r.set(
      key(sessionId),
      {
        ...payload,
        updatedAt: Date.now(),
      },
      { ex: TTL_SECONDS },
    );
    return true;
  } catch (err) {
    console.warn('[talk] session save failed', err?.message);
    return false;
  }
}

export async function clearSession(sessionId) {
  if (!sessionId) return false;
  const r = getRedis();
  if (!r) return false;
  try {
    await r.del(key(sessionId));
    return true;
  } catch {
    return false;
  }
}
