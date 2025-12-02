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
        className="grid gap-4 md:grid-cols-2"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        {experiences.map((exp) => (
          <motion.article
            key={`${exp.company}-${exp.period}`}
            variants={item}
            className="relative overflow-hidden rounded-3xl border border-white/5 bg-white/5 p-6 shadow-soft transition hover:-translate-y-1 hover:border-teal-300/40 hover:shadow-2xl hover:shadow-teal-500/10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-teal-500/5 opacity-0 transition-opacity duration-200 hover:opacity-100" />
            <div className="relative flex flex-col gap-2">
              <div className="flex flex-wrap items-center gap-3">
                <div className="font-display text-xl font-semibold text-white">{exp.role}</div>
                <span className="rounded-full bg-teal-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-100">
                  {exp.company}
                </span>
                <span className="text-sm text-slate-400">{exp.period}</span>
              </div>
              <p className="text-slate-200">{exp.summary}</p>
              <ul className="mt-2 space-y-1 text-slate-200">
                {exp.impact.map((line) => (
                  <li key={line} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-teal-400" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-3 flex flex-wrap gap-2">
                {exp.stack.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-100"
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
