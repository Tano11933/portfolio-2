import { motion, useReducedMotion } from 'motion/react'
import { useRef } from 'react'
import { GradientMesh } from '../hero/GradientMesh'
import { Button } from '../ui/Button'
import { useSmoothScroll } from '../../lib/smooth-scroll-context'

/** CONTENT-STRATEGY §2 — headline option C, the recommended one. */
const HEADLINE = 'Full-stack developer building production systems for real businesses.'
const EYEBROW = 'Available for freelance work — Yogyakarta, Indonesia'
const SUBTEXT =
  'Informatics undergraduate at Atma Jaya Yogyakarta, currently building production software for garment manufacturing while finishing a thesis on financial systems. I work across web, mobile, and database — end to end.'

export function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollTo } = useSmoothScroll()
  const prefersReduced = useReducedMotion()

  const goTo = (event: React.MouseEvent, href: string) => {
    event.preventDefault()
    scrollTo(href)
  }

  const rise = (delay: number) =>
    prefersReduced
      ? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.3 } }
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
        }

  return (
    <section
      id="hero"
      ref={heroRef}
      tabIndex={-1}
      className="relative isolate flex min-h-svh scroll-mt-8 items-center overflow-hidden pt-8 pb-8 outline-none md:pb-9"
    >
      <GradientMesh scrollTargetRef={heroRef} />

      <div className="shell flex flex-col items-center gap-4 text-center md:gap-5">
        {/* The dot is inline rather than a flex sibling: when the pill wraps at
            360px a flex dot orphans onto its own line. */}
        <motion.p
          {...rise(0)}
          className="rounded-pill border border-steel-light/40 px-3 py-1 text-center font-mono text-mono-xs text-platinum"
        >
          <span
            aria-hidden="true"
            className="mr-2 inline-block h-1 w-1 rounded-pill bg-success align-middle"
          />
          {EYEBROW}
        </motion.p>

        <motion.h1 {...rise(0.08)} className="max-w-[20ch] text-balance">
          {HEADLINE}
        </motion.h1>

        <motion.p {...rise(0.16)} className="max-w-[58ch] text-body-lg text-platinum-muted">
          {SUBTEXT}
        </motion.p>

        {/* Side by side even at 360px: stacked, the secondary CTA falls below
            the fold on a 740px-tall phone. Both fit within the 328px gutter. */}
        <motion.div {...rise(0.24)} className="mt-2 flex flex-wrap justify-center gap-4">
          <Button href="#work" onClick={(e) => goTo(e, '#work')}>
            View Work
          </Button>
          <Button variant="outline" href="#contact" onClick={(e) => goTo(e, '#contact')}>
            Get in Touch
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
