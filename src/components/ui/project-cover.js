/**
 * Image when we have one. A paper tile when we don't —
 * so archive cards and case studies never show a broken 404.
 */
export default function ProjectCover({
  src,
  alt,
  title,
  className = '',
  imgClassName = 'h-full w-full object-cover object-top',
  imgStyle,
  onMouseEnter,
  onMouseLeave,
}) {
  if (!src) {
    const initial = (title || '').trim().charAt(0) || '·';
    return (
      <div
        className={`relative flex h-full w-full flex-col justify-end overflow-hidden bg-[var(--color-surface-container-high)] p-6 ${className}`}
      >
        <span
          className="pointer-events-none absolute -right-2 -top-6 font-headline text-[8rem] leading-none text-[var(--color-primary-container)]/10 select-none transition-all duration-500 group-hover:scale-105 group-hover:text-[var(--color-primary-container)]/20"
          aria-hidden
        >
          {initial}
        </span>
        <p className="font-label text-[0.6rem] font-medium uppercase tracking-[0.2em] text-[var(--color-outline)]">
          Case study
        </p>
        {title ? (
          <p className="font-headline mt-1 line-clamp-3 text-xl leading-tight text-[var(--color-on-surface)]">
            {title}
          </p>
        ) : null}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt || title || ''}
      className={imgClassName}
      style={imgStyle}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    />
  );
}
