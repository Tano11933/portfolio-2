import type { Project } from '../../data/projects'

export function ProjectLinks({ project, light = false }: { project: Project; light?: boolean }) {
  if (!project.links?.length) return null
  return <ul className={`mt-4 flex flex-wrap gap-3 text-body-sm ${light ? 'text-steel' : 'text-steel-light'}`}>
    {project.links.map((link) => <li key={link.url}>
      <a className="inline-flex min-h-[44px] items-center rounded-btn underline underline-offset-4" href={link.url} target="_blank" rel="noreferrer noopener">{link.label}</a>
    </li>)}
  </ul>
}
