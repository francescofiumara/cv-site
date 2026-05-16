type Project = {
  title: string
  description: string
  impact: string
  stack: string[]
  link?: string
}

export default function ProjectCard({ title, description, impact, stack, link }: Project) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-white/70 bg-white/85 p-6 shadow-soft backdrop-blur transition duration-200 hover:-translate-y-1 hover:border-teal-300 hover:shadow-xl hover:shadow-slate-200/80 dark:border-white/10 dark:bg-slate-900/82 dark:hover:border-teal-400/60 dark:hover:shadow-slate-950/40">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-teal-600 via-sky-500 to-amber-400" />
      <div className="relative flex h-full flex-col gap-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-2xl font-semibold text-slate-950 dark:text-white">{title}</h3>
          {link && (
            <a
              href={link}
              className="rounded-full border border-slate-200 px-3 py-1 text-sm font-semibold text-teal-800 transition hover:border-teal-300 hover:bg-teal-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 dark:border-white/10 dark:text-teal-200 dark:hover:bg-white/10"
              target="_blank"
              rel="noreferrer"
              aria-label={`Apri demo di ${title}`}
            >
              Demo
            </a>
          )}
        </div>
        <p className="leading-7 text-slate-600 dark:text-slate-300">{description}</p>
        <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-semibold text-amber-900 dark:border-amber-300/20 dark:bg-amber-300/10 dark:text-amber-100">
          {impact}
        </div>
        <div className="mt-auto flex flex-wrap gap-2">
          {stack.map((item) => (
            <span
              key={item}
              className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-700 dark:bg-white/10 dark:text-slate-200"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}
