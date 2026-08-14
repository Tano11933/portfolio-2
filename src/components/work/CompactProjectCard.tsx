import { PROJECT_GALLERIES } from '../../data/galleries'
import type { Project } from '../../data/projects'
import { Card } from '../ui/Card'
import { Tag } from '../ui/Tag'
import { ProjectGallery } from './ProjectGallery'

/**
 * Condensed card for the "More Work" grid (CONTENT-STRATEGY §5, "grid lebih
 * kecil"). Carries Problem and What it demonstrates — the two fields that
 * actually persuade — and drops the feature list, which is what keeps these
 * cards visibly smaller than the featured case studies.
 */
export function CompactProjectCard({ project }: { project: Project }) {
  return (
    <Card variant="ghost" className="h-full p-5">
      <article className="flex h-full flex-col gap-4">
        <div className="flex flex-col gap-3">
          <h4 className="text-display-md">{project.name}</h4>
          <ul className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <li key={tech}>
                <Tag>{tech}</Tag>
              </li>
            ))}
          </ul>
        </div>

        {/* Shorter than the 320px on the featured cards, so these stay
            secondary to the case studies rather than competing with them. */}
        <ProjectGallery items={PROJECT_GALLERIES[project.slug] ?? []} height={200} />

        <p className="text-body-md text-platinum-muted">{project.problem}</p>

        <p className="mt-auto border-t border-steel-deep pt-4 text-body-sm text-steel-light">
          {project.demonstrates}
        </p>
      </article>
    </Card>
  )
}
