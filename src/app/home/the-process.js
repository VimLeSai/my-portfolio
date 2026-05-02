import pipelineSteps from '@/lib/pipeline-steps';

const Process = () => {
  return (
    <section className="mx-auto max-w-screen-2xl py-40">
      <div className="mx-auto max-w-screen-2xl px-8 text-center">
        <span className="font-label text-sm uppercase tracking-[0.2em] text-outline mb-5">
          The Process
        </span>
        <h2 className="font-headline text-5xl italic">
          From Discovery to Deployment
        </h2>

        <div className="relative my-12 py-8 lg:py-24 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mx-auto max-w-7xl text-left">
            {pipelineSteps.map((step) => (
              <div
                key={step.num}
                className="flex flex-col gap-6 p-8 w-full max-w-md mx-auto"
                style={{
                  backgroundColor: 'var(--color-surface)',
                  border: '1px solid rgba(224,191,191,0.2)',
                  borderRadius: 'var(--radius-xl)',
                  boxShadow: '0 20px 80px rgba(88,65,65,0.08)',
                }}
              >
                <div
                  className="font-headline text-xl italic"
                  style={{ color: 'var(--color-primary)' }}
                >
                  {step.num}. {step.title}
                </div>
                <p
                  className="font-body text-sm leading-relaxed"
                  style={{ color: 'var(--color-on-surface-variant)' }}
                >
                  {step.desc}
                </p>
                <ul className="space-y-3">
                  {step.bullets.map((b) => (
                    <li
                      key={b}
                      className="font-label flex items-center gap-2 text-xs tracking-wider uppercase"
                      style={{ color: 'var(--color-on-surface)' }}
                    >
                      <span
                        className="h-1.5 w-1.5 flex-shrink-0 rounded-full"
                        style={{
                          backgroundColor: 'var(--color-primary-container)',
                        }}
                      />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Process;
