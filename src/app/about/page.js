import Navbar from '@/components/nav';
import Footer from '@/components/footer';
import Watermark from '@/components/ui/Watermark';
import Button from '@/components/ui/Button';
import ValueCard from './value-card';
import { profile } from '@/lib/profile';
import { testimonials } from '@/lib/testimonials';

export const metadata = {
  title: 'About Vimal Desai — Senior Full Stack Engineer',
  description:
    'Learn more about Vimal Desai, a Senior Full Stack Engineer from India with a passion for clean execution, system thinking, and architectural clarity.',
};

/* Pick 3 featured testimonials from the real data */
const featuredTestimonials = testimonials
  .filter((t) => t.featured && t.enabled)
  .slice(0, 3);

const coreValues = [
  {
    icon: 'hub',
    label: 'System Thinking',
    desc: 'Designing for scalability, reusability, and maintainability from day one.',
  },
  {
    icon: 'edit',
    label: 'Clean Execution',
    desc: 'Writing purposeful, composable logic with testing as a core practice.',
  },
  {
    icon: 'group',
    label: 'Lead Mentorship',
    desc: 'Coached 40+ developers and led teams of up to 20 across 7+ industries.',
  },
  {
    icon: 'smart_toy',
    label: 'AI Integration',
    desc: 'Doubled sprint velocity from 16 to 40+ story points using AI workflows.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-surface)' }}>
      <Navbar brandName="Vimal Desai" ctaLabel="Get in Touch" ctaHref="/contact" />
      <Watermark />

      <main className="mx-auto max-w-6xl px-8 pt-48 pb-32">
        {/* ── Hero ── */}
        <section className="mb-40 max-w-4xl">
          <p
            className="mb-8 font-mono text-[10px] tracking-[0.4em] uppercase"
            style={{ color: 'var(--color-primary-container)' }}
          >
            About the Engineer
          </p>
          <h1
            className="mb-12 font-serif text-6xl leading-[0.9] tracking-tight md:text-8xl"
            style={{ color: 'var(--color-on-surface)' }}
          >
            {profile.bio.short.split('.')[0]}.
            <br />
            <span className="italic" style={{ color: 'var(--color-primary-container)' }}>
              Clarity &amp; execution.
            </span>
          </h1>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <p
              className="font-sans text-lg leading-relaxed"
              style={{ color: 'var(--color-on-surface-variant)' }}
            >
              {profile.bio.long.split('\n\n')[0]}
            </p>
            <p
              className="font-sans text-lg leading-relaxed"
              style={{ color: 'var(--color-on-surface-variant)' }}
            >
              {profile.bio.long.split('\n\n')[1]}
            </p>
          </div>
        </section>

        {/* ── Core Values ── */}
        <section className="mb-40 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {coreValues.map((item) => (
            <ValueCard
              key={item.label}
              icon={item.icon}
              label={item.label}
              desc={item.desc}
            />
          ))}
        </section>

        {/* ── Recognition (Real Testimonials) ── */}
        <section className="mb-40">
          <div className="mb-16 flex items-end justify-between">
            <h2
              className="font-serif text-5xl"
              style={{ color: 'var(--color-on-surface)' }}
            >
              Recognition
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {featuredTestimonials.map((t) => (
              <div key={t.id}>
                <p
                  className="mb-8 font-serif text-2xl leading-snug italic"
                  style={{ color: 'var(--color-on-surface)' }}
                >
                  &ldquo;{t.shortReview}&rdquo;
                </p>
                <div>
                  <p
                    className="font-sans text-sm font-bold"
                    style={{ color: 'var(--color-on-surface)' }}
                  >
                    {t.reviewer.name}
                  </p>
                  <p
                    className="font-mono text-[10px] tracking-widest uppercase"
                    style={{ color: 'var(--color-on-surface-variant)' }}
                  >
                    {t.reviewer.title}
                    {t.reviewer.company ? `, ${t.reviewer.company}` : ''}
                    {' · '}
                    {t.platform === 'upwork' ? 'Upwork' : 'LinkedIn'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div
          className="pt-24 text-center"
          style={{ borderTop: '1px solid var(--color-outline-variant)' }}
        >
          <Button href="/contact" size="lg" variant="primary">
            Start a Conversation
          </Button>
        </div>
      </main>
      <Footer
        brandName="Vimal Desai"
        tagline="Transforming complex business requirements into elegant, scalable architectures."
      />
    </div>
  );
}
