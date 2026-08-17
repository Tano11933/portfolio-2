import { Reveal } from '../motion/Reveal'

/** CONTENT-STRATEGY §3 — "Tools I ship with" instead of an empty client-logo row. */
const LABEL = 'Tools I ship with'
const TOOLS = ['Laravel', 'Express.js', 'TypeScript', 'Go', 'React', 'PostgreSQL', 'Redis', 'MySQL', 'Git', 'REST API']

/**
 * Thin stack bar. Stays on the onyx surface so the §4.5 status card, which
 * overlaps into it from 480px up, sits against one continuous background.
 * Top padding clears that overlap.
 */
export function TrustBar() {
  // §4.7 moved the status card inside the hero, so the extra top padding that
  // used to clear its overlap is gone and this is back to the §3 rhythm.
  return (
    <section aria-label={LABEL} className="bg-onyx pt-7 pb-8 md:pt-8">
      <Reveal className="shell">
        <div className="flex flex-col gap-5 border-t border-steel-deep pt-6 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
          <p className="font-mono text-mono-xs text-steel-light">{LABEL}</p>

          <ul className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {TOOLS.map((tool) => (
              <li key={tool} className="text-body-md font-medium text-platinum">
                {tool}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  )
}
