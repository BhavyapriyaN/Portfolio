import { personal } from '../data/portfolio.js'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="py-9">
      <div className="max-w-wrap mx-auto px-7 flex justify-between items-center flex-wrap gap-3.5 text-[13px] text-ink-soft">
        <span>
          © {year} {personal.name}
        </span>
        <div className="flex gap-4.5">
          <a href={personal.linkedin} target="_blank" rel="noreferrer" className="no-underline text-ink-soft hover:text-accent-deep">
            LinkedIn
          </a>
          <a href={personal.github} target="_blank" rel="noreferrer" className="no-underline text-ink-soft hover:text-accent-deep">
            GitHub
          </a>
          <a href={`mailto:${personal.email}`} className="no-underline text-ink-soft hover:text-accent-deep">
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
