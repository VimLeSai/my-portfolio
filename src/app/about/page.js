import Navbar from '@/components/nav';
import Footer from '@/components/footer';
import Watermark from '@/components/ui/Watermark';
import Button from '@/components/ui/Button';

export const metadata = {
  title: 'About — Portfolio',
  description: 'About Vimal Desai, Senior Full Stack Engineer.',
};

const skills = [
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Go', 'Python', 'Java Spring', 'GraphQL'],
  },
  {
    category: 'Infrastructure',
    items: ['AWS', 'Docker', 'Kubernetes', 'PostgreSQL', 'Redis'],
  },
  {
    category: 'Practices',
    items: ['DDD', 'Event Sourcing', 'CQRS', 'TDD', 'CI/CD'],
  },
];

const testimonials = [
  {
    quote:
      'Vimal possesses the rare ability to see the forest and the trees simultaneously. His code is as elegant as his architectural diagrams.',
    author: 'Sarah Chen',
    role: 'CTO, Apex Products',
  },
  {
    quote:
      "The monolithic scaling project he led was a masterclass in engineering discipline. We haven't seen a single crash in 18 months.",
    author: 'Marcus Thorne',
    role: 'Founder, CloudScale',
  },
  {
    quote:
      "Vimal didn't just join our team; he elevated our entire engineering culture through mentorship and rigorous standards.",
    author: 'Elena Rodriguez',
    role: 'VP Engineering, Finova',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--color-paper)] selection:bg-[var(--color-accent)] selection:text-[var(--color-paper)]">
      <Navbar brandName="Vimal Desai" ctaLabel="Contact" ctaHref="/contact" />
      <Watermark />

      <main className="mx-auto max-w-6xl px-8 pt-48 pb-32">
        {/* ── Hero ── */}
        <section className="mb-40 max-w-4xl">
          <p className="animate-fade-up mb-8 font-mono text-[10px] tracking-[0.4em] text-[var(--color-accent)] uppercase">
            About the Engineer
          </p>
          <h1 className="animate-fade-up mb-12 font-serif text-6xl leading-[0.9] tracking-tight text-[var(--color-ink)] delay-100 md:text-8xl">
            9+ years of architectural <br />
            <span className="italic">clarity & execution.</span>
          </h1>
          <div className="animate-fade-up grid grid-cols-1 gap-12 delay-200 md:grid-cols-2">
            <p className="font-sans text-lg leading-relaxed text-[var(--color-muted)]">
              As a Lead Engineer, I specialize in transforming complex business
              requirements into elegant, scalable technical architectures. My
              journey has been defined by a commitment to code quality, and a
              deep respect for user-centric design.
            </p>
            <p className="font-sans text-lg leading-relaxed text-[var(--color-muted)]">
              Currently leading high-performance teams to deliver robust
              enterprise solutions that bridge the gap between heavy-duty
              backends and fluid, tactile frontends.
            </p>
          </div>
        </section>

        {/* ── Core Values ── */}
        <section className="mb-40 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: 'hub',
              label: 'System Thinking',
              desc: 'Designing for scalability and zero-day one-offs.',
            },
            {
              icon: 'edit',
              label: 'Clean Execution',
              desc: 'Writing purposeful, composable, and tidy logic.',
            },
            {
              icon: 'group',
              label: 'Lead Mentorship',
              desc: 'Coaching developers and elevating team standards.',
            },
            {
              icon: 'smart_toy',
              label: 'AI Integration',
              desc: 'Leveraging modern LLM tools to accelerate workflows.',
            },
          ].map((item, i) => (
            <div
              key={item.label}
              className="group animate-fade-up border border-[var(--color-rule)] bg-[var(--color-paper)] p-8 transition-colors duration-500 hover:bg-[var(--color-ink)]"
              style={{ animationDelay: `${300 + i * 100}ms` }}
            >
              <span className="material-symbols-outlined mb-6 block text-2xl text-[var(--color-accent)] transition-colors group-hover:text-[var(--color-paper)]">
                {item.icon}
              </span>
              <h3 className="mb-3 font-serif text-xl text-[var(--color-ink)] transition-colors group-hover:text-[var(--color-paper)]">
                {item.label}
              </h3>
              <p className="font-sans text-sm text-[var(--color-muted)] transition-colors group-hover:text-[var(--color-muted)]/60">
                {item.desc}
              </p>
            </div>
          ))}
        </section>

        {/* ── Testimonials ── */}
        <section className="mb-40">
          <div className="mb-16 flex items-end justify-between">
            <h2 className="font-serif text-5xl text-[var(--color-ink)]">
              Recognition
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <div
                key={t.author}
                className="animate-fade-up"
                style={{ animationDelay: `${500 + i * 150}ms` }}
              >
                <p className="mb-8 font-serif text-2xl leading-snug text-[var(--color-ink)] italic">
                  "{t.quote}"
                </p>
                <div>
                  <p className="font-sans text-sm font-bold text-[var(--color-ink)]">
                    {t.author}
                  </p>
                  <p className="font-mono text-[10px] tracking-widest text-[var(--color-muted)] uppercase">
                    {t.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-[var(--color-rule)] pt-24 text-center">
          <Button href="/contact" size="lg" variant="primary">
            Start a Conversation
          </Button>
        </div>
      </main>
      <Footer brandName="Vimal Desai" />
    </div>
  );
}
