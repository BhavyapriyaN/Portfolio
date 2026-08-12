import { personal, heroStats } from '../data/portfolio.js'

export default function Hero() {
  return (
    <section className="pt-16 pb-14 md:pt-24 md:pb-[72px] border-b border-line">
      <div className="max-w-wrap mx-auto px-7 grid md:grid-cols-[1.5fr_1fr] gap-10 items-start">
        <div>
          {personal.openToOpportunities && (
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#2F7A4F] bg-success-bg border border-success-line px-3 py-1.5 rounded-full mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-success inline-block" />
              Open to opportunities
            </div>
          )}

          <h1 className="text-[34px] sm:text-[44px] md:text-[52px] font-extrabold tracking-tight leading-[1.05] mb-3.5">
            {personal.name}
          </h1>

          <p className="font-mono text-[15px] md:text-base text-accent-deep font-medium mb-5 flex flex-wrap items-center">
            {personal.roleTags.map((tag, i) => (
              <span key={tag} className="flex items-center">
                {i > 0 && <span className="text-ink-soft/50 mx-2">/</span>}
                {tag}
              </span>
            ))}
          </p>

          <p className="text-[17px] text-ink-soft max-w-lg mb-8">{personal.intro}</p>

          <div className="flex flex-wrap gap-3 mb-7">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 text-[14.5px] font-semibold px-5 py-3 rounded-lg bg-accent-deep text-white hover:bg-[#16304F] transition-colors"
            >
              View My Work
            </a>
            <a
              href={personal.resumeUrl}
              download
              className="inline-flex items-center gap-2 text-[14.5px] font-semibold px-5 py-3 rounded-lg border border-line text-ink hover:border-accent hover:text-accent-deep transition-colors"
            >
              Download Resume ↓
            </a>
          </div>

          <div className="flex flex-wrap gap-4.5 gap-x-5">
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-[13.5px] text-ink-soft hover:text-accent-deep no-underline"
            >
              LinkedIn ↗
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className="text-[13.5px] text-ink-soft hover:text-accent-deep no-underline"
            >
              GitHub ↗
            </a>
            <a href={`mailto:${personal.email}`} className="text-[13.5px] text-ink-soft hover:text-accent-deep no-underline">
              Email ↗
            </a>
          </div>
        </div>

        <div className="border border-line rounded-xl bg-white p-6">
          <div className="font-mono text-[12.5px] uppercase tracking-wider text-accent-deep flex items-center gap-2 mb-4.5">
            <span className="w-3.5 h-px bg-accent" />
            Current impact
          </div>
          {heroStats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex justify-between items-center py-3 ${
                i !== heroStats.length - 1 ? 'border-b border-line' : ''
              }`}
            >
              <span className="font-mono font-semibold text-lg text-accent-deep">{stat.value}</span>
              <span className="text-xs text-ink-soft max-w-[150px] text-right">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
