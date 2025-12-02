import { NavLink } from 'react-router-dom'

const navClasses =
  'text-sm font-medium tracking-tight transition-colors duration-200 hover:text-teal-200'

const activeClasses = 'text-teal-200'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 bg-midnight/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <NavLink to="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 shadow-soft">
            <img src="/logo.png" alt="Logo" className="h-8 w-8 object-contain" />
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-slate-300">Fullstack</div>
            <div className="font-display text-lg font-semibold text-white">Francesco Fiumara</div>
          </div>
        </NavLink>
        <nav className="flex items-center gap-6 text-slate-200">
          <NavLink to="/" end className={({ isActive }) => `${navClasses} ${isActive ? activeClasses : ''}`}>
            Home
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) => `${navClasses} ${isActive ? activeClasses : ''}`}
          >
            Progetti & Skill
          </NavLink>
          <NavLink
            to="/experience"
            className={({ isActive }) => `${navClasses} ${isActive ? activeClasses : ''}`}
          >
            Esperienze
          </NavLink>
          <NavLink
            to="/education"
            className={({ isActive }) => `${navClasses} ${isActive ? activeClasses : ''}`}
          >
            Formazione
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => `${navClasses} ${isActive ? activeClasses : ''}`}
          >
            Contatti
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
