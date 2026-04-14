const ExperienceCard = ({
  id,
  accentColor,
  side,
  displayPeriod,
  company,
  location,
  highlights,
  isCurrent,
  role,
  skills,
}) => {
  return (
    <div
      key={id}
      className={`relative grid grid-cols-1 items-center gap-0 md:grid-cols-2`}
    >
      {/* Timeline dot */}
      <div
        className="absolute top-1/2 left-1/2 z-10 hidden h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full md:flex"
        style={{
          backgroundColor: accentColor,
          boxShadow: `0 0 0 4px var(--color-surface), 0 0 0 6px ${accentColor}33`,
        }}
      >
        <div className="h-2 w-2 rounded-full bg-white" />
      </div>

      {/* Left cell */}
      <div
        className={`pr-0 md:pr-20 ${side === 'right' ? 'text-right' : ''} ${side === 'left' ? 'order-2 pl-0 text-left md:order-1' : ''}`}
      >
        {side === 'right' ? (
          <div
            className="p-10 pl-4 text-right"
            style={{ borderRadius: 'var(--radius-xl)' }}
          >
            <p className="font-label text-on-surface-variant/60 mb-1 text-sm">
              {displayPeriod.start} - {displayPeriod.end}
            </p>
            <p
              className="font-headline text-3xl font-bold tracking-tight whitespace-nowrap"
              style={{ color: accentColor }}
            >
              {company?.name}
            </p>
            <p className="font-label mt-1 text-sm uppercase text-shadow-neutral-200">
              {location}
            </p>
          </div>
        ) : (
          <div
            className="relative px-8 py-10"
            style={{
              backgroundColor: 'var(--color-surface-container-low)',
              borderRadius: 'var(--radius-xl)',
            }}
          >
            <div
              className={`border-outline-variant absolute top-1/2 z-10 hidden h-0 w-12 -translate-y-1/2 items-center justify-center border-b md:flex ${side === 'right' ? 'right-full' : 'left-full'}`}
            ></div>
            <p className="font-label mb-2 text-sm font-bold tracking-widest uppercase">
              {role}
            </p>
            <p
              className="font-body mb-4 text-sm leading-relaxed"
              style={{ color: 'var(--color-on-surface-variant)' }}
            >
              {company?.description}
            </p>
            <ul className="space-y-2">
              {highlights.map((b) => (
                <li key={b.title} className="flex items-start gap-2">
                  <span
                    className="material-symbols-outlined mt-0.5 flex-shrink-0 text-sm"
                    style={{ color: accentColor }}
                  >
                    check_circle
                  </span>
                  <span
                    className="font-body text-sm"
                    style={{
                      color: 'var(--color-on-surface-variant)',
                    }}
                  >
                    {b.description}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill.label}
                  className="font-label px-3 py-1 text-xs tracking-wide uppercase"
                  style={{
                    backgroundColor: 'var(--color-surface-container-highest)',
                    color: 'var(--color-on-surface-variant)',
                    borderRadius: 'var(--radius-full)',
                  }}
                >
                  {skill.label}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Right cell */}
      <div
        className={`pl-0 md:pl-20 ${side === 'right' ? 'order-1 md:order-2' : 'order-1 pr-0 text-right md:pr-20'}`}
      >
        {side === 'right' ? (
          <div
            className="relative px-8 py-10"
            style={{
              backgroundColor: 'var(--color-surface-container-low)',
              borderRadius: 'var(--radius-xl)',
            }}
          >
            <div
              className={`border-outline-variant absolute top-1/2 z-10 hidden h-0 w-12 -translate-y-1/2 items-center justify-center border-b md:flex ${side === 'right' ? 'right-full' : 'left-full'}`}
            ></div>
            <p className="font-label mb-2 text-sm font-bold tracking-widest uppercase">
              {role}
            </p>
            <p
              className="font-body mb-4 text-sm leading-relaxed"
              style={{ color: 'var(--color-on-surface-variant)' }}
            >
              {company?.description}
            </p>
            <ul className="space-y-2">
              {highlights.map((b) => (
                <li key={b.title} className="flex items-start gap-2">
                  <span
                    className="material-symbols-outlined mt-0.5 flex-shrink-0 text-sm"
                    style={{ color: accentColor }}
                  >
                    check_circle
                  </span>
                  <span
                    className="font-body text-sm"
                    style={{
                      color: 'var(--color-on-surface-variant)',
                    }}
                  >
                    {b.description}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill.label}
                  className="font-label px-3 py-1 text-xs tracking-wide uppercase"
                  style={{
                    backgroundColor: 'var(--color-surface-container-highest)',
                    color: 'var(--color-on-surface-variant)',
                    borderRadius: 'var(--radius-full)',
                  }}
                >
                  {skill.label}
                </span>
              ))}
            </div>
          </div>
        ) : (
          <div className="p-10 pl-4 text-right">
            <p className="font-label text-on-surface-variant/60 mb-1 text-sm">
              {displayPeriod.start} - {displayPeriod.end}
            </p>
            <p
              className="font-headline text-3xl font-bold tracking-tight whitespace-nowrap"
              style={{ color: accentColor }}
            >
              {company?.name}
            </p>
            <p className="font-label mt-1 text-sm uppercase text-shadow-neutral-200">
              {location}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceCard;
