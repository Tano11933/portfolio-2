import { CERTIFICATION_ISSUERS, SKILL_GROUPS } from '../../data/skills'
import { Section, SectionHeading } from '../layout/Section'
import { Reveal, RevealGroup, RevealItem } from '../motion/Reveal'

/**
 * CONTENT-STRATEGY §7 — grouped rather than a flat list. Rendered as a
 * definition list of category → items, which is the semantic form of the
 * two-column table in §7.
 *
 * Continues About's platinum surface, so it drops its top padding (see §3).
 */
export function Skills() {
  return (
    <Section id="skills" tone="light" flushTop>
      <Reveal>
        <SectionHeading tone="light" label="Skills" title="What I work with" />
      </Reveal>

      <RevealGroup
        as="dl"
        stagger={0.06}
        className="mt-7 grid gap-x-6 gap-y-5 md:grid-cols-2 lg:grid-cols-3"
      >
        {SKILL_GROUPS.map(({ group, items }) => (
          <RevealItem
            key={group}
            className="flex flex-col gap-3 border-t border-platinum-muted pt-4"
          >
            <dt className="font-mono text-mono-xs uppercase text-steel">{group}</dt>
            {/* Separators, not just gaps: multi-word entries like
                "Git & GitHub" and "Technical documentation & reporting" read as
                one run when only whitespace divides them. */}
            <dd className="flex flex-wrap items-baseline gap-x-3 gap-y-2 text-body-md text-onyx">
              {items.map((item, i) => (
                <span key={item} className="inline-flex items-baseline gap-x-3">
                  {item}
                  {i < items.length - 1 && (
                    <span aria-hidden="true" className="text-steel">
                      ·
                    </span>
                  )}
                </span>
              ))}
            </dd>
          </RevealItem>
        ))}
      </RevealGroup>

      <p className="mt-7 text-body-sm text-steel-deep">
        <span className="font-mono text-mono-xs uppercase text-steel">Certifications</span>{' '}
        <span className="ml-2">{CERTIFICATION_ISSUERS.join(' · ')}</span>
      </p>
    </Section>
  )
}
