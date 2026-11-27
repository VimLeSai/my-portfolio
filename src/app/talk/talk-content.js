'use client';

import Link from 'next/link';
import Navbar from '@/components/nav';
import Footer from '@/components/footer';
import TalkThread from '@/components/talk/thread';

export default function TalkContent({ resumeId = null }) {
  return (
    <div
      className="relative min-h-screen"
      style={{ backgroundColor: 'var(--color-surface)' }}
    >
      <Navbar ctaLabel="Get in Touch" ctaHref="/contact" />

      <main className="mx-auto w-full max-w-3xl px-6 pt-28 pb-20 sm:px-8 md:pt-32">
        <p className="font-label text-outline text-[10px] tracking-[0.18em] uppercase">
          Talk
        </p>
        <h1 className="font-headline text-on-surface mt-3 text-4xl font-medium tracking-tight sm:text-5xl">
          Ask me <span className="italic">anything</span>
        </h1>
        <p className="font-body text-on-surface/75 mt-4 max-w-xl text-base leading-relaxed sm:text-lg">
          Work, process, stack, or a role. Replies are grounded in the public
          copy on this site. Prefer a human reply?{' '}
          <Link
            href="/contact"
            className="text-[var(--color-accent)] underline underline-offset-2"
          >
            Get in touch
          </Link>
          .
        </p>

        <div className="mt-10 border border-stone-200/90 shadow-[0_20px_60px_rgba(88,65,65,0.06)]">
          <TalkThread
            variant="page"
            initialSessionId={resumeId}
            className="min-h-[560px] px-4 sm:px-6"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
