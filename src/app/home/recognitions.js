const milestonesData = [
  {
    id: 1,
    type: 'hero',
    gridSpan: 'md:col-span-8',
    icon: 'military_tech',
    backgroundIcon: 'star',
    title: 'Leader of the Month',
    description:
      'Awarded for exceptional technical guidance and fostering a high-velocity engineering culture within the core product team.',
  },
  {
    id: 2,
    type: 'primary',
    gridSpan: 'md:col-span-4',
    icon: 'smart_toy',

    title: 'AI Hackathon Champion',
    description:
      'Engineered an automated code refactoring agent using LLMs to reduce technical debt by 40%.',
  },
  {
    id: 3,
    type: 'stat',
    gridSpan: 'md:col-span-4',
    icon: 'history',

    title: '9+',
    subtitle: 'Years Experience',
    description: 'A decade of engineering growth and technical leadership.',
  },
  {
    id: 4,
    type: 'list',
    gridSpan: 'md:col-span-8',
    icon: 'code',
    backgroundIcon: 'javascript',
    title: 'Core Tech Stack',
    description:
      'Architecting full-stack solutions with TypeScript, Node.js, and React/Next.js, powered by AWS cloud infrastructure and optimized SQL/NoSQL database design.',
    checks: 2,
  },
];

export default function Recognitions() {
  return (
    <section
      className="bg-surface-container-low rounded-b-[3rem] py-40"
      id="experience"
    >
      <div className="mx-auto max-w-7xl px-8">
        <div className="mb-16 text-center">
          <span className="font-label text-sm uppercase tracking-[0.2em] text-outline mb-5">
            Milestones
          </span>
          <h2 className="font-headline text-5xl">Honors &amp; Recognition</h2>
        </div>

        <div className="grid h-auto grid-cols-1 gap-6 md:h-[600px] md:grid-cols-12">
          {milestonesData.map((item) => {
            if (item.type === 'hero') {
              return (
                <div
                  key={item.id}
                  className={`${item.gridSpan} bg-surface group relative flex flex-col justify-between overflow-hidden rounded-2xl p-12 shadow-[0_20px_80px_rgba(88,65,65,0.04)]`}
                >
                  <div className="relative z-10">
                    <span
                      className="material-symbols-outlined text-primary mb-8"
                      style={{
                        fontSize: '48px',
                        fontVariationSettings: "'FILL' 1",
                      }}
                    >
                      {item.icon}
                    </span>
                    <h3 className="font-headline mb-4 text-4xl">
                      {item.title}
                    </h3>
                    <p className="text-on-surface-variant max-w-md">
                      {item.description}
                    </p>
                  </div>
                  {item.backgroundIcon && (
                    <div className="pointer-events-none absolute right-0 bottom-0 translate-x-10 translate-y-10 opacity-5 transition-transform duration-1000 ease-out group-hover:translate-x-0 group-hover:translate-y-0">
                      <span
                        className="material-symbols-outlined text-on-surface"
                        style={{
                          fontSize: '300px',
                          fontVariationSettings: "'FILL' 1",
                          lineHeight: 1,
                        }}
                      >
                        {item.backgroundIcon}
                      </span>
                    </div>
                  )}
                </div>
              );
            }

            if (item.type === 'primary') {
              return (
                <div
                  key={item.id}
                  className={`${item.gridSpan} bg-primary-container text-on-primary flex flex-col justify-end rounded-2xl p-12 shadow-lg`}
                >
                  <span
                    className="material-symbols-outlined text-on-primary mb-8"
                    style={{
                      fontSize: '48px',
                      fontVariationSettings: "'FILL' 1",
                    }}
                  >
                    {item.icon}
                  </span>
                  <h3 className="font-headline mb-4 text-3xl leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-on-primary-container font-light">
                    {item.description}
                  </p>
                </div>
              );
            }

            if (item.type === 'stat') {
              return (
                <div
                  key={item.id}
                  className={`${item.gridSpan} bg-secondary text-on-secondary flex flex-col justify-between rounded-2xl p-12`}
                >
               
                  <div className="font-headline text-5xl italic">
                    {item.title}
                  </div>
                  <div>
                     <h3 className="font-headline mb-2 text-2xl">
                      {item.subtitle}
                    </h3>
                    <p className="text-secondary-container text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            }

            if (item.type === 'list') {
              return (
                <div
                  key={item.id}
                  className={`${item.gridSpan} bg-surface-container-highest relative flex items-center justify-between overflow-hidden rounded-2xl p-12 shadow-inner`}
                >
                  <div className="flex-1">
                    <span
                      className="material-symbols-outlined text-primary mb-8"
                      style={{
                        fontSize: '48px',
                        fontVariationSettings: "'FILL' 1",
                      }}
                    >
                      {item.icon}
                    </span>
                    <h3 className="font-headline mb-2 text-2xl">
                      {item.title}
                    </h3>
                    <p className="text-on-surface-variant text-sm">
                      {item.description}
                    </p>
                  </div>
                  {item.backgroundIcon && (
                    <div className="pointer-events-none absolute right-0 bottom-0 translate-x-10 translate-y-10 opacity-5 transition-transform duration-1000 ease-out group-hover:translate-x-0 group-hover:translate-y-0">
                      <span
                        className="material-symbols-outlined text-primary"
                        style={{
                          fontSize: '300px',
                          fontVariationSettings: "'FILL' 1",
                          lineHeight: 1,
                        }}
                      >
                        {item.backgroundIcon}
                      </span>
                    </div>
                  )}
                </div>
              );
            }

            return null;
          })}
        </div>
      </div>
    </section>
  );
}
