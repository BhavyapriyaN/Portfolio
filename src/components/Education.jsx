import Section from './Section.jsx'
import { education } from '../data/portfolio.js'

export default function Education() {
  return (
    <Section id="education" eyebrow="Background" title="Education" maxWidth="max-w-[760px]">
      {education.map((edu, i) => (
        <div
          key={edu.degree}
          className={`flex justify-between gap-5 py-5 flex-wrap ${
            i !== education.length - 1 ? 'border-b border-line' : ''
          }`}
        >
          <div>
            <div className="font-bold text-[15.5px]">{edu.degree}</div>
            <div className="text-ink-soft text-[13.5px]">{edu.institution}</div>
          </div>
          <div className="font-mono text-xs text-ink-soft whitespace-nowrap">{edu.dates}</div>
        </div>
      ))}
    </Section>
  )
}
