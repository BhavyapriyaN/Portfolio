export default function ProjectCard({ project }) {
  return (
    <div className="border border-line rounded-xl p-6 bg-white transition-all duration-200 hover:shadow-card hover:-translate-y-0.5">
      <p className="text-[17px] font-bold m-0 mb-2.5">{project.name}</p>
      <p className="font-mono text-[11.5px] text-accent uppercase tracking-wide mb-3">{project.tagline}</p>
      <p className="text-sm text-[#33363A] mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <span key={t} className="text-[13px] px-3 py-1.5 rounded-md bg-bg-alt border border-line">
            {t}
          </span>
        ))}
      </div>
      {(project.githubUrl || project.demoUrl) && (
        <div className="flex gap-4 mt-4">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-xs text-ink-soft hover:text-accent-deep no-underline">
              Code ↗
            </a>
          )}
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noreferrer" className="text-xs text-ink-soft hover:text-accent-deep no-underline">
              Live demo ↗
            </a>
          )}
        </div>
      )}
    </div>
  )
}
