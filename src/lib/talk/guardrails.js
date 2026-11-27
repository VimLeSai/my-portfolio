/**
 * Input / output guardrails for Talk.
 * Defense in depth: block before the model, scrub after, keep secrets out of prompts.
 */

import { sanitize, textFromUiMessage } from '@/lib/talk/sanitize';

/** Strings that must never appear in model output (internals + secrets). */
export const BLOCKED_OUTPUT = [
  /\bNEX[-\s]?\d+/i,
  /\bRFAC[-\s]?\d+/i,
  /\bSEC[-\s]?\d+/i,
  /\bNova\b/i,
  /\bUpkeepSpark\b/i,
  /\bLangSmith\b/i,
  /\bCodeRabbit\b/i,
  /\bhocuspocus\b/i,
  /sk-[a-zA-Z0-9]{10,}/,
  /xox[baprs]-[a-zA-Z0-9-]+/i,
  /AIza[0-9A-Za-z\-_]{20,}/,
  /ghp_[a-zA-Z0-9]{20,}/,
  /-----BEGIN (?:RSA |OPENSSH )?PRIVATE KEY-----/,
  /\bSMTP_PASS\b/i,
  /\bOPENAI_API_KEY\b/i,
  /\bGROQ_API_KEY\b/i,
  /\bSERPER_API_KEY\b/i,
  /\bUPSTASH_REDIS_REST_TOKEN\b/i,
];

/** Prompt-injection / jailbreak / data-exfil attempts. */
const INJECTION = [
  /ignore\s+(all\s+)?(previous|prior|above|earlier)\s+(instructions|rules|prompts)/i,
  /disregard\s+(your|the)\s+(system|instructions|prompt)/i,
  /you\s+are\s+now\s+(dan|jailbreak|unrestricted|developer\s*mode)/i,
  /\bDAN\b.*\bmode\b/i,
  /reveal\s+(your\s+)?(system\s+)?(prompt|instructions)/i,
  /show\s+(me\s+)?(the\s+)?(system|hidden)\s+(prompt|instructions)/i,
  /print\s+(your\s+)?(system\s+)?prompt/i,
  /what\s+are\s+your\s+(exact\s+)?(system\s+)?instructions/i,
  /override\s+(your\s+)?(safety|guardrails|rules)/i,
  /act\s+as\s+if\s+you\s+have\s+no\s+restrictions/i,
  /do\s+anything\s+now/i,
  /jailbreak/i,
  /base64\s+(decode|encode)\s+(the\s+)?(system|prompt|secret)/i,
];

/** Attempts to pull non-public / infra / credential material. */
const EXFIL = [
  /api[_-\s]?key/i,
  /secret[_-\s]?key/i,
  /access[_-\s]?token/i,
  /private[_-\s]?key/i,
  /\.env\b/i,
  /environment\s+variables?/i,
  /\b(smtp|redis|database)\s+(password|credentials?|connection\s+string)\b/i,
  /\b(ssh|aws|gcp|vercel)\s+(key|secret|token|credentials?)\b/i,
  /\bsource\s+code\s+of\s+(this|your)\s+(api|server|route)\b/i,
  /\b(dump|exfiltrate|leak)\b.*\b(secrets?|keys?|env|credentials?|data)\b/i,
  /\binternal\s+(repo|repository|ticket|slack|jira)\b/i,
  /\b(ticket|jira)\s+(id|number|key)\b/i,
  /\b(private|internal)\s+repo(sitory|sitories|s)?\b/i,
  /\brepo\s+name\s+(for|of)\b/i,
  /\b(NEX|RFAC|SEC)[-\s]?\d*/i,
  /\b(password|credentials?)\s+(for|to)\b/i,
];

const MAX_USER_CHARS = 2000;
const MAX_MESSAGE_CHARS = 6000;
const MAX_TURNS = 16;

export function clampUserText(text) {
  return sanitize(text).slice(0, MAX_USER_CHARS);
}

export function guardedTruncateMessages(messages) {
  const sliced = (messages || []).slice(-MAX_TURNS);
  let total = 0;
  const out = [];
  for (let i = sliced.length - 1; i >= 0; i--) {
    const m = sliced[i];
    const text = textFromUiMessage(m);
    if (total + text.length > MAX_MESSAGE_CHARS && out.length) break;
    // Cap each user turn
    if (m.role === 'user' && text.length > MAX_USER_CHARS) {
      out.unshift({
        ...m,
        parts: [{ type: 'text', text: text.slice(0, MAX_USER_CHARS) }],
        content: undefined,
      });
    } else {
      out.unshift(m);
    }
    total += Math.min(text.length, MAX_USER_CHARS);
  }
  return out;
}

/**
 * @returns {{ ok: true } | { ok: false, reason: string, reply: string }}
 */
export function checkUserInput(rawText) {
  const text = sanitize(rawText || '');
  if (!text) {
    return {
      ok: false,
      reason: 'empty',
      reply: 'Say something concrete — work, process, stack, or a role.',
    };
  }
  if (text.length > MAX_USER_CHARS) {
    return {
      ok: false,
      reason: 'too_long',
      reply: 'That message is a bit long. Shorten it and try again.',
    };
  }

  for (const re of INJECTION) {
    if (re.test(text)) {
      return {
        ok: false,
        reason: 'injection',
        reply:
          "I won't ignore my rules or dump hidden prompts. Ask about my public work, process, or stack instead.",
      };
    }
  }

  for (const re of EXFIL) {
    if (re.test(text)) {
      return {
        ok: false,
        reason: 'exfil',
        reply:
          "I can't share keys, env vars, internal tickets, or private repos. Public stuff only — CMMS, in-product AI, ticket-to-PR factory, case studies. Or use /contact.",
      };
    }
  }

  // Homoglyph / excessive control chars
  if (/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/.test(text)) {
    return {
      ok: false,
      reason: 'control_chars',
      reply: "That message has characters I won't process. Try plain text.",
    };
  }

  return { ok: true };
}

/** Scrub model output before it leaves the server (non-stream helper). */
export function scrubOutput(text) {
  let out = String(text || '');
  for (const re of BLOCKED_OUTPUT) {
    out = out.replace(re, '[redacted]');
  }
  // Never echo phone-looking numbers that match the portfolio phone pattern
  out = out.replace(/\+91[\s-]?\d{5}[\s-]?\d{5}/g, '[redacted]');
  return out;
}

/**
 * Transform stream: scrub text deltas as they pass.
 * Compatible with AI SDK UI message stream chunks that carry text.
 */
export function scrubUiMessageChunk(chunk) {
  if (!chunk || typeof chunk !== 'object') return chunk;
  if (chunk.type === 'text-delta' && typeof chunk.delta === 'string') {
    return { ...chunk, delta: scrubOutput(chunk.delta) };
  }
  if (chunk.type === 'text-delta' && typeof chunk.textDelta === 'string') {
    return { ...chunk, textDelta: scrubOutput(chunk.textDelta) };
  }
  if (typeof chunk.text === 'string' && /delta|text/i.test(chunk.type || '')) {
    return { ...chunk, text: scrubOutput(chunk.text) };
  }
  return chunk;
}

export const GUARDRAIL_LIMITS = {
  maxUserChars: MAX_USER_CHARS,
  maxMessageChars: MAX_MESSAGE_CHARS,
  maxTurns: MAX_TURNS,
  // Tighter than before for abuse resistance
  rateLimit: 12,
  rateWindowMs: 10 * 60 * 1000,
};
