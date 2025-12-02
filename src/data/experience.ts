export type Experience = {
  role: string
  company: string
  period: string
  summary: string
  impact: string[]
  stack: string[]
}

export const experiences: Experience[] = [
  {
    role: 'Software Developer',
    company: 'Soc. Cooperativa Bilanciai',
    period: 'Set 2024 – Presente',
    summary: 'Sviluppo .NET per nuova peso-prezzatrice, integrazioni e servizi.',
    impact: [
      'Nuove feature e integrazioni per la linea di peso/prezzatura',
      'API e servizi .NET con attenzione a performance e affidabilità',
      'Collaborazione con team prodotto per rilasci continui',
    ],
    stack: ['.NET 8', 'C#', 'SQL Server', 'REST API'],
  },
  {
    role: 'Software Developer',
    company: 'Apex SRL',
    period: '2022 – 2024',
    summary: 'Consulenza su soluzioni custom e ecosistema Microsoft.',
    impact: [
      'Azure Functions e integrazioni Dynamics 365',
      'Sviluppi custom e supporto end-to-end per clienti',
      'Gestione delivery e assistenza post-rilascio',
    ],
    stack: ['Azure', 'Dynamics 365', 'C#', 'JavaScript', 'SQL'],
  },
  {
    role: 'Addetto sportello bancario',
    company: 'BPER Banca',
    period: '2020 – 2021',
    summary: 'Gestione operazioni di sportello e relazione con i clienti.',
    impact: [
      'Gestione cassa e operazioni clienti',
      'Supporto operativo quotidiano',
    ],
    stack: ['Customer care', 'Processi bancari'],
  },
  {
    role: 'System Integrator',
    company: 'Sielte SPA',
    period: '2016 – 2017',
    summary: 'Realizzazione e migrazione di impianti voce/dati e assistenza tecnica.',
    impact: [
      'Impianti TLC voce/dati e migrazione tra operatori',
      'Assistenza tecnica on-site per aziende',
    ],
    stack: ['Reti', 'TLC', 'Supporto tecnico'],
  },
]
