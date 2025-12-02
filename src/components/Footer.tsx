export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-ink px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-slate-300 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <span className="font-display font-semibold text-white">Francesco Fiumara</span>
          <span className="ml-2 text-slate-400">Sviluppatore .NET</span>
        </div>
        <div className="flex gap-4">
          <a
            className="hover:text-teal-200"
            href="https://github.com/francescofiumara"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="hover:text-teal-200"
            href="https://www.linkedin.com/in/francescofiumara/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a className="hover:text-teal-200" href="mailto:francesco.fiumara97@gmail.com">
            Contatti
          </a>
        </div>
      </div>
    </footer>
  )
}
