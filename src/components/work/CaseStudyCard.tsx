import type { Project } from '../../data/projects'
import { cx } from '../../lib/cx'
import { Card, type CardVariant } from '../ui/Card'
import { Tag } from '../ui/Tag'

/**
 * Featured case study — the fixed CONTENT-STRATEGY §5 block order, as a
 * definition list so the labels are attached to their content semantically.
 *
 * Deliberately has no number watermark: §4.3 reserves that for the "How I Work"
 * cards, where the numbers mean sequence, so they don't become empty decoration.
 */
export function CaseStudyCard({
  project,
  variant,
  emphasised = false,
}: {
  project: Project
  variant: CardVariant
  /** §1 — gradient-flow border on the standout card. */
  emphasised?: boolean
}) {
  const isLight = variant === 'outline'
  const label = cx('font-mono text-mono-xs uppercase', isLight ? 'text-steel' : 'text-steel-light')
  const body = cx('mt-2 text-body-md', isLight ? 'text-steel-deep' : 'text-platinum-muted')

  return (
    <Card
      variant={variant}
      className={cx('p-5 md:p-6 lg:p-7', emphasised && 'gradient-ring-static')}
    >
      <article>
        <header className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between md:gap-5">
          <h3>{project.name}</h3>
          <ul className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <li key={tech}>
                <Tag tone={isLight ? 'light' : 'dark'}>{tech}</Tag>
              </li>
            ))}
          </ul>
        </header>

        <dl className="mt-5 grid gap-5 lg:grid-cols-2 lg:gap-6">
          <div>
            <dt className={label}>Problem</dt>
            <dd className={body}>{project.problem}</dd>
          </div>

          <div>
            <dt className={label}>Role &amp; Stack</dt>
            <dd className={body}>{project.role}</dd>
          </div>

          <div>
            <dt className={label}>Key features</dt>
            <dd>
              <ul className={cx(body, 'flex flex-col gap-2')}>
                {project.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className={cx(
                        'mt-2 h-1 w-1 shrink-0 rounded-pill',
                        isLight ? 'bg-steel' : 'bg-steel-light',
                      )}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </dd>
          </div>

          <div>
            <dt className={label}>What it demonstrates</dt>
            <dd className={body}>{project.demonstrates}</dd>
          </div>
        </dl>
      </article>
    </Card>
  )
}
