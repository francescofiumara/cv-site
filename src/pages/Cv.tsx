export default function Cv() {
  return (
    <div className="w-full space-y-5">
      <section className="rounded-2xl border border-white/70 bg-white/85 p-6 shadow-soft backdrop-blur dark:border-white/10 dark:bg-slate-900/82">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h1 className="font-display text-3xl font-semibold text-slate-950 dark:text-white">
              Qui trovi il mio curriculum completo
            </h1>
            <p className="mt-2 max-w-2xl leading-7 text-slate-600 dark:text-slate-300">
              Puoi leggerlo direttamente da questa pagina oppure scaricare la versione in italiano o in inglese.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="/cv.pdf"
              className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-300 transition hover:-translate-y-0.5 hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 dark:bg-teal-400 dark:text-slate-950 dark:shadow-teal-950/30 dark:hover:bg-teal-300"
              target="_blank"
              rel="noreferrer"
            >
              Scarica CV
            </a>
            <a
              href="/cv_eng.pdf"
              className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:border-teal-300 hover:text-teal-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:border-teal-300"
              target="_blank"
              rel="noreferrer"
            >
              Download CV
            </a>
          </div>
        </div>
      </section>
      <div className="rounded-2xl border border-white/70 bg-white/85 p-4 text-sm text-slate-600 shadow-soft backdrop-blur dark:border-white/10 dark:bg-slate-900/82 dark:text-slate-300">
        Se l'anteprima non si carica correttamente, puoi aprire il curriculum in una nuova scheda da{' '}
        <a
          className="font-semibold text-teal-800 underline decoration-teal-300 underline-offset-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 dark:text-teal-200"
          href="/cv.html"
          target="_blank"
          rel="noreferrer"
        >
          qui
        </a>
        .
      </div>
      <div className="overflow-hidden rounded-2xl border border-white/70 bg-white/90 shadow-soft dark:border-white/10 dark:bg-slate-900/82">
        <iframe
          title="CV Francesco Fiumara"
          src="/cv.html"
          className="block h-[72vh] min-h-[560px] w-full lg:h-[82vh]"
          loading="lazy"
        />
      </div>
    </div>
  )
}
