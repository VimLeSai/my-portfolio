/**
 * Build Talk RAG index from src/lib content.
 * Usage: yarn talk:index
 * Optional embeddings when OPENAI_API_KEY is set.
 */

import { writeFileSync, mkdirSync, existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const outPath = join(root, 'src/lib/talk/index.json');

function loadEnvLocal() {
  const envPath = join(root, '.env.local');
  if (!existsSync(envPath)) return;
  const raw = readFileSync(envPath, 'utf8');
  for (const line of raw.split('\n')) {
    const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
    if (!m) continue;
    if (process.env[m[1]]) continue;
    process.env[m[1]] = m[2].replace(/^["']|["']$/g, '');
  }
}

async function embedBatch(texts, apiKey) {
  const model = process.env.OPENAI_EMBEDDING_MODEL || 'text-embedding-3-small';
  const res = await fetch('https://api.openai.com/v1/embeddings', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ model, input: texts }),
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`embeddings failed: ${res.status} ${body}`);
  }
  const json = await res.json();
  return json.data
    .sort((a, b) => a.index - b.index)
    .map((d) => d.embedding);
}

async function main() {
  loadEnvLocal();

  const helper = join(root, 'scripts/_dump-talk-docs.mjs');
  const tsxBin = join(root, 'node_modules/.bin/tsx');
  const dump = spawnSync(tsxBin, ['--tsconfig', 'tsconfig.json', helper], {
    cwd: root,
    encoding: 'utf8',
    env: process.env,
    maxBuffer: 20 * 1024 * 1024,
  });

  if (dump.status !== 0) {
    console.error(dump.stderr || dump.stdout);
    process.exit(dump.status || 1);
  }

  const docs = JSON.parse(dump.stdout.trim());
  console.log(`Indexed ${docs.length} chunks (text).`);

  let embedded = false;
  const apiKey = process.env.OPENAI_API_KEY;
  const chunks = docs.map((d) => ({
    id: d.id,
    source: d.source,
    text: d.text,
    embedding: null,
  }));

  if (apiKey) {
    const batchSize = 64;
    for (let i = 0; i < chunks.length; i += batchSize) {
      const slice = chunks.slice(i, i + batchSize);
      const vectors = await embedBatch(
        slice.map((c) => c.text.slice(0, 6000)),
        apiKey,
      );
      vectors.forEach((v, j) => {
        chunks[i + j].embedding = v;
      });
      console.log(
        `Embedded ${Math.min(i + batchSize, chunks.length)}/${chunks.length}`,
      );
    }
    embedded = true;
  } else {
    console.log('No OPENAI_API_KEY — writing lexical-only index.');
  }

  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(
    outPath,
    JSON.stringify({
      version: 1,
      generatedAt: new Date().toISOString(),
      embedded,
      chunks,
    }),
  );
  console.log(`Wrote ${outPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
