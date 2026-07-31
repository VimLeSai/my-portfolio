'use client';

import Reveal, { RevealItem, RevealStagger } from '@/components/ui/reveal';
import pipelineSteps from '@/lib/pipeline-steps';

const Process = () => {
  return (
    <section className="mx-auto max-w-screen-2xl py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-8">
        <Reveal className="mb-16 text-center md:mb-24">
          <span className="font-label text-outline mb-5 block text-sm uppercase tracking-[0.2em]">
            The Process
          </span>
          <h2 className="font-headline text-4xl italic md:text-5xl">
            How the work usually goes
          </h2>
        </Reveal>

        <RevealStagger
          className="relative grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-10"
          stagger={0.12}
        >
          {/* connecting line on desktop */}
          <div
            aria-hidden
            className="pointer-events-none absolute top-5 right-0 left-0 hidden h-px bg-gradient-to-r from-transparent via-[var(--color-outline-variant)] to-transparent lg:block"
          />

          {pipelineSteps.map((step) => (
            <RevealItem key={step.num} className="relative text-left">
              <div className="bg-surface relative z-10 mb-6 inline-flex h-10 w-10 items-center justify-center">
                <span className="font-headline text-primary text-2xl italic">
                  {step.num}
                </span>
              </div>
              <h3 className="font-headline mb-3 text-xl">{step.title}</h3>
              <p className="text-on-surface-variant mb-5 text-sm leading-relaxed">
                {step.desc}
              </p>
              <ul className="space-y-2">
                {step.bullets.map((b) => (
                  <li
                    key={b}
                    className="font-label text-on-surface flex items-center gap-2 text-[0.65rem] tracking-[0.14em] uppercase"
                  >
                    <span className="bg-primary-container h-px w-4 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
};

export default Process;
