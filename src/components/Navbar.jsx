import { useEffect, useState } from 'react'
import { nav, personal } from '../data/portfolio.js'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    // Sorted by document position so "topmost visible" stays correct even if
    // the nav array and the rendered section order ever drift apart.
    const sections = nav
      .map((n) => document.querySelector(n.href))
      .filter(Boolean)
      .sort((a, b) => a.offsetTop - b.offsetTop)
    const visible = new Set()

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visible.add(entry.target)
          else visible.delete(entry.target)
        })
        // Several sections can sit in the band at once — always highlight the
        // topmost one on the page so the order tracks the scroll direction.
        const topmost = sections.find((s) => visible.has(s))
        if (topmost) setActive(`#${topmost.id}`)
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <header className="sticky top-0 z-50 bg-bg/85 backdrop-blur-md border-b border-line">
      <div className="max-w-wrap mx-auto px-7 py-4 flex items-center justify-between">
        <a href="#" className="font-mono font-semibold text-[14.5px] tracking-tight">
          bhavya<span className="text-accent">priya</span>.dev
        </a>

        <ul className="hidden md:flex gap-7 text-sm list-none m-0 p-0">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`no-underline pb-1 border-b-[1.5px] transition-colors ${
                  active === item.href
                    ? 'text-accent-deep border-accent'
                    : 'text-ink-soft border-transparent hover:text-ink'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden flex items-center justify-center w-9 h-9 border border-line rounded-md"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-line bg-bg px-7 py-4 flex flex-col gap-4 text-sm">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`no-underline ${active === item.href ? 'text-accent-deep font-medium' : 'text-ink-soft'}`}
            >
              {item.label}
            </a>
          ))}
          <a href={`mailto:${personal.email}`} className="no-underline text-ink-soft">
            Email
          </a>
        </div>
      )}
    </header>
  )
}
