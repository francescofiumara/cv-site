type Props = {
  eyebrow: string
  title: string
  subtitle?: string
}

export default function SectionHeader({ eyebrow, title, subtitle }: Props) {
  return (
    <div className="mb-8 max-w-3xl">
      <div className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-700">{eyebrow}</div>
      <h2 className="mt-2 font-display text-3xl font-semibold text-slate-950 sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 text-base leading-7 text-slate-600 sm:text-lg">{subtitle}</p>}
    </div>
  )
}
