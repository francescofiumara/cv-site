export type Project = {
  title: string
  description: string
  impact: string
  stack: string[]
}

export type SkillsProfile = {
  backend: string[]
  frontend: string[]
  cloud: string[]
  practices: string[]
}

const API_BASE = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:5051';

async function handleJson<T>(input: RequestInfo | URL): Promise<T> {
  const res = await fetch(input);
  if (!res.ok) {
    throw new Error(`Request failed: ${res.status}`);
  }
  return res.json() as Promise<T>;
}

export async function fetchProjects(): Promise<Project[]> {
  return handleJson<Project[]>(`${API_BASE}/api/projects`);
}

export async function fetchSkills(): Promise<SkillsProfile> {
  return handleJson<SkillsProfile>(`${API_BASE}/api/skills`);
}
