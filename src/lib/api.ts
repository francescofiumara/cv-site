export type Project = {
  title: string
  description: string
  impact: string
  stack: string[]
  link?: string
}

export type SkillsProfile = {
  backend: string[]
  frontend: string[]
  cloud: string[]
  practices: string[]
}

const API_BASE = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:5051'
const REQUEST_TIMEOUT_MS = 3500

async function handleJson<T>(input: RequestInfo | URL): Promise<T> {
  const controller = new AbortController()
  const timeoutId = window.setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS)

  const res = await fetch(input, { signal: controller.signal }).finally(() => {
    window.clearTimeout(timeoutId)
  })
  if (!res.ok) {
    throw new Error(`Request failed: ${res.status}`)
  }
  return res.json() as Promise<T>
}

export async function fetchProjects(): Promise<Project[]> {
  return handleJson<Project[]>(`${API_BASE}/api/projects`)
}

export async function fetchSkills(): Promise<SkillsProfile> {
  return handleJson<SkillsProfile>(`${API_BASE}/api/skills`)
}
