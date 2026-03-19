export default function HighlightItem({ item }) {
  return (
    <div className="mb-3 flex items-start gap-2.5">
      <span className="text-rule w-7 flex-shrink-0 text-right font-serif text-2xl leading-none">
        {item.value}
      </span>
      <div className="text-muted ml-1 text-[0.825rem] leading-[1.5]">
        <strong className="text-ink block text-[0.825rem] font-semibold">
          {item.label}
        </strong>
        {item.sub}
      </div>
    </div>
  );
}
