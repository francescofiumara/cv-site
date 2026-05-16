import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import ProjectCard from '../components/ProjectCard'
import { projects as staticProjects } from '../data/projects'
import { skills as staticSkills } from '../data/skills'
import { fetchProjects, fetchSkills, type Project as ApiProject, type SkillsProfile } from '../lib/api'

let cachedProjects: ApiProject[] = []
let cachedSkills: SkillsProfile | undefined
let hasFetched = false

type SkillBlock = { title: string; items: string[] }

export default function Projects() {
  const [projectList, setProjectList] = useState<ApiProject[]>(
    cachedProjects.length > 0 ? cachedProjects : staticProjects
  )
  const [skillProfile, setSkillProfile] = useState<SkillsProfile>(cachedSkills ?? staticSkills)
  const [loading, setLoading] = useState(!hasFetched)
  const [error, setError] = useState('')

  useEffect(() => {
    if (hasFetched) return
    let cancelled = false

    const load = async () => {
      setError('')
      try {
        const [apiProjects, apiSkills] = await Promise.all([fetchProjects(), fetchSkills()])
        if (cancelled) return
        cachedProjects = apiProjects
        cachedSkills = apiSkills
        setProjectList(apiProjects)
        setSkillProfile(apiSkills)
      } catch {
        if (cancelled) return
        cachedProjects = staticProjects
        cachedSkills = staticSkills
        setError('Backend non raggiungibile al momento. Ti mostro la versione statica dei contenuti.')
        setProjectList(staticProjects)
        setSkillProfile(staticSkills)
      } finally {
        hasFetched = true
        if (!cancelled) setLoading(false)
      }
    }
    load()

    return () => {
      cancelled = true
    }
  }, [])

  const skillBlocks: SkillBlock[] = useMemo(() => {
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
        {error && (
          <p className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-semibold text-amber-900 dark:border-amber-300/20 dark:bg-amber-300/10 dark:text-amber-100">
            {error}
          </p>
        )}
        <div className="mt-4 grid gap-6 md:grid-cols-2" aria-busy={loading}>
          {loading &&
            Array.from({ length: 4 }).map((_, idx) => (
              <div
                key={idx}
                className="h-44 animate-pulse rounded-2xl border border-white/70 bg-white/70 dark:border-white/10 dark:bg-white/10"
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
            <div className="rounded-2xl border border-white/70 bg-white/85 p-6 text-slate-600 dark:border-white/10 dark:bg-slate-900/82 dark:text-slate-300">
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
                className="h-32 animate-pulse rounded-2xl border border-white/70 bg-white/70 dark:border-white/10 dark:bg-white/10"
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
                  className="rounded-2xl border border-white/70 bg-white/85 p-6 shadow-soft backdrop-blur dark:border-white/10 dark:bg-slate-900/82"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                >
                  <h3 className="font-display text-xl font-semibold text-slate-950 dark:text-white">{block.title}</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {block.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-700 dark:bg-white/10 dark:text-slate-200"
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
            <div className="rounded-2xl border border-white/70 bg-white/85 p-6 text-slate-600 dark:border-white/10 dark:bg-slate-900/82 dark:text-slate-300">
              Stack non disponibile al momento.
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
