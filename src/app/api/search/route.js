import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { profile } from '@/lib/profile';

/** Prefer Serper.dev (used elsewhere in this repo). SerpAPI still supported. */
const SERPER_API_KEY = process.env.SERPER_API_KEY;
const SERP_API_KEY = process.env.SERP_API_KEY;

/**
 * Cache lives at <project-root>/.cache/search/
 * Each query gets its own JSON file keyed by a slug.
 * Cache TTL: 30 days.
 */
const CACHE_DIR = path.join(process.cwd(), '.cache', 'search');
const CACHE_TTL_MS = 30 * 24 * 60 * 60 * 1000;
/** Google returns ~10 organic per page — paginate for a fuller index. */
const RESULTS_PER_PAGE = 10;
const MAX_PAGES = 4; // up to ~40 organic results
const CACHE_VERSION = 'serper_seed_p4';

/** Queries that should pin curated profile links first. */
const IDENTITY_TOKENS = [
  'vimlesai',
  'vimal desai',
  'vimaldesai',
  'vim le sai',
];

function isIdentityQuery(query) {
  const q = query.replace(/"/g, '').trim().toLowerCase();
  return IDENTITY_TOKENS.some(
    (t) => q === t || q.includes(t) || t.includes(q),
  );
}

function curatedPresenceResults() {
  return profile.socials
    .filter((s) => s.enabled && s.href)
    .map((s, i) => ({
      title: `${profile.name.full} — ${s.label}`,
      link: s.href,
      snippet:
        s.snippet ||
        `${s.label} profile for ${profile.name.full} (${s.handle || 'VimLeSai'}).`,
      position: i + 1,
      favicon: null,
      displayedLink: null,
      curated: true,
    }));
}

/** Prepend curated profiles; dedupe by normalized URL host+path. */
function withCuratedPresence(organic, query) {
  if (!isIdentityQuery(query)) {
    return organic.map((r, i) => ({ ...r, position: i + 1 }));
  }

  const seeds = curatedPresenceResults();
  const normalize = (url) => {
    try {
      const u = new URL(url);
      return `${u.hostname.replace(/^www\./, '')}${u.pathname.replace(/\/$/, '')}`.toLowerCase();
    } catch {
      return (url || '').toLowerCase();
    }
  };

  const seen = new Set(seeds.map((s) => normalize(s.link)));
  const rest = organic.filter((r) => !seen.has(normalize(r.link)));
  return [...seeds, ...rest].map((r, i) => ({ ...r, position: i + 1 }));
}

function cacheKeyFor(query) {
  const slug = query
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_|_$/g, '');
  return `${slug}_${CACHE_VERSION}.json`;
}

function readCache(query) {
  try {
    const filePath = path.join(CACHE_DIR, cacheKeyFor(query));
    if (!fs.existsSync(filePath)) return { data: null, fresh: false };

    const raw = fs.readFileSync(filePath, 'utf-8');
    const cached = JSON.parse(raw);
    const age = Date.now() - cached._cachedAt;

    return { data: cached, fresh: age <= CACHE_TTL_MS };
  } catch {
    return { data: null, fresh: false };
  }
}

function writeCache(query, data) {
  try {
    fs.mkdirSync(CACHE_DIR, { recursive: true });
    const filePath = path.join(CACHE_DIR, cacheKeyFor(query));
    const payload = { ...data, _cachedAt: Date.now() };
    fs.writeFileSync(filePath, JSON.stringify(payload, null, 2), 'utf-8');
  } catch (err) {
    console.error('[/api/search] Cache write error:', err.message);
  }
}

function respondFromCache(cached, label = 'cached') {
  const { _cachedAt, ...rest } = cached;
  const ageMs = Date.now() - _cachedAt;
  const daysAgo = Math.floor(ageMs / (24 * 60 * 60 * 1000));
  const daysRemaining = Math.max(
    0,
    Math.ceil((CACHE_TTL_MS - ageMs) / (24 * 60 * 60 * 1000)),
  );
  return NextResponse.json({
    ...rest,
    source: label,
    _cache: {
      cachedAt: new Date(_cachedAt).toISOString(),
      ageInDays: daysAgo,
      expiresInDays: daysRemaining,
    },
  });
}

function mapOrganic(results, offset = 0) {
  return (results || []).map((r, i) => ({
    title: r.title,
    link: r.link,
    snippet: r.snippet || '',
    position: r.position ?? offset + i + 1,
    favicon: r.favicon || null,
    displayedLink: r.displayedLink || r.displayed_link || null,
  }));
}

function mergeOrganicPages(pageOrganics) {
  const seen = new Set();
  const organic = [];
  pageOrganics.forEach((results, pageIndex) => {
    const offset = pageIndex * RESULTS_PER_PAGE;
    for (const item of mapOrganic(results, offset)) {
      const key = item.link || `${item.title}:${item.position}`;
      if (seen.has(key)) continue;
      seen.add(key);
      organic.push({ ...item, position: organic.length + 1 });
    }
  });
  return organic;
}

async function fetchSerperPage(query, page) {
  const res = await fetch('https://google.serper.dev/search', {
    method: 'POST',
    headers: {
      'X-API-KEY': SERPER_API_KEY,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ q: toExactQuery(query), gl: 'in', page }),
  });

  if (!res.ok) {
    throw new Error(`Serper responded with ${res.status} (page=${page})`);
  }
  return res.json();
}

/** Quote bare tokens so Google does exact-phrase match (avoids Vimlesh noise). */
function toExactQuery(query) {
  const q = query.trim();
  if (!q) return q;
  if (q.includes('"')) return q;
  if (/\s/.test(q) || q.length < 3) return q;
  return `"${q}"`;
}

async function fetchViaSerper(query) {
  const pages = [];
  let relatedSearches = [];
  let knowledgeGraph = null;
  let emptyStreak = 0;

  for (let page = 1; page <= MAX_PAGES; page++) {
    const data = await fetchSerperPage(query, page);
    if (page === 1) {
      relatedSearches = (data.relatedSearches || []).map(
        (s) => s.query || s,
      );
      knowledgeGraph = data.knowledgeGraph || null;
    }
    const organic = data.organic || [];
    pages.push(organic);

    // Quoted queries sometimes return an empty page 1 — keep paging.
    if (organic.length === 0) {
      emptyStreak += 1;
      if (emptyStreak >= 2) break;
    } else {
      emptyStreak = 0;
    }
  }

  return {
    source: 'live',
    provider: 'serper',
    query,
    searchInformation: {
      totalResults: null,
      timeTaken: null,
    },
    organic: withCuratedPresence(
      filterRelevant(mergeOrganicPages(pages), query),
      query,
    ),
    knowledgeGraph,
    relatedSearches,
  };
}

/** Drop fuzzy junk that doesn't mention the query token. */
function filterRelevant(organic, query) {
  const token = query.replace(/"/g, '').trim().toLowerCase();
  if (!token || token.includes(' ')) return organic;

  const matched = organic.filter((r) => {
    const hay = `${r.title || ''} ${r.link || ''} ${r.snippet || ''}`.toLowerCase();
    return hay.includes(token);
  });

  // If filtering wiped everything (odd query), keep raw merge.
  const list = matched.length > 0 ? matched : organic;
  return list.map((r, i) => ({ ...r, position: i + 1 }));
}

async function fetchSerpApiPage(query, start) {
  const serpUrl = new URL('https://serpapi.com/search.json');
  serpUrl.searchParams.set('q', toExactQuery(query));
  serpUrl.searchParams.set('engine', 'google');
  serpUrl.searchParams.set('gl', 'in');
  serpUrl.searchParams.set('start', String(start));
  serpUrl.searchParams.set('api_key', SERP_API_KEY);

  const res = await fetch(serpUrl.toString());
  if (!res.ok) {
    throw new Error(`SerpAPI responded with ${res.status} (start=${start})`);
  }
  return res.json();
}

async function fetchViaSerpApi(query) {
  const pageBodies = [];
  let first = null;

  for (let page = 0; page < MAX_PAGES; page++) {
    const start = page * RESULTS_PER_PAGE;
    const data = await fetchSerpApiPage(query, start);
    if (page === 0) first = data;
    pageBodies.push(data.organic_results || []);
    const count = data.organic_results?.length || 0;
    const hasNext = Boolean(data.serpapi_pagination?.next);
    if (count === 0 || !hasNext) break;
  }

  return {
    source: 'live',
    provider: 'serpapi',
    query,
    searchInformation: {
      totalResults: first?.search_information?.total_results || null,
      timeTaken: first?.search_information?.time_taken_displayed || null,
    },
    organic: withCuratedPresence(
      filterRelevant(mergeOrganicPages(pageBodies), query),
      query,
    ),
    knowledgeGraph: first?.knowledge_graph || null,
    relatedSearches: (first?.related_searches || []).map((s) => s.query),
  };
}

async function fetchLiveResults(query) {
  if (SERPER_API_KEY) return fetchViaSerper(query);
  if (SERP_API_KEY) return fetchViaSerpApi(query);
  return null;
}

/**
 * GET /api/search?q=VimLeSai
 *
 * Priority:
 *   1. Fresh file cache (< 30 days)
 *   2. Live Serper / SerpAPI → cache
 *   3. Stale cache on API failure
 *   4. Static fallback
 */
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q') || 'VimLeSai';

  const { data: cached, fresh } = readCache(query);

  if (cached && fresh) {
    return respondFromCache(cached, 'cached');
  }

  if (SERPER_API_KEY || SERP_API_KEY) {
    try {
      const formatted = await fetchLiveResults(query);
      writeCache(query, formatted);
      return NextResponse.json(formatted);
    } catch (error) {
      console.error('[/api/search] Live search error:', error.message);
      if (cached) {
        return respondFromCache(cached, 'stale-cache');
      }
    }
  } else if (cached) {
    return respondFromCache(cached, 'stale-cache');
  }

  const staticResults = {
    source: 'static',
    query,
    searchInformation: {
      totalResults: '1,240',
      timeTaken: '0.42',
    },
    organic: withCuratedPresence([], query),
    relatedSearches: [
      'Vimal Desai software engineer',
      'VimLeSai GitHub projects',
      'Vimal Desai UpKeep',
      'Senior Full Stack Engineer India',
    ],
  };

  return NextResponse.json(staticResults);
}
