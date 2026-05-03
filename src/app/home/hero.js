"use client";

const Hero = () => {
  return (
    <>
      <style>{`
        @keyframes vd-fade-down {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes vd-fade-up {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes vd-slide-up {
          from { opacity: 0; transform: translateY(105%); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes vd-fade-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes vd-card-rise {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes vd-scroll-pulse {
          0%, 100% { opacity: 0.35; transform: scaleY(1); }
          50%       { opacity: 1;    transform: scaleY(1.08); }
        }

        .vd-nav-anim       { animation: vd-fade-down 0.6s ease 0.1s both; }
        .vd-eyebrow-anim   { animation: vd-fade-up   0.7s ease 0.35s both; }
        .vd-line1-anim     { animation: vd-slide-up  0.75s cubic-bezier(0.16,1,0.3,1) 0.45s both; }
        .vd-line2-anim     { animation: vd-slide-up  0.75s cubic-bezier(0.16,1,0.3,1) 0.6s  both; }
        .vd-line3-anim     { animation: vd-slide-up  0.75s cubic-bezier(0.16,1,0.3,1) 0.75s both; }
        .vd-body-anim      { animation: vd-fade-up   0.7s ease 0.9s  both; }
        .vd-focus-anim     { animation: vd-fade-up   0.7s ease 1.05s both; }
        .vd-photo-anim     { animation: vd-fade-in   0.9s ease 0.55s both; }
        .vd-card-anim      { animation: vd-card-rise 0.7s cubic-bezier(0.16,1,0.3,1) 1.15s both; }
        .vd-scroll-anim    { animation: vd-fade-in   0.6s ease 1.4s  both; }
        .vd-scroll-line    { animation: vd-scroll-pulse 2s ease-in-out 1.6s infinite; }

        .vd-photo-wrap img {
          transition: filter 0.65s ease, transform 0.65s ease;
        }
        .vd-photo-wrap:hover img {
          filter: grayscale(20%) contrast(1.05) !important;
          transform: scale(1.03);
        }
      `}</style>

      {/* HERO */}
      <section className="relative flex min-h-svh items-center bg-[#F5F0E8] px-6 pb-16 pt-32 md:px-10 md:pt-32 lg:px-16">
        <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* LEFT */}
          <div className="flex flex-col">
            <span className="vd-eyebrow-anim mb-5 block text-[0.625rem] font-medium uppercase tracking-[0.2em] text-stone-400">
              Vimal Desai — From Pixel to Pipeline
            </span>

            <h1
              className="mb-7 font-serif italic leading-[0.92] tracking-tight text-stone-900"
              style={{ fontSize: "clamp(3rem, 5.5vw, 5.5rem)" }}
            >
              <span className="block overflow-hidden pb-1">
                <span className="vd-line1-anim block">Architecting</span>
              </span>
              <span className="block overflow-hidden pb-1">
                <span className="vd-line2-anim block" style={{ color: "#8B1A2B" }}>Full-Stack</span>
              </span>
              <span className="block overflow-hidden pb-1">
                <span className="vd-line3-anim block">
                  Experiences<br />That Scale
                </span>
              </span>
            </h1>

            <p className="vd-body-anim mb-8 max-w-[430px] text-[0.9375rem] leading-[1.78] text-stone-500">
              I architect and ship full-stack systems that serve thousands — React,
              Next.js, Node.js, TypeScript, AWS. My craft spans editorial-grade
              frontends, distributed backends, and test-driven delivery that moves
              fast without breaking things.
            </p>

            <div className="vd-focus-anim flex items-center gap-4">
              <div className="h-px w-8 shrink-0" style={{ background: "#8B1A2B" }} />
              <span className="font-serif text-lg italic text-stone-700">
                Focused on Distributed Systems &amp; AI-Augmented Engineering
              </span>
            </div>
          </div>

          {/* RIGHT */}
          <div className="vd-photo-anim relative mx-auto max-w-sm lg:max-w-none w-auto">
            {/* Corner brackets */}
            <div
              className="pointer-events-none absolute -right-4 -top-4 hidden h-10 w-10 md:block"
              style={{
                borderTop: "1.5px solid rgba(139,26,43,0.35)",
                borderRight: "1.5px solid rgba(139,26,43,0.35)",
                borderRadius: "0 4px 0 0",
              }}
            />
            <div
              className="pointer-events-none absolute -bottom-4 -left-4 hidden h-10 w-10 md:block"
              style={{
                borderBottom: "1.5px solid rgba(139,26,43,0.35)",
                borderLeft: "1.5px solid rgba(139,26,43,0.35)",
                borderRadius: "0 0 0 4px",
              }}
            />

            {/* Photo */}
            <div className="vd-photo-wrap relative aspect-[4/5] max-h-[580px] overflow-hidden rounded-md bg-stone-800">
              <img
                src="/assets/hero-image.png"
                alt="Portrait of Vimal Desai"
                className="h-full w-full object-cover"
                style={{ filter: "grayscale(80%) contrast(1.05)", opacity: 0.92 }}
              />
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background: "linear-gradient(135deg, rgba(139,26,43,0.16) 0%, transparent 58%)",
                  mixBlendMode: "multiply",
                }}
              />
              <div
                className="pointer-events-none absolute inset-0 rounded-md"
                style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.14)" }}
              />
            </div>

            {/* Floating card */}
            <div
              className="vd-card-anim absolute -bottom-5 right-4 rounded-xl border border-stone-200
                         bg-white/90 px-5 py-4 backdrop-blur-md lg:-bottom-8 lg:-right-8"
              style={{ boxShadow: "0 16px 40px rgba(26,21,18,0.13)" }}
            >
              <p className="mb-1 text-[0.58rem] font-medium uppercase tracking-[0.2em] text-stone-400">
                Current Focus
              </p>
              <p
                className="font-serif text-[1.15rem] font-semibold italic lg:text-xl"
                style={{ color: "#8B1A2B" }}
              >
                AI-Augmented Engineering
              </p>
            </div>
          </div>
        </div>

      
      </section>
    </>
  );
};

export default Hero;