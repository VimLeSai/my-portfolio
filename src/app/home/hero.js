const Hero = () => {
  return (
    <section className="mx-auto flex min-h-screen max-w-screen-2xl items-center overflow-hidden px-6 py-24 md:px-12 lg:h-screen lg:px-8 2xl:max-h-[1320px]">
      <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-12">
        <div className="z-10 lg:col-span-7 py-8 ">
          <span className="font-label text-on-surface-variant mb-4 block text-[10px] tracking-[0.2em] uppercase md:mb-6 md:text-xs">
            Vimal Desai — From Pixel to Pipeline
          </span>
          <h1 className="font-headline text-on-surface mb-6 text-5xl leading-[0.9] tracking-tighter italic md:mb-8 md:text-7xl lg:text-8xl">
            Architecting <br />
            <span className="text-primary-container">
              Full-Stack 
            </span>{' '}
            Experiences
            <br />
            That Scale
          </h1>
          <p className="font-body text-on-surface-variant mb-8 max-w-xl text-base leading-relaxed md:mb-10 md:text-lg">
            I architect and ship full-stack systems that serve thousands — React, Next.js, Node.js, TypeScript, AWS. My craft spans editorial-grade frontends, distributed backends, and test-driven delivery that moves fast without breaking things.
          </p>
          <div className="flex items-center gap-4 md:gap-6 xl:gap-8">
            <div className="bg-outline-variant h-px w-8 md:w-12" />
            <span className="font-headline text-lg italic md:text-xl">
              Focused on Distributed Systems & AI-Augmented Engineering
            </span>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none h-fit">
          <div className="bg-surface-container-highest group relative aspect-4/5 max-h-150 overflow-hidden rounded-lg">
            <img
              alt="Portrait of Vimal Desai"
              className="h-full w-full object-cover opacity-90 mix-blend-multiply grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-25"
              data-alt="Monochrome professional portrait of an engineer in a studio"
              src="/assets/hero-image.png"
            />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-white/20 ring-inset" />
          </div>
          {/* Floating Architectural Element */}
          <div className="bg-surface-container-low border-outline-variant/10 absolute -bottom-6 -left-6 hidden rounded-xl border p-6 shadow-2xl md:block lg:-bottom-12 lg:-left-12 lg:p-8">
            <div className="flex flex-col gap-1">
              <span className="font-label text-on-surface-variant text-[10px] tracking-widest uppercase">
                Current Focus
              </span>
              <span className="font-headline text-primary text-xl italic lg:text-2xl">
                AI-Augmented Engineering
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
