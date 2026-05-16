import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'
import { motion } from 'framer-motion'

const highlights = [
  { label: 'Focus', value: '.NET, React, integrazioni' },
  { label: 'Metodo', value: 'Agile, code review, delivery' },
  { label: 'Qualita', value: 'Performance, UX, manutenzione' },
]

const valuePoints = [
  'Software che regge la produzione: API nette, logging chiaro e problemi rintracciabili in pochi minuti.',
  'UX rapida e piacevole: interfacce chiare, accessibili e stabili su device diversi.',
  'Delivery senza drama: pipeline pulite, test automatici e feedback loop corti con il team.',
]

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <motion.div
            className="max-w-2xl space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700">
              Software Developer / Fullstack Developer
            </p>
            <h1 className="font-display text-4xl font-bold leading-tight text-slate-950 sm:text-5xl">
              Francesco Fiumara, sviluppo software tra .NET, React e integrazioni.
            </h1>
            <p className="text-base leading-8 text-slate-600 sm:text-lg">
              Abbino back-end robusti e front-end curati: API pulite, performance misurabili, UX piacevoli,
              con attenzione a qualità e miglioramento continuo.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-300 transition hover:-translate-y-0.5 hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
              >
                Guarda progetti & skill
              </Link>
              <Link
                to="/contact"
                className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:border-teal-300 hover:text-teal-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
              >
                Contattami
              </Link>
              <div className="flex flex-wrap gap-2">
                <a
                  href="/cv.pdf"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-teal-300 hover:text-teal-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Scarica il CV in italiano"
                >
                  <span aria-hidden="true">🇮🇹</span>
                  <span>Scarica CV</span>
                </a>
                <a
                  href="/cv_eng.pdf"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-teal-300 hover:text-teal-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Scarica il CV in inglese"
                >
                  <span aria-hidden="true">🇬🇧</span>
                  <span>Download CV</span>
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="relative w-full max-w-sm"
          >
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-xl shadow-slate-200/80">
              <img
                src="/headshot.jpg"
                alt="Ritratto professionale di Francesco Fiumara"
                className="aspect-[4/5] w-full object-cover"
                width="384"
                height="480"
              />
            </div>
          </motion.div>
        </div>
        <motion.div
          className="mt-8 grid gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:grid-cols-3 sm:gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        >
          {highlights.map((item) => (
            <motion.div
              key={item.label}
              className="rounded-xl border border-slate-200 bg-white px-4 py-5 text-center shadow-sm"
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 220, damping: 18 }}
            >
              <div className="text-xs uppercase tracking-[0.18em] text-slate-500">{item.label}</div>
              <div className="mt-2 font-display text-lg font-semibold text-slate-950">{item.value}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section>
        <SectionHeader
          eyebrow="Approccio"
          title="Si prova a migliorare ogni giorno di più"
          subtitle="Feedback e nuove tecnologie non mi spaventano"
        />
        <motion.div
          className="grid gap-4 md:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.08 },
            },
          }}
        >
          {valuePoints.map((point) => (
            <motion.div
              key={point}
              className="rounded-2xl border border-slate-200 bg-white p-6 leading-7 text-slate-600 shadow-soft transition hover:-translate-y-1 hover:border-teal-300"
              variants={{
                hidden: { opacity: 0, y: 16 },
                show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
              }}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 240, damping: 18 }}
            >
              {point}
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  )
}
