/** CONTENT-STRATEGY §7 — grouped, not a flat list. */
export const SKILL_GROUPS = [
  { group: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React'] },
  { group: 'Backend', items: ['PHP', 'Laravel', 'REST API'] },
  { group: 'Mobile', items: ['Dart', 'Flutter'] },
  { group: 'Database', items: ['MySQL', 'SQL'] },
  { group: 'Foundations', items: ['C', 'Java'] },
  { group: 'Tools & Practice', items: ['Git & GitHub', 'Technical documentation & reporting'] },
] as const

/**
 * §7 — kept as one small line, not a section: these are beginner/e-learning
 * level and shouldn't carry the visual weight of a case study.
 */
export const CERTIFICATION_ISSUERS = ['Simplilearn', 'Dicoding', 'MySkill', 'Udemy']
