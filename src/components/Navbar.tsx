import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Home', to: '/', end: true },
  { label: 'Progetti & Skill', to: '/projects' },
  { label: 'Esperienze', to: '/experience' },
  { label: 'Formazione', to: '/education' },
  { label: 'Contatti', to: '/contact' },
]

const navClasses =
  'text-sm font-medium tracking-tight transition-colors duration-200 hover:text-teal-200'
const activeClasses = 'text-teal-200'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  return (
    <header className="sticky top-0 z-10 bg-midnight/80 backdrop-blur-lg">
      <div className="relative mx-auto max-w-screen-xl px-4 sm:px-6">
        <div className="flex items-center justify-between py-4">
          <NavLink to="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 shadow-soft">
              <img src="/logo.png" alt="Logo" className="h-8 w-8 object-contain" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-slate-300">Fullstack</div>
              <div className="font-display text-lg font-semibold text-white">Francesco Fiumara</div>
            </div>
          </NavLink>

          <nav className="hidden items-center gap-6 text-slate-200 lg:flex">
            {navLinks.map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) => `${navClasses} ${isActive ? activeClasses : ''}`}
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:border-teal-300/60 hover:text-teal-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 lg:hidden"
            aria-expanded={mobileOpen}
            aria-label="Apri il menu di navigazione"
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 block h-0.5 w-full rounded-full bg-current transition-transform duration-200 ${
                  mobileOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0'
                }`}
              />
              <span
                className={`absolute left-0 block h-0.5 w-full rounded-full bg-current transition-opacity duration-200 ${
                  mobileOpen ? 'top-1/2 -translate-y-1/2 opacity-0' : 'top-1/2 -translate-y-1/2'
                }`}
              />
              <span
                className={`absolute left-0 block h-0.5 w-full rounded-full bg-current transition-transform duration-200 ${
                  mobileOpen ? 'bottom-1/2 translate-y-1/2 -rotate-45' : 'bottom-0'
                }`}
              />
            </span>
            Menu
          </button>
        </div>

        <div
          className={`lg:hidden transition-all duration-200 ${
            mobileOpen ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none -translate-y-2 opacity-0'
          }`}
        >
          <nav className="absolute left-4 right-4 top-[calc(100%-6px)] rounded-2xl border border-white/10 bg-ink/95 px-4 py-3 shadow-soft sm:left-6 sm:right-6">
            <div className="flex flex-col divide-y divide-white/5">
              {navLinks.map(({ to, label, end }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={end}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-2 py-3 text-base font-semibold text-white transition hover:text-teal-200 ${
                      isActive ? 'text-teal-200' : ''
                    }`
                  }
                >
                  {label}
                  <span className="text-sm text-slate-400">&rarr;</span>
                </NavLink>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
