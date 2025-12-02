type Project = {
  title: string
  description: string
  impact: string
  stack: string[]
  link?: string
}

export default function ProjectCard({ title, description, impact, stack, link }: Project) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-white/5 bg-white/5 p-6 shadow-soft transition-transform duration-200 hover:-translate-y-1 hover:border-teal-300/40 hover:shadow-2xl hover:shadow-teal-500/10">
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-teal-500/5 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
      <div className="relative flex flex-col gap-3">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-2xl font-semibold text-white">{title}</h3>
          {link && (
            <a
              href={link}
              className="text-sm font-semibold text-teal-200 hover:text-accent"
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </a>
          )}
        </div>
        <p className="text-slate-300">{description}</p>
        <div className="text-sm font-semibold text-accent">{impact}</div>
        <div className="flex flex-wrap gap-2">
          {stack.map((item) => (
            <span
              key={item}
              className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-100"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}
