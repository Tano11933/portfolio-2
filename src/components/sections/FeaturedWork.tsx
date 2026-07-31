import { FEATURED_PROJECTS } from '../../data/projects'
import { Section, SectionHeading } from '../layout/Section'
import { Reveal } from '../motion/Reveal'
import { CaseStudyCard } from '../work/CaseStudyCard'
import type { CardVariant } from '../ui/Card'
import { MoreWork } from './MoreWork'

/**
 * §4.3 alternation on a dark section: `ghost` outlines with one platinum card
 * between them, so the run of three case studies doesn't read as one slab.
 */
const variantFor = (index: number): CardVariant => (index % 2 === 1 ? 'outline' : 'ghost')

export function FeaturedWork() {
  return (
    <Section id="work">
      <Reveal>
        <SectionHeading label="Selected work" title="Featured work" />
      </Reveal>

      {/* Revealed per card rather than as a staggered group: these are tall
          enough that a container stagger would animate the last one while it
          is still well below the fold. */}
      <div className="mt-7 flex flex-col gap-5">
        {FEATURED_PROJECTS.map((project, i) => (
          <Reveal key={project.slug} amount={0.08}>
            <CaseStudyCard
              project={project}
              variant={variantFor(i)}
              // §1 puts the gradient-flow border on the standout card;
              // EagleJeans is the priority project in PRD §5.
              emphasised={i === 0}
            />
          </Reveal>
        ))}
      </div>

      <MoreWork />
    </Section>
  )
}
