'use client';

import Link from 'next/link';
import { useState } from 'react';



const searchResults = [
  {
    id: 'featured',
    type: 'featured',
    badge: 'Featured Portfolio · Exhibition 01',
    title: "The Architectural Mind: Vimal's Design Philosophy",
    url: 'vimal.dev/philosophy',
    description:
      'An in-depth exploration of curated digital interfaces. Merging the rigid structures of modern architecture with the fluid movement of high-end editorial layouts. Featuring works in React, Node.js, and generative art.',
    images: [
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=200&q=80',
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=200&q=80',
    ],
  },
  {
    id: 'linkedin',
    type: 'result',
    source: 'linkedin.com › in › vimalsai',
    title: 'Vimal Sai — Senior Design Engineer',
    description:
      'Professional background at Emtec Inc. Specialised in building scalable design systems and high-performance React architectures.',
    tags: [],
  },
  {
    id: 'github',
    type: 'result',
    source: 'github.com › vimlesai',
    title: 'Vimlesai (The Curator) · GitHub',
    description: '',
    tags: ['REACT', 'TYPESCRIPT', 'TAILWIND'],
  },
  {
    id: 'journal',
    type: 'result',
    source: 'vimal.dev › journal › obsidian-workflow',
    title: 'Journal: Designing for Persistence',
    description:
      'How I use Obsidian and the Second Brain methodology to curate my design inspirations and engineering challenges.',
    tags: [],
  },
];

const nexusResults = [
  {
    id: 'nexus',
    type: 'featured-link',
    source: 'github.com › vimal-desai › nexus-core',
    title: 'Nexus-Core: A Distributed Microservices Orchestrator in Go',
    description:
      'An open-source high-performance engine designed for high-concurrency environments. Features zero-config service discovery and automated circuit breaking. Built with Go and gRPC.',
    badges: ['STARRED 4.2K', 'UPDATED 2D AGO'],
    color: 'var(--color-primary-container)',
    href: '/work/string-erp',
  },
  {
    id: 'medium',
    type: 'result',
    source: 'medium.com › engineering › architectural-intentionality',
    title: 'Architectural Intentionality: Moving Beyond the Boxy Web',
    description:
      'Exploring why modern software engineering needs more editorial curation. A deep dive into using React and Tailwind to create "breathable" high-end digital galleries.',
    quote: '"The digital screen is a physical sheet of fine-grain paper..."',
    href: '/archive/architects-dilemma',
  },
  {
    id: 'dribbble',
    type: 'card',
    source: 'dribbble.com › shots › vimlesai-portfolio-concept',
    title: 'Editorial UI: Portfolio Case Study',
    description:
      "Design patterns for Senior Engineers. Focuses on typography hierarchy and asymmetric grids. Featured in 'Dribbble Best of Mobile'.",
    image:
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=200&q=80',
    href: '/',
  },
  {
    id: 'linkedin2',
    type: 'result',
    source: 'linkedin.com › in › vimal-desai-dev',
    title: 'Vimal Desai — Senior Full Stack Engineer — Fintech Solutions',
    description:
      'Current: Lead Developer at VimLeSai Digital. Past: Senior Engineer at Global Pay. Specialist in React, Node.js, and Cloud Infrastructure. Mentored 50+ junior developers.',
    href: '/experience',
  },
];

const relatedSearches = [
  'Vimal Desai Go projects',
  'Senior Engineer Chennai',
  'VimLeSai UI Kits',
  'Editorial Web Design 2024',
];

const alsoSearchFor = [
  'Brutalist UI Trends',
  'Micro-interactions Guide',
  'Typescript Design Patterns',
];

const filterTabs = ['All', 'Repositories', 'Articles', 'Dribbble', 'Network'];

export default function StudioContent() {
  const [activeQuery, setActiveQuery] = useState(
    'Vimal Desai Senior Full Stack Engineer',
  );
  const [activeTab, setActiveTab] = useState('All');

  return (
    <>

      <main className="mx-auto max-w-7xl px-8 pt-28 pb-24">
        {/* ── Search Bar ── */}
        <section className="mb-10">
          <div className="mb-8 flex items-center gap-4">
            {/* Logo wordmark */}
            <Link
              href="/"
              className="font-headline text-4xl font-bold tracking-tighter"
              style={{ color: 'var(--color-on-surface)' }}
            >
              VimLeSai
            </Link>
          </div>

          {/* Search input */}
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
              <span
                className="material-symbols-outlined cursor-pointer text-xl"
                style={{ color: 'var(--color-outline)' }}
              >
                mic
              </span>
              <span
                className="material-symbols-outlined cursor-pointer text-xl"
                style={{ color: 'var(--color-outline)' }}
              >
                image_search
              </span>
            </div>
          </div>

          {/* Filter tabs */}
          <div
            className="flex gap-0 border-b"
            style={{ borderColor: 'var(--color-outline-variant)' }}
          >
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="font-body px-5 py-3 text-sm transition-all"
                style={{
                  color:
                    activeTab === tab
                      ? 'var(--color-primary-container)'
                      : 'var(--color-on-surface-variant)',
                  borderBottom:
                    activeTab === tab
                      ? '2px solid var(--color-primary-container)'
                      : '2px solid transparent',
                  fontWeight: activeTab === tab ? '600' : '400',
                  marginBottom: '-1px',
                }}
              >
                {tab === 'Repositories' && (
                  <span className="material-symbols-outlined mr-1 align-middle text-xs">
                    code
                  </span>
                )}
                {tab === 'Articles' && (
                  <span className="material-symbols-outlined mr-1 align-middle text-xs">
                    article
                  </span>
                )}
                {tab === 'Dribbble' && (
                  <span className="material-symbols-outlined mr-1 align-middle text-xs">
                    palette
                  </span>
                )}
                {tab === 'Network' && (
                  <span className="material-symbols-outlined mr-1 align-middle text-xs">
                    group
                  </span>
                )}
                {tab}
              </button>
            ))}
          </div>
        </section>

        {/* ── Main Grid ── */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* ── Results Column ── */}
          <div className="space-y-8 lg:col-span-2">
            {/* Result count */}
            <p
              className="font-body text-sm"
              style={{ color: 'var(--color-on-surface-variant)' }}
            >
              About 1,240 results (0.42 seconds)
            </p>

            {/* Nexus featured link */}
            <div
              className="p-6"
              style={{
                backgroundColor: 'var(--color-surface-container-low)',
                borderRadius: 'var(--radius-xl)',
              }}
            >
              <div className="mb-2 flex items-center gap-2">
                <span
                  className="material-symbols-outlined text-base"
                  style={{ color: 'var(--color-outline)' }}
                >
                  link
                </span>
                <p
                  className="font-body text-xs"
                  style={{ color: 'var(--color-on-surface-variant)' }}
                >
                  {nexusResults[0].source}
                </p>
              </div>
              <Link href={nexusResults[0].href}>
                <h3
                  className="font-headline mb-2 cursor-pointer text-2xl hover:underline"
                  style={{ color: 'var(--color-primary-container)' }}
                >
                  {nexusResults[0].title}
                </h3>
              </Link>
              <p
                className="font-body mb-3 text-sm leading-relaxed"
                style={{ color: 'var(--color-on-surface)' }}
              >
                {nexusResults[0].description}
              </p>
              <div className="flex gap-3">
                {nexusResults[0].badges.map((badge) => (
                  <span
                    key={badge}
                    className="font-label px-3 py-1 text-xs tracking-wider uppercase"
                    style={{
                      backgroundColor: 'var(--color-surface-container-highest)',
                      color: 'var(--color-on-surface-variant)',
                      borderRadius: 'var(--radius-full)',
                    }}
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Medium article */}
            <div>
              <div className="mb-1 flex items-center gap-2">
                <span
                  className="material-symbols-outlined text-base"
                  style={{ color: 'var(--color-outline)' }}
                >
                  article
                </span>
                <p
                  className="font-body text-xs"
                  style={{ color: 'var(--color-on-surface-variant)' }}
                >
                  {nexusResults[1].source}
                </p>
              </div>
              <Link href={nexusResults[1].href}>
                <h3
                  className="font-headline mb-1 cursor-pointer text-xl hover:underline"
                  style={{ color: 'var(--color-primary-container)' }}
                >
                  {nexusResults[1].title}
                </h3>
              </Link>
              <p
                className="font-body mb-1 text-sm leading-relaxed"
                style={{ color: 'var(--color-on-surface)' }}
              >
                {nexusResults[1].description}
              </p>
              <p
                className="font-headline text-sm italic"
                style={{ color: 'var(--color-on-surface-variant)' }}
              >
                {nexusResults[1].quote}
              </p>
            </div>

            {/* Dribbble card result */}
            <div className="flex gap-5">
              <div
                className="flex-shrink-0 overflow-hidden"
                style={{
                  width: '160px',
                  height: '110px',
                  borderRadius: 'var(--radius-xl)',
                }}
              >
                <img
                  src={nexusResults[2].image}
                  alt={nexusResults[2].title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <div className="mb-1 flex items-center gap-2">
                  <span
                    className="material-symbols-outlined text-base"
                    style={{ color: 'var(--color-outline)' }}
                  >
                    palette
                  </span>
                  <p
                    className="font-body text-xs"
                    style={{ color: 'var(--color-on-surface-variant)' }}
                  >
                    {nexusResults[2].source}
                  </p>
                </div>
                <Link href={nexusResults[2].href}>
                  <h3
                    className="font-headline mb-2 cursor-pointer text-xl hover:underline"
                    style={{ color: 'var(--color-primary-container)' }}
                  >
                    {nexusResults[2].title}
                  </h3>
                </Link>
                <p
                  className="font-body text-sm leading-relaxed"
                  style={{ color: 'var(--color-on-surface)' }}
                >
                  {nexusResults[2].description}
                </p>
              </div>
            </div>

            {/* LinkedIn result */}
            <div>
              <div className="mb-1 flex items-center gap-2">
                <span
                  className="material-symbols-outlined text-base"
                  style={{ color: 'var(--color-outline)' }}
                >
                  link
                </span>
                <p
                  className="font-body text-xs"
                  style={{ color: 'var(--color-on-surface-variant)' }}
                >
                  {nexusResults[3].source}
                </p>
              </div>
              <Link href={nexusResults[3].href}>
                <h3
                  className="font-headline mb-1 cursor-pointer text-xl hover:underline"
                  style={{ color: 'var(--color-primary-container)' }}
                >
                  {nexusResults[3].title}
                </h3>
              </Link>
              <p
                className="font-body text-sm leading-relaxed"
                style={{ color: 'var(--color-on-surface)' }}
              >
                {nexusResults[3].description}
              </p>
            </div>

            {/* Related Searches */}
            <div
              className="p-6"
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
                {relatedSearches.map((s) => (
                  <button
                    key={s}
                    className="hover:bg-surface-container-high flex items-center gap-3 p-3 text-left transition-all"
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

            {/* Pagination hint */}
            <div className="flex items-center gap-4">
              <span
                className="font-headline text-2xl tracking-widest opacity-40 select-none"
                style={{ color: 'var(--color-on-surface)' }}
              >
                V i m l e s a i
              </span>
              <button
                className="font-body flex items-center gap-1 px-4 py-2 text-sm"
                style={{
                  color: 'var(--color-primary-container)',
                  border: '1px solid var(--color-outline-variant)',
                  borderRadius: 'var(--radius-lg)',
                }}
              >
                NEXT
                <span className="material-symbols-outlined text-base">
                  chevron_right
                </span>
              </button>
            </div>
          </div>

          {/* ── Knowledge Panel ── */}
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
                  height: '200px',
                  backgroundColor: 'var(--color-primary-container)',
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
                  alt="Vimal Desai"
                  className="h-full w-full object-cover mix-blend-luminosity grayscale"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(to bottom, transparent 50%, rgba(128,0,32,0.6))',
                  }}
                />
                <div className="absolute bottom-4 left-4">
                  <p className="font-headline text-xl font-bold text-white">
                    Vimal Desai
                  </p>
                  <p className="font-label text-xs tracking-wider text-white/70 uppercase">
                    Senior Full Stack Engineer
                  </p>
                </div>
              </div>

              {/* Info */}
              <div className="space-y-4 p-5">
                <p
                  className="font-body text-sm leading-relaxed"
                  style={{ color: 'var(--color-on-surface-variant)' }}
                >
                  Vimal Desai is a distinguished Senior Full Stack Engineer and
                  UI Designer known for his "Editorial Curator" approach to web
                  architecture. Based in India, his work bridges the gap between
                  high-performance systems and premium visual experiences.
                </p>

                {[
                  {
                    icon: 'location_on',
                    label: 'Born',
                    value: 'Chennai, India',
                  },
                  {
                    icon: 'school',
                    label: 'Education',
                    value: 'B.Tech Computer Science Engineering',
                  },
                  {
                    icon: 'business',
                    label: 'Founded',
                    value: 'VimLeSai Digital Studio',
                  },
                ].map((row) => (
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

                {/* Related entities */}
                <div>
                  <p
                    className="font-label mb-3 text-xs tracking-widest uppercase"
                    style={{ color: 'var(--color-on-surface-variant)' }}
                  >
                    Related Entities
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'React',
                      'Node.js',
                      'Go',
                      'TypeScript',
                      'PostgreSQL',
                      'GCP',
                    ].map((tech) => (
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

            {/* Also search for */}
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
                People also search for
              </p>
              <div className="space-y-2">
                {alsoSearchFor.map((item) => (
                  <button
                    key={item}
                    className="flex w-full items-center justify-between p-2 text-left transition-opacity hover:opacity-70"
                    onClick={() => setActiveQuery(item)}
                  >
                    <span
                      className="font-body text-sm"
                      style={{ color: 'var(--color-primary-container)' }}
                    >
                      {item}
                    </span>
                    <span
                      className="material-symbols-outlined text-base"
                      style={{ color: 'var(--color-outline)' }}
                    >
                      north_east
                    </span>
                  </button>
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
              <p
                className="font-body text-sm font-semibold"
                style={{ color: 'var(--color-primary-container)' }}
              >
                Open for high-impact roles
              </p>
            </div>
          </div>
        </div>
      </main>

    </>
  );
}
