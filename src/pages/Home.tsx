import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'
import { motion } from 'framer-motion'
import { prefetchProjectsData } from './Projects'

const highlights = [
  { label: 'Fullstack', value: '.NET, React e altro ancora' },
  { label: 'Agile', value: 'Team player, code review' },
  { label: 'UX & Quality', value: 'Test automation, performance' },
]

const valuePoints = [
  'Software che regge la produzione: API nette, logging chiaro e problemi rintracciabili in pochi minuti.',
  'UX rapida e piacevole: interfacce chiare, accessibili e stabili su device diversi.',
  'Delivery senza drama: pipeline pulite, test automatici e feedback loop corti con il team.',
]

export default function Home() {
  useEffect(() => {
    prefetchProjectsData()
  }, [])

  return (
    <div className="space-y-12">
      <section className="overflow-hidden rounded-4xl border border-white/5 bg-gradient-to-br from-teal-700/40 via-ink to-midnight p-6 shadow-soft sm:p-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <motion.div
            className="max-w-2xl space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <p className="text-base font-semibold uppercase tracking-[0.35em] text-teal-100 sm:text-lg">
              Fullstack Developer
            </p>
            <h1 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
              Ciao, sono Francesco. Sviluppatore Software con un background insolito.
            </h1>
            <p className="text-base text-slate-200 sm:text-lg">
              Abbino back-end robusti e front-end curati: API pulite, performance misurabili, UX piacevoli,
              con attenzione a qualità e miglioramento continuo (questo è quello che mi dico la mattina davanti allo specchio).
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="rounded-full bg-teal-500 px-5 py-3 text-sm font-semibold text-ink shadow-lg shadow-teal-500/30 transition hover:-translate-y-0.5 hover:bg-teal-400"
              >
                Guarda progetti & skill
              </Link>
              <Link
                to="/contact"
                className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-teal-300/50 hover:text-teal-100"
              >
                Contattami
              </Link>
              <a
                href="/cv.pdf"
                className="rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:-translate-y-0.5 hover:border-teal-300/50 hover:text-teal-50"
              >
                Scarica CV
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="relative w-full max-w-sm"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-teal-500/30 to-accent/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/10 shadow-2xl shadow-teal-500/10">
              <img
                src="/headshot.jpg"
                alt="Francesco Fiumara portrait"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
        <motion.div
          className="mt-6 grid gap-3 rounded-3xl bg-white/5 p-5 sm:grid-cols-3 sm:gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        >
          {highlights.map((item) => (
            <motion.div
              key={item.label}
              className="rounded-2xl border border-white/5 bg-white/5 px-4 py-5 text-center"
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 220, damping: 18 }}
            >
              <div className="text-xs uppercase tracking-[0.2em] text-slate-400">{item.label}</div>
              <div className="mt-2 font-display text-lg font-semibold text-white">{item.value}</div>
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
              className="rounded-3xl border border-white/5 bg-white/5 p-6 text-slate-200 shadow-soft transition hover:-translate-y-1 hover:border-teal-300/40"
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
