export type Credential = {
  title: string
  issuer: string
  date: string
  kind: 'Certification' | 'Course completion'
  document?: string
  verification?: string
}

export const SELECTED_CREDENTIALS: Credential[] = [
  { title: 'JavaScript Developer Certification', issuer: 'freeCodeCamp', date: 'Aug 2026', kind: 'Certification', document: '/credentials/javascript-developer-2026.pdf', verification: 'https://freecodecamp.org/certification/gabrielgaetano/javascript-v9' },
  { title: 'Certified Secure Computer User v2', issuer: 'EC-Council', date: 'Jun 2023', kind: 'Certification', document: '/credentials/secure-computer-user-2023.pdf' },
  { title: 'PHP with MySQL: Build 5 PHP and MySQL Projects', issuer: 'Udemy', date: 'Dec 2025', kind: 'Course completion', document: '/credentials/php-mysql-2025.pdf' },
  { title: 'Belajar Dasar AI', issuer: 'Dicoding', date: 'Dec 2025', kind: 'Course completion', document: '/credentials/ai-foundations-2025.pdf', verification: 'https://www.dicoding.com/certificates/72ZDK6ONVPYW' },
]

export const OTHER_COURSES: Credential[] = [
  { title: 'Prompt Engineering Certification: Master AI', issuer: 'Udemy', date: 'Dec 2025', kind: 'Course completion' },
  { title: 'Intro to Full Stack Web Development Free Course', issuer: 'Purwadhika', date: 'Dec 2025', kind: 'Course completion', verification: 'https://purwadhika.com/verify-certificate/PWDK-ITFSWDFC-251206-0000006' },
  { title: 'Web Development for Beginners', issuer: 'Simplilearn SkillUp', date: 'Dec 2025', kind: 'Course completion' },
  { title: 'Full-Stack Development 101', issuer: 'Simplilearn SkillUp', date: 'Dec 2025', kind: 'Course completion' },
  { title: 'Basics of Data Governance', issuer: 'UniAthena, in partnership with CIQ UK', date: 'Dec 2025', kind: 'Course completion' },
  { title: 'Build a Property Web: Setup Projects & Homepage', issuer: 'MySkill', date: 'Dec 2025', kind: 'Course completion' },
  { title: 'Back-End Development Introduction', issuer: 'MySkill', date: 'Dec 2025', kind: 'Course completion' },
]
