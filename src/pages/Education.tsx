import SectionHeader from '../components/SectionHeader'
import { motion } from 'framer-motion'

const education = [
  {
    title: 'Laurea in Economia e Finanza',
    school: 'Università di Modena e Reggio Emilia',
    period: '2017 – 2020',
    details:
      'Percorso economico-finanziario che affianca il lato tecnico con analisi dati, processi e decision making.',
  },
  {
    title: 'Diploma in Informatica e Telecomunicazioni',
    school: 'I.T.I.S. E. Fermi',
    period: '2011 – 2016',
    details: 'Fondamenti di sviluppo, reti e sistemi: il primo passo per costruire prodotti digitali solidi.',
  },
]

export default function Education() {
  return (
    <div className="space-y-12">
      <SectionHeader
        eyebrow="Formazione"
        title="Percorso accademico"
        subtitle="Unisce basi tecniche e business per progettare soluzioni efficaci e sostenibili."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {education.map((item, idx) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: idx * 0.08 }}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft"
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="font-display text-xl font-semibold text-slate-950">{item.title}</h3>
              <span className="text-sm font-semibold text-slate-500">{item.period}</span>
            </div>
            <div className="mt-1 text-sm font-semibold text-teal-800">{item.school}</div>
            <p className="mt-3 leading-7 text-slate-600">{item.details}</p>
          </motion.article>
        ))}
      </div>
    </div>
  )
}
