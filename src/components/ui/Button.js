import Link from 'next/link';

/**
 * Button
 * variants: "primary" | "outline" | "ghost"
 * sizes:    "sm" | "md" | "lg"
 */
export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  className = '',
  type = 'button',
  style: overrideStyle = {},
  ...props
}) {
  const sizeClasses = {
    sm: 'px-6 py-2.5 text-sm',
    md: 'px-10 py-4 text-base',
    lg: 'px-12 py-5 text-base',
  };

  const variantStyles = {
    primary: {
      backgroundColor: 'var(--color-accent)',
      color: 'var(--color-paper)',
    },
    outline: {
      backgroundColor: 'transparent',
      color: 'var(--color-ink)',
      border: '1px solid var(--color-rule)',
    },
    ghost: {
      backgroundColor: 'transparent',
      color: 'var(--color-muted)',
    },
  };

  const computedStyle = {
    ...variantStyles[variant],
    ...overrideStyle,
  };

  const baseClass = [
    'inline-flex items-center gap-3 font-sans font-bold uppercase tracking-[0.2em] text-[11px]',
    'transition-all duration-300 active:translate-y-px',
    'hover:opacity-85 cursor-pointer',
    sizeClasses[size],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const content = (
    <>
      {icon && iconPosition === 'left' && (
        <span className="material-symbols-outlined text-lg">{icon}</span>
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <span className="material-symbols-outlined text-lg">{icon}</span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={baseClass} style={computedStyle} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={baseClass}
      style={computedStyle}
      {...props}
    >
      {content}
    </button>
  );
}
