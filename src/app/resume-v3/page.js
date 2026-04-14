'use client';
import Link from 'next/link';

// export const metadata = {
//   title: "Technical Resume V3 — Architect Portfolio | Variation II: Monograph",
//   description:
//     "Senior Full Stack Architect. Systems Design — Cloud Infrastructure — Distributed Leadership.",
// };

const specializations = [
  {
    num: '01',
    label: 'Core Systems',
    items: [
      { name: 'Rust & Go', dot: 1.0 },
      { name: 'TypeScript (Node)', dot: 0.6 },
      { name: 'PostgreSQL Ops', dot: 1.0 },
      { name: 'Event Sourcing', dot: 0.4 },
    ],
  },
  {
    num: '02',
    label: 'Infrastructure',
    items: [
      { name: 'Kubernetes K8s', dot: 1.0 },
      { name: 'Terraform HCL', dot: 1.0 },
      { name: 'AWS EKS / Lambda', dot: 0.8 },
      { name: 'CI/CD Hardening', dot: 0.5 },
    ],
  },
  {
    num: '03',
    label: 'Interface',
    items: [
      { name: 'React & Next.js', dot: 1.0 },
      { name: 'Design Systems', dot: 0.7 },
      { name: 'WebAssembly', dot: 0.4 },
      { name: 'Canvas APIs', dot: 0.3 },
    ],
  },
];

const tenure = [
  {
    years: '2021—Present',
    title: 'Principal Engineering Lead',
    company: 'TechMatrix Global — London',
    desc: 'Spearheading the core infrastructure team in migrating a legacy monolithic payment gateway into a mesh of high-performance Go microservices. This transition resulted in a 400% increase in peak transaction volume while reducing operational overhead by 30%. I focus on the "Human-Ops" aspect—building internal tooling that empowers developers to ship code safely.',
    tags: ['Leadership', 'Go', 'Cloud Native'],
  },
  {
    years: '2018—2021',
    title: 'Senior Full Stack Architect',
    company: 'Invenia Analytics',
    desc: "Conceptualized and developed the 'Nexus' data visualization dashboard, a real-time platform handling billions of environmental data points. Bridged the gap between heavy-duty backend Python processing and high-performance React frontend rendering using WebWorkers and custom Canvas engines.",
    tags: ['Data Viz', 'React', 'Python'],
  },
];

const projects = [
  {
    title: 'Project Aether',
    desc: 'A decentralized identity protocol built on top of Zero-Knowledge proofs. This system allows for trustless verification of user credentials without exposing underlying sensitive data—a masterpiece of cryptographic engineering.',
    cta: 'Case Study View',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
    offset: false,
  },
  {
    title: 'Nebula Compiler',
    desc: 'A proprietary DSL and compiler optimized for low-latency financial execution. Written in Rust, it achieves sub-microsecond parsing times while maintaining strict type safety for mission-critical trading algorithms.',
    cta: 'Repository Details',
    image:
      'https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=800&q=80',
    offset: true,
  },
];

export default function ResumeV3Page() {
  return (
    <>
      {/* Drop-cap + editorial grid styles */}
      <style>{`
        .drop-cap::first-letter {
          float: left;
          font-family: 'Newsreader', serif;
          font-size: 4.5rem;
          line-height: 0.8;
          padding-top: 4px;
          padding-right: 12px;
          padding-left: 3px;
          color: var(--color-primary-container);
        }
        .editorial-grid {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 5rem;
        }
        @media (max-width: 768px) {
          .editorial-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
        }
      `}</style>

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
          <div className="font-headline hidden items-center space-x-10 tracking-tight md:flex">
            {[
              { label: 'Experience', href: '/experience', active: true },
              { label: 'Arsenal', href: '/stack', active: false },
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
            className="font-label px-6 py-2 text-xs tracking-widest uppercase transition-all hover:opacity-90"
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
        {/* ── Hero ── */}
        <header className="relative mb-32">
          <div className="flex flex-col justify-between gap-12 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <h1
                className="font-headline mb-8 leading-[0.9] tracking-tighter"
                style={{
                  fontSize: 'clamp(3.5rem, 7vw, 6rem)',
                  color: 'var(--color-primary)',
                }}
              >
                Senior Full Stack
                <br />
                Architect.
              </h1>
              <p
                className="font-label text-xs font-bold tracking-[0.3em] uppercase"
                style={{ color: 'var(--color-on-surface-variant)' }}
              >
                Systems Design — Cloud Infrastructure — Distributed Leadership
              </p>
            </div>
            <div className="hidden pb-4 md:block">
              <div
                className="mb-4 h-24 w-1 opacity-20"
                style={{ backgroundColor: 'var(--color-primary)' }}
              />
              <span
                className="font-headline text-2xl italic"
                style={{ color: 'rgba(87,0,19,0.6)' }}
              >
                Variation II: Monograph
              </span>
            </div>
          </div>
        </header>

        {/* ── Narrative: editorial-grid ── */}
        <section className="editorial-grid mb-40 items-start">
          {/* Sticky left */}
          <div className="sticky top-32">
            <h2
              className="font-label mb-4 flex items-center gap-3 text-[0.6875rem] tracking-[0.2em] uppercase"
              style={{ color: 'var(--color-secondary)' }}
            >
              <span
                className="h-px w-8 opacity-30"
                style={{ backgroundColor: 'var(--color-secondary)' }}
              />
              The Narrative
            </h2>
            <div className="mt-8">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
                alt="Portrait"
                className="mb-4 w-full object-cover contrast-125 grayscale"
                style={{ aspectRatio: '4/5', borderRadius: 'var(--radius-lg)' }}
              />
              <p
                className="font-headline italic"
                style={{ color: 'var(--color-on-surface-variant)' }}
              >
                "Engineering is not just code; it is the silent architecture of
                modern human interaction."
              </p>
            </div>
          </div>

          {/* Right: body content */}
          <div className="pt-12">
            <p
              className="font-headline drop-cap mb-10 text-3xl leading-snug"
              style={{ color: 'var(--color-on-surface)' }}
            >
              Over the last decade, I have treated code as a tactile medium. My
              journey began in the monoliths of finance and evolved into the
              fluid, serverless landscapes of modern SaaS. Leading teams isn't
              about management; it's about curating an environment where
              technical debt is handled with the same respect as a heritage
              building's restoration.
            </p>
            <p
              className="mb-8 text-lg leading-relaxed"
              style={{ color: 'var(--color-on-surface-variant)' }}
            >
              I believe in the beauty of a well-formed API and the resilience of
              a distributed system that anticipates failure. My work sits at the
              intersection of extreme scalability and developer
              ergonomics—ensuring that the machines run fast and the humans
              remain happy.
            </p>

            {/* Philosophy box */}
            <div
              className="relative flex flex-col gap-6 overflow-hidden p-12"
              style={{
                backgroundColor: 'var(--color-surface-container-low)',
                borderRadius: 'var(--radius-xl)',
              }}
            >
              <div className="absolute top-0 right-0 p-4 opacity-5" aria-hidden>
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: '6rem' }}
                >
                  architecture
                </span>
              </div>
              <h3
                className="font-headline text-2xl"
                style={{ color: 'var(--color-primary)' }}
              >
                Philosophy of Scale
              </h3>
              <p
                className="font-body text-sm leading-relaxed italic"
                style={{ color: 'var(--color-on-surface-variant)' }}
              >
                "If a system cannot be explained in a single sketch, it is too
                complex. True senior engineering is the art of subtraction."
              </p>
            </div>
          </div>
        </section>

        {/* ── The Arsenal ── */}
        <section className="mb-40">
          <div className="mb-16">
            <h2
              className="font-label mb-4 flex items-center gap-3 text-[0.6875rem] tracking-[0.2em] uppercase"
              style={{ color: 'var(--color-secondary)' }}
            >
              <span
                className="h-px w-8 opacity-30"
                style={{ backgroundColor: 'var(--color-secondary)' }}
              />
              The Arsenal
            </h2>
            <h3
              className="font-headline text-4xl"
              style={{ color: 'var(--color-primary)' }}
            >
              Technical Specializations
            </h3>
          </div>

          {/* 3-col grid with thin dividers via gap-px on outline-variant bg */}
          <div
            className="grid grid-cols-1 md:grid-cols-3"
            style={{ gap: '1px', backgroundColor: 'rgba(224,191,191,0.2)' }}
          >
            {specializations.map((spec, i) => (
              <div
                key={spec.num}
                className="py-12"
                style={{
                  backgroundColor: 'var(--color-surface)',
                  paddingLeft: i === 0 ? '0' : '3rem',
                  paddingRight: i === 2 ? '0' : '3rem',
                  borderRight:
                    i < 2 ? '1px solid rgba(224,191,191,0.2)' : 'none',
                }}
              >
                <span
                  className="font-label mb-6 block text-[0.6rem] tracking-widest uppercase"
                  style={{ color: 'var(--color-secondary)' }}
                >
                  {spec.num}. {spec.label}
                </span>
                <ul className="space-y-4">
                  {spec.items.map((item) => (
                    <li
                      key={item.name}
                      className="group flex items-center justify-between"
                    >
                      <span
                        className="font-headline group-hover:text-primary text-xl transition-colors"
                        style={{ color: 'var(--color-on-surface)' }}
                      >
                        {item.name}
                      </span>
                      <span
                        className="h-2 w-2 flex-shrink-0 rounded-full"
                        style={{
                          backgroundColor: 'var(--color-secondary)',
                          opacity: item.dot,
                        }}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── Tenure of Influence ── */}
        <section className="mb-40">
          <div className="mb-16">
            <h2
              className="font-label mb-4 flex items-center gap-3 text-[0.6875rem] tracking-[0.2em] uppercase"
              style={{ color: 'var(--color-secondary)' }}
            >
              <span
                className="h-px w-8 opacity-30"
                style={{ backgroundColor: 'var(--color-secondary)' }}
              />
              The Chronicles
            </h2>
            <h3
              className="font-headline text-4xl"
              style={{ color: 'var(--color-primary)' }}
            >
              Tenure of Influence
            </h3>
          </div>

          <div className="space-y-32">
            {tenure.map((role) => (
              <div
                key={role.title}
                className="group flex flex-col gap-12 md:flex-row"
              >
                {/* Faded year — animates to primary on hover */}
                <div className="md:w-1/4">
                  <span
                    className="font-headline text-5xl italic transition-all duration-700"
                    style={{ color: 'rgba(28,28,24,0.2)' }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = 'var(--color-primary)')
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = 'rgba(28,28,24,0.2)')
                    }
                  >
                    {role.years}
                  </span>
                </div>

                {/* Content */}
                <div className="md:w-3/4">
                  <div className="mb-6">
                    <h4
                      className="font-headline mb-2 text-3xl"
                      style={{ color: 'var(--color-on-surface)' }}
                    >
                      {role.title}
                    </h4>
                    <p
                      className="font-label text-[0.6875rem] font-bold tracking-widest uppercase"
                      style={{ color: 'var(--color-secondary)' }}
                    >
                      {role.company}
                    </p>
                  </div>
                  <p
                    className="mb-8 max-w-2xl text-lg leading-relaxed"
                    style={{ color: 'var(--color-on-surface-variant)' }}
                  >
                    {role.desc}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {role.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-label px-4 py-1.5 text-[0.65rem] font-semibold tracking-wider uppercase"
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
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Architectural Prototypes ── */}
        <section className="mb-40">
          <div className="mb-16">
            <h2
              className="font-label mb-4 flex items-center gap-3 text-[0.6875rem] tracking-[0.2em] uppercase"
              style={{ color: 'var(--color-secondary)' }}
            >
              <span
                className="h-px w-8 opacity-30"
                style={{ backgroundColor: 'var(--color-secondary)' }}
              />
              Selected Projects
            </h2>
            <h3
              className="font-headline text-4xl"
              style={{ color: 'var(--color-primary)' }}
            >
              Architectural Prototypes
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-20 md:grid-cols-2">
            {Object.values(projects).map((p) => (
              <div
                key={p.title}
                className={`flex flex-col gap-8 ${p.offset ? 'md:mt-24' : ''}`}
              >
                {/* Framed image — 16px surface border overlay */}
                <div
                  className="group relative overflow-hidden"
                  style={{ borderRadius: 'var(--radius-lg)' }}
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    style={{ aspectRatio: '16/9' }}
                  />
                  {/* Inner frame */}
                  <div
                    className="pointer-events-none absolute inset-0"
                    style={{ border: '16px solid var(--color-surface)' }}
                  />
                  {/* Hover overlay */}
                  <div
                    className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{ backgroundColor: 'rgba(87,0,19,0.2)' }}
                  />
                </div>

                <div>
                  <h4
                    className="font-headline mb-3 text-2xl"
                    style={{ color: 'var(--color-on-surface)' }}
                  >
                    {p.title}
                  </h4>
                  <p
                    className="mb-6 leading-relaxed"
                    style={{ color: 'var(--color-on-surface-variant)' }}
                  >
                    {p.desc}
                  </p>
                  <Link
                    href="#"
                    className="font-label inline-flex items-center gap-2 text-[0.65rem] font-bold tracking-widest uppercase transition-transform hover:translate-x-2"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    {p.cta}
                    <span className="material-symbols-outlined text-sm">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Dark CTA with dot-grid pattern ── */}
        <section
          className="relative flex flex-col items-center overflow-hidden px-12 py-24 text-center"
          style={{ backgroundColor: '#1c1c18', borderRadius: '1rem' }}
        >
          {/* Dot-grid overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                'radial-gradient(#570013 0.5px, transparent 0.5px)',
              backgroundSize: '24px 24px',
            }}
            aria-hidden
          />

          <div className="relative z-10 max-w-2xl">
            <h2
              className="font-headline mb-8"
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                color: 'var(--color-surface)',
              }}
            >
              Ready to architect the next era of digital systems?
            </h2>
            <p
              className="font-body mb-12 leading-relaxed italic"
              style={{ color: 'rgba(224,218,210,0.6)' }}
            >
              Currently accepting select consulting engagements for Q3 2024 and
              beyond. Let us discuss the future of your infrastructure.
            </p>
            <div className="flex flex-col justify-center gap-6 md:flex-row">
              <Link
                href="/contact"
                className="font-label px-10 py-4 text-xs tracking-widest uppercase shadow-xl transition-all hover:scale-105 active:scale-95"
                style={{
                  backgroundColor: 'var(--color-primary-container)',
                  color: 'var(--color-on-primary)',
                  borderRadius: 'var(--radius-lg)',
                }}
              >
                Initiate Contact
              </Link>
              <button
                className="font-label px-10 py-4 text-xs tracking-widest uppercase transition-all"
                style={{
                  backgroundColor: 'transparent',
                  color: 'var(--color-surface-bright)',
                  border: '1px solid rgba(252,249,243,0.2)',
                  borderRadius: 'var(--radius-lg)',
                }}
              >
                Download Portfolio PDF
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer
        className="w-full py-12"
        style={{ backgroundColor: 'var(--color-surface-container-low)' }}
      >
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-12 md:flex-row">
          <p
            className="font-body text-[0.6875rem] tracking-[0.1em] uppercase"
            style={{ color: '#6b6456' }}
          >
            © 2024 Senior Full Stack Architect. All rights reserved.
          </p>
          <div className="flex gap-8">
            {['LinkedIn', 'GitHub', 'StackOverflow', 'Email'].map((item) => (
              <Link
                key={item}
                href="#"
                className="font-body text-[0.6875rem] tracking-[0.1em] uppercase underline-offset-4 transition-all hover:underline"
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
