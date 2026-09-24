/** CONTENT-STRATEGY §7 — grouped, not a flat list. Synced with the current CV. */
export const SKILL_GROUPS = [
  {
    group: 'Frontend',
    items: [
      'HTML',
      'CSS',
      'JavaScript',
      'TypeScript',
      'React',
      'Livewire',
      'Blade',
      'Tailwind CSS',
      'Bootstrap',
    ],
  },
  {
    group: 'Backend',
    items: ['PHP', 'Laravel', 'Go (Fiber, GORM)', 'Node.js (Express.js)', 'REST API', 'WebSocket (real-time)'],
  },
  { group: 'Mobile', items: ['Dart', 'Flutter'] },
  {
    group: 'Database & Caching',
    items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'SQL query optimization'],
  },
  {
    group: 'Testing & Security',
    items: [
      'UAT',
      'RBAC & policy-based authorization',
      'Security auditing (OWASP Top 10)',
      'JWT auth & token rotation',
    ],
  },
  {
    group: 'Tools & Practice',
    items: ['Git & GitHub', 'Docker (Compose)', 'PWA architecture', 'Technical documentation'],
  },
  { group: 'Foundations', items: ['C', 'Java', 'System design'] },
] as const

/**
 * §7 — kept as one small line, not a section: these are beginner/e-learning
 * level and shouldn't carry the visual weight of a case study.
 */
export const CERTIFICATION_ISSUERS = ['freeCodeCamp', 'Udemy', 'Dicoding']
