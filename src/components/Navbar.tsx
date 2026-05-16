import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const navLinks = [
  { label: 'Home', to: '/', end: true },
  { label: 'Progetti & Skill', to: '/projects' },
  { label: 'Esperienze', to: '/experience' },
  { label: 'Formazione', to: '/education' },
  { label: 'CV', to: '/cv' },
  { label: 'Contatti', to: '/contact' },
]

const navClasses =
  'rounded-full px-3 py-2 text-sm font-semibold tracking-tight text-slate-600 transition duration-200 hover:bg-slate-100 hover:text-slate-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500'
const activeClasses = 'bg-slate-950 text-white hover:bg-slate-950 hover:text-white'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/90 backdrop-blur-lg">
      <div className="relative mx-auto max-w-screen-xl px-4 sm:px-6">
        <div className="flex items-center justify-between py-4">
          <NavLink
            to="/"
            className="flex items-center gap-3 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm">
              <img src="/logo.png" alt="Logo" className="h-8 w-8 object-contain" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.22em] text-slate-500">Fullstack</div>
              <div className="font-display text-lg font-semibold text-slate-950">Francesco Fiumara</div>
            </div>
          </NavLink>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigazione principale">
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
            className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-950 shadow-sm transition hover:-translate-y-0.5 hover:border-teal-300 hover:text-teal-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileOpen ? 'Chiudi il menu di navigazione' : 'Apri il menu di navigazione'}
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
            {mobileOpen ? 'Chiudi' : 'Menu'}
          </button>
        </div>

        <div
          className={`lg:hidden transition-all duration-200 ${
            mobileOpen ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none -translate-y-2 opacity-0'
          }`}
        >
          <nav
            id="mobile-navigation"
            className="absolute left-4 right-4 top-[calc(100%-6px)] rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-xl shadow-slate-200/80 sm:left-6 sm:right-6"
            aria-label="Navigazione mobile"
          >
            <div className="flex flex-col divide-y divide-slate-100">
              {navLinks.map(({ to, label, end }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={end}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between rounded-lg px-2 py-3 text-base font-semibold text-slate-800 transition hover:bg-slate-50 hover:text-teal-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 ${
                      isActive ? 'text-teal-800' : ''
                    }`
                  }
                >
                  {label}
                  <span className="text-sm text-slate-400" aria-hidden="true">
                    &rarr;
                  </span>
                </NavLink>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
