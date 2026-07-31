'use client';

import Reveal, { RevealItem, RevealStagger } from '@/components/ui/reveal';

const milestonesData = [
  {
    id: 1,
    type: 'hero',
    gridSpan: 'md:col-span-8',
    title: 'Leader of the Month',
    description:
      'Recognized for technical guidance and keeping the core product team moving without burning people out.',
  },
  {
    id: 2,
    type: 'primary',
    gridSpan: 'md:col-span-4',
    title: 'AI Hackathon Champion',
    description:
      'Built an LLM refactoring agent that cut a chunk of tech debt ~40% in a weekend sprint.',
  },
  {
    id: 3,
    type: 'stat',
    gridSpan: 'md:col-span-4',
    title: '10+',
    subtitle: 'Years Experience',
    description: 'From intern to lead — still hands-on in the codebase.',
  },
  {
    id: 4,
    type: 'list',
    gridSpan: 'md:col-span-8',
    title: 'Core stack',
    description:
      'TypeScript, Node, React/Next.js, AWS, and the SQL/NoSQL mix the product actually needs.',
  },
];

export default function Recognitions() {
  return (
    <section
      className="bg-surface-container-low rounded-b-[2.5rem] py-28 md:py-36"
      id="milestones"
    >
      <div className="mx-auto max-w-7xl px-8">
        <Reveal className="mb-14 text-center md:mb-16">
          <span className="font-label text-outline mb-5 block text-sm uppercase tracking-[0.2em]">
            Milestones
          </span>
          <h2 className="font-headline text-4xl md:text-5xl">
            Marks along the way
          </h2>
        </Reveal>

        <RevealStagger
          className="grid h-auto grid-cols-1 gap-5 md:h-[560px] md:grid-cols-12"
          stagger={0.1}
        >
          {milestonesData.map((item) => {
            if (item.type === 'hero') {
              return (
                <RevealItem
                  key={item.id}
                  className={`${item.gridSpan} bg-surface group relative flex flex-col justify-between overflow-hidden p-10 md:p-12`}
                >
                  <div className="relative z-10">
                    <p className="font-label text-primary/40 mb-6 text-[0.65rem] tracking-[0.2em]">
                      01
                    </p>
                    <h3 className="font-headline mb-4 text-3xl md:text-4xl">
                      {item.title}
                    </h3>
                    <p className="text-on-surface-variant max-w-md leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div
                    aria-hidden
                    className="font-headline text-primary/[0.04] absolute -right-4 -bottom-8 text-[12rem] italic leading-none transition-transform duration-700 group-hover:translate-x-[-8px]"
                  >
                    ★
                  </div>
                </RevealItem>
              );
            }

            if (item.type === 'primary') {
              return (
                <RevealItem
                  key={item.id}
                  className={`${item.gridSpan} bg-primary-container text-on-primary flex flex-col justify-end p-10 md:p-12`}
                >
                  <p className="font-label text-on-primary/40 mb-6 text-[0.65rem] tracking-[0.2em]">
                    02
                  </p>
                  <h3 className="font-headline mb-4 text-2xl leading-tight md:text-3xl">
                    {item.title}
                  </h3>
                  <p className="text-on-primary-container font-light leading-relaxed">
                    {item.description}
                  </p>
                </RevealItem>
              );
            }

            if (item.type === 'stat') {
              return (
                <RevealItem
                  key={item.id}
                  className={`${item.gridSpan} bg-secondary text-on-secondary flex flex-col justify-between p-10 md:p-12`}
                >
                  <div className="font-headline text-6xl italic md:text-7xl">
                    {item.title}
                  </div>
                  <div>
                    <h3 className="font-headline mb-2 text-2xl">
                      {item.subtitle}
                    </h3>
                    <p className="text-secondary-container text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </RevealItem>
              );
            }

            return (
              <RevealItem
                key={item.id}
                className={`${item.gridSpan} bg-surface-container-highest relative flex items-center overflow-hidden p-10 md:p-12`}
              >
                <div className="relative z-10 max-w-xl">
                  <p className="font-label text-primary/40 mb-6 text-[0.65rem] tracking-[0.2em]">
                    04
                  </p>
                  <h3 className="font-headline mb-2 text-2xl">{item.title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </RevealItem>
            );
          })}
        </RevealStagger>
      </div>
    </section>
  );
}
