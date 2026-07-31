'use client';

import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import Reveal, { RevealItem, RevealStagger } from '@/components/ui/reveal';
import { profile } from '@/lib/profile';
import { highlights, jobs, skillGroups } from '@/lib/resume-data';

function displayedLinkFor(url) {
  try {
    const u = new URL(url);
    const host = u.hostname.replace(/^www\./, '');
    const path = u.pathname.split('/').filter(Boolean).join(' / ');
    return path ? `${host} / ${path}` : host;
  } catch {
    return url;
  }
}

const filterTabs = [
  { label: 'All', match: null },
  { label: 'Code', match: ['github', 'npmjs', 'stackoverflow'] },
  {
    label: 'Professional',
    match: ['linkedin', 'upwork', 'contra', 'toptal', 'intch'],
  },
  { label: 'Social', match: ['instagram', 'facebook', 'twitter'] },
  { label: 'Site', match: ['vimlesai.io'] },
];

const knowledgePanelInfo = [
  { label: 'Based in', value: profile.location.display },
  {
    label: 'Education',
    value: profile.education[0]?.displayDegree || 'B.Sc. Computer Science',
  },
  {
    label: 'Current',
    value: `${jobs[0]?.title} · ${jobs[0]?.company}`,
  },
  {
    label: 'Experience',
    value: `${highlights[0]?.value} years`,
  },
];

const relatedTechStack = skillGroups.flatMap((g) => g.skills).slice(0, 8);

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

  const filteredResults = (results?.organic || []).filter((r) => {
    if (activeTab === 'All') return true;
    const tab = filterTabs.find((t) => t.label === activeTab);
    if (!tab?.match) return true;
    return tab.match.some((domain) => r.link?.includes(domain));
  });

  return (
    <main className="relative min-h-screen">
      <header className="hero-atmosphere px-5 pt-28 pb-10 sm:px-8 lg:px-16 lg:pt-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="font-label text-primary-container mb-4 text-[0.65rem] tracking-[0.22em] uppercase">
              Studio
            </p>
            <h1
              className="font-headline mb-4 leading-[0.95] tracking-tight italic"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
            >
              Find me on the
              <br />
              <span className="text-primary-container not-italic">open web.</span>
            </h1>
            <p className="text-on-surface-variant max-w-xl text-base leading-relaxed">
              A live-ish index of profiles, repos, and mentions — not a mood
              board. Search, filter, click out.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-10 max-w-2xl">
            <form onSubmit={handleSearch}>
              <label className="font-label text-outline mb-2 block text-[10px] tracking-[0.16em] uppercase">
                Search
              </label>
              <div className="border-outline-variant/40 focus-within:border-primary flex items-center gap-3 border-b py-3 transition-colors">
                <input
                  type="search"
                  value={activeQuery}
                  onChange={(e) => setActiveQuery(e.target.value)}
                  className="font-body text-on-surface flex-1 bg-transparent text-lg outline-none"
                  placeholder="VimLeSai, UpKeep, NestJS…"
                  aria-label="Search the web for VimLeSai"
                />
                <button
                  type="submit"
                  className="font-label text-primary text-xs tracking-[0.14em] uppercase"
                >
                  Go →
                </button>
              </div>
            </form>
          </Reveal>

          <Reveal delay={0.15} className="mt-8">
            <div className="-mx-1 flex gap-1 overflow-x-auto px-1 pb-1">
              {filterTabs.map((tab) => (
                <button
                  key={tab.label}
                  type="button"
                  onClick={() => setActiveTab(tab.label)}
                  className={`font-label shrink-0 px-3 py-2 text-[10px] tracking-[0.14em] uppercase transition-colors ${
                    activeTab === tab.label
                      ? 'bg-primary-container text-on-primary'
                      : 'text-on-surface-variant hover:bg-surface-container-high'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 py-12 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:px-16 lg:py-16">
        <div className="space-y-8 lg:col-span-7 xl:col-span-8">
          <p className="font-label text-outline text-xs tracking-wide">
            {loading
              ? 'Searching…'
              : `${filteredResults.length} result${filteredResults.length === 1 ? '' : 's'}${
                  results?.searchInformation?.timeTaken
                    ? ` · ${results.searchInformation.timeTaken}`
                    : ''
                }`}
          </p>

          {loading && (
            <div className="space-y-6">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="border-outline-variant/20 animate-pulse space-y-3 border-t pt-6"
                >
                  <div className="bg-surface-container-highest h-3 w-40" />
                  <div className="bg-surface-container-highest h-5 w-3/4" />
                  <div className="bg-surface-container-highest h-3 w-full" />
                </div>
              ))}
            </div>
          )}

          {!loading && (
            <RevealStagger className="space-y-0" stagger={0.06}>
              {filteredResults.map((result, idx) => (
                <RevealItem
                  key={result.link || idx}
                  className="border-outline-variant/20 border-t py-7"
                >
                  <p className="font-label text-outline mb-1 text-[10px] tracking-[0.12em] uppercase">
                    {result.displayedLink || displayedLinkFor(result.link)}
                  </p>
                  <a
                    href={result.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-headline text-primary-container hover:text-primary mb-2 block text-xl transition-colors hover:underline"
                  >
                    {result.title}
                  </a>
                  {result.snippet && (
                    <p className="text-on-surface-variant text-sm leading-relaxed">
                      {result.snippet}
                    </p>
                  )}
                </RevealItem>
              ))}
            </RevealStagger>
          )}

          {!loading && filteredResults.length === 0 && (
            <p className="text-on-surface-variant py-12 text-center italic">
              Nothing in this filter. Try All.
            </p>
          )}

          {!loading && results?.relatedSearches?.length > 0 && (
            <Reveal className="border-outline-variant/20 border-t pt-10">
              <p className="font-label text-outline mb-4 text-[10px] tracking-[0.16em] uppercase">
                Related
              </p>
              <div className="flex flex-wrap gap-2">
                {results.relatedSearches.map((s) => (
                  <button
                    key={s}
                    type="button"
                    className="font-label text-on-surface-variant hover:text-primary border-outline-variant/30 border px-3 py-2 text-xs tracking-wide transition-colors"
                    onClick={() => setActiveQuery(s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </Reveal>
          )}
        </div>

        <aside className="space-y-10 lg:col-span-5 xl:col-span-4">
          <Reveal>
            <div className="relative aspect-[4/5] max-h-[360px] overflow-hidden bg-[#12110f]">
              <img
                src="/assets/hero-image.png"
                alt={profile.name.full}
                className="h-full w-full object-cover object-top"
                style={{ filter: 'grayscale(65%) contrast(1.06)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12110f] via-transparent to-transparent" />
              <div className="absolute right-0 bottom-0 left-0 p-5 text-[#f5f0e8]">
                <p className="font-headline text-xl italic">{profile.name.full}</p>
                <p className="font-label mt-1 text-[10px] tracking-[0.16em] text-[#c4a8a8] uppercase">
                  {profile.title}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              {profile.bio.short}
            </p>
          </Reveal>

          <RevealStagger className="space-y-0" stagger={0.05}>
            {knowledgePanelInfo.map((row) => (
              <RevealItem
                key={row.label}
                className="border-outline-variant/20 flex justify-between gap-4 border-t py-4"
              >
                <span className="font-label text-outline text-[10px] tracking-[0.14em] uppercase">
                  {row.label}
                </span>
                <span className="font-body text-on-surface text-right text-sm">
                  {row.value}
                </span>
              </RevealItem>
            ))}
          </RevealStagger>

          <Reveal>
            <p className="font-label text-outline mb-3 text-[10px] tracking-[0.16em] uppercase">
              Profiles
            </p>
            <ul>
              {profile.socials
                .filter((s) => s.enabled && s.href)
                .map((social) => (
                  <li
                    key={social.id}
                    className="border-outline-variant/20 border-t"
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-on-surface hover:text-primary flex items-center justify-between py-3 text-sm transition-colors"
                    >
                      {social.label}
                      <span aria-hidden>→</span>
                    </a>
                  </li>
                ))}
            </ul>
          </Reveal>

          <Reveal>
            <p className="font-label text-outline mb-3 text-[10px] tracking-[0.16em] uppercase">
              Stack
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {relatedTechStack.map((tech) => (
                <span
                  key={tech}
                  className="font-label text-on-surface-variant text-[10px] tracking-[0.12em] uppercase"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/contact"
              className="font-label bg-primary-container text-on-primary px-5 py-3 text-xs tracking-[0.14em] uppercase"
            >
              Contact
            </Link>
            <Link
              href="/work"
              className="font-label text-on-surface border-outline-variant/40 border px-5 py-3 text-xs tracking-[0.14em] uppercase"
            >
              Work
            </Link>
          </Reveal>

          <Reveal className="border-outline-variant/20 border-t pt-8">
            <div className="mb-3 flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <p className="font-label text-[10px] tracking-[0.16em] uppercase">
                Status
              </p>
            </div>
            <p className="font-headline text-primary-container text-lg italic">
              {profile.meta.availableForHire
                ? 'Open for the right role'
                : 'Not looking right now'}
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {highlights.slice(0, 4).map((h) => (
                <div key={h.label}>
                  <p className="font-headline text-primary-container text-2xl italic">
                    {h.value}
                  </p>
                  <p className="font-label text-outline text-[10px] tracking-wide uppercase">
                    {h.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </aside>
      </div>
    </main>
  );
}
