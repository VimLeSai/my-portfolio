'use client';

import Reveal from '@/components/ui/reveal';
import Link from 'next/link';
import { motion, useReducedMotion } from 'motion/react';

/**
 * Full-bleed ink band — visual break from cream surfaces.
 */
export default function InkBreak({
  eyebrow = 'How I work',
  headline = (
    <>
      Less ceremony.
      <br />
      More shipped software.
    </>
  ),
  body = 'I care about the path from a vague ticket to something a user can click — schema, API, UI, deploy. Pretty decks optional.',
  ctaLabel = 'Read about me',
  ctaHref = '/about',
  imageSrc = '/assets/hero-image.png',
  imageAlt = 'Vimal Desai',
}) {
  const reduce = useReducedMotion();

  return (
    <section className="relative w-full overflow-hidden bg-[#12110f] text-[#f5f0e8]">
      <div className="absolute inset-0 opacity-[0.07]" aria-hidden>
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 30%, rgba(128,0,32,0.55), transparent 45%), radial-gradient(circle at 80% 70%, rgba(51,94,159,0.25), transparent 40%)',
          }}
        />
      </div>

      <div className="relative mx-auto grid min-h-[70vh] max-w-screen-2xl grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center px-8 py-24 md:px-16 lg:py-32">
          <Reveal>
            <p className="font-label mb-6 text-[0.65rem] tracking-[0.22em] text-[#c4a8a8] uppercase">
              {eyebrow}
            </p>
            <h2
              className="font-headline mb-8 leading-[0.95] tracking-tight italic"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.25rem)' }}
            >
              {headline}
            </h2>
            <p className="mb-10 max-w-md text-[0.95rem] leading-relaxed text-[#b8b0a4]">
              {body}
            </p>
            <Link
              href={ctaHref}
              className="font-label inline-flex w-fit items-center gap-2 border-b border-[#800020] pb-1 text-sm tracking-wide text-[#f5f0e8] transition-colors hover:text-[#ffb3b5]"
            >
              {ctaLabel}
              <span aria-hidden>→</span>
            </Link>
          </Reveal>
        </div>

        <div className="relative min-h-[48vh] lg:min-h-full">
          <motion.img
            src={imageSrc}
            alt={imageAlt}
            className="absolute inset-0 h-full w-full object-cover object-top"
            initial={reduce ? false : { scale: 1.08, opacity: 0.6 }}
            whileInView={reduce ? undefined : { scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ filter: 'grayscale(70%) contrast(1.08)' }}
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-[#12110f] via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#12110f] lg:via-[#12110f]/20 lg:to-transparent"
          />
        </div>
      </div>
    </section>
  );
}
