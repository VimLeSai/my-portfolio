'use client';

import Reveal from '@/components/ui/reveal';
import { testimonials } from '@/lib/testimonials';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { useCallback, useEffect, useState } from 'react';

export default function Testimonials() {
  const items = testimonials.filter((t) => t.featured && t.enabled !== false);
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [paused, setPaused] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const reduce = useReducedMotion();

  const count = items.length;
  const current = items[index] || items[0];

  const go = useCallback(
    (dir) => {
      if (!count) return;
      setDirection(dir);
      setExpanded(false);
      setIndex((i) => (i + dir + count) % count);
    },
    [count],
  );

  useEffect(() => {
    if (paused || reduce || count < 2) return;
    const id = setInterval(() => go(1), 7000);
    return () => clearInterval(id);
  }, [paused, reduce, count, go, index]);

  if (!current) return null;

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 48 : -48,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({
      x: dir > 0 ? -48 : 48,
      opacity: 0,
    }),
  };

  return (
    <section
      className="bg-surface-container-lowest border-outline-variant/15 border-y px-6 py-28 md:px-8 md:py-36"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="mx-auto max-w-4xl">
        <Reveal className="mb-14 text-center md:mb-16">
          <p className="font-label text-outline mb-4 text-sm tracking-[0.2em] uppercase">
            What people say
          </p>
          <h2 className="font-headline text-3xl italic md:text-4xl">
            From people I&apos;ve shipped with
          </h2>
        </Reveal>

        <div className="relative min-h-[280px] md:min-h-[260px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.figure
              key={current.id}
              custom={direction}
              variants={reduce ? undefined : variants}
              initial={reduce ? false : 'enter'}
              animate="center"
              exit={reduce ? undefined : 'exit'}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-x-0 top-0"
            >
              <span
                aria-hidden
                className="font-headline text-primary/15 absolute -top-8 left-0 text-7xl italic leading-none"
              >
                “
              </span>
              <blockquote className="relative z-10 pt-6">
                <p className="font-body text-on-surface text-xl leading-relaxed italic md:text-2xl">
                  {expanded
                    ? current.review
                    : current.shortReview || current.review}
                </p>
                {current.review &&
                  current.shortReview &&
                  current.review !== current.shortReview && (
                    <button
                      type="button"
                      onClick={() => setExpanded((v) => !v)}
                      className="font-label text-primary mt-4 text-xs font-bold tracking-wider uppercase"
                    >
                      {expanded ? 'Show less' : 'Read full →'}
                    </button>
                  )}
              </blockquote>

              <figcaption className="mt-10 flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-stone-200">
                  {current.reviewer.avatarUrl ? (
                    <img
                      alt=""
                      src={current.reviewer.avatarUrl}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <span className="font-label text-on-surface-variant font-bold uppercase">
                      {current.reviewer.name.charAt(0)}
                    </span>
                  )}
                </div>
                <div>
                  <p className="font-label text-xs font-bold tracking-widest uppercase">
                    {current.reviewer.name}
                  </p>
                  <p className="font-label text-outline text-[10px] tracking-wider uppercase">
                    {current.reviewer.title}
                    {current.reviewer.company
                      ? `, ${current.reviewer.company}`
                      : ''}
                  </p>
                </div>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex items-center justify-between gap-6 pt-4">
          <div className="flex gap-2" role="tablist" aria-label="Testimonials">
            {items.map((t, i) => (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Show testimonial ${i + 1}`}
                onClick={() => {
                  setDirection(i > index ? 1 : -1);
                  setExpanded(false);
                  setIndex(i);
                }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index
                    ? 'bg-primary-container w-8'
                    : 'bg-outline-variant/50 hover:bg-outline w-1.5'
                }`}
              />
            ))}
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="border-outline-variant/40 text-on-surface hover:border-primary hover:text-primary flex h-10 w-10 items-center justify-center border transition-colors"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="border-outline-variant/40 text-on-surface hover:border-primary hover:text-primary flex h-10 w-10 items-center justify-center border transition-colors"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
