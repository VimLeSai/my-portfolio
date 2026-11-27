import { embed } from 'ai';
import { openai } from '@ai-sdk/openai';
import { buildDocuments, getIdentityCard } from '@/lib/talk/documents';

let cachedIndex = null;

function tokenize(text) {
  return String(text || '')
    .toLowerCase()
    .replace(/[^a-z0-9+#.\s-]/g, ' ')
    .split(/\s+/)
    .filter((t) => t.length > 1);
}

function lexicalScore(queryTokens, docText) {
  const docTokens = tokenize(docText);
  if (!docTokens.length || !queryTokens.length) return 0;
  const set = new Set(docTokens);
  let hits = 0;
  for (const t of queryTokens) {
    if (set.has(t)) hits += 1;
  }
  // soft length penalty
  return hits / Math.sqrt(queryTokens.length) / Math.log2(8 + docTokens.length);
}

function cosine(a, b) {
  if (!a?.length || !b?.length || a.length !== b.length) return -1;
  let dot = 0;
  let na = 0;
  let nb = 0;
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    na += a[i] * a[i];
    nb += b[i] * b[i];
  }
  if (!na || !nb) return -1;
  return dot / (Math.sqrt(na) * Math.sqrt(nb));
}

async function loadIndex() {
  if (cachedIndex) return cachedIndex;
  try {
    const mod = await import('@/lib/talk/index.json');
    cachedIndex = mod.default || mod;
  } catch {
    cachedIndex = {
      version: 1,
      embedded: false,
      chunks: buildDocuments().map((d) => ({
        id: d.id,
        source: d.source,
        text: d.text,
        embedding: null,
      })),
    };
  }
  return cachedIndex;
}

/**
 * Retrieve top-k chunks for a query. Uses embeddings when present + API key,
 * otherwise lexical overlap. Always returns identity card text separately.
 */
export async function retrieveContext(query, { k = 6 } = {}) {
  const index = await loadIndex();
  const chunks = index.chunks || [];
  const queryTokens = tokenize(query);

  let ranked = chunks
    .map((c) => ({
      ...c,
      score: lexicalScore(queryTokens, c.text),
    }))
    .sort((a, b) => b.score - a.score);

  // Embeddings are optional (OpenAI). Cheap deploys use lexical-only RAG.
  const hasEmbeddings =
    index.embedded &&
    chunks.some((c) => Array.isArray(c.embedding) && c.embedding.length) &&
    process.env.OPENAI_API_KEY;

  if (hasEmbeddings && query?.trim()) {
    try {
      const { embedding } = await embed({
        model: openai.embedding(
          process.env.OPENAI_EMBEDDING_MODEL || 'text-embedding-3-small',
        ),
        value: query,
      });
      const pool = ranked.slice(0, Math.max(24, k * 4));
      ranked = pool
        .map((c) => ({
          ...c,
          score:
            cosine(embedding, c.embedding) * 0.85 +
            lexicalScore(queryTokens, c.text) * 0.15,
        }))
        .sort((a, b) => b.score - a.score);
    } catch (err) {
      console.warn('[talk] embedding retrieve failed, using lexical', err?.message);
    }
  }

  const top = ranked.filter((c) => c.score > 0).slice(0, k);
  // if nothing scored, still give a few general chunks
  const selected = top.length
    ? top
    : chunks.filter((c) => c.source === 'profile' || c.source === 'experience').slice(0, k);

  const context = selected
    .map((c, i) => `[${i + 1}] (${c.source}) ${c.text}`)
    .join('\n\n');

  return {
    identity: getIdentityCard(),
    context,
    chunks: selected,
  };
}
