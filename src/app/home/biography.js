'use client';

import Reveal, { RevealItem, RevealStagger } from '@/components/ui/reveal';

const traits = [
  {
    n: '01',
    title: 'End-to-end ownership',
    body: 'Schema, API, UI, deploy — fewer handoff gaps, fewer “works on my machine” surprises.',
  },
  {
    n: '02',
    title: 'Ship under constraint',
    body: 'Small teams, legacy code, tight deadlines — still land something users can click.',
  },
  {
    n: '03',
    title: 'Raise the floor',
    body: 'Pairing, reviews, and patterns so juniors stop repeating my early mistakes.',
  },
  {
    n: '04',
    title: 'AI as a tool',
    body: 'Use LLMs to move faster on boilerplate — keep judgment on architecture and product calls.',
  },
];

const Biography = () => {
  return (
    <section className="bg-surface-container-low relative mx-auto max-w-screen-2xl rounded-t-[2.5rem] py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-8">
        <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <span className="label-sm text-primary mb-6 block font-bold tracking-widest uppercase">
              Biography
            </span>
            <h2 className="font-headline mb-8 text-4xl leading-tight md:text-5xl">
              Ten years in the trenches — UI, APIs, and the messy middle.
            </h2>
            <div className="text-on-surface-variant space-y-6 text-lg leading-relaxed">
              <p>
                I started as a frontend engineer and kept pulling backend work
                because products break at the seams. PropTech CRMs, travel GDS
                flows, textile ERPs, quiz social — same habit: own the path from
                click to database.
              </p>
              <p>
                These days I lead delivery on larger platforms: clear
                interfaces, boring-reliable deploys, and mentoring so the next
                person can move faster than I did.
              </p>
            </div>
          </Reveal>

          <RevealStagger className="grid grid-cols-1 gap-0 sm:grid-cols-2" stagger={0.08}>
            {traits.map((t) => (
              <RevealItem
                key={t.n}
                className="border-outline-variant/25 border-t px-1 py-7 sm:odd:pr-8 sm:even:pl-8"
              >
                <span className="font-label text-primary/50 mb-3 block text-[0.65rem] tracking-[0.2em]">
                  {t.n}
                </span>
                <h3 className="font-headline mb-2 text-xl">{t.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  {t.body}
                </p>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </div>
    </section>
  );
};

export default Biography;
