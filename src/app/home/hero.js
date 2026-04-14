const Hero = () => {
  return (
    <section className="mx-auto flex h-screen max-w-screen-2xl items-center overflow-hidden px-8 py-24 2xl:max-h-[1320px]">
      <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-12">
        <div className="z-10 lg:col-span-7">
          <span className="font-label text-on-surface-variant mb-6 block text-xs tracking-[0.2em] uppercase">
            Vimal Desai — Architecture of Scale
          </span>
          <h1 className="font-headline text-on-surface mb-8 text-6xl leading-[0.9] tracking-tighter italic md:text-8xl lg:text-9xl">
            Crafting <br />
            Monolithic <span className="text-primary-container">
              Digital
            </span>{' '}
            <br />
            Experiences
          </h1>
          <p className="font-body text-on-surface-variant mb-10 max-w-xl text-lg leading-relaxed">
            Synthesizing high-performance backend systems with editorial-grade
            user interfaces. Dedicated to the pursuit of technical elegance and
            operational resilience.
          </p>
          <div className="flex items-center gap-8">
            <div className="bg-outline-variant h-[1px] w-12" />
            <span className="font-headline text-xl italic">
              Available for Q4 2024
            </span>
          </div>
        </div>
        <div className="relative lg:col-span-5">
          <div className="bg-surface-container-highest group relative aspect-[4/5] overflow-hidden rounded-lg">
            <img
              alt="Portrait of Vimal Desai"
              className="h-full w-full object-cover opacity-90 mix-blend-multiply grayscale group-hover:grayscale-25 transition-all duration-700 group-hover:scale-105"
              data-alt="Monochrome professional portrait of an engineer in a studio"
              src="/assets/hero-image.png"
            />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-white/20 ring-inset" />
          </div>
          {/* Floating Architectural Element */}
          <div className="bg-surface-container-low border-outline-variant/10 absolute -bottom-12 -left-12 hidden rounded-xl border p-8 shadow-2xl md:block">
            <div className="flex flex-col gap-1">
              <span className="font-label text-on-surface-variant text-[10px] tracking-widest uppercase">
                Current Focus
              </span>
              <span className="font-headline text-primary text-2xl italic">
                Distributed Systems
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
