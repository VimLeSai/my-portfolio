import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const SERP_API_KEY = process.env.SERP_API_KEY;

/**
 * Cache lives at <project-root>/.cache/search/
 * Each query gets its own JSON file keyed by a slug.
 * Cache TTL: 30 days (2_592_000_000 ms).
 */
const CACHE_DIR = path.join(process.cwd(), '.cache', 'search');
const CACHE_TTL_MS = 30 * 24 * 60 * 60 * 1000; // 30 days

/** Turn a query string into a safe filename */
function cacheKeyFor(query) {
  return query.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '') + '.json';
}

/**
 * Read from file-based cache.
 * Returns { data, fresh } where:
 *   - data  = parsed cache payload (or null if no cache file)
 *   - fresh = true if within TTL, false if expired but still usable
 */
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

/** Write to file-based cache */
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

/** Build a JSON response from a cache entry */
function respondFromCache(cached, label = 'cached') {
  const { _cachedAt, ...rest } = cached;
  const ageMs = Date.now() - _cachedAt;
  const daysAgo = Math.floor(ageMs / (24 * 60 * 60 * 1000));
  const daysRemaining = Math.max(0, Math.ceil((CACHE_TTL_MS - ageMs) / (24 * 60 * 60 * 1000)));
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

/** Format SerpAPI response into our standard shape */
function formatSerpResponse(data, query) {
  return {
    source: 'live',
    query,
    searchInformation: {
      totalResults: data.search_information?.total_results || null,
      timeTaken: data.search_information?.time_taken_displayed || null,
    },
    organic: (data.organic_results || []).map((r) => ({
      title: r.title,
      link: r.link,
      snippet: r.snippet || '',
      position: r.position,
      favicon: r.favicon || null,
      displayedLink: r.displayed_link || null,
    })),
    knowledgeGraph: data.knowledge_graph || null,
    relatedSearches: (data.related_searches || []).map((s) => s.query),
  };
}

/**
 * GET /api/search?q=VimLeSai
 *
 * Priority:
 *   1. Return from file cache if still fresh (< 30 days)
 *   2. Cache expired → try SerpAPI → update cache → return fresh data
 *      – If SerpAPI fails → return the stale cache forever (never discard it)
 *   3. No cache exists at all → try SerpAPI → cache & return
 *      – If SerpAPI fails → return hardcoded static fallback
 */
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q') || 'VimLeSai';

  const { data: cached, fresh } = readCache(query);

  // ── 1. Fresh cache → serve immediately ─────────────────────────────────────
  if (cached && fresh) {
    return respondFromCache(cached, 'cached');
  }

  // ── 2. Try SerpAPI (cache is either stale or missing) ──────────────────────
  if (SERP_API_KEY) {
    try {
      const serpUrl = new URL('https://serpapi.com/search.json');
      serpUrl.searchParams.set('q', query);
      serpUrl.searchParams.set('engine', 'google');
      serpUrl.searchParams.set('gl', 'in');
      serpUrl.searchParams.set('num', '10');
      serpUrl.searchParams.set('api_key', SERP_API_KEY);

      const res = await fetch(serpUrl.toString());

      if (!res.ok) {
        throw new Error(`SerpAPI responded with ${res.status}`);
      }

      const data = await res.json();
      const formatted = formatSerpResponse(data, query);

      // Cache the fresh result for next 30 days
      writeCache(query, formatted);

      return NextResponse.json(formatted);
    } catch (error) {
      console.error('[/api/search] SerpAPI error:', error.message);

      // API failed but we have stale cache → use it forever
      if (cached) {
        console.log('[/api/search] Serving stale cache as API fallback');
        return respondFromCache(cached, 'stale-cache');
      }
      // No cache at all → fall through to static
    }
  } else if (cached) {
    // No API key but stale cache exists → still serve it
    return respondFromCache(cached, 'stale-cache');
  }

  // ── 3. Static fallback ─────────────────────────────────────────────────────
  const staticResults = {
    source: 'static',
    query,
    searchInformation: {
      totalResults: '1,240',
      timeTaken: '0.42',
    },
    organic: [
      {
        title: 'VimLeSai (Vimal Desai) - GitHub',
        link: 'https://github.com/VimLeSai',
        snippet:
          'Shipping across frontend, backend & shared component libraries for a high-traffic enterprise asset management SaaS; ⚡ Used AI tooling to double sprint ...',
        position: 1,
        favicon: null,
        displayedLink: 'github.com › VimLeSai',
      },
      {
        title: 'vimlesai - NPM',
        link: 'https://www.npmjs.com/~vimlesai',
        snippet:
          'It is a simple custom hook on top of useState to provide a callback after the state is updated, just like in Class Component.',
        position: 2,
        favicon: null,
        displayedLink: 'npmjs.com › ~vimlesai',
      },
      {
        title: 'Vimal Desai - UpKeep - LinkedIn',
        link: 'https://in.linkedin.com/in/vimlesai',
        snippet:
          "I'm a Senior Full Stack Engineer with 9+ years of experience building scalable… · Experience: UpKeep · Education: SARVEPALLI RADHAKRISHNAN UNIVERSITY ...",
        position: 3,
        favicon: null,
        displayedLink: 'linkedin.com › in › vimlesai',
      },
      {
        title: 'Vimal Desai — Senior Full Stack Engineer',
        link: 'https://vimlesai.io/',
        snippet:
          'Senior Full Stack Engineer with 9+ years building scalable, high-performance web applications — from pixel-perfect UIs to robust microservices. Known for ...',
        position: 4,
        favicon: null,
        displayedLink: 'vimlesai.io',
      },
      {
        title: 'User VimLeSai - Stack Overflow',
        link: 'https://stackoverflow.com/users/7801396/vimlesai',
        snippet:
          "VimLeSai's user avatar. VimLeSai. Explorer. Member for 8 years, 10 months. Last seen more than a month ago. India.",
        position: 5,
        favicon: null,
        displayedLink: 'stackoverflow.com › users › vimlesai',
      },
      {
        title: 'Vimal Desai - Contra',
        link: 'https://contra.com/VimLeSai/about',
        snippet:
          'Full Stack Developer with 8+ years of experience building scalable, high-performance web applications. Skilled in React, Node.js, and TypeScript, ...',
        position: 6,
        favicon: null,
        displayedLink: 'contra.com › VimLeSai',
      },
      {
        title: 'Vimal Desai (@vimlesai) • Instagram photos and videos',
        link: 'https://www.instagram.com/vimlesai/',
        snippet:
          'कृष्णाय वासुदेवाय हरये परमात्मने प्रणतः क्लेशनाशाय गोविंदाय नमो नमः',
        position: 7,
        favicon: null,
        displayedLink: 'instagram.com › vimlesai',
      },
      {
        title: 'Vimal D. - Senior Full Stack Architect (Next.js/Node) - Upwork',
        link: 'https://www.upwork.com/freelancers/vimlesai',
        snippet:
          'Senior Full Stack Engineer with 9+ years building scalable, production-ready web applications using React, Next.js, Node.js, and TypeScript.',
        position: 8,
        favicon: null,
        displayedLink: 'upwork.com › freelancers › vimlesai',
      },
      {
        title: 'Vimal Desai (@VimLeSai) - Facebook',
        link: 'https://www.facebook.com/VimLeSai/about/',
        snippet:
          'Details. Profile · Digital creator. Goes to S.S. School of Scince. Lives in Surat, Gujarat. Married.',
        position: 9,
        favicon: null,
        displayedLink: 'facebook.com › VimLeSai',
      },
      {
        title: 'Vimal Desai - Senior Software Engineer, Emtec - Intch',
        link: 'https://intch.org/p/VimLeSai',
        snippet:
          "Vimal Desai. Senior Software Engineer @Emtec. I'm a seasoned professional in the field of software engineering, currently holding the position of Senior ...",
        position: 10,
        favicon: null,
        displayedLink: 'intch.org › VimLeSai',
      },
    ],
    relatedSearches: [
      'Vimal Desai software engineer',
      'VimLeSai GitHub projects',
      'Vimal Desai UpKeep',
      'Senior Full Stack Engineer India',
    ],
  };

  return NextResponse.json(staticResults);
}
