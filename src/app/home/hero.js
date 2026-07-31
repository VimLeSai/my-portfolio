'use client';

import Link from 'next/link';

const Hero = () => {
  return (
    <>
      <style>{`
        @keyframes vd-fade-up {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes vd-slide-up {
          from { opacity: 0; transform: translateY(105%); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes vd-fade-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes vd-scroll-pulse {
          0%, 100% { opacity: 0.35; transform: translateY(0); }
          50%       { opacity: 1;    transform: translateY(4px); }
        }

        .vd-eyebrow-anim   { animation: vd-fade-up   0.7s ease 0.25s both; }
        .vd-line1-anim     { animation: vd-slide-up  0.75s cubic-bezier(0.16,1,0.3,1) 0.4s both; }
        .vd-line2-anim     { animation: vd-slide-up  0.75s cubic-bezier(0.16,1,0.3,1) 0.55s both; }
        .vd-line3-anim     { animation: vd-slide-up  0.75s cubic-bezier(0.16,1,0.3,1) 0.7s both; }
        .vd-body-anim      { animation: vd-fade-up   0.7s ease 0.85s both; }
        .vd-focus-anim     { animation: vd-fade-up   0.7s ease 1s both; }
        .vd-cta-anim       { animation: vd-fade-up   0.7s ease 1.1s both; }
        .vd-photo-anim     { animation: vd-fade-in   0.95s ease 0.5s both; }
        .vd-scroll-anim    { animation: vd-fade-in   0.6s ease 1.35s both; }
        .vd-scroll-dot     { animation: vd-scroll-pulse 1.8s ease-in-out 1.5s infinite; }

        .vd-photo-wrap img {
          transition: filter 0.7s ease, transform 0.7s cubic-bezier(0.16,1,0.3,1);
        }
        .vd-photo-wrap:hover img {
          filter: grayscale(15%) contrast(1.06) !important;
          transform: scale(1.025);
        }

        @media (prefers-reduced-motion: reduce) {
          .vd-eyebrow-anim, .vd-line1-anim, .vd-line2-anim, .vd-line3-anim,
          .vd-body-anim, .vd-focus-anim, .vd-cta-anim, .vd-photo-anim, .vd-scroll-anim {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
          .vd-scroll-dot { animation: none !important; }
        }
      `}</style>

      <section className="hero-atmosphere relative flex min-h-svh items-center overflow-hidden px-6 pb-24 pt-32 md:px-10 md:pt-32 lg:px-16">
        {/* Soft vignette edge */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[var(--color-surface)] to-transparent"
        />

        <div className="relative mx-auto grid w-full max-w-[1200px] grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="flex flex-col">
            <span className="vd-eyebrow-anim mb-5 block text-[0.625rem] font-medium uppercase tracking-[0.22em] text-stone-400">
              Vimal Desai — Senior Full-Stack Engineer
            </span>

            <h1
              className="mb-7 font-serif italic leading-[0.92] tracking-tight text-stone-900"
              style={{ fontSize: 'clamp(3rem, 5.5vw, 5.5rem)' }}
            >
              <span className="block overflow-hidden pb-1">
                <span className="vd-line1-anim block">I build</span>
              </span>
              <span className="block overflow-hidden pb-1">
                <span
                  className="vd-line2-anim block"
                  style={{ color: '#8B1A2B' }}
                >
                  products
                </span>
              </span>
              <span className="block overflow-hidden pb-1">
                <span className="vd-line3-anim block">
                  people
                  <br />
                  actually use
                </span>
              </span>
            </h1>

            <p className="vd-body-anim mb-8 max-w-[430px] text-[0.9375rem] leading-[1.78] text-stone-500">
              Ten years shipping React, Next.js, Node, and TypeScript —
              rental CRMs, travel booking, ERPs, social apps. Frontends that
              feel sharp, backends that hold up, tests so small teams can
              deploy without fear.
            </p>

            <div className="vd-focus-anim mb-10 flex items-center gap-4">
              <div
                className="h-px w-8 shrink-0"
                style={{ background: '#8B1A2B' }}
              />
              <span className="font-serif text-lg italic text-stone-700">
                Currently: platform work at UpKeep + AI-assisted delivery
              </span>
            </div>

            <div className="vd-cta-anim flex flex-wrap items-center gap-6">
              <Link
                href="/work"
                className="font-label inline-flex items-center gap-2 bg-[var(--color-primary-container)] px-6 py-3 text-sm tracking-wide text-[var(--color-on-primary)] transition-transform duration-300 hover:-translate-y-0.5"
              >
                See the work
                <span aria-hidden className="text-base leading-none">
                  →
                </span>
              </Link>
              <Link
                href="/contact"
                className="font-label text-sm tracking-wide text-stone-600 underline decoration-stone-300 underline-offset-4 transition-colors hover:text-[var(--color-primary-container)] hover:decoration-[var(--color-primary-container)]"
              >
                Get in touch
              </Link>
            </div>
          </div>

          <div className="vd-photo-anim relative mx-auto w-auto max-w-sm lg:max-w-none">
            <div
              className="pointer-events-none absolute -right-4 -top-4 hidden h-10 w-10 md:block"
              style={{
                borderTop: '1.5px solid rgba(139,26,43,0.35)',
                borderRight: '1.5px solid rgba(139,26,43,0.35)',
              }}
            />
            <div
              className="pointer-events-none absolute -bottom-4 -left-4 hidden h-10 w-10 md:block"
              style={{
                borderBottom: '1.5px solid rgba(139,26,43,0.35)',
                borderLeft: '1.5px solid rgba(139,26,43,0.35)',
              }}
            />

            <div className="vd-photo-wrap relative aspect-[4/5] max-h-[580px] overflow-hidden bg-stone-800">
              <img
                src="/assets/hero-image.png"
                alt="Portrait of Vimal Desai"
                className="h-full w-full object-cover"
                style={{
                  filter: 'grayscale(80%) contrast(1.05)',
                  opacity: 0.92,
                }}
              />
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(139,26,43,0.16) 0%, transparent 58%)',
                  mixBlendMode: 'multiply',
                }}
              />
            </div>

            {/* Caption strip — not a floating card */}
            <div className="mt-5 flex items-baseline justify-between gap-4 border-t border-stone-300/70 pt-4">
              <p className="font-label text-[0.58rem] font-medium uppercase tracking-[0.2em] text-stone-400">
                Based in
              </p>
              <p
                className="font-serif text-lg italic"
                style={{ color: '#8B1A2B' }}
              >
                Surat · Remote-ready
              </p>
            </div>
          </div>
        </div>

        <a
          href="#work"
          className="vd-scroll-anim absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
          aria-label="Scroll to selected work"
        >
          <span className="font-label text-[0.55rem] uppercase tracking-[0.25em] text-stone-400">
            Scroll
          </span>
          <span
            className="vd-scroll-dot block h-8 w-px bg-stone-400/60"
            aria-hidden
          />
        </a>
      </section>
    </>
  );
};

export default Hero;
