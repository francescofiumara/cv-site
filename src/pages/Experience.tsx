import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import { experiences } from '../data/experience'

const container = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.08,
      duration: 0.4,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
}

export default function Experience() {
  return (
    <div className="space-y-12">
      <SectionHeader
        eyebrow="Esperienze"
        title="Percorso professionale"
        subtitle="Ruoli e impatto con focus su .NET e soluzioni integrate."
      />
      <motion.div
        className="grid gap-5 lg:grid-cols-2"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        {experiences.map((exp) => (
          <motion.article
            key={`${exp.company}-${exp.period}`}
            variants={item}
            className="relative overflow-hidden rounded-2xl border border-white/70 bg-white/85 p-6 shadow-soft backdrop-blur transition hover:-translate-y-1 hover:border-teal-300 hover:shadow-xl hover:shadow-slate-200/80 dark:border-white/10 dark:bg-slate-900/82 dark:hover:border-teal-400/60 dark:hover:shadow-slate-950/40"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-teal-500 via-sky-400 to-amber-400" />
            <div className="relative flex flex-col gap-2">
              <div className="flex flex-wrap items-center gap-3 text-sm">
                <span className="font-semibold text-slate-500 dark:text-slate-400">{exp.period}</span>
                <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-800 dark:bg-teal-400/10 dark:text-teal-100">
                  {exp.company}
                </span>
              </div>
              <h3 className="font-display text-2xl font-semibold text-slate-950 dark:text-white">{exp.role}</h3>
              <p className="leading-7 text-slate-600 dark:text-slate-300">{exp.summary}</p>
              <ul className="mt-2 space-y-2 text-slate-600 dark:text-slate-300">
                {exp.impact.map((line) => (
                  <li key={line} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-3 flex flex-wrap gap-2">
                {exp.stack.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-700 dark:bg-white/10 dark:text-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </div>
  )
}
