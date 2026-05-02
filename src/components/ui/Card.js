export default function Card({
  children,
  className = '',
  padding = 'p-8',
  style = {},
}) {
  return (
    <div
      className={`relative overflow-hidden ${padding} ${className}`}
      style={{
        backgroundColor: 'var(--color-surface-container-highest)',
        border: '1px solid rgba(224,191,191,0.1)',
        borderRadius: 'var(--radius-xl)',
        ...style,
      }}
    >
      {children}
    </div>
  );
}
