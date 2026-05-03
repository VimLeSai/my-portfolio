const ImpactCards = ({ metrics, accentColor = '#8B1A2B' }) => {
  if (!metrics || metrics.length === 0) return null;

  return (
    <section className="mb-24">
      <p
        className="mb-8 text-[0.625rem] font-medium uppercase tracking-[0.2em]"
        style={{ color: 'var(--color-outline)' }}
      >
        Results &amp; Impact
      </p>

      <div
        className="grid overflow-hidden rounded-2xl"
        style={{
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          border: '0.5px solid var(--color-outline-variant)',
        }}
      >
        {metrics.map((metric, i) => (
          <div
            key={metric.label}
            className="relative flex flex-col p-7"
            style={{ background: 'var(--color-surface-container)' }}
          >
            {/* Vertical divider between cards */}
            {i > 0 && (
              <div
                className="absolute bottom-6 left-0 top-6 w-px"
                style={{ background: 'var(--color-outline-variant)' }}
              />
            )}

            {/* Metric label */}
            <p
              className="mb-5 text-[0.6rem] font-medium uppercase tracking-[0.16em]"
              style={{ color: 'var(--color-outline)' }}
            >
              {metric.label}
            </p>

            {/* Before */}
            <div className="mb-4 flex flex-col gap-1">
              <span
                className="text-[0.6rem] font-medium uppercase tracking-[0.14em]"
                style={{ color: 'var(--color-outline)' }}
              >
                Before
              </span>
              <span
                className="text-[0.8125rem] leading-snug line-through"
                style={{
                  color: 'var(--color-on-surface-variant)',
                  textDecorationColor: 'var(--color-outline-variant)',
                  textDecorationThickness: '1px',
                }}
              >
                {metric.before}
              </span>
            </div>

            {/* Transformation rule */}
            <div
              className="mb-4 h-px w-8"
              style={{ background: accentColor, opacity: 0.5 }}
            />

            {/* After */}
            <div className="flex flex-col gap-1">
              <span
                className="text-[0.6rem] font-medium uppercase tracking-[0.14em]"
                style={{ color: accentColor }}
              >
                After
              </span>
              {/*
                "After" value uses full-contrast on-surface color, NOT accentColor.
                Crimson on warm gray fails contrast. Let the italic serif weight
                and size do the heavy lifting; accentColor only on the tiny label.
              */}
              <span
                className="font-headline text-xl italic leading-snug"
                style={{ color: 'var(--color-on-surface)' }}
              >
                {metric.after}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImpactCards;
