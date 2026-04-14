export default function Recognitions() {
  return (
    <section
      className="py-40"
      style={{
        backgroundColor: 'var(--color-surface-container-low)',
        borderRadius: '0 0 3rem 3rem',
      }}
      id="experience"
    >
      <div className="mx-auto max-w-7xl px-8">
        <p
          className="font-label mb-4 text-center text-xs tracking-[0.3em] uppercase"
          style={{ color: 'var(--color-on-surface-variant)' }}
        >
          Milestones
        </p>
        <h2
          className="font-headline mb-16 text-center text-5xl"
          style={{ color: 'var(--color-on-surface)' }}
        >
          Honors & Recognition
        </h2>

        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {/* Leader of the Month */}
          <div
            className="flex flex-col gap-4 p-8"
            style={{
              backgroundColor: 'var(--color-surface-container-highest)',
              borderRadius: 'var(--radius-xl)',
            }}
          >
            <span
              className="material-symbols-outlined text-3xl"
              style={{ color: 'var(--color-primary-container)' }}
            >
              emoji_events
            </span>
            <h3
              className="font-headline mb-4 text-4xl"
              style={{ color: 'var(--color-on-surface)' }}
            >
              Leader of the Month
            </h3>
            <p
              className="font-label text-xs tracking-widest uppercase"
              style={{ color: 'var(--color-outline)' }}
            >
              Global Tech Hub · 2022
            </p>
            <p
              className="font-body text-sm"
              style={{ color: 'var(--color-on-surface-variant)' }}
            >
              Awarded for exceptional technical guidance and fostering a
              high-velocity engineering culture within the core product team.
            </p>
          </div>

          {/* AI Hackathon */}
          <div
            className="col-span-1 flex flex-col gap-4 p-8"
            style={{
              backgroundColor: 'var(--color-primary-container)',
              borderRadius: 'var(--radius-xl)',
              color: 'var(--color-on-primary)',
            }}
          >
            <span className="material-symbols-outlined text-3xl opacity-70">
              smart_toy
            </span>
            <h3 className="font-headline mb-4 text-3xl leading-tight">
              AI Hackathon Champion
            </h3>
            <p className="font-body text-sm opacity-75">
              Engineered an automated code optimisation agent using LLMs to
              rescue technical debt by 40%.
            </p>
            <p className="font-label mt-auto text-xs tracking-widest uppercase opacity-60">
              Deep Learning Summit · 2021
            </p>
          </div>

          {/* Years experience */}
          <div
            className="flex flex-col justify-between p-8"
            style={{
              backgroundColor: 'var(--color-secondary)',
              color: 'var(--color-on-secondary)',
              borderRadius: 'var(--radius-xl)',
            }}
          >
            <span className="material-symbols-outlined text-3xl opacity-60">
              history
            </span>
            <div>
              <p className="font-headline text-5xl">9+</p>
              <h4 className="mt-1 text-lg font-bold">Years Experience</h4>
              <p className="font-body mt-2 text-sm opacity-70">
                Consistently delivering growth and innovation across the full
                stack ecosystem.
              </p>
            </div>
          </div>

          {/* Core Tech Stack */}
          <div
            className="flex flex-col gap-4 p-8"
            style={{
              backgroundColor: 'var(--color-surface-container-highest)',
              borderRadius: 'var(--radius-xl)',
            }}
          >
            <span
              className="material-symbols-outlined text-3xl"
              style={{ color: 'var(--color-primary-container)' }}
            >
              layers
            </span>
            <h3
              className="font-headline mb-2 text-2xl"
              style={{ color: 'var(--color-on-surface)' }}
            >
              Core Tech Stack
            </h3>
            <p
              className="font-body text-sm"
              style={{ color: 'var(--color-on-surface-variant)' }}
            >
              Tailwind, Node.js, AWS, React, PostgreSQL, Database
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
