'use client';

import Reveal from '@/components/ui/reveal';
import { motion, useReducedMotion } from 'motion/react';

export default function LetsTalk() {
  const reduce = useReducedMotion();

  return (
    <section
      className="relative overflow-hidden py-32 text-center md:py-44"
      id="contact"
    >
      <Reveal>
        <div className="relative z-10 mx-auto max-w-4xl px-8">
          <h2
            className="font-headline text-on-surface mb-10 leading-none tracking-tighter italic md:mb-14"
            style={{ fontSize: 'clamp(3.2rem, 8vw, 7.5rem)' }}
          >
            Let&apos;s work
            <br />
            together.
          </h2>

          <div className="flex flex-col items-center gap-10">
            <motion.div
              className="relative h-36 w-36 md:h-44 md:w-44"
              animate={reduce ? undefined : { rotate: 360 }}
              transition={
                reduce
                  ? undefined
                  : { duration: 28, repeat: Infinity, ease: 'linear' }
              }
            >
              <svg
                className="text-primary/15 h-full w-full"
                viewBox="0 0 100 100"
              >
                <circle
                  cx={50}
                  cy={50}
                  fill="none"
                  r={48}
                  stroke="currentColor"
                  strokeDasharray="3 5"
                  strokeWidth="0.6"
                />
                <circle
                  cx={50}
                  cy={50}
                  fill="none"
                  r={32}
                  stroke="currentColor"
                  strokeWidth={0.8}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="bg-primary h-2.5 w-2.5 rounded-full"
                  animate={
                    reduce
                      ? undefined
                      : { scale: [1, 1.35, 1], opacity: [0.7, 1, 0.7] }
                  }
                  transition={
                    reduce
                      ? undefined
                      : { duration: 2.4, repeat: Infinity, ease: 'easeInOut' }
                  }
                  style={{ boxShadow: '0 0 18px rgba(128,0,32,0.45)' }}
                />
              </div>
            </motion.div>

            <a
              className="font-headline border-primary/35 hover:border-primary hover:text-primary border-b pb-1 text-xl italic transition-colors duration-300 md:text-2xl"
              href="/contact"
            >
              hello@vimlesai.io
            </a>
          </div>
        </div>
      </Reveal>

      <div className="bg-primary/5 absolute -bottom-24 -left-24 h-[28rem] w-[28rem] rounded-full blur-[110px]" />
      <div className="bg-secondary/5 absolute -top-24 -right-24 h-[28rem] w-[28rem] rounded-full blur-[110px]" />
    </section>
  );
}
