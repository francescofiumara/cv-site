type Project = {
  title: string
  description: string
  impact: string
  stack: string[]
  link?: string
}

export default function ProjectCard({ title, description, impact, stack, link }: Project) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition duration-200 hover:-translate-y-1 hover:border-teal-300 hover:shadow-xl hover:shadow-slate-200/80">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-teal-600 via-sky-500 to-amber-400" />
      <div className="relative flex h-full flex-col gap-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-2xl font-semibold text-slate-950">{title}</h3>
          {link && (
            <a
              href={link}
              className="rounded-full border border-slate-200 px-3 py-1 text-sm font-semibold text-teal-800 transition hover:border-teal-300 hover:bg-teal-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
              target="_blank"
              rel="noreferrer"
              aria-label={`Apri demo di ${title}`}
            >
              Demo
            </a>
          )}
        </div>
        <p className="leading-7 text-slate-600">{description}</p>
        <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-semibold text-amber-900">
          {impact}
        </div>
        <div className="mt-auto flex flex-wrap gap-2">
          {stack.map((item) => (
            <span
              key={item}
              className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-700"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}
