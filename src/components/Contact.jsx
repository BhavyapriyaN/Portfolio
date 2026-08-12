import Section from './Section.jsx'
import { personal } from '../data/portfolio.js'

export default function Contact() {
  return (
    <Section id="contact" noBorder>
      <div className="text-center max-w-lg mx-auto">
        <div className="flex justify-center items-center gap-2 mb-3.5 font-mono text-[12.5px] uppercase tracking-wider text-accent-deep">
          <span className="w-3.5 h-px bg-accent" />
          Contact
        </div>
        <h2 className="text-[28px] md:text-[32px] font-extrabold mb-3.5">Let's build something useful with data.</h2>
        <p className="text-ink-soft text-[15.5px] mb-7">
          Open to Data Engineering, BI, and Analytics roles.
        </p>
        <div className="flex gap-3.5 justify-center flex-wrap">
          <a
            href={`mailto:${personal.email}`}
            className="inline-flex items-center gap-2 text-[14.5px] font-semibold px-5 py-3 rounded-lg bg-accent-deep text-white hover:bg-[#16304F] transition-colors no-underline"
          >
            Email Me
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-[14.5px] font-semibold px-5 py-3 rounded-lg border border-line text-ink hover:border-accent hover:text-accent-deep transition-colors no-underline"
          >
            LinkedIn ↗
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-[14.5px] font-semibold px-5 py-3 rounded-lg border border-line text-ink hover:border-accent hover:text-accent-deep transition-colors no-underline"
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </Section>
  )
}
