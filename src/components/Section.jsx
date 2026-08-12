export default function Section({ id, eyebrow, title, subtitle, children, noBorder, maxWidth }) {
  return (
    <section id={id} className={`py-16 md:py-[76px] ${noBorder ? '' : 'border-b border-line'}`}>
      <div className={`mx-auto px-7 ${maxWidth ? maxWidth : 'max-w-wrap'}`}>
        {(eyebrow || title) && (
          <div className="mb-10 max-w-xl">
            {eyebrow && (
              <div className="flex items-center gap-2 mb-3.5 font-mono text-[12.5px] uppercase tracking-wider text-accent-deep">
                <span className="w-3.5 h-px bg-accent" />
                {eyebrow}
              </div>
            )}
            {title && (
              <h2 className="text-[26px] md:text-[30px] font-extrabold tracking-tight mb-2.5">{title}</h2>
            )}
            {subtitle && <p className="text-ink-soft text-[15.5px] m-0">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
