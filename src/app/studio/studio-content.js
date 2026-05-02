'use client';

import Link from 'next/link';
import { useState, useEffect, useCallback } from 'react';
import { profile } from '@/lib/profile';
import { resumeMeta, skillGroups, highlights, jobs } from '@/lib/resume-data';

/* ─────────────────────── helpers ─────────────────────── */

/** Derive a Material icon from a URL domain */
function iconForLink(url) {
  if (!url) return 'link';
  if (url.includes('github')) return 'code';
  if (url.includes('linkedin')) return 'person';
  if (url.includes('npmjs')) return 'deployed_code';
  if (url.includes('stackoverflow')) return 'forum';
  if (url.includes('instagram')) return 'photo_camera';
  if (url.includes('facebook')) return 'group';
  if (url.includes('upwork') || url.includes('contra') || url.includes('toptal'))
    return 'work';
  if (url.includes('intch')) return 'handshake';
  return 'public';
}

/** Parse a URL into a breadcrumb-style source label */
function displayedLinkFor(url) {
  try {
    const u = new URL(url);
    const host = u.hostname.replace(/^www\./, '');
    const path = u.pathname
      .split('/')
      .filter(Boolean)
      .join(' › ');
    return path ? `${host} › ${path}` : host;
  } catch {
    return url;
  }
}

/* ─────────────────────── filter tabs ─────────────────────── */

const filterTabs = [
  { label: 'All', icon: null },
  { label: 'Code', icon: 'code', match: ['github', 'npmjs', 'stackoverflow'] },
  { label: 'Professional', icon: 'work', match: ['linkedin', 'upwork', 'contra', 'toptal', 'intch'] },
  { label: 'Social', icon: 'group', match: ['instagram', 'facebook', 'twitter'] },
  { label: 'Portfolio', icon: 'web', match: ['vimlesai.io'] },
];

/* ─────────────────────── knowledge panel data (from lib) ─────────────────────── */

const knowledgePanelInfo = [
  {
    icon: 'location_on',
    label: 'Based In',
    value: profile.location.display,
  },
  {
    icon: 'school',
    label: 'Education',
    value: profile.education[0]?.displayDegree || 'B.Sc. Computer Science',
  },
  {
    icon: 'business',
    label: 'Current Role',
    value: `${jobs[0]?.title} · ${jobs[0]?.company}`,
  },
  {
    icon: 'schedule',
    label: 'Experience',
    value: `${highlights[0]?.value} years`,
  },
];

const relatedTechStack = skillGroups
  .flatMap((g) => g.skills)
  .slice(0, 8);

/* ─────────────────────── component ─────────────────────── */

export default function StudioContent() {
  const [activeQuery, setActiveQuery] = useState('VimLeSai');
  const [activeTab, setActiveTab] = useState('All');
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchResults = useCallback(async (query) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
      const data = await res.json();
      setResults(data);
    } catch {
      setResults(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchResults(activeQuery);
  }, [activeQuery, fetchResults]);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchResults(activeQuery);
  };

  /* Filter the organic results based on tab */
  const filteredResults = (results?.organic || []).filter((r) => {
    if (activeTab === 'All') return true;
    const tab = filterTabs.find((t) => t.label === activeTab);
    if (!tab?.match) return true;
    return tab.match.some((domain) => r.link?.includes(domain));
  });

  return (
    <>
      <main className="mx-auto max-w-7xl px-8 pt-28 pb-24">
        {/* ── Branding ── */}
        <section className="mb-10">
          <div className="mb-8 flex items-center gap-4">
            <Link
              href="/"
              className="font-headline text-4xl font-bold tracking-tighter"
              style={{ color: 'var(--color-on-surface)' }}
            >
              VimLeSai
            </Link>
          </div>

          {/* Search input */}
          <form onSubmit={handleSearch}>
            <div
              className="mb-6 flex max-w-2xl items-center gap-4 px-6 py-4"
              style={{
                backgroundColor: 'var(--color-surface-container-lowest)',
                border: '1px solid var(--color-outline-variant)',
                borderRadius: 'var(--radius-full)',
                boxShadow: '0 2px 12px rgba(88,65,65,0.08)',
              }}
            >
              <span
                className="material-symbols-outlined text-xl"
                style={{ color: 'var(--color-outline)' }}
              >
                search
              </span>
              <input
                type="text"
                value={activeQuery}
                onChange={(e) => setActiveQuery(e.target.value)}
                className="font-body flex-1 bg-transparent text-base focus:outline-none"
                style={{ color: 'var(--color-on-surface)' }}
              />
              <div className="flex items-center gap-3">
                <button
                  type="submit"
                  className="material-symbols-outlined cursor-pointer text-xl transition-colors hover:opacity-70"
                  style={{ color: 'var(--color-outline)', background: 'none', border: 'none' }}
                >
                  search
                </button>
              </div>
            </div>
          </form>

          {/* Filter tabs */}
          <div
            className="flex gap-0 border-b"
            style={{ borderColor: 'var(--color-outline-variant)' }}
          >
            {filterTabs.map((tab) => (
              <button
                key={tab.label}
                onClick={() => setActiveTab(tab.label)}
                className="font-body flex items-center gap-1.5 px-5 py-3 text-sm transition-all"
                style={{
                  color:
                    activeTab === tab.label
                      ? 'var(--color-primary-container)'
                      : 'var(--color-on-surface-variant)',
                  borderBottom:
                    activeTab === tab.label
                      ? '2px solid var(--color-primary-container)'
                      : '2px solid transparent',
                  fontWeight: activeTab === tab.label ? '600' : '400',
                  marginBottom: '-1px',
                }}
              >
                {tab.icon && (
                  <span className="material-symbols-outlined text-sm">
                    {tab.icon}
                  </span>
                )}
                {tab.label}
              </button>
            ))}
          </div>
        </section>

        {/* ── Main Grid ── */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* ── Results Column ── */}
          <div className="space-y-6 lg:col-span-2">
            {/* Result count */}
            <p
              className="font-body text-sm"
              style={{ color: 'var(--color-on-surface-variant)' }}
            >
              {loading
                ? 'Searching…'
                : results?.source === 'live'
                ? `About ${results.searchInformation?.totalResults || 'many'} results (${results.searchInformation?.timeTaken || '—'})`
                : `About ${results?.searchInformation?.totalResults || '1,240'} results (${results?.searchInformation?.timeTaken || '0.42'} seconds)`}
            </p>

            {/* Skeleton loader */}
            {loading && (
              <div className="space-y-6">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="animate-pulse space-y-3 p-6"
                    style={{
                      backgroundColor: 'var(--color-surface-container-low)',
                      borderRadius: 'var(--radius-xl)',
                    }}
                  >
                    <div className="h-3 w-48 rounded" style={{ backgroundColor: 'var(--color-surface-container-highest)' }} />
                    <div className="h-5 w-3/4 rounded" style={{ backgroundColor: 'var(--color-surface-container-highest)' }} />
                    <div className="h-3 w-full rounded" style={{ backgroundColor: 'var(--color-surface-container-highest)' }} />
                    <div className="h-3 w-2/3 rounded" style={{ backgroundColor: 'var(--color-surface-container-highest)' }} />
                  </div>
                ))}
              </div>
            )}

            {/* Results */}
            {!loading && filteredResults.map((result, idx) => (
              <div key={result.link || idx}>
                {/* Source breadcrumb */}
                <div className="mb-1 flex items-center gap-2">
                  <span
                    className="material-symbols-outlined text-base"
                    style={{ color: 'var(--color-outline)' }}
                  >
                    {iconForLink(result.link)}
                  </span>
                  <p
                    className="font-body text-xs"
                    style={{ color: 'var(--color-on-surface-variant)' }}
                  >
                    {result.displayedLink || displayedLinkFor(result.link)}
                  </p>
                </div>

                {/* Title */}
                <a
                  href={result.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-headline mb-1 block text-xl transition-opacity hover:underline"
                  style={{ color: 'var(--color-primary-container)' }}
                >
                  {result.title}
                </a>

                {/* Snippet */}
                {result.snippet && (
                  <p
                    className="font-body text-sm leading-relaxed"
                    style={{ color: 'var(--color-on-surface)' }}
                  >
                    {result.snippet}
                  </p>
                )}
              </div>
            ))}

            {!loading && filteredResults.length === 0 && (
              <div className="py-12 text-center">
                <span
                  className="material-symbols-outlined mb-4 text-5xl"
                  style={{ color: 'var(--color-outline)' }}
                >
                  search_off
                </span>
                <p
                  className="font-body text-base"
                  style={{ color: 'var(--color-on-surface-variant)' }}
                >
                  No results found for this filter. Try "All".
                </p>
              </div>
            )}

            {/* Related Searches */}
            {!loading && results?.relatedSearches?.length > 0 && (
              <div
                className="mt-4 p-6"
                style={{
                  backgroundColor: 'var(--color-surface-container-low)',
                  borderRadius: 'var(--radius-xl)',
                }}
              >
                <p
                  className="font-label mb-4 text-xs font-bold tracking-widest uppercase"
                  style={{ color: 'var(--color-on-surface)' }}
                >
                  People also search for
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {results.relatedSearches.map((s) => (
                    <button
                      key={s}
                      className="flex items-center gap-3 p-3 text-left transition-all"
                      style={{
                        backgroundColor: 'var(--color-surface-container-highest)',
                        borderRadius: 'var(--radius-lg)',
                      }}
                      onClick={() => setActiveQuery(s)}
                    >
                      <span
                        className="material-symbols-outlined text-base"
                        style={{ color: 'var(--color-outline)' }}
                      >
                        search
                      </span>
                      <span
                        className="font-body text-sm"
                        style={{ color: 'var(--color-on-surface)' }}
                      >
                        {s}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Pagination hint */}
            {!loading && (
              <div className="flex items-center gap-4 pt-4">
                <span
                  className="font-headline text-2xl tracking-widest opacity-40 select-none"
                  style={{ color: 'var(--color-on-surface)' }}
                >
                  V i m L e S a i
                </span>
              </div>
            )}
          </div>

          {/* ── Knowledge Panel (Right Sidebar) ── */}
          <div className="space-y-6 lg:col-span-1">
            {/* Profile card */}
            <div
              className="overflow-hidden"
              style={{
                backgroundColor: 'var(--color-surface-container-low)',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--color-outline-variant)',
              }}
            >
              {/* Hero image */}
              <div
                className="relative overflow-hidden"
                style={{
                  height: '300px',
                  backgroundColor: 'var(--color-primary-container)',
                }}
              >
                <img
                  src="/assets/hero-image.png"
                  alt={profile.name.full}
                  className="h-full w-full object-cover object-top"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(to bottom, transparent 40%, rgba(128,0,32,0.7))',
                  }}
                />
                <div className="absolute bottom-4 left-4">
                  <p className="font-headline text-xl font-bold text-white">
                    {profile.name.full}
                  </p>
                  <p className="font-label text-xs tracking-wider text-white/70 uppercase">
                    {profile.title}
                  </p>
                </div>
              </div>

              {/* Info */}
              <div className="space-y-4 p-5">
                <p
                  className="font-body text-sm leading-relaxed"
                  style={{ color: 'var(--color-on-surface-variant)' }}
                >
                  {profile.bio.short}
                </p>

                {knowledgePanelInfo.map((row) => (
                  <div key={row.label} className="flex items-start gap-3">
                    <span
                      className="material-symbols-outlined mt-0.5 flex-shrink-0 text-base"
                      style={{ color: 'var(--color-outline)' }}
                    >
                      {row.icon}
                    </span>
                    <div>
                      <p
                        className="font-label text-xs tracking-wider uppercase"
                        style={{ color: 'var(--color-outline)' }}
                      >
                        {row.label}
                      </p>
                      <p
                        className="font-body text-sm"
                        style={{ color: 'var(--color-on-surface)' }}
                      >
                        {row.value}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Social links */}
                <div>
                  <p
                    className="font-label mb-3 text-xs tracking-widest uppercase"
                    style={{ color: 'var(--color-on-surface-variant)' }}
                  >
                    Profiles
                  </p>
                  <div className="space-y-1.5">
                    {profile.socials
                      .filter((s) => s.enabled && s.href)
                      .map((social) => (
                        <a
                          key={social.id}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center justify-between py-1.5 text-sm transition-opacity hover:opacity-80"
                        >
                          <span
                            className="font-body"
                            style={{ color: 'var(--color-primary-container)' }}
                          >
                            {social.label}
                          </span>
                          <span
                            className="material-symbols-outlined text-sm opacity-0 transition-opacity group-hover:opacity-60"
                            style={{ color: 'var(--color-outline)' }}
                          >
                            north_east
                          </span>
                        </a>
                      ))}
                  </div>
                </div>

                {/* Related tech entities */}
                <div>
                  <p
                    className="font-label mb-3 text-xs tracking-widest uppercase"
                    style={{ color: 'var(--color-on-surface-variant)' }}
                  >
                    Related Entities
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {relatedTechStack.map((tech) => (
                      <span
                        key={tech}
                        className="font-label px-3 py-1 text-xs"
                        style={{
                          backgroundColor:
                            'var(--color-surface-container-highest)',
                          color: 'var(--color-on-surface-variant)',
                          borderRadius: 'var(--radius-full)',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <Link
                    href="/contact"
                    className="font-body py-2.5 text-center text-sm font-semibold transition-opacity hover:opacity-80"
                    style={{
                      backgroundColor: 'var(--color-primary-container)',
                      color: 'var(--color-on-primary)',
                      borderRadius: 'var(--radius-lg)',
                    }}
                  >
                    Contact Info
                  </Link>
                  <Link
                    href="/"
                    className="font-body py-2.5 text-center text-sm font-semibold transition-opacity hover:opacity-80"
                    style={{
                      backgroundColor: 'var(--color-surface-container-highest)',
                      color: 'var(--color-on-surface)',
                      borderRadius: 'var(--radius-lg)',
                    }}
                  >
                    Portfolio
                  </Link>
                </div>
              </div>
            </div>

            {/* Highlights / Stats */}
            <div
              className="p-5"
              style={{
                backgroundColor: 'var(--color-surface-container-low)',
                borderRadius: 'var(--radius-xl)',
              }}
            >
              <p
                className="font-label mb-4 text-xs font-bold tracking-widest uppercase"
                style={{ color: 'var(--color-on-surface)' }}
              >
                Career Highlights
              </p>
              <div className="grid grid-cols-2 gap-3">
                {highlights.slice(0, 4).map((h) => (
                  <div key={h.label} className="text-center">
                    <p
                      className="font-headline text-2xl"
                      style={{ color: 'var(--color-primary-container)' }}
                    >
                      {h.value}
                    </p>
                    <p
                      className="font-label text-xs"
                      style={{ color: 'var(--color-on-surface-variant)' }}
                    >
                      {h.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Status badge */}
            <div
              className="p-5"
              style={{
                backgroundColor: 'var(--color-surface-container-low)',
                borderRadius: 'var(--radius-xl)',
              }}
            >
              <p
                className="font-label mb-1 text-xs tracking-widest uppercase"
                style={{ color: 'var(--color-outline)' }}
              >
                Status
              </p>
              <div className="flex items-center gap-2">
                <span
                  className="inline-block h-2 w-2 rounded-full"
                  style={{ backgroundColor: '#22c55e' }}
                />
                <p
                  className="font-body text-sm font-semibold"
                  style={{ color: 'var(--color-primary-container)' }}
                >
                  {profile.meta.availableForHire
                    ? 'Open for high-impact roles'
                    : 'Currently unavailable'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
