import Section from './Section.jsx'
import { certifications, awards } from '../data/portfolio.js'

function CertCard({ cert }) {
  return (
    <div className="border border-line rounded-xl p-5 bg-white">
      <div className="text-xs text-ink-soft mb-2.5">{cert.org}</div>
      <p className="text-[15px] font-bold m-0 mb-2.5 leading-snug">{cert.name}</p>
      <div className="font-mono text-[11.5px] text-accent-deep">{cert.date}</div>
    </div>
  )
}

export default function Certifications() {
  return (
    <Section id="certifications" eyebrow="Certifications" title="Certified & current">
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
                className="border border-line rounded-xl p-4.5 bg-white flex justify-between items-center flex-wrap gap-2"
              >
                <div>
                  <span className="font-semibold">{award.name}</span>
                  <span className="text-ink-soft text-sm"> — {award.org}</span>
                  {award.detail && <div className="text-[13px] text-ink-soft mt-0.5">{award.detail}</div>}
                </div>
                <span className="font-mono text-xs text-accent-deep whitespace-nowrap">{award.date}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </Section>
  )
}
