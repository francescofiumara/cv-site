export default function Cv() {
  return (
    <div className="space-y-4">
      <div className="rounded-3xl border border-white/5 bg-white/5 p-4 shadow-soft">
        <div className="text-sm text-slate-200">
          Se non vedi il CV qui sotto, apri direttamente{' '}
          <a className="text-teal-200 underline" href="/cv.html" target="_blank" rel="noreferrer">
            cv.html
          </a>
          .
        </div>
      </div>
      <div className="overflow-hidden rounded-3xl border border-white/5 bg-white/5 shadow-soft">
        <iframe
          title="CV Francesco Fiumara"
          src="/cv.html"
          className="block w-full min-h-[520px] sm:min-h-[720px] lg:min-h-[960px]"
          loading="lazy"
        />
      </div>
    </div>
  )
}
