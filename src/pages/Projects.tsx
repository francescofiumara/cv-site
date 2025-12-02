import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import ProjectCard from '../components/ProjectCard'
import { fetchProjects, fetchSkills, type Project as ApiProject, type SkillsProfile } from '../lib/api'

let cachedProjects: ApiProject[] = []
let cachedSkills: SkillsProfile | null = null
let hasFetched = false

type SkillBlock = { title: string; items: string[] }

export default function Projects() {
  const [projectList, setProjectList] = useState<ApiProject[]>(cachedProjects)
  const [skillProfile, setSkillProfile] = useState<SkillsProfile | null>(cachedSkills)
  const [loading, setLoading] = useState(!hasFetched)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (hasFetched) return
    const load = async () => {
      setError(null)
      try {
        const [apiProjects, apiSkills] = await Promise.all([fetchProjects(), fetchSkills()])
        cachedProjects = apiProjects
        cachedSkills = apiSkills
        hasFetched = true
        setProjectList(apiProjects)
        setSkillProfile(apiSkills)
      } catch (err) {
        setError('Backend non raggiungibile al momento. Riprova più tardi.')
        setProjectList([])
        setSkillProfile(null)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  const skillBlocks: SkillBlock[] = useMemo(() => {
    if (!skillProfile) return []
    const source = skillProfile
    return [
      { title: 'Backend', items: source.backend },
      { title: 'Frontend', items: source.frontend },
      { title: 'Cloud & Data', items: source.cloud },
      { title: 'Practices', items: source.practices },
    ]
  }, [skillProfile])

  return (
    <div className="space-y-16">
      <section>
        <SectionHeader
          eyebrow="Progetti"
          title="Selezione di lavori recenti"
          subtitle="Un po' di progetti a cui ho lavorato in questi anni di servizio"
        />
        {error && <p className="text-sm text-accent">{error}</p>}
        <div className="mt-4 grid gap-6 md:grid-cols-2" aria-busy={loading}>
          {loading &&
            Array.from({ length: 4 }).map((_, idx) => (
              <div
                key={idx}
                className="h-44 animate-pulse rounded-3xl border border-white/5 bg-white/5"
                aria-hidden
              />
            ))}
          {!loading && projectList.length > 0 && (
            <motion.div
              className="contents"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              {projectList.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </motion.div>
          )}
          {!loading && projectList.length === 0 && !error && (
            <div className="rounded-3xl border border-white/5 bg-white/5 p-6 text-slate-200">
              Nessun progetto disponibile al momento.
            </div>
          )}
        </div>
      </section>

      <section>
        <SectionHeader
          eyebrow="Stack"
          title="Tecnologie"
          subtitle="Tecnologie utilizzate nel corso degli anni."
        />
        <div className="grid gap-4 md:grid-cols-2" aria-busy={loading}>
          {loading &&
            Array.from({ length: 4 }).map((_, idx) => (
              <div
                key={idx}
                className="h-32 animate-pulse rounded-3xl border border-white/5 bg-white/5"
                aria-hidden
              />
            ))}
          {!loading && skillBlocks.length > 0 && (
            <motion.div
              className="contents"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: 'easeOut', staggerChildren: 0.05 }}
            >
              {skillBlocks.map((block) => (
                <motion.div
                  key={block.title}
                  className="rounded-3xl border border-white/5 bg-white/5 p-6 shadow-soft"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                >
                  <h3 className="font-display text-xl font-semibold text-white">{block.title}</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {block.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-100"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
          {!loading && skillBlocks.length === 0 && (
            <div className="rounded-3xl border border-white/5 bg-white/5 p-6 text-slate-200">
              Stack non disponibile al momento.
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
