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
        className="relative space-y-5 before:absolute before:bottom-0 before:left-3 before:top-0 before:w-px before:bg-slate-200 md:before:left-4"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        {experiences.map((exp) => (
          <motion.article
            key={`${exp.company}-${exp.period}`}
            variants={item}
            className="relative ml-9 overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-teal-300 hover:shadow-xl hover:shadow-slate-200/80 md:ml-12"
          >
            <span className="absolute -left-[2.05rem] top-7 h-4 w-4 rounded-full border-4 border-white bg-teal-600 shadow md:-left-[2.55rem]" />
            <div className="relative flex flex-col gap-2">
              <div className="flex flex-wrap items-center gap-3 text-sm">
                <span className="font-semibold text-slate-500">{exp.period}</span>
                <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-800">
                  {exp.company}
                </span>
              </div>
              <h3 className="font-display text-2xl font-semibold text-slate-950">{exp.role}</h3>
              <p className="leading-7 text-slate-600">{exp.summary}</p>
              <ul className="mt-2 space-y-2 text-slate-600">
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
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-700"
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
