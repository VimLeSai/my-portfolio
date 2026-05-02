'use client';
import Link from 'next/link';

// export const metadata = {
//   title: "Technical Resume V2 — Architect Portfolio",
//   description:
//     "Senior Full Stack Architect specializing in high-performance systems. Engineered for sub-100ms latency.",
// };

const bentoCards = [
  {
    id: 'foundations',
    col: 'md:col-span-2',
    row: '',
    bg: 'var(--color-surface-container-low)',
    borderTop: true,
    icon: 'terminal',
    title: 'Foundations',
    tags: ['Rust', 'TypeScript', 'Go', 'C++', 'Python'],
    type: 'tags',
  },
  {
    id: 'visuals',
    col: 'md:col-span-1',
    row: '',
    bg: 'var(--color-primary)',
    icon: 'auto_awesome',
    title: 'Visuals & Motion',
    items: ['WebGL / Three.js', 'GSAP Animations', 'Shaders (GLSL)'],
    type: 'list',
    dark: true,
  },
  {
    id: 'infrastructure',
    col: 'md:col-span-1',
    row: '',
    bg: 'var(--color-surface-container-highest)',
    icon: 'cloud',
    title: 'Infrastructure',
    bar: 85,
    barLabel: 'AWS/Terraform 85%',
    type: 'bar',
  },
];

const timelineRoles = [
  {
    period: '2021 — PRESENT',
    title: 'Principal Systems Architect',
    company: 'Enterprise Solutions Inc.',
    desc: 'Led the migration of legacy monolithic architecture to a high-performance Rust-based microservices mesh.',
    metrics: [
      { val: '40%', label: 'Performance Gain' },
      { val: '$1.2M', label: 'Infra Savings' },
    ],
    side: 'left',
  },
  {
    period: '2018 — 2021',
    title: 'Senior UI Engineer',
    company: 'Nexus Digital Studio',
    desc: 'Architected a multi-brand design system used across 14 global products, ensuring 100% component reusability.',
    metrics: [
      { val: '14', label: 'Global Products' },
      { val: '99.9%', label: 'Uptime Metric' },
    ],
    side: 'right',
  },
];

const artifacts = [
  {
    title: 'Aether Archive',
    desc: 'A decentralized storage protocol built with Rust and IPFS, featuring an encrypted metadata layer for secure architectural record-keeping.',
    links: ['Case Study', 'Repo'],
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
    offset: false,
  },
  {
    title: 'Fragment OS',
    desc: 'An experimental micro-kernel environment focused on modular UI rendering and hardware-accelerated typography.',
    links: ['Whitepaper', 'Demo'],
    image:
      'https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=800&q=80',
    offset: true,
  },
];

export default function ResumeV2Page() {
  return (
    <>
      {/* ── Nav ── */}
      <nav
        className="fixed top-0 z-50 w-full"
        style={{
          backgroundColor: 'rgba(252,249,243,0.8)',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 20px 80px rgba(88,65,65,0.08)',
        }}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">
          <span
            className="font-headline text-2xl font-bold tracking-tight"
            style={{ color: 'var(--color-on-surface)' }}
          >
            Architect Portfolio
          </span>
          <div className="font-headline hidden items-center gap-10 tracking-tight md:flex">
            {[
              { label: 'Arsenal', href: '/stack', active: false },
              { label: 'Experience', href: '/experience', active: true },
              { label: 'Projects', href: '/', active: false },
              { label: 'Contact', href: '/contact', active: false },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="transition-colors"
                style={{
                  color: item.active
                    ? 'var(--color-primary-container)'
                    : 'var(--color-on-surface-variant)',
                  fontWeight: item.active ? 600 : 400,
                  borderBottom: item.active
                    ? '2px solid var(--color-primary-container)'
                    : 'none',
                  paddingBottom: item.active ? '4px' : '0',
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <button
            className="px-6 py-2.5 text-sm font-medium shadow-sm transition-all active:opacity-80"
            style={{
              backgroundColor: 'var(--color-primary-container)',
              color: 'var(--color-on-primary)',
              borderRadius: 'var(--radius-lg)',
            }}
          >
            Download CV
          </button>
        </div>
      </nav>

      <main className="mx-auto max-w-7xl px-8 pt-32 pb-24">
        {/* ── Header ── */}
        <header className="mb-24">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p
                className="font-label mb-4 text-[0.6875rem] tracking-[0.15em] uppercase"
                style={{ color: 'var(--color-primary)' }}
              >
                Curriculum Vitae
              </p>
              <h1
                className="font-headline leading-[0.9] font-extrabold tracking-tighter"
                style={{
                  fontSize: 'clamp(3.5rem, 7vw, 6rem)',
                  color: 'var(--color-on-surface)',
                }}
              >
                Technical Resume
              </h1>
            </div>
            <div
              className="pl-8 text-right"
              style={{ borderLeft: '2px solid rgba(224,191,191,0.3)' }}
            >
              <p
                className="font-headline text-2xl italic"
                style={{ color: 'var(--color-on-surface-variant)' }}
              >
                Senior Full Stack Architect
              </p>
              <p
                className="font-body mt-1 text-sm opacity-70"
                style={{ color: 'var(--color-on-surface-variant)' }}
              >
                Specializing in High-Performance Systems
              </p>
            </div>
          </div>
        </header>

        {/* ── Core Focus ── */}
        <section className="mb-32 grid grid-cols-1 items-center gap-12 md:grid-cols-12">
          {/* Left: image + floating card */}
          <div className="relative md:col-span-5">
            <div
              className="group relative overflow-hidden"
              style={{
                aspectRatio: '1',
                backgroundColor: 'var(--color-surface-container-low)',
                borderRadius: 'var(--radius-xl)',
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80"
                alt="Architectural Blueprint"
                className="h-full w-full object-cover brightness-90 grayscale transition-all duration-700 hover:grayscale-0"
              />
              <div
                className="absolute inset-0"
                style={{
                  backgroundColor: 'rgba(87,0,19,0.1)',
                  mixBlendMode: 'multiply',
                }}
              />
            </div>
            {/* Floating card */}
            <div
              className="absolute -right-6 -bottom-6 max-w-xs p-8 shadow-2xl"
              style={{
                backgroundColor: 'var(--color-surface)',
                border: '1px solid rgba(224,191,191,0.2)',
              }}
            >
              <span
                className="material-symbols-outlined mb-4 block text-4xl"
                style={{ color: 'var(--color-primary)' }}
              >
                architecture
              </span>
              <h3
                className="font-headline mb-2 text-xl font-bold"
                style={{ color: 'var(--color-on-surface)' }}
              >
                Architectural Rigor
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'var(--color-on-surface-variant)' }}
              >
                Precision-engineered systems that balance scalability with
                maintenance-first codebases.
              </p>
            </div>
          </div>

          {/* Right: philosophy */}
          <div className="md:col-span-6 md:col-start-7">
            <h2
              className="font-label mb-6 text-[0.6875rem] tracking-[0.1em] uppercase"
              style={{ color: 'var(--color-primary)' }}
            >
              Core Philosophy
            </h2>
            <div className="space-y-8">
              <p
                className="font-headline text-4xl leading-tight"
                style={{ color: 'var(--color-on-surface)' }}
              >
                Navigating the tension between{' '}
                <em style={{ color: 'var(--color-primary)' }}>
                  architectural rigor
                </em>{' '}
                and the volatile nature of <em>digital fluidity</em>.
              </p>
              <p
                className="font-body text-lg leading-relaxed"
                style={{ color: 'var(--color-on-surface-variant)' }}
              >
                In a world of ephemeral frameworks, I build digital structures
                intended for longevity. My approach treats code as a living
                blueprint—malleable yet structurally sound.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-4">
                {[
                  { val: '12+', label: 'Years of Practice' },
                  { val: '40%', label: 'Efficiency Gain Metric' },
                ].map((s) => (
                  <div key={s.label}>
                    <p
                      className="font-headline text-3xl font-bold"
                      style={{ color: 'var(--color-primary)' }}
                    >
                      {s.val}
                    </p>
                    <p
                      className="font-label text-[0.625rem] tracking-wider uppercase"
                      style={{ color: 'var(--color-on-surface)' }}
                    >
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Technical Arsenal Bento ── */}
        <section className="mb-32">
          <div className="mb-12 flex items-center gap-4">
            <h2
              className="font-headline text-4xl font-bold"
              style={{ color: 'var(--color-on-surface)' }}
            >
              Technical Arsenal
            </h2>
            <div
              className="h-px flex-grow"
              style={{ backgroundColor: 'rgba(224,191,191,0.3)' }}
            />
          </div>

          {/* 4-col bento, each row ~240px */}
          <div
            className="grid grid-cols-1 gap-6 md:grid-cols-4"
            style={{ gridAutoRows: '240px' }}
          >
            {/* Foundations — col-span-2 */}
            <div
              className="flex flex-col justify-between p-8 md:col-span-2"
              style={{
                backgroundColor: 'var(--color-surface-container-low)',
                borderTop: '2px solid var(--color-primary)',
              }}
            >
              <div>
                <span
                  className="material-symbols-outlined mb-4 block"
                  style={{ color: 'var(--color-primary)' }}
                >
                  terminal
                </span>
                <h3
                  className="font-headline text-2xl font-bold"
                  style={{ color: 'var(--color-on-surface)' }}
                >
                  Foundations
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Rust', 'TypeScript', 'Go', 'C++', 'Python'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm font-semibold"
                    style={{
                      backgroundColor: 'var(--color-surface-container-highest)',
                      color: 'var(--color-on-surface-variant)',
                      borderRadius: 'var(--radius-full)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Visuals & Motion — col-span-1, dark */}
            <div
              className="flex flex-col justify-between p-8"
              style={{ backgroundColor: 'var(--color-primary)' }}
            >
              <div>
                <span
                  className="material-symbols-outlined mb-4 block"
                  style={{ color: 'var(--color-on-primary)' }}
                >
                  auto_awesome
                </span>
                <h3
                  className="font-headline text-2xl font-bold"
                  style={{ color: 'var(--color-on-primary)' }}
                >
                  Visuals & Motion
                </h3>
              </div>
              <ul
                className="font-label space-y-2 text-xs tracking-wide uppercase"
                style={{ color: 'rgba(255,255,255,0.8)' }}
              >
                {['WebGL / Three.js', 'GSAP Animations', 'Shaders (GLSL)'].map(
                  (item) => (
                    <li key={item}>{item}</li>
                  ),
                )}
              </ul>
            </div>

            {/* Infrastructure — col-span-1 */}
            <div
              className="flex flex-col justify-between p-8"
              style={{
                backgroundColor: 'var(--color-surface-container-highest)',
              }}
            >
              <div>
                <span
                  className="material-symbols-outlined mb-4 block"
                  style={{ color: 'var(--color-primary)' }}
                >
                  cloud
                </span>
                <h3
                  className="font-headline text-2xl font-bold"
                  style={{ color: 'var(--color-on-surface)' }}
                >
                  Infrastructure
                </h3>
              </div>
              <div className="space-y-1">
                <div
                  className="h-1 w-full"
                  style={{ backgroundColor: 'rgba(224,191,191,0.3)' }}
                >
                  <div
                    className="h-full w-[85%]"
                    style={{ backgroundColor: 'var(--color-primary)' }}
                  />
                </div>
                <p
                  className="font-label text-right text-[0.625rem] uppercase"
                  style={{ color: 'var(--color-on-surface-variant)' }}
                >
                  AWS/Terraform 85%
                </p>
              </div>
            </div>

            {/* Design Systems — row-span-2, col-start-4 */}
            <div
              className="flex flex-col p-8 md:col-start-4 md:row-span-2"
              style={{
                backgroundColor: '#f0eee8',
                borderLeft: '1px solid rgba(224,191,191,0.2)',
              }}
            >
              <span
                className="material-symbols-outlined mb-6 text-4xl"
                style={{ color: 'var(--color-primary)' }}
              >
                grid_view
              </span>
              <h3
                className="font-headline mb-6 text-2xl font-bold"
                style={{ color: 'var(--color-on-surface)' }}
              >
                Design Systems
              </h3>
              <p
                className="mb-8 text-sm leading-relaxed italic"
                style={{ color: 'var(--color-on-surface-variant)' }}
              >
                "Bridge the gap between vision and execution through rigid
                tokenization."
              </p>
              <div className="mt-auto space-y-4">
                {['Atomic Design', 'Headless UI', 'Token Management'].map(
                  (item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div
                        className="h-2 w-2 flex-shrink-0 rounded-full"
                        style={{ backgroundColor: 'var(--color-primary)' }}
                      />
                      <span
                        className="text-sm font-medium"
                        style={{ color: 'var(--color-on-surface)' }}
                      >
                        {item}
                      </span>
                    </div>
                  ),
                )}
              </div>
            </div>

            {/* Large center piece — col-span-3 */}
            <div
              className="group relative overflow-hidden md:col-span-3"
              style={{ backgroundColor: 'var(--color-surface-container-low)' }}
            >
              <img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&q=80"
                alt="Server infrastructure"
                className="h-full w-full object-cover opacity-20 grayscale transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex flex-col justify-center p-10">
                <p
                  className="font-headline max-w-lg text-3xl font-bold"
                  style={{ color: 'var(--color-on-surface)' }}
                >
                  Engineered for sub-100ms latency across global distributed
                  networks.
                </p>
                <p
                  className="font-label mt-4 text-xs font-bold tracking-[0.2em] uppercase"
                  style={{ color: 'var(--color-primary)' }}
                >
                  System Reliability Profile
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Professional History Timeline ── */}
        <section className="mb-32">
          <div className="mb-16 flex items-center gap-4">
            <h2
              className="font-headline text-4xl font-bold"
              style={{ color: 'var(--color-on-surface)' }}
            >
              Professional History
            </h2>
            <div
              className="h-px flex-grow"
              style={{ backgroundColor: 'rgba(224,191,191,0.3)' }}
            />
          </div>

          {/* Timeline container with center vertical line */}
          <div className="relative space-y-24">
            <div
              className="absolute left-0 -z-0 h-full w-px md:left-1/2"
              style={{ backgroundColor: 'rgba(224,191,191,0.4)' }}
              aria-hidden
            />

            {timelineRoles.map((role, i) => (
              <div
                key={role.title}
                className="relative flex flex-col items-start gap-8 md:flex-row md:gap-0"
              >
                {/* Left cell */}
                <div
                  className={`order-2 md:order-1 md:w-1/2 md:pr-16 ${
                    role.side === 'left' ? 'md:text-right' : ''
                  }`}
                >
                  {role.side === 'left' ? (
                    <>
                      <p
                        className="font-label mb-2 text-[0.6875rem] font-bold"
                        style={{ color: 'var(--color-primary)' }}
                      >
                        {role.period}
                      </p>
                      <h3
                        className="font-headline mb-4 text-3xl font-bold"
                        style={{ color: 'var(--color-on-surface)' }}
                      >
                        {role.title}
                      </h3>
                      <p
                        className="leading-relaxed"
                        style={{ color: 'var(--color-on-surface-variant)' }}
                      >
                        {role.desc}
                      </p>
                      <div className="mt-6 flex flex-wrap gap-4 md:justify-end">
                        {role.metrics.map((m) => (
                          <div
                            key={m.label}
                            className="border-b-2 px-4 py-3"
                            style={{
                              backgroundColor:
                                'var(--color-surface-container-high)',
                              borderBottomColor: 'var(--color-primary)',
                            }}
                          >
                            <p
                              className="font-headline text-2xl font-bold"
                              style={{ color: 'var(--color-on-surface)' }}
                            >
                              {m.val}
                            </p>
                            <p
                              className="font-label text-[0.625rem] uppercase"
                              style={{
                                color: 'var(--color-on-surface-variant)',
                              }}
                            >
                              {m.label}
                            </p>
                          </div>
                        ))}
                      </div>
                    </>
                  ) : (
                    <span
                      className="font-label block text-xs tracking-widest uppercase opacity-50 md:text-right"
                      style={{ color: 'var(--color-on-surface-variant)' }}
                    >
                      {role.company}
                    </span>
                  )}
                </div>

                {/* Center dot */}
                <div
                  className="absolute left-0 z-10 order-1 h-4 w-4 -translate-x-1/2 rounded-full border-4 md:left-1/2 md:order-2"
                  style={{
                    backgroundColor: 'var(--color-primary)',
                    borderColor: 'var(--color-background)',
                  }}
                />

                {/* Right cell */}
                <div className="order-3 md:w-1/2 md:pl-16">
                  {role.side === 'right' ? (
                    <>
                      <p
                        className="font-label mb-2 text-[0.6875rem] font-bold"
                        style={{ color: 'var(--color-primary)' }}
                      >
                        {role.period}
                      </p>
                      <h3
                        className="font-headline mb-4 text-3xl font-bold"
                        style={{ color: 'var(--color-on-surface)' }}
                      >
                        {role.title}
                      </h3>
                      <p
                        className="leading-relaxed"
                        style={{ color: 'var(--color-on-surface-variant)' }}
                      >
                        {role.desc}
                      </p>
                      <div className="mt-6 flex flex-wrap gap-4">
                        {role.metrics.map((m) => (
                          <div
                            key={m.label}
                            className="border-b-2 px-4 py-3"
                            style={{
                              backgroundColor:
                                'var(--color-surface-container-high)',
                              borderBottomColor: 'var(--color-primary)',
                            }}
                          >
                            <p
                              className="font-headline text-2xl font-bold"
                              style={{ color: 'var(--color-on-surface)' }}
                            >
                              {m.val}
                            </p>
                            <p
                              className="font-label text-[0.625rem] uppercase"
                              style={{
                                color: 'var(--color-on-surface-variant)',
                              }}
                            >
                              {m.label}
                            </p>
                          </div>
                        ))}
                      </div>
                    </>
                  ) : (
                    <span
                      className="font-label text-xs tracking-widest uppercase opacity-50"
                      style={{ color: 'var(--color-on-surface-variant)' }}
                    >
                      {role.company}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Technical Artifacts ── */}
        <section className="mb-32">
          <div className="mb-16 flex items-center gap-4">
            <h2
              className="font-headline text-4xl font-bold"
              style={{ color: 'var(--color-on-surface)' }}
            >
              Technical Artifacts
            </h2>
            <div
              className="h-px flex-grow"
              style={{ backgroundColor: 'rgba(224,191,191,0.3)' }}
            />
          </div>

          <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
            {artifacts.map((a) => (
              <div
                key={a.title}
                className={`space-y-8 ${a.offset ? 'md:mt-24' : ''}`}
              >
                <div
                  className="group relative overflow-hidden"
                  style={{
                    aspectRatio: '16/9',
                    borderRadius: 'var(--radius-lg)',
                  }}
                >
                  <img
                    src={a.image}
                    alt={a.title}
                    className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  />
                  <div
                    className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100"
                    style={{
                      background:
                        'linear-gradient(to top, rgba(87,0,19,0.4), transparent)',
                    }}
                  />
                </div>
                <div>
                  <h3
                    className="font-headline mb-3 text-3xl font-bold"
                    style={{ color: 'var(--color-on-surface)' }}
                  >
                    {a.title}
                  </h3>
                  <p
                    className="mb-6 leading-relaxed"
                    style={{ color: 'var(--color-on-surface-variant)' }}
                  >
                    {a.desc}
                  </p>
                  <div className="flex gap-4">
                    {a.links.map((link) => (
                      <button
                        key={link}
                        className="font-label pb-0.5 text-[0.6875rem] font-bold uppercase transition-opacity hover:opacity-70"
                        style={{
                          color: 'var(--color-primary)',
                          borderBottom: '1px solid var(--color-primary)',
                        }}
                      >
                        {link}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section
          className="flex flex-col items-center p-12 text-center md:p-24"
          style={{
            backgroundColor: 'var(--color-primary)',
            color: 'var(--color-on-primary)',
            borderRadius: 'var(--radius-DEFAULT)',
          }}
        >
          <h2
            className="font-headline mb-8 font-bold"
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              color: 'var(--color-on-primary)',
            }}
          >
            Ready to blueprint your next vision?
          </h2>
          <p
            className="font-body mb-12 max-w-2xl text-xl"
            style={{ color: 'rgba(255,255,255,0.8)' }}
          >
            I am currently accepting select architectural consultations and
            leadership roles for high-impact engineering teams.
          </p>
          <Link
            href="/contact"
            className="px-10 py-4 text-sm font-bold tracking-widest uppercase transition-transform hover:scale-105"
            style={{
              backgroundColor: 'var(--color-surface)',
              color: 'var(--color-primary)',
              borderRadius: 'var(--radius-full)',
            }}
          >
            Initiate Contact
          </Link>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer
        className="w-full py-12"
        style={{ backgroundColor: 'var(--color-surface-container-low)' }}
      >
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-12 md:flex-row">
          <span
            className="font-body text-[0.6875rem] tracking-[0.1em] uppercase"
            style={{ color: '#6b6456' }}
          >
            © 2024 Senior Full Stack Architect. All rights reserved.
          </span>
          <div className="flex gap-8">
            {['LinkedIn', 'GitHub', 'StackOverflow', 'Email'].map((item) => (
              <Link
                key={item}
                href="#"
                className="font-body text-[0.6875rem] tracking-[0.1em] uppercase underline-offset-4 transition-colors hover:underline"
                style={{ color: '#6b6456' }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color =
                    'var(--color-primary-container)')
                }
                onMouseLeave={(e) => (e.currentTarget.style.color = '#6b6456')}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
