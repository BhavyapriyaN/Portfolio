import Section from './Section.jsx'
import ProjectCard from './ProjectCard.jsx'
import { projects } from '../data/portfolio.js'

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Featured Work"
      title="Selected engineering work"
      subtitle="Production work at Datagrokr Analytics."
    >
      <div className="grid sm:grid-cols-2 gap-5.5">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </Section>
  )
}
