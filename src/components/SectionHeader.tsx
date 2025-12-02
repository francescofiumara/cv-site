type Props = {
  eyebrow: string
  title: string
  subtitle?: string
}

export default function SectionHeader({ eyebrow, title, subtitle }: Props) {
  return (
    <div className="mb-8">
      <div className="text-sm font-semibold uppercase tracking-[0.4em] text-teal-200">{eyebrow}</div>
      <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 max-w-3xl text-lg text-slate-300">{subtitle}</p>}
    </div>
  )
}
