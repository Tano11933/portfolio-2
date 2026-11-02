import { readFile, writeFile } from 'node:fs/promises'
import ts from 'typescript'

async function loadData(file) {
  const source = await readFile(new URL(`../src/data/${file}.ts`, import.meta.url), 'utf8')
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2023 },
  })
  return import(`data:text/javascript;base64,${Buffer.from(outputText).toString('base64')}`)
}
const [{ PROFILE }, { FEATURED_PROJECTS, MORE_PROJECTS }, { SKILL_GROUPS }, { SELECTED_CREDENTIALS, OTHER_COURSES }] = await Promise.all([
  loadData('profile'), loadData('projects'), loadData('skills'), loadData('credentials'),
])
const absolute = (path) => new URL(path, PROFILE.siteUrl).href
const lines = [
  `# ${PROFILE.name}`, '', `${PROFILE.role}. ${PROFILE.location}. Open to relocation.`, '',
  PROFILE.summary, '', `[View CV (PDF)](${absolute(PROFILE.cv)})`, '',
  `Education: ${PROFILE.education.degree}, ${PROFILE.education.institution}, ${PROFILE.education.period}. GPA: ${PROFILE.education.gpa}.`, '',
  `Languages: ${PROFILE.languages}.`, '', '## Experience', '',
]
for (const item of PROFILE.experience) lines.push(`### ${item.role} at ${item.organization}`, '', item.period, '', item.context, '', ...item.highlights.map(text=>`- ${text}`), '')
lines.push('## Skills', '')
for (const item of SKILL_GROUPS) lines.push(`- ${item.group}: ${item.items.join(', ')}`)
lines.push('', '## Projects', '')
for (const project of [...FEATURED_PROJECTS, ...MORE_PROJECTS]) {
  lines.push(`### ${project.name}`, '', `[View project and screenshots](${PROFILE.siteUrl}#${project.slug})`, '')
  if (project.period) lines.push(`Period: ${project.period}.`, '')
  if (project.context) lines.push(`Context: ${project.context}.`, '')
  if (project.status) lines.push(`Status: ${project.status}.`, '')
  lines.push(project.problem, '', `My contribution: ${project.role}`, '', `Technologies: ${project.stack.join(', ')}.`, '', ...project.features.map(feature=>`- ${feature}`), '', project.demonstrates, '')
  for (const link of project.links ?? []) lines.push(`[${link.label}](${link.url})`, '')
}
lines.push('## Certifications and courses', '')
for (const credential of [...SELECTED_CREDENTIALS, ...OTHER_COURSES]) {
  lines.push(`- ${credential.title}. ${credential.issuer}, ${credential.date}. ${credential.kind}.`)
  if (credential.verification) lines.push(`  - [Verification](${credential.verification})`)
  if (credential.document) lines.push(`  - [Certificate PDF](${absolute(credential.document)})`)
}
lines.push('', '## Leadership', '')
for (const item of PROFILE.leadership) lines.push(`- ${item.role}, ${item.organization}, ${item.period}. ${item.detail}`)
lines.push('', '## Contact', '', `- [Email](mailto:${PROFILE.contact.email})`, `- [GitHub](${PROFILE.contact.github})`, `- [LinkedIn](${PROFILE.contact.linkedin})`, '')
await writeFile(new URL('../public/index.md', import.meta.url), lines.join('\n'))
await writeFile(new URL('../public/llms.txt', import.meta.url), `# ${PROFILE.name}\n\n> ${PROFILE.role} based in ${PROFILE.location}, open to full-time roles, freelance projects and relocation.\n\n${PROFILE.summary} Melodia (Spotify Clone) is a personal project in progress; its screenshots use demo catalog data and accounts.\n\n## Portfolio\n\n- [Profile and project summaries](${absolute('/index.md')}): Experience, contributions, skills, credentials and contact details in Markdown.\n- [Visual portfolio](${PROFILE.siteUrl}): Selected work and project screenshots.\n- [CV](${absolute(PROFILE.cv)}): Software Developer CV in PDF.\n\n## Professional profiles\n\n- [GitHub](${PROFILE.contact.github}): Repositories.\n- [LinkedIn](${PROFILE.contact.linkedin}): Professional profile.\n`)
await writeFile(new URL('../public/sitemap.xml', import.meta.url), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>${PROFILE.siteUrl}</loc><lastmod>${PROFILE.updated}</lastmod></url>\n</urlset>\n`)
