export default function LetsTalk() {
  return (
    <section
      className="relative overflow-hidden py-40 text-center"
      id="contact"
    >
      <div className="relative z-10 mx-auto max-w-4xl px-8">
        <h2
          className="font-headline text-on-surface mb-12 leading-none tracking-tighter italic"
          style={{ fontSize: 'clamp(3.5rem, 8vw, 8rem)' }}
        >
          Let's work <br /> together.
        </h2>
        {/* Globe / Interactive Area */}
        <div className="flex flex-col items-center gap-12">
          <div className="relative h-48 w-48">
            <svg
              className="text-primary/10 h-full w-full animate-[spin_20s_linear_infinite]"
              viewBox="0 0 100 100"
            >
              <circle
                cx={50}
                cy={50}
                fill="none"
                r={48}
                stroke="currentColor"
                strokeDasharray="4 4"
                strokeWidth="0.5"
              />
              <circle
                cx={50}
                cy={50}
                fill="none"
                r={30}
                stroke="currentColor"
                strokeWidth={1}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-primary h-3 w-3 rounded-full shadow-[0_0_15px_rgba(128,0,32,0.5)]" />
            </div>
          </div>
          <a
            className="font-headline border-primary/40 hover:text-primary border-b text-2xl italic transition-colors"
            href="/contact"
          >
            hello@vimlesai.io
          </a>
        </div>
      </div>
      {/* Abstract background shape */}
      <div className="bg-primary/5 absolute -bottom-20 -left-20 h-96 w-96 rounded-full blur-[100px]" />
      <div className="bg-secondary/5 absolute -top-20 -right-20 h-96 w-96 rounded-full blur-[100px]" />
    </section>
  );
}
