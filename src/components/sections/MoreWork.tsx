import { MORE_PROJECTS } from '../../data/projects'
import { Reveal, RevealGroup, RevealItem } from '../motion/Reveal'
import { CompactProjectCard } from '../work/CompactProjectCard'

/**
 * Rendered inside the Featured Work section rather than as its own section:
 * both blocks are "work", and stacking two dark sections would double the §3
 * vertical rhythm between them for no reason.
 */
export function MoreWork() {
  return (
    <div className="mt-9">
      <Reveal>
        <h3 className="font-mono text-mono-xs uppercase text-steel-light">More work</h3>
      </Reveal>

      {/* Third column waits until xl: at 768px three across leaves ~224px per
          card, which wraps the longer titles and squeezes the copy. */}
      <RevealGroup className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {MORE_PROJECTS.map((project) => (
          <RevealItem key={project.slug} className="h-full">
            <CompactProjectCard project={project} />
          </RevealItem>
        ))}
      </RevealGroup>
    </div>
  )
}
