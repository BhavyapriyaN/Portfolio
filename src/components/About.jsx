import Section from './Section.jsx'
import { about } from '../data/portfolio.js'

export default function About() {
  return (
    <Section id="about" eyebrow="About">
      <div className="grid md:grid-cols-[1.3fr_0.9fr] gap-12">
        <div>
          {about.paragraphs.map((p, i) => (
            <p key={i} className="text-base text-[#33363A] mb-4.5 last:mb-0">
              {p}
            </p>
          ))}
        </div>
        <div className="border border-line rounded-xl bg-white overflow-hidden h-fit">
          {about.facts.map((fact, i) => (
            <div
              key={fact.label}
              className={`flex justify-between gap-4 px-5 py-4 text-[13.5px] ${
                i !== about.facts.length - 1 ? 'border-b border-line' : ''
              }`}
            >
              <span className="font-mono text-xs uppercase tracking-wide text-ink-soft">{fact.label}</span>
              <span className="font-semibold text-right">{fact.value}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
