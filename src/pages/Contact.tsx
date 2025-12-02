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
        <div className="rounded-3xl border border-white/5 bg-white/5 p-8 shadow-soft">
          <h3 className="font-display text-2xl font-semibold text-white">Scrivimi per conoscermi meglio</h3>
          <p className="mt-3 text-slate-200">
            Pronto per una nuova sfida, unendo competenze già apprese e voglia di imparare nuove tecnologie.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="mailto:francesco.fiumara97@gmail.com"
              className="rounded-full bg-teal-500 px-5 py-3 text-sm font-semibold text-ink shadow-lg shadow-teal-500/30 transition hover:-translate-y-0.5 hover:bg-teal-400"
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
              className="flex items-center justify-between rounded-3xl border border-white/5 bg-white/5 p-5 text-white transition hover:-translate-y-1 hover:border-teal-300/40"
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
            >
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-slate-400">{item.label}</div>
                <div className="font-display text-lg font-semibold">{item.value}</div>
              </div>
              <span className="text-sm text-teal-200">&rarr;</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
