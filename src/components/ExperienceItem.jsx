export default function ExperienceItem({ item, isLast }) {
  return (
    <div className={`relative ${isLast ? '' : 'pb-11'}`}>
      <span className="absolute -left-7 top-1.5 w-[11px] h-[11px] rounded-full bg-accent border-[3px] border-accent-tint" />
      <div className="flex justify-between items-baseline flex-wrap gap-1.5 mb-1.5">
        <span className="text-lg font-bold">
          {item.role}{' '}
          <span className="text-ink-soft font-medium">
            @ <span className="text-accent-deep font-semibold">{item.company}</span>
          </span>
        </span>
        <span className="font-mono text-xs text-ink-soft whitespace-nowrap">{item.dates}</span>
      </div>
      <div className="text-[13px] text-ink-soft mb-3.5">{item.location}</div>
      <ul className="m-0 p-0 list-none flex flex-col gap-2.5">
        {item.bullets.map((b, i) => (
          <li key={i} className="text-[14.5px] text-[#33363A] pl-4 relative">
            <span className="absolute left-0 text-ink-soft">-</span>
            {b}
          </li>
        ))}
      </ul>
      {item.tech.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-4">
          {item.tech.map((t) => (
            <span
              key={t}
              className="font-mono text-[11.5px] bg-accent-tint text-accent-deep px-2.5 py-1 rounded border border-[#DCE6F0]"
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}
