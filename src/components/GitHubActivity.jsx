import Section from './Section.jsx'
import { personal, githubRepos } from '../data/portfolio.js'

function GitHubIcon() {
  return (
    <svg viewBox="0 0 16 16" className="w-[22px] h-[22px] fill-white">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  )
}

function RepoCard({ repo }) {
  return (
    <a
      href={repo.url}
      target="_blank"
      rel="noreferrer"
      className="block border border-line rounded-xl p-5 bg-white no-underline text-ink hover:shadow-card transition-shadow"
    >
      <div className="font-mono font-semibold text-[14px] mb-2">{repo.name}</div>
      {repo.description && <p className="text-sm text-ink-soft mb-3">{repo.description}</p>}
      {repo.tech && repo.tech.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {repo.tech.map((t) => (
            <span key={t} className="text-xs px-2.5 py-1 rounded bg-bg-alt border border-line">
              {t}
            </span>
          ))}
        </div>
      )}
    </a>
  )
}

export default function GitHubActivity() {
  const hasRepos = githubRepos && githubRepos.length > 0

  return (
    <Section id="github" eyebrow="Engineering Activity" title="On GitHub">
      {hasRepos ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4.5">
          {githubRepos.map((repo) => (
            <RepoCard key={repo.name} repo={repo} />
          ))}
        </div>
      ) : (
        <div className="border border-line rounded-xl bg-white p-8 flex justify-between items-center flex-wrap gap-5">
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-[10px] bg-accent-deep flex items-center justify-center">
              <GitHubIcon />
            </div>
            <div>
              <div className="font-mono font-semibold text-[15px]">github.com/BhavyapriyaN</div>
              <div className="text-[13px] text-ink-soft">Cloud data engineering & FinOps automation projects</div>
            </div>
          </div>
          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-[14.5px] font-semibold px-5 py-3 rounded-lg border border-line text-ink hover:border-accent hover:text-accent-deep transition-colors no-underline"
          >
            View Profile ↗
          </a>
        </div>
      )}
    </Section>
  )
}
