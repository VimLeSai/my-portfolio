export default function HighlightItem({ item }) {
  return (
    <div className="flex gap-2.5 mb-3 items-start">
      <span className="font-serif text-2xl text-rule leading-none flex-shrink-0 w-7 text-right">
        {item.value}
      </span>
      <div className="text-[0.78rem] leading-[1.5] text-muted">
        <strong className="block text-ink font-semibold text-[0.82rem]">
          {item.label}
        </strong>
        {item.sub}
      </div>
    </div>
  );
}