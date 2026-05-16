import SectionHeader from '../components/SectionHeader'

const contacts = [
  { label: 'Email', value: 'francesco.fiumara97@gmail.com', href: 'mailto:francesco.fiumara97@gmail.com' },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/francescofiumara',
    href: 'https://www.linkedin.com/in/francescofiumara/',
  },
  {
    label: 'GitHub',
    value: 'github.com/francescofiumara',
    href: 'https://github.com/francescofiumara',
  },
]

export default function Contact() {
  return (
    <div className="space-y-10">
      <SectionHeader
        eyebrow="Contatti"
        title="Pronto per il prossimo passo"
        subtitle="Contattatemi per scoprire di più su di me"
      />
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-white/70 bg-white/85 p-8 shadow-soft backdrop-blur dark:border-white/10 dark:bg-slate-900/82">
          <h3 className="font-display text-2xl font-semibold text-slate-950 dark:text-white">Scrivimi per conoscermi meglio</h3>
          <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
            Pronto per una nuova sfida, unendo competenze già apprese e voglia di imparare nuove tecnologie.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="mailto:francesco.fiumara97@gmail.com"
              className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-300 transition hover:-translate-y-0.5 hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 dark:bg-teal-400 dark:text-slate-950 dark:shadow-teal-950/30 dark:hover:bg-teal-300"
            >
              Scrivimi
            </a>
          </div>
        </div>
        <div className="grid gap-4">
          {contacts.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center justify-between rounded-2xl border border-white/70 bg-white/85 p-5 text-slate-950 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-teal-300 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 dark:border-white/10 dark:bg-slate-900/82 dark:text-white"
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
              aria-label={`Apri contatto ${item.label}: ${item.value}`}
            >
              <div>
                <div className="text-xs uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">{item.label}</div>
                <div className="break-all font-display text-lg font-semibold">{item.value}</div>
              </div>
              <span className="ml-4 text-sm text-teal-700 dark:text-teal-200" aria-hidden="true">
                &rarr;
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
