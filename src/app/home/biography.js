const Biography = () => {
  return (
    <section className="bg-surface-container-low mx-auto max-w-screen-2xl rounded-t-[3rem] py-32">
      <div className="mx-auto max-w-7xl px-8">
        <div className="grid items-start gap-24 lg:grid-cols-2">
          <div>
            <span className="label-sm text-primary mb-6 block font-bold tracking-widest uppercase">
              Biography
            </span>
            <h2 className="font-headline mb-8 text-5xl leading-tight">
              9+ years of engineering across the full stack ecosystem.
            </h2>
            <div className="text-on-surface-variant space-y-6 text-lg leading-relaxed">
              <p>
                As a Lead Engineer, I specialize in transforming complex
                business requirements into elegant, scalable technical
                architectures. My journey has been defined by a commitment to
                code quality and a deep respect for user-centric design.
              </p>
              <p>
                Currently leading high-performance teams to deliver robust
                enterprise solutions that bridge the gap between heavy-duty
                backends and fluid, tactile frontends.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="bg-surface rounded-xl p-8 shadow-[0_20px_80px_rgba(88,65,65,0.04)] transition-shadow hover:shadow-[0_20px_80px_rgba(88,65,65,0.08)]">
              <span className="material-symbols-outlined text-primary mb-4 text-3xl">
                architecture
              </span>
              <h3 className="font-headline mb-2 text-xl">Systems Thinking</h3>
              <p className="text-on-surface-variant text-sm">
                Designing for scalability and long-term maintenance from day
                one.
              </p>
            </div>
            <div className="bg-surface rounded-xl p-8 shadow-[0_20px_80px_rgba(88,65,65,0.04)]">
              <span className="material-symbols-outlined text-primary mb-4 text-3xl">
                terminal
              </span>
              <h3 className="font-headline mb-2 text-xl">Clean Execution</h3>
              <p className="text-on-surface-variant text-sm">
                Writing predictable, performant code that stands the test of
                time.
              </p>
            </div>
            <div className="bg-surface rounded-xl p-8 shadow-[0_20px_80px_rgba(88,65,65,0.04)]">
              <span className="material-symbols-outlined text-primary mb-4 text-3xl">
                diversity_3
              </span>
              <h3 className="font-headline mb-2 text-xl">Lead Mentorship</h3>
              <p className="text-on-surface-variant text-sm">
                Cultivating technical excellence through collaborative
                leadership.
              </p>
            </div>
            <div className="bg-surface rounded-xl p-8 shadow-[0_20_80px_rgba(88,65,65,0.04)]">
              <span className="material-symbols-outlined text-primary mb-4 text-3xl">
                auto_awesome
              </span>
              <h3 className="font-headline mb-2 text-xl">AI Integration</h3>
              <p className="text-on-surface-variant text-sm">
                Leveraging modern LLMs to augment engineering workflows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Biography;
