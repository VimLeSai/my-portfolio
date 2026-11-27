/**
 * Pick a chat model from env. Prefer cheap providers.
 *
 * TALK_PROVIDER = groq | google | openai  (default: first key that exists)
 * Keys: GROQ_API_KEY, GOOGLE_GENERATIVE_AI_API_KEY, OPENAI_API_KEY
 */

import { openai } from '@ai-sdk/openai';
import { groq } from '@ai-sdk/groq';
import { google } from '@ai-sdk/google';

const PROVIDERS = {
  groq: {
    key: 'GROQ_API_KEY',
    defaultModel: 'openai/gpt-oss-20b',
    create: (id) => groq(id),
  },
  google: {
    key: 'GOOGLE_GENERATIVE_AI_API_KEY',
    defaultModel: 'gemini-2.0-flash',
    create: (id) => google(id),
  },
  openai: {
    key: 'OPENAI_API_KEY',
    defaultModel: 'gpt-4o-mini',
    create: (id) => openai(id),
  },
};

function detectProvider() {
  const forced = (process.env.TALK_PROVIDER || '').toLowerCase().trim();
  if (forced && PROVIDERS[forced] && process.env[PROVIDERS[forced].key]) {
    return forced;
  }
  // Prefer cheapest first when multiple keys exist
  for (const id of ['groq', 'google', 'openai']) {
    if (process.env[PROVIDERS[id].key]) return id;
  }
  return null;
}

export function talkConfigured() {
  return Boolean(detectProvider());
}

export function getTalkModelInfo() {
  const provider = detectProvider();
  if (!provider) {
    return { configured: false, provider: null, model: null };
  }
  const conf = PROVIDERS[provider];
  const model =
    process.env.TALK_MODEL ||
    process.env.OPENAI_MODEL ||
    conf.defaultModel;
  return { configured: true, provider, model };
}

export function getTalkModel() {
  const info = getTalkModelInfo();
  if (!info.configured) {
    throw new Error('Talk model not configured');
  }
  return PROVIDERS[info.provider].create(info.model);
}
