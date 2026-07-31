import { motion, useReducedMotion, type Variants } from 'motion/react'
import type { ReactNode } from 'react'

const EASE = [0.22, 1, 0.36, 1] as const

/** Elements a reveal wrapper may render as, so it never breaks list semantics. */
const TAGS = { div: motion.div, dl: motion.dl, ul: motion.ul } as const
type Tag = keyof typeof TAGS

/**
 * §6 — under reduced motion a reveal is a plain fade with no translate.
 * Everything here animates opacity/transform only (PRD §7).
 */
function useRevealVariants(distance = 24): Variants {
  const prefersReduced = useReducedMotion()
  return {
    hidden: prefersReduced ? { opacity: 0 } : { opacity: 0, y: distance },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: prefersReduced ? 0.35 : 0.6, ease: EASE },
    },
  }
}

/** A single element that fades and rises once, the first time it scrolls in. */
export function Reveal({
  children,
  className,
  as = 'div',
  amount = 0.15,
}: {
  children: ReactNode
  className?: string
  as?: Tag
  /** Fraction of the element that must be visible. Keep small for tall blocks. */
  amount?: number
}) {
  const Component = TAGS[as]
  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={useRevealVariants()}
    >
      {children}
    </Component>
  )
}

/**
 * Container that staggers its RevealItem children — the "one orchestrated
 * moment" per section. Only worth using when the whole group fits roughly in
 * one screen; taller runs should reveal per item instead, or the later items
 * animate while still off-screen.
 */
export function RevealGroup({
  children,
  className,
  as = 'div',
  stagger = 0.08,
  amount = 0.1,
}: {
  children: ReactNode
  className?: string
  as?: Tag
  stagger?: number
  amount?: number
}) {
  const Component = TAGS[as]
  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: stagger } } }}
    >
      {children}
    </Component>
  )
}

export function RevealItem({
  children,
  className,
  as = 'div',
}: {
  children: ReactNode
  className?: string
  as?: Tag
}) {
  const Component = TAGS[as]
  return (
    <Component className={className} variants={useRevealVariants(20)}>
      {children}
    </Component>
  )
}
