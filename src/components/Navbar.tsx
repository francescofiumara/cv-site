import { useEffect, useState } from 'react'
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
  'rounded-full px-3 py-2 text-sm font-semibold tracking-tight text-slate-200 transition duration-200 hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300'
const activeClasses = 'bg-white text-slate-950 hover:bg-white hover:text-slate-950'

function ThemeIcon({ darkMode }: { darkMode: boolean }) {
  if (darkMode) {
    return (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 3v2.2M12 18.8V21M4.2 4.2l1.6 1.6M18.2 18.2l1.6 1.6M3 12h2.2M18.8 12H21M4.2 19.8l1.6-1.6M18.2 5.8l1.6-1.6"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    )
  }

  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M20.2 14.4A7.5 7.5 0 0 1 9.6 3.8 8.5 8.5 0 1 0 20.2 14.4Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function getInitialTheme() {
  if (typeof window === 'undefined') return false
  const savedTheme = window.localStorage.getItem('theme')
  if (savedTheme) return savedTheme === 'dark'
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
    window.localStorage.setItem('theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/95 shadow-lg shadow-slate-950/10 backdrop-blur-lg">
      <div className="relative mx-auto max-w-screen-xl px-4 sm:px-6">
        <div className="flex items-center justify-between py-4">
          <NavLink
            to="/"
            className="flex items-center gap-3 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-slate-900 shadow-sm">
              <img src="/logo.png" alt="Logo" className="h-8 w-8 object-contain" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.22em] text-teal-200">Fullstack</div>
              <div className="font-display text-lg font-semibold text-white">Francesco Fiumara</div>
            </div>
          </NavLink>

          <div className="hidden items-center gap-3 lg:flex">
            <nav className="flex items-center gap-1" aria-label="Navigazione principale">
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
              onClick={() => setDarkMode((value) => !value)}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-2 text-sm font-semibold text-white transition hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300"
              aria-label={darkMode ? 'Passa al tema chiaro' : 'Passa al tema scuro'}
            >
              <ThemeIcon darkMode={darkMode} />
              <span>Tema {darkMode ? 'chiaro' : 'scuro'}</span>
            </button>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 lg:hidden"
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
            className="absolute left-4 right-4 top-[calc(100%-6px)] rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 shadow-xl shadow-slate-950/30 sm:left-6 sm:right-6"
            aria-label="Navigazione mobile"
          >
            <div className="flex flex-col divide-y divide-white/10">
              {navLinks.map(({ to, label, end }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={end}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between rounded-lg px-2 py-3 text-base font-semibold text-slate-100 transition hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 ${
                      isActive ? 'text-teal-200' : ''
                    }`
                  }
                >
                  {label}
                  <span className="text-sm text-slate-400" aria-hidden="true">
                    &rarr;
                  </span>
                </NavLink>
              ))}
              <button
                type="button"
                onClick={() => setDarkMode((value) => !value)}
                className="mt-3 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/10 px-3 py-3 text-left text-base font-semibold text-white transition hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300"
                aria-label={darkMode ? 'Passa al tema chiaro' : 'Passa al tema scuro'}
              >
                <ThemeIcon darkMode={darkMode} />
                Tema {darkMode ? 'chiaro' : 'scuro'}
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
