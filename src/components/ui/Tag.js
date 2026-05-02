export default function Tag({ children, variant = 'default' }) {
  const styles = {
    default: {
      backgroundColor: 'var(--color-surface-container-highest)',
      color: 'var(--color-on-surface-variant)',
    },
    primary: {
      backgroundColor: 'var(--color-primary-fixed)',
      color: 'var(--color-on-primary-fixed)',
    },
    secondary: {
      backgroundColor: 'var(--color-secondary-fixed)',
      color: 'var(--color-on-secondary-fixed)',
    },
  };

  return (
    <span
      className="font-body px-5 py-2 text-xs font-semibold tracking-wide"
      style={{
        ...styles[variant],
        borderRadius: 'var(--radius-full)',
      }}
    >
      {children}
    </span>
  );
}
