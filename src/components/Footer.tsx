export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <span className="font-display font-semibold text-slate-950">Francesco Fiumara</span>
          <span className="ml-2 text-slate-400">Sviluppatore .NET</span>
        </div>
        <div className="flex gap-4">
          <a
            className="rounded-sm hover:text-teal-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
            href="https://github.com/francescofiumara"
            target="_blank"
            rel="noreferrer"
            aria-label="Apri profilo GitHub di Francesco Fiumara"
          >
            GitHub
          </a>
          <a
            className="rounded-sm hover:text-teal-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
            href="https://www.linkedin.com/in/francescofiumara/"
            target="_blank"
            rel="noreferrer"
            aria-label="Apri profilo LinkedIn di Francesco Fiumara"
          >
            LinkedIn
          </a>
          <a
            className="rounded-sm hover:text-teal-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
            href="mailto:francesco.fiumara97@gmail.com"
          >
            Contatti
          </a>
        </div>
      </div>
    </footer>
  )
}
