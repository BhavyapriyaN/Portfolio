import Section from './Section.jsx'
import ExperienceItem from './ExperienceItem.jsx'
import { experience } from '../data/portfolio.js'

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've worked">
      <div className="relative pl-7">
        <div className="absolute left-[5px] top-1.5 bottom-1.5 w-px bg-line" />
        {experience.map((item, i) => (
          <ExperienceItem key={item.company} item={item} isLast={i === experience.length - 1} />
        ))}
      </div>
    </Section>
  )
}
