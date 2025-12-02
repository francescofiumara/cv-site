export type Project = {
  title: string
  description: string
  impact: string
  stack: string[]
  link?: string
}

export const projects: Project[] = [
  {
    title: 'Observability Platform',
    description:
      'Dashboard real-time per monitorare servizi .NET e React con metriche custom, alerting e log correlati.',
    impact: '-35% MTTR grazie a tracing distribuito e alert mirati',
    stack: ['.NET 8', 'React', 'PostgreSQL', 'Azure', 'SignalR'],
  },
  {
    title: 'Customer Onboarding',
    description:
      'Wizard multi-step con validazioni condivise API/UI, integrazione CRM e policy di caching per ridurre i tempi di risposta.',
    impact: '-40% tempo di completamento onboarding e +20% conversione',
    stack: ['.NET 7', 'React', 'Redis', 'Azure AD', 'Cypress'],
  },
  {
    title: 'Data Sync Service',
    description:
      'Microservizio per sincronizzare ordini tra ERP e e-commerce, con retry/backoff e dead-letter queue.',
    impact: '99.9% consegne dati e code senza backlog grazie a resilienza e osservabilità',
    stack: ['.NET 8', 'MassTransit', 'RabbitMQ', 'Docker', 'k6'],
  },
]
