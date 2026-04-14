'use client';
import Link from 'next/link';
import Watermark from '@/components/ui/Watermark';

// export const metadata = {
//   title: "Modern Soft — Vimal Desai | Senior Full Stack Engineer",
//   description:
//     "9+ years of engineering across the full stack ecosystem. Building resilient systems and sculptural interfaces.",
// };

const bioPillars = [
  {
    icon: 'hub',
    title: 'Systems Thinking',
    desc: 'Architecting for scalability and zero-day edge cases.',
  },
  {
    icon: 'edit',
    title: 'Clean Execution',
    desc: 'Writing purposeful, composable, and lean code.',
  },
  {
    icon: 'group',
    title: 'Lead Mentorship',
    desc: 'Coaching developers, elevating entire team standards.',
  },
  {
    icon: 'smart_toy',
    title: 'AI Integration',
    desc: 'Leveraging LLM tooling to accelerate engineering workflows.',
  },
];

const processSteps = [
  {
    label: 'Discovery',
    desc: 'Auditing requirements, identifying hidden constraints, and mapping the technical landscape.',
  },
  {
    label: 'Architecture',
    desc: 'Defining service boundaries, database schemas, and microservices for horizontal scalability.',
  },
  {
    label: 'Development',
    desc: 'Agile implementation with type-safety, test coverage, and modular components.',
  },
  {
    label: 'Deployment',
    desc: 'CI/CD automation, cloud orchestration, and real-time observability implementation.',
  },
];

const projects = [
  {
    id: 'string-erp',
    title: 'StringERP',
    tags: ['Enterprise', 'Next.js', 'Go'],
    impact:
      'Engineered a real-time ledger system processing $2M+ daily transactions with 99.98% data integrity through distributed locking mechanisms.',
    image:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&q=80',
    href: '/work/string-erp',
  },
  {
    id: 'orion-gateway',
    title: 'Orion Gateway',
    tags: ['API', 'Go', 'AWS'],
    impact:
      'Architected a low-latency API gateway reducing overhead by 40% through intelligent edge caching and gRPC protocols.',
    image:
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=900&q=80',
    href: '/work/orion-gateway',
  },
  {
    id: 'pulse-crm',
    title: 'Pulse CRM',
    tags: ['SaaS', 'React', 'Node.js'],
    impact:
      'Designed a reactive data management architecture handling 5M+ concurrent data streams for enterprise SaaS teams.',
    image:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&q=80',
    href: '/work/pulse-crm',
  },
];

const honors = [
  {
    icon: 'emoji_events',
    title: 'Leader of the Month',
    org: 'Global Tech Hub · 2022',
    variant: 'light',
  },
  {
    icon: 'smart_toy',
    title: 'AI Hackathon Champion',
    org: 'Deep Learning Summit · 2021',
    variant: 'dark',
    extra:
      'Engineered an automated code optimisation agent using LLMs to rescue technical debt by 40%.',
  },
  {
    icon: 'history',
    title: '9+',
    sub: 'Years Experience',
    org: 'Tailwind, Node.js, AWS, React, AWS, Database',
    variant: 'accent',
    label: 'Core Tech Stack',
  },
];

export default function ModernSoftPage() {
  return (
    <>
      {/* ── Nav ── */}
      <nav
        className="fixed top-0 z-50 w-full"
        style={{
          backgroundColor: 'rgba(252,249,243,0.8)',
          backdropFilter: 'blur(12px)',
          boxShadow: '0 20px 80px rgba(88,65,65,0.08)',
        }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">
          <div
            className="font-headline text-2xl font-bold tracking-tighter"
            style={{ color: 'var(--color-on-surface)' }}
          >
            Vimal Desai
          </div>
          <div className="hidden items-center gap-12 md:flex">
            {[
              { label: 'Work', href: '/' },
              { label: 'Experience', href: '/experience' },
              { label: 'Contact', href: '/contact' },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="font-headline text-lg tracking-tight italic transition-colors"
                style={{ color: 'var(--color-on-surface-variant)' }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = 'var(--color-on-surface)')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color =
                    'var(--color-on-surface-variant)')
                }
              >
                {item.label}
              </Link>
            ))}
          </div>
          <Link
            href="/contact"
            className="font-label px-6 py-2 text-sm tracking-widest uppercase transition-all hover:opacity-90"
            style={{
              backgroundColor: 'var(--color-primary-container)',
              color: 'var(--color-on-primary)',
              borderRadius: 'var(--radius-lg)',
            }}
          >
            Let's Talk
          </Link>
        </div>
      </nav>

      <main>
        {/* ── Hero ── */}
        <section className="mx-auto mb-40 max-w-7xl px-8 pt-40">
          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-12">
            <div className="md:col-span-7">
              <h1
                className="font-headline mb-12 leading-[0.85] tracking-tighter"
                style={{
                  fontSize: 'clamp(4rem, 9vw, 9rem)',
                  color: 'var(--color-on-surface)',
                }}
              >
                Crafting
                <br />
                <em>monolithic</em>
                <br />
                digital
                <br />
                experiences.
              </h1>
              <p
                className="font-body max-w-lg text-lg leading-relaxed"
                style={{ color: 'var(--color-on-surface-variant)' }}
              >
                Senior Full Stack Engineer focused on building resilient systems
                and sculptural interfaces.
              </p>
            </div>
            <div className="space-y-4 pt-8 md:col-span-5">
              <Link
                href="/work/string-erp"
                className="font-label block w-full px-6 py-4 text-center text-sm tracking-widest uppercase transition-all hover:opacity-80"
                style={{
                  backgroundColor: 'var(--color-primary-container)',
                  color: 'var(--color-on-primary)',
                  borderRadius: 'var(--radius-lg)',
                }}
              >
                Explore Work
              </Link>
              <Link
                href="/contact"
                className="font-label block w-full px-6 py-4 text-center text-sm tracking-widest uppercase transition-all hover:opacity-80"
                style={{
                  backgroundColor: 'var(--color-surface-container-highest)',
                  color: 'var(--color-on-surface)',
                  borderRadius: 'var(--radius-lg)',
                }}
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </section>

        {/* ── Biography ── */}
        <section
          className="py-32"
          style={{
            backgroundColor: 'var(--color-surface-container-low)',
            borderRadius: '3rem 3rem 0 0',
          }}
        >
          <div className="mx-auto max-w-7xl px-8">
            <p
              className="font-label mb-4 text-xs tracking-[0.2em] uppercase"
              style={{ color: 'var(--color-on-surface-variant)' }}
            >
              Biography
            </p>
            <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
              <div>
                <h2
                  className="font-headline mb-8 text-5xl leading-tight"
                  style={{ color: 'var(--color-on-surface)' }}
                >
                  9+ years of engineering across the full stack ecosystem.
                </h2>
                <p
                  className="font-body mb-4 text-lg leading-relaxed"
                  style={{ color: 'var(--color-on-surface-variant)' }}
                >
                  As a Lead Engineer, I specialise in transforming complex
                  business requirements into elegant, scalable technical
                  architectures. My journey has been defined by a commitment to
                  code quality, and a deep respect for user-centric design.
                </p>
                <p
                  className="font-body text-base leading-relaxed"
                  style={{ color: 'var(--color-on-surface-variant)' }}
                >
                  Currently leading high-performance teams to deliver robust
                  enterprise solutions that bridge the gap between heavy-duty
                  backends and fluid, tactile frontends.
                </p>
              </div>

              {/* Pillars grid */}
              <div className="grid grid-cols-2 gap-5">
                {bioPillars.map((p) => (
                  <div
                    key={p.title}
                    className="p-6"
                    style={{
                      backgroundColor: 'var(--color-surface-container-highest)',
                      borderRadius: 'var(--radius-xl)',
                    }}
                  >
                    <span
                      className="material-symbols-outlined mb-4 block text-2xl"
                      style={{ color: 'var(--color-primary-container)' }}
                    >
                      {p.icon}
                    </span>
                    <h3
                      className="font-headline mb-2 text-xl"
                      style={{ color: 'var(--color-on-surface)' }}
                    >
                      {p.title}
                    </h3>
                    <p
                      className="font-body text-xs leading-relaxed"
                      style={{ color: 'var(--color-on-surface-variant)' }}
                    >
                      {p.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Process ── */}
        <section className="py-40">
          <div className="mx-auto max-w-7xl px-8">
            <p
              className="font-label mb-4 text-center text-xs tracking-[0.3em] uppercase"
              style={{ color: 'var(--color-on-surface-variant)' }}
            >
              The Process
            </p>
            <h2
              className="font-headline mb-20 text-center text-5xl italic"
              style={{ color: 'var(--color-on-surface)' }}
            >
              From Discovery to Deployment
            </h2>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {processSteps.map((step, i) => (
                <div
                  key={step.label}
                  className="border-t-2 p-6"
                  style={{ borderColor: 'var(--color-outline-variant)' }}
                >
                  <span
                    className="material-symbols-outlined mb-4 block text-2xl"
                    style={{ color: 'var(--color-outline)' }}
                  >
                    {['search', 'hub', 'code', 'rocket_launch'][i]}
                  </span>
                  <h4
                    className="font-headline mb-2 text-2xl"
                    style={{ color: 'var(--color-on-surface)' }}
                  >
                    {step.label}
                  </h4>
                  <p
                    className="font-body text-sm leading-relaxed"
                    style={{ color: 'var(--color-on-surface-variant)' }}
                  >
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Selected Projects ── */}
        <section
          className="mx-auto max-w-7xl border-t px-8 py-32"
          style={{ borderColor: 'rgba(224,191,191,0.2)' }}
          id="work"
        >
          <p
            className="font-label mb-3 text-xs tracking-[0.2em] uppercase"
            style={{ color: 'var(--color-on-surface-variant)' }}
          >
            Selected Projects
          </p>
          <h2
            className="font-headline mb-8 text-5xl leading-tight"
            style={{ color: 'var(--color-on-surface)' }}
          >
            Engineering solutions
            <br />
            for complex problems.
          </h2>
          <p
            className="font-body mb-16 max-w-lg text-base"
            style={{ color: 'var(--color-on-surface-variant)' }}
          >
            A portfolio of enterprise applications, scalable platforms, and
            performance-first architectures with precision.
          </p>

          {/* Stacked project list */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Text list - left */}
            <div className="space-y-8">
              {Object.values(projects).map((p) => (
                <div
                  key={p.id}
                  className="border-b pb-8"
                  style={{ borderColor: 'rgba(224,191,191,0.15)' }}
                >
                  <div className="mb-3 flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-label px-3 py-1 text-[10px] tracking-wider uppercase"
                        style={{
                          backgroundColor:
                            'var(--color-surface-container-highest)',
                          color: 'var(--color-on-surface-variant)',
                          borderRadius: 'var(--radius-full)',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-start justify-between">
                    <h3
                      className="font-headline mb-2 text-3xl"
                      style={{ color: 'var(--color-on-surface)' }}
                    >
                      {p.title}
                    </h3>
                    <Link
                      href={p.href}
                      className="ml-4 flex-shrink-0 opacity-0 hover:opacity-100"
                      style={{ color: 'var(--color-primary-container)' }}
                    >
                      <span className="material-symbols-outlined">
                        north_east
                      </span>
                    </Link>
                  </div>
                  <p
                    className="font-body text-sm leading-relaxed"
                    style={{ color: 'var(--color-on-surface-variant)' }}
                  >
                    {p.impact}
                  </p>
                </div>
              ))}
            </div>

            {/* Images - right (stacked) */}
            <div className="space-y-6">
              {Object.values(projects).map((p) => (
                <Link
                  key={p.id}
                  href={p.href}
                  className="group block overflow-hidden"
                  style={{ borderRadius: 'var(--radius-xl)' }}
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                    style={{ height: '180px' }}
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Honors & Recognition ── */}
        <section
          className="py-40"
          style={{
            backgroundColor: 'var(--color-surface-container-low)',
            borderRadius: '0 0 3rem 3rem',
          }}
          id="experience"
        >
          <div className="mx-auto max-w-7xl px-8">
            <p
              className="font-label mb-4 text-center text-xs tracking-[0.3em] uppercase"
              style={{ color: 'var(--color-on-surface-variant)' }}
            >
              Milestones
            </p>
            <h2
              className="font-headline mb-16 text-center text-5xl"
              style={{ color: 'var(--color-on-surface)' }}
            >
              Honors & Recognition
            </h2>

            <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
              {/* Leader of the Month */}
              <div
                className="flex flex-col gap-4 p-8"
                style={{
                  backgroundColor: 'var(--color-surface-container-highest)',
                  borderRadius: 'var(--radius-xl)',
                }}
              >
                <span
                  className="material-symbols-outlined text-3xl"
                  style={{ color: 'var(--color-primary-container)' }}
                >
                  emoji_events
                </span>
                <h3
                  className="font-headline mb-4 text-4xl"
                  style={{ color: 'var(--color-on-surface)' }}
                >
                  Leader of the Month
                </h3>
                <p
                  className="font-label text-xs tracking-widest uppercase"
                  style={{ color: 'var(--color-outline)' }}
                >
                  Global Tech Hub · 2022
                </p>
                <p
                  className="font-body text-sm"
                  style={{ color: 'var(--color-on-surface-variant)' }}
                >
                  Awarded for exceptional technical guidance and fostering a
                  high-velocity engineering culture within the core product
                  team.
                </p>
              </div>

              {/* AI Hackathon */}
              <div
                className="col-span-1 flex flex-col gap-4 p-8"
                style={{
                  backgroundColor: 'var(--color-primary-container)',
                  borderRadius: 'var(--radius-xl)',
                  color: 'var(--color-on-primary)',
                }}
              >
                <span className="material-symbols-outlined text-3xl opacity-70">
                  smart_toy
                </span>
                <h3 className="font-headline mb-4 text-3xl leading-tight">
                  AI Hackathon Champion
                </h3>
                <p className="font-body text-sm opacity-75">
                  Engineered an automated code optimisation agent using LLMs to
                  rescue technical debt by 40%.
                </p>
                <p className="font-label mt-auto text-xs tracking-widest uppercase opacity-60">
                  Deep Learning Summit · 2021
                </p>
              </div>

              {/* Years experience */}
              <div
                className="flex flex-col justify-between p-8"
                style={{
                  backgroundColor: 'var(--color-secondary)',
                  color: 'var(--color-on-secondary)',
                  borderRadius: 'var(--radius-xl)',
                }}
              >
                <span className="material-symbols-outlined text-3xl opacity-60">
                  history
                </span>
                <div>
                  <p className="font-headline text-5xl">9+</p>
                  <h4 className="mt-1 text-lg font-bold">Years Experience</h4>
                  <p className="font-body mt-2 text-sm opacity-70">
                    Consistently delivering growth and innovation across the
                    full stack ecosystem.
                  </p>
                </div>
              </div>

              {/* Core Tech Stack */}
              <div
                className="flex flex-col gap-4 p-8"
                style={{
                  backgroundColor: 'var(--color-surface-container-highest)',
                  borderRadius: 'var(--radius-xl)',
                }}
              >
                <span
                  className="material-symbols-outlined text-3xl"
                  style={{ color: 'var(--color-primary-container)' }}
                >
                  layers
                </span>
                <h3
                  className="font-headline mb-2 text-2xl"
                  style={{ color: 'var(--color-on-surface)' }}
                >
                  Core Tech Stack
                </h3>
                <p
                  className="font-body text-sm"
                  style={{ color: 'var(--color-on-surface-variant)' }}
                >
                  Tailwind, Node.js, AWS, React, PostgreSQL, Database
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Big CTA ── */}
        <section
          className="relative overflow-hidden py-40 text-center"
          id="contact"
        >
          {/* dot decoration */}
          <div
            className="absolute top-1/2 left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{ backgroundColor: 'var(--color-primary-container)' }}
            aria-hidden
          />
          <div className="mx-auto max-w-7xl px-8">
            <h2
              className="font-headline mb-12 leading-none tracking-tighter italic"
              style={{
                fontSize: 'clamp(3.5rem, 8vw, 8rem)',
                color: 'var(--color-on-surface)',
              }}
            >
              Let's work
              <br />
              together.
            </h2>
            <a
              href="mailto:vimal@engineer.dev"
              className="font-label text-base tracking-widest uppercase transition-colors"
              style={{ color: 'var(--color-outline)' }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = 'var(--color-primary-container)')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = 'var(--color-outline)')
              }
            >
              vimal@engineer.dev
            </a>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer
        className="mt-20 flex w-full flex-col items-center rounded-t-[2rem] px-12 py-24 text-center"
        style={{ backgroundColor: 'var(--color-surface-container-low)' }}
      >
        <p
          className="font-headline mb-8 text-4xl italic"
          style={{ color: 'var(--color-on-surface)' }}
        >
          Vimal Desai
        </p>
        <div className="mb-12 grid w-full max-w-3xl grid-cols-2 gap-8 text-left md:grid-cols-4">
          {[
            {
              title: 'Work',
              links: ['Home', 'Experience', 'Archive'],
              hrefs: ['/', '/experience', '/archive'],
            },
            {
              title: 'Stack',
              links: ['Stack', 'Process', 'Impact'],
              hrefs: ['/stack', '/process', '/impact'],
            },
            {
              title: 'Contact',
              links: ['Contact', 'Studio'],
              hrefs: ['/contact', '/studio'],
            },
            { title: 'Legal', links: ['Privacy'], hrefs: ['#'] },
          ].map((col) => (
            <div key={col.title}>
              <p
                className="font-label mb-4 text-xs font-bold tracking-widest uppercase"
                style={{ color: 'var(--color-on-surface)' }}
              >
                {col.title}
              </p>
              {col.links.map((link, i) => (
                <div key={link}>
                  <Link
                    href={col.hrefs[i]}
                    className="font-body mb-2 block text-sm transition-colors"
                    style={{ color: 'var(--color-on-surface-variant)' }}
                  >
                    {link}
                  </Link>
                </div>
              ))}
            </div>
          ))}
        </div>
        <p
          className="font-body text-xs tracking-widest uppercase opacity-50"
          style={{ color: 'var(--color-on-surface-variant)' }}
        >
          © 2024 Vimal Desai. Built with intent.
        </p>
      </footer>

      <Watermark text="modern" />
    </>
  );
}
