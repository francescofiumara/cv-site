export type Project = {
  title: string
  description: string
  impact: string
  stack: string[]
  link?: string
}

export const projects: Project[] = [
  {
    title: 'Peso-prezzatrice next-gen',
    description:
      'Sviluppo nuova macchina in Bilanciai con stack Linux, SQL Server, .NET e UI in Avalonia per interfaccia operatore.',
    impact: 'Work in progress: feature evolutive e integrazione con linea esistente',
    stack: ['.NET 8', 'C#', 'SQL Server', 'Avalonia', 'Linux'],
  },
  {
    title: 'Soluzioni Dynamics 365',
    description:
      'Progetti di consulenza con integrazioni custom: API C#, JavaScript per estensioni e connettori verso servizi interni.',
    impact: 'Delivery di feature su ciclo Agile con team clienti',
    stack: ['C#', '.NET', 'Dynamics 365', 'JavaScript'],
  },
  {
    title: 'Reporting & dati',
    description:
      'Integrazioni e pipeline dati con Power BI, Azure Functions e Power Apps a supporto dei flussi aziendali.',
    impact: 'Dashboard e automazioni operative',
    stack: ['Power BI', 'Azure Functions', 'Power Apps', 'SQL'],
  },
]
