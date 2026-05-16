export default function Cv() {
  return (
    <div className="w-full space-y-5">
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-700">CV</p>
            <h1 className="mt-2 font-display text-3xl font-semibold text-slate-950">
              Curriculum di Francesco Fiumara
            </h1>
            <p className="mt-2 max-w-2xl leading-7 text-slate-600">
              Versione navigabile incorporata nella pagina, con download diretto in italiano e inglese.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="/cv.pdf"
              className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-300 transition hover:-translate-y-0.5 hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
              target="_blank"
              rel="noreferrer"
            >
              Scarica CV
            </a>
            <a
              href="/cv_eng.pdf"
              className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:border-teal-300 hover:text-teal-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
              target="_blank"
              rel="noreferrer"
            >
              Download CV
            </a>
          </div>
        </div>
      </section>
      <div className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-600 shadow-soft">
        Se non vedi il CV qui sotto, apri direttamente{' '}
        <a
          className="font-semibold text-teal-800 underline decoration-teal-300 underline-offset-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
          href="/cv.html"
          target="_blank"
          rel="noreferrer"
        >
          cv.html
        </a>
        .
      </div>
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
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
