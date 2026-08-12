import Section from './Section.jsx'
import { certifications, awards } from '../data/portfolio.js'

function CertCard({ cert }) {
  const body = (
    <>
      <div className="text-xs text-ink-soft mb-2.5">{cert.org}</div>
      <p className="text-[15px] font-bold m-0 mb-2.5 leading-snug">
        {cert.name}
        {cert.url && <span className="text-accent-deep font-normal"> ↗</span>}
      </p>
      <div className="font-mono text-[11.5px] text-accent-deep">{cert.date}</div>
    </>
  )

  const base = 'block border border-line rounded-xl p-5 bg-white'

  if (!cert.url) return <div className={base}>{body}</div>

  return (
    <a
      href={cert.url}
      target="_blank"
      rel="noreferrer"
      aria-label={`${cert.name} — view credential`}
      className={`${base} no-underline text-ink hover:border-accent transition-colors`}
    >
      {body}
    </a>
  )
}

export default function Certifications() {
  return (
    <Section id="certifications" eyebrow="Credentials" title="Professional certifications">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4.5 mb-8">
        {certifications.map((cert) => (
          <CertCard key={cert.name} cert={cert} />
        ))}
      </div>

      {awards && awards.length > 0 && (
        <div>
          <div className="font-mono text-xs uppercase tracking-wide text-ink-soft mb-3">Awards</div>
          <div className="flex flex-col gap-3">
            {awards.map((award) => (
            <div
              key={award.name}
              className="border border-line rounded-xl p-5 bg-white flex justify-between items-start flex-wrap gap-3"
            >
              <div>
                <div>
                  <span className="font-semibold">{award.name}</span>
                  <span className="text-ink-soft text-sm"> — {award.org}</span>
                </div>
                {award.detail && <div className="text-[13px] text-ink-soft mt-1">{award.detail}</div>}
              </div>
              <span className="font-mono text-xs text-accent-deep whitespace-nowrap pt-0.5">{award.date}</span>
            </div>
            ))}
          </div>
        </div>
      )}
    </Section>
  )
}
