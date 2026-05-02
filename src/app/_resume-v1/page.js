'use client';
import Link from 'next/link';

// export const metadata = {
//   title: "Technical Resume — Curator | Senior Creative Developer",
//   description:
//     "Bridging the gap between architectural rigor and digital fluidity. Senior Creative Developer & Systems Architect.",
// };

const arsenal = [
  {
    category: 'Foundations',
    items: [
      'TypeScript / React / Next.js',
      'Go / Rust / Node.js',
      'PostgreSQL / Redis',
    ],
  },
  {
    category: 'Visuals & Motion',
    items: [
      'Three.js / GLSL',
      'GSAP / Framer Motion',
      'Tailwind / CSS Variables',
    ],
  },
  {
    category: 'Infrastructure',
    items: ['AWS / Google Cloud', 'Docker / Kubernetes', 'CI/CD Pipelines'],
  },
  {
    category: 'Design Systems',
    items: [
      'Figma / Token Management',
      'Storybook / Component Libs',
      'Accessibility (WCAG)',
    ],
  },
];

const experience = [
  {
    company: 'Studio Narrative',
    period: '2021 — PRESENT',
    role: 'Principal Engineer',
    bullets: [
      'Led the technical architecture for 15+ high-traffic editorial platforms, reaching over 2M monthly unique visitors.',
      'Engineered a custom headless CMS bridge reducing content deployment latency by 45%.',
      'Mentored a team of 6 front-end engineers, implementing strict TypeScript and testing protocols.',
    ],
  },
  {
    company: 'Monolith Labs',
    period: '2018 — 2021',
    role: 'Senior Frontend Specialist',
    bullets: [
      'Developed a proprietary WebGL rendering engine for real-time 3D data visualization dashboards.',
      'Architected a modular component library used across 4 distinct product verticals, ensuring brand consistency.',
    ],
  },
];

const selectedWorks = [
  {
    title: 'Aether Archive',
    desc: 'Experimental digital library for avant-garde architecture.',
    image:
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
    href: '/archive',
  },
  {
    title: 'Fragment OS',
    desc: 'A minimal window management system for creative focus.',
    image:
      'https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=800&q=80',
    href: '/',
  },
];

export default function TechnicalResumePage() {
  return (
    <>
      {/* Global ruled-paper background */}
      <style>{`
        .resume-bg {
          background-color: #fcf9f3;
          background-image: linear-gradient(#e5e2dc 1px, transparent 1px);
          background-size: 100% 3rem;
        }
      `}</style>

      {/* ── Nav ── */}
      <nav
        className="fixed top-0 z-50 w-full"
        style={{
          backgroundColor: 'rgba(252,249,243,0.8)',
          backdropFilter: 'blur(12px)',
          boxShadow: '0 20px 80px rgba(88,65,65,0.08)',
        }}
      >
        <div className="mx-auto flex w-full max-w-[1920px] items-center justify-between px-8 py-6">
          <Link
            href="/"
            className="font-headline text-2xl font-bold tracking-tighter"
            style={{ color: 'var(--color-on-surface)' }}
          >
            CURATOR
          </Link>
          <div className="font-headline hidden items-center space-x-12 text-lg tracking-tight md:flex">
            {[
              { label: 'Archive', href: '/archive' },
              { label: 'Exhibitions', href: '/impact' },
              { label: 'Studio', href: '/studio' },
              { label: 'Journal', href: '/archive' },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="transition-colors"
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
            className="font-headline px-6 py-2 transition-opacity hover:opacity-80"
            style={{
              backgroundColor: 'var(--color-primary-container)',
              color: 'var(--color-on-primary)',
              borderRadius: 'var(--radius-lg)',
            }}
          >
            Contact
          </Link>
        </div>
      </nav>

      <main className="resume-bg mx-auto max-w-4xl px-6 pt-40 pb-20 md:px-0">
        {/* ── Header ── */}
        <header
          className="mb-24 flex flex-col gap-8 pb-12 md:flex-row md:items-end md:justify-between"
          style={{ borderBottom: '1px solid rgba(224,191,191,0.3)' }}
        >
          <div className="space-y-4">
            <h1
              className="font-headline leading-[0.9] font-bold tracking-tighter"
              style={{
                fontSize: 'clamp(3.5rem, 8vw, 6rem)',
                color: 'var(--color-on-surface)',
              }}
            >
              Technical
              <br />
              Resume
            </h1>
            <p
              className="font-headline text-xl italic"
              style={{ color: 'var(--color-primary)' }}
            >
              Senior Creative Developer & Systems Architect
            </p>
          </div>
          <div
            className="font-label flex flex-col items-start gap-2 text-sm tracking-widest uppercase md:items-end"
            style={{ color: 'var(--color-on-surface-variant)' }}
          >
            <span>London, United Kingdom</span>
            <a
              href="mailto:curator@editorial.io"
              className="transition-colors"
              style={{ color: 'var(--color-on-surface-variant)' }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = 'var(--color-primary)')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color =
                  'var(--color-on-surface-variant)')
              }
            >
              curator@editorial.io
            </a>
            <a
              href="#"
              className="transition-colors"
              style={{ color: 'var(--color-on-surface-variant)' }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = 'var(--color-primary)')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color =
                  'var(--color-on-surface-variant)')
              }
            >
              v.curator.io
            </a>
          </div>
        </header>

        {/* ── Core Focus ── */}
        <section className="mb-24 grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="md:col-span-1">
            <h2
              className="font-label text-xs font-bold tracking-[0.2em] uppercase"
              style={{ color: 'rgba(88,65,65,0.6)' }}
            >
              Core Focus
            </h2>
          </div>
          <div className="md:col-span-2">
            <p
              className="font-headline leading-snug"
              style={{
                fontSize: 'clamp(1.3rem, 3vw, 1.8rem)',
                color: 'var(--color-on-surface)',
              }}
            >
              Bridging the gap between{' '}
              <em style={{ color: 'var(--color-primary)' }}>
                architectural rigor
              </em>{' '}
              and{' '}
              <em style={{ color: 'var(--color-primary)' }}>
                digital fluidity
              </em>
              . I design systems that prioritize performance without sacrificing
              the tactile intimacy of fine editorial design.
            </p>
          </div>
        </section>

        {/* ── Technical Arsenal ── */}
        <section className="mb-24 grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="md:col-span-1">
            <h2
              className="font-label text-xs font-bold tracking-[0.2em] uppercase"
              style={{ color: 'rgba(88,65,65,0.6)' }}
            >
              Technical Arsenal
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2 md:col-span-2">
            {arsenal.map((group) => (
              <div key={group.category}>
                <h3
                  className="font-headline mb-4 text-xl"
                  style={{ color: 'var(--color-primary)' }}
                >
                  {group.category}
                </h3>
                <ul
                  className="font-label space-y-2 text-sm"
                  style={{ color: 'var(--color-on-surface-variant)' }}
                >
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span
                        className="h-1.5 w-1.5 flex-shrink-0 rounded-full"
                        style={{
                          backgroundColor: 'var(--color-outline-variant)',
                        }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── Experience ── */}
        <section className="mb-24 grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="md:col-span-1">
            <h2
              className="font-label text-xs font-bold tracking-[0.2em] uppercase"
              style={{ color: 'rgba(88,65,65,0.6)' }}
            >
              Experience
            </h2>
          </div>
          <div className="space-y-16 md:col-span-2">
            {experience.map((exp) => (
              <article key={exp.company}>
                <div className="mb-4 flex items-baseline justify-between">
                  <h3
                    className="font-headline text-2xl font-bold"
                    style={{ color: 'var(--color-on-surface)' }}
                  >
                    {exp.company}
                  </h3>
                  <span
                    className="font-label text-xs tracking-widest"
                    style={{ color: 'rgba(88,65,65,0.6)' }}
                  >
                    {exp.period}
                  </span>
                </div>
                <p
                  className="font-headline mb-6 italic"
                  style={{ color: 'var(--color-primary)' }}
                >
                  {exp.role}
                </p>
                <ul
                  className="font-body space-y-4 leading-relaxed"
                  style={{ color: 'var(--color-on-surface-variant)' }}
                >
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="relative pl-6">
                      <span
                        className="absolute top-3 left-0 h-px w-4"
                        style={{ backgroundColor: 'var(--color-primary)' }}
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* ── Selected Works ── */}
        <section className="mb-24 grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="md:col-span-1">
            <h2
              className="font-label text-xs font-bold tracking-[0.2em] uppercase"
              style={{ color: 'rgba(88,65,65,0.6)' }}
            >
              Selected Works
            </h2>
          </div>
          <div className="space-y-12 md:col-span-2">
            {selectedWorks.map((work) => (
              <div key={work.title} className="group cursor-pointer">
                <div
                  className="mb-6 overflow-hidden"
                  style={{
                    backgroundColor: 'var(--color-surface-container-low)',
                    borderRadius: 'var(--radius-lg)',
                    boxShadow: '0 20px 80px rgba(88,65,65,0.05)',
                  }}
                >
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
                    style={{
                      height: '320px',
                      transform: 'scale(1.05)',
                      transition: 'transform 0.7s, filter 0.7s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                    }}
                  />
                </div>
                <div className="flex items-start justify-between">
                  <div>
                    <h4
                      className="font-headline text-xl font-bold transition-colors"
                      style={{ color: 'var(--color-on-surface)' }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = 'var(--color-primary)')
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color =
                          'var(--color-on-surface)')
                      }
                    >
                      {work.title}
                    </h4>
                    <p
                      className="font-body mt-1 text-sm"
                      style={{ color: 'var(--color-on-surface-variant)' }}
                    >
                      {work.desc}
                    </p>
                  </div>
                  <Link
                    href={work.href}
                    className="material-symbols-outlined transition-transform group-hover:translate-x-1"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    arrow_outward
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer
        className="w-full"
        style={{
          backgroundColor: 'var(--color-surface-container-low)',
          borderRadius: '2rem 2rem 0 0',
          marginTop: '5rem',
        }}
      >
        <div className="font-body mx-auto grid max-w-[1920px] grid-cols-1 gap-12 px-12 py-24 text-sm font-light tracking-wide md:grid-cols-4">
          <div className="md:col-span-2">
            <span
              className="font-headline mb-6 block text-3xl italic"
              style={{ color: 'var(--color-on-surface)' }}
            >
              Curator
            </span>
            <p
              className="max-w-xs leading-loose"
              style={{ color: 'var(--color-on-surface-variant)' }}
            >
              Dedicated to the meticulous craft of digital experience. We build
              for those who see the screen as a canvas for architecture.
            </p>
          </div>
          <div>
            <h5
              className="mb-6 font-semibold"
              style={{ color: 'var(--color-on-surface)' }}
            >
              Philosophy
            </h5>
            <ul className="space-y-4">
              {['Principles', 'Process', 'Manifesto'].map((item) => (
                <li key={item}>
                  <Link
                    href="/process"
                    className="transition-colors"
                    style={{ color: 'var(--color-on-surface-variant)' }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color =
                        'var(--color-primary-container)')
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color =
                        'var(--color-on-surface-variant)')
                    }
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5
              className="mb-6 font-semibold"
              style={{ color: 'var(--color-on-surface)' }}
            >
              Social
            </h5>
            <ul className="space-y-4">
              {['Instagram', 'LinkedIn', 'Twitter'].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="transition-colors"
                    style={{ color: 'var(--color-on-surface-variant)' }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color =
                        'var(--color-primary-container)')
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color =
                        'var(--color-on-surface-variant)')
                    }
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div
          className="font-body px-12 pb-12 text-center text-xs tracking-widest uppercase"
          style={{ color: 'rgba(88,65,65,0.5)' }}
        >
          © 2024 Editorial Curator. Built for the architectural mind.
        </div>
      </footer>
    </>
  );
}
