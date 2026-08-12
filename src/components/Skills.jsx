import Section from './Section.jsx'
import { skillGroups } from '../data/portfolio.js'

function SkillGroup({ group }) {
  return (
    <div className="border border-line rounded-xl p-7 bg-white">
      <h3 className="font-mono text-sm uppercase tracking-wide text-accent-deep mb-1.5">{group.title}</h3>
      <p className="text-xs text-ink-soft mb-5">{group.desc}</p>
      <div className="flex flex-wrap gap-2.5">
        {group.skills.map((s) => (
          <span key={s} className="text-[13px] px-3.5 py-2 rounded-md bg-bg-alt border border-line">
            {s}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Capabilities" title="Skills">
      <div className="grid sm:grid-cols-2 gap-6">
        {skillGroups.map((group) => (
          <SkillGroup key={group.title} group={group} />
        ))}
      </div>
    </Section>
  )
}
