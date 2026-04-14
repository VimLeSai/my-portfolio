import Link from 'next/link';
import Footer from '@/components/footer';
import Navbar from '@/components/nav';

export default function NotFound() {
  return (
    <>
      <Navbar
        brandName="Portfolio"
        ctaLabel="Get in Touch"
        ctaHref="/contact"
      />
      <main className="mx-auto flex max-w-7xl flex-col items-center px-8 pt-48 pb-32 text-center">
        <p
          className="font-headline absolute text-[20vw] leading-none italic opacity-5 select-none"
          style={{ color: 'var(--color-primary)' }}
          aria-hidden
        >
          404
        </p>
        <div className="relative z-10">
          <p
            className="font-label mb-6 text-xs tracking-[0.3em] uppercase"
            style={{ color: 'var(--color-outline)' }}
          >
            Page not found
          </p>
          <h1
            className="font-headline mb-8 text-7xl tracking-tighter italic"
            style={{ color: 'var(--color-on-surface)' }}
          >
            Lost in the architecture.
          </h1>
          <p
            className="font-body mx-auto mb-12 max-w-md text-lg leading-relaxed"
            style={{ color: 'var(--color-on-surface-variant)' }}
          >
            This page doesn't exist — but the rest of the portfolio does. Let's
            get you back on track.
          </p>
          <Link
            href="/"
            className="font-body inline-flex items-center gap-3 px-10 py-4 font-semibold transition-all hover:opacity-80"
            style={{
              backgroundColor: 'var(--color-primary-container)',
              color: 'var(--color-on-primary)',
              borderRadius: 'var(--radius-lg)',
            }}
          >
            Back to Home
            <span className="material-symbols-outlined text-lg">
              arrow_forward
            </span>
          </Link>
        </div>
      </main>
      <Footer
        brandName="Portfolio"
        tagline="Senior Full Stack Engineer. Crafted with intentionality."
      />
    </>
  );
}
