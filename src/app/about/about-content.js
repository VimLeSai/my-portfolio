'use client';

import Navbar from '@/components/nav';
import Footer from '@/components/footer';
import Watermark from '@/components/ui/Watermark';
import Reveal, { RevealItem, RevealStagger } from '@/components/ui/reveal';
import InkBreak from '@/app/home/ink-break';
import { profile } from '@/lib/profile';
import { testimonials } from '@/lib/testimonials';
import Link from 'next/link';

const featuredTestimonials = testimonials
  .filter((t) => t.featured && t.enabled)
  .slice(0, 3);

const traits = [
  {
    n: '01',
    title: 'Own the seam',
    desc: 'Frontend alone is half a product. I pull backend when the seam is where things break.',
  },
  {
    n: '02',
    title: 'Ship under constraint',
    desc: 'Small teams, legacy code, tight deadlines — still land something a user can click.',
  },
  {
    n: '03',
    title: 'Raise the floor',
    desc: 'Reviews, pairing, and patterns so the next person moves faster than I did.',
  },
  {
    n: '04',
    title: 'AI as a tool',
    desc: 'LLMs for boilerplate velocity. Judgment stays on architecture and product calls.',
  },
];

const bioParts = profile.bio.long.split('\n\n').filter(Boolean);

export default function AboutContent() {
  return (
    <div
      className="relative min-h-screen"
      style={{ backgroundColor: 'var(--color-surface)' }}
    >
      <Navbar
        ctaLabel="Get in Touch"
        ctaHref="/contact"
      />
      <Watermark text="VimLeSai" />

      <main>
        <section className="hero-atmosphere mx-auto max-w-6xl px-8 pt-40 pb-24 md:pt-48 md:pb-32">
          <Reveal>
            <p className="font-label text-primary-container mb-6 text-[0.65rem] tracking-[0.22em] uppercase">
              About
            </p>
            <h1
              className="font-headline mb-10 max-w-4xl leading-[0.95] tracking-tight"
              style={{ fontSize: 'clamp(2.75rem, 7vw, 5.5rem)' }}
            >
              Engineer who started in UI
              <br />
              <span className="text-primary-container italic">
                and kept pulling the rest.
              </span>
            </h1>
          </Reveal>

          <RevealStagger
            className="grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2 md:gap-12"
            stagger={0.1}
          >
            {bioParts.slice(0, 2).map((para) => (
              <RevealItem key={para.slice(0, 24)}>
                <p className="text-on-surface-variant text-lg leading-relaxed">
                  {para}
                </p>
              </RevealItem>
            ))}
          </RevealStagger>

          {bioParts[2] && (
            <Reveal delay={0.15} className="mt-8 max-w-4xl">
              <p className="text-on-surface-variant text-lg leading-relaxed">
                {bioParts.slice(2).join(' ')}
              </p>
            </Reveal>
          )}
        </section>

        <section className="bg-surface-container-low border-outline-variant/15 border-y py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-8">
            <Reveal className="mb-14">
              <p className="font-label text-outline mb-3 text-sm tracking-[0.2em] uppercase">
                How I show up
              </p>
              <h2 className="font-headline text-3xl md:text-4xl">
                Habits, not buzzwords
              </h2>
            </Reveal>

            <RevealStagger
              className="grid grid-cols-1 gap-0 sm:grid-cols-2"
              stagger={0.08}
            >
              {traits.map((t) => (
                <RevealItem
                  key={t.n}
                  className="border-outline-variant/25 border-t px-1 py-8 sm:odd:pr-10 sm:even:pl-10"
                >
                  <span className="font-label text-primary/45 mb-3 block text-[0.65rem] tracking-[0.2em]">
                    {t.n}
                  </span>
                  <h3 className="font-headline mb-2 text-xl">{t.title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    {t.desc}
                  </p>
                </RevealItem>
              ))}
            </RevealStagger>
          </div>
        </section>

        <InkBreak
          eyebrow="Currently"
          headline={
            <>
              {profile.location.display}
              <br />
              Remote-first.
            </>
          }
          body={
            profile.workPreferences.remoteNote ||
            'Open to full-time and select contract work. Prefer remote with solid timezone overlap.'
          }
          ctaLabel="See experience"
          ctaHref="/experience"
          imageSrc="/assets/hero-image.png"
        />

        <section className="mx-auto max-w-6xl px-8 py-24 md:py-32">
          <Reveal className="mb-14">
            <p className="font-label text-outline mb-3 text-sm tracking-[0.2em] uppercase">
              Recognition
            </p>
            <h2 className="font-headline text-3xl md:text-4xl">
              Notes from people I&apos;ve worked with
            </h2>
          </Reveal>

          <RevealStagger
            className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-10"
            stagger={0.1}
          >
            {featuredTestimonials.map((t) => (
              <RevealItem
                key={t.id}
                className="border-outline-variant/20 border-t pt-8"
              >
                <p className="font-headline text-on-surface mb-8 text-xl leading-snug italic">
                  &ldquo;{t.shortReview}&rdquo;
                </p>
                <p className="font-label text-xs font-bold tracking-widest uppercase">
                  {t.reviewer.name}
                </p>
                <p className="font-label text-outline mt-1 text-[10px] tracking-wider uppercase">
                  {t.reviewer.title}
                  {t.reviewer.company ? `, ${t.reviewer.company}` : ''}
                </p>
              </RevealItem>
            ))}
          </RevealStagger>

          <Reveal className="mt-20 border-outline-variant/25 border-t pt-16 text-center">
            <Link
              href="/contact"
              className="font-label inline-flex items-center gap-2 bg-[var(--color-primary-container)] px-8 py-4 text-sm tracking-wide text-[var(--color-on-primary)] transition-transform hover:-translate-y-0.5"
            >
              Start a conversation
              <span aria-hidden>→</span>
            </Link>
          </Reveal>
        </section>
      </main>

      <Footer
        tagline="Full-stack engineer. Ten years building products that ship and stay up."
      />
      <div className="site-grain" aria-hidden="true" />
    </div>
  );
}
