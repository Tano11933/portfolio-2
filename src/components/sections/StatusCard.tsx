import { motion, useReducedMotion } from 'motion/react'
import { Tag } from '../ui/Tag'

/** CONTENT-STRATEGY §2 — floating status card content. */
const STATUS = 'Available for freelance work'
const STACK = ['Laravel', 'React', 'Flutter', 'MySQL']
const BUILDING = 'EagleJeans — production tracking PWA'

/**
 * DESIGN-SYSTEM §4.5. Glass card that floats at the bottom of the hero and
 * overlaps the trust bar on desktop. Per §6 sm it drops in-flow and full-width
 * below 480px rather than overlapping anything.
 */
export function StatusCard() {
  const prefersReduced = useReducedMotion()

  return (
    <motion.div
      initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={
        prefersReduced
          ? { duration: 0.3 }
          : { duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }
      }
      className="gradient-ring-static rounded-card bg-onyx/60 p-5 shadow-card backdrop-blur-glass"
    >
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
        <div className="flex flex-col gap-3">
          <p className="flex items-center gap-2 font-mono text-mono-xs text-platinum">
            <span aria-hidden="true" className="relative flex h-2 w-2 items-center justify-center">
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
        </div>

        <p className="text-body-sm text-steel-light lg:text-right">
          <span className="font-mono text-mono-xs">Currently building:</span>{' '}
          <span className="text-platinum">{BUILDING}</span>
        </p>
      </div>
    </motion.div>
  )
}
