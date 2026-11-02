import { PROJECT_GALLERIES } from '../../data/galleries'
import type { Project } from '../../data/projects'
import { Card } from '../ui/Card'
import { Tag } from '../ui/Tag'
import { ProjectGallery } from './ProjectGallery'
import { ProjectLinks } from './ProjectLinks'

/**
 * Condensed card for the "More Work" grid (CONTENT-STRATEGY §5, "grid lebih
 * kecil"). Carries Problem and What it demonstrates — the two fields that
 * actually persuade — and drops the feature list, which is what keeps these
 * cards visibly smaller than the featured case studies.
 */
export function CompactProjectCard({ project }: { project: Project }) {
  return (
    <Card variant="ghost" className="h-full p-5">
      <article tabIndex={-1} id={project.slug} className="flex h-full scroll-mt-8 flex-col gap-4 outline-none">
        <div className="flex flex-col gap-3">
          {(project.period || project.context) && <p className="font-mono text-mono-xs text-steel-light">{[project.period, project.context].filter(Boolean).join(' · ')}</p>}
          <h4 className="text-display-md">{project.name}</h4>
          <ul className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <li key={tech}>
                <Tag>{tech}</Tag>
              </li>
            ))}
          </ul>
        </div>


        <ProjectGallery items={PROJECT_GALLERIES[project.slug] ?? []} projectName={project.name} compact />

        {project.status && <p className="font-mono text-mono-xs text-steel-light">{project.status}</p>}
        <p className="text-body-md text-platinum-muted">{project.problem}</p>
        <p className="text-body-sm text-platinum-muted">{project.role}</p>

        <ul className="list-disc space-y-2 pl-5 text-body-sm text-platinum-muted">
          {project.features.map((feature) => <li key={feature}>{feature}</li>)}
        </ul>
        <ProjectLinks project={project} />
      </article>
    </Card>
  )
}
