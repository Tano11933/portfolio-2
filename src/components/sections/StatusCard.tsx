import { motion, useReducedMotion } from 'motion/react'
import { cx } from '../../lib/cx'
import { Tag } from '../ui/Tag'

/** CONTENT-STRATEGY §2 — updated badge wording and stack (Express.js added). */
const STATUS = 'Open to full-time roles & freelance projects'
const STACK = ['Laravel', 'Express.js', 'React', 'Flutter', 'MySQL']
const BUILDING = 'EagleJeans - production tracking PWA'

/**
 * DESIGN-SYSTEM §4.5, as revised by §4.7.
 *
 * This is no longer the full-width card that overlapped the next section. §4.7
 * demotes it to a smaller companion pinned to the bottom-right of the portrait
 * block, so it complements the name rather than competing with it. The glass
 * surface, 1px gradient-flow ring and content from §2 are unchanged.
 *
 * Below 480px (§6 sm) it still drops in-flow and full-width.
 */
export function StatusCard({ className }: { className?: string }) {
  const prefersReduced = useReducedMotion()

  return (
    <motion.div
      initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={
        prefersReduced
          ? { duration: 0.3 }
          : { duration: 0.7, delay: 0.55, ease: [0.22, 1, 0.36, 1] }
      }
      className={cx(
        'gradient-ring-static rounded-card bg-onyx/80 p-4 shadow-card backdrop-blur-glass',
        className,
      )}
    >
      <div className="flex flex-col gap-3">
        <p className="flex items-start gap-2 font-mono text-mono-xs text-platinum">
          <span
            aria-hidden="true"
            className="relative mt-1 flex h-2 w-2 shrink-0 items-center justify-center"
          >
            <span className="absolute inline-flex h-1 w-1 animate-status rounded-pill bg-success" />
            <span className="relative inline-flex h-1 w-1 rounded-pill bg-success" />
          </span>
          {STATUS}
        </p>

        <ul className="flex flex-wrap gap-2">
          {STACK.map((item) => (
            <li key={item}>
              <Tag>{item}</Tag>
            </li>
          ))}
        </ul>

        <p className="border-t border-steel-deep pt-3 text-body-sm text-steel-light">
          <span className="font-mono text-mono-xs">Currently building:</span>{' '}
          <span className="text-platinum">{BUILDING}</span>
        </p>
      </div>
    </motion.div>
  )
}
