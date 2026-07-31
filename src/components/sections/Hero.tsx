import { motion, useReducedMotion } from 'motion/react'
import { useRef } from 'react'
import { GradientMesh } from '../hero/GradientMesh'
import { HeroPortrait } from '../hero/HeroPortrait'
import { StatusCard } from './StatusCard'
import { Button } from '../ui/Button'
import { useSmoothScroll } from '../../lib/smooth-scroll-context'

/** CONTENT-STRATEGY §2 — copy is verbatim; §2 supplies both eyebrow lengths. */
const EYEBROW = 'Open to full-time roles & freelance projects — Yogyakarta / Jakarta'
const EYEBROW_SHORT = 'Open to opportunities — Yogyakarta / Jakarta'
const SUBTEXT =
  'Informatics undergraduate at Atma Jaya Yogyakarta, currently building production software for garment manufacturing while finishing a thesis on financial systems. I work across web, mobile, and database — from Laravel and Express.js to React and Flutter, end to end.'

/**
 * DESIGN-SYSTEM §4.7 — Name-Behind-Photo.
 *
 * Layering uses only §5 values. The name and the portrait both sit on the base
 * layer (z-index 0) and the portrait comes second in the DOM, so it paints over
 * the name without inventing a z-index between 0 and 10 that §5 doesn't define.
 * The status card takes the float layer (10); navbar (50) stays above both.
 *
 * §4.7's supporting headline is deliberately omitted: §4.7 fixes the block order
 * as eyebrow → name+photo → subtext → CTAs, and §2 marks that line optional.
 */
export function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollTo } = useSmoothScroll()
  const prefersReduced = useReducedMotion()

  const goTo = (event: React.MouseEvent, href: string) => {
    event.preventDefault()
    scrollTo(href)
  }

  const rise = (delay: number, distance = 18) =>
    prefersReduced
      ? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.35 } }
      : {
          initial: { opacity: 0, y: distance },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
        }

  return (
    <section
      ref={heroRef}
      id="hero"
      tabIndex={-1}
      className="relative isolate flex min-h-svh scroll-mt-8 items-center overflow-hidden pt-8 pb-8 outline-none md:pb-9"
    >
      <GradientMesh scrollTargetRef={heroRef} />

      <div className="shell flex w-full flex-col gap-5 md:gap-6">
        {/* §2 offers a shorter eyebrow for tight space; the full line wraps
            below lg, so the short one is used there. */}
        <motion.p
          {...rise(0)}
          className="w-fit rounded-pill border border-steel-light/40 px-3 py-1 font-mono text-mono-xs text-platinum"
        >
          <span aria-hidden="true" className="mr-2 inline-block h-1 w-1 rounded-pill bg-success" />
          <span className="xl:hidden">{EYEBROW_SHORT}</span>
          <span className="hidden xl:inline">{EYEBROW}</span>
        </motion.p>

        {/* Name + portrait + companion card.
            §4.7 puts the non-overlapping fallback at `sm` only, but the overlap
            still fails through the whole md band: the portrait is sized off
            viewport *height* while the name scales with *width*, so at 480px the
            photo is as wide as "GAETANO" itself and buries 42% of it (30% at
            768px). The stacked layout therefore runs until lg, which is the same
            reason §4.7 gives for the fallback — "teks jadi tidak terbaca". */}
        <div className="relative flex flex-col gap-5 lg:block">
          {/* lg:w-fit makes this box hug the widest name line, so the portrait
              anchors to the *glyph* edge rather than the container edge — the
              overlap then stays proportionate as the name scales with vw. */}
          <div className="relative flex flex-col gap-5 lg:block lg:w-fit">
            <motion.h1
              {...rise(0.08, 24)}
              className="relative z-base order-2 font-display text-name font-semibold text-platinum uppercase lg:order-none"
            >
              <span className="block">Gabriel</span>
              <span className="block">Gaetano</span>
            </motion.h1>

            {/* Positioning lives on this wrapper and animation on the child:
                Motion writes `transform` inline, which would otherwise clobber
                a Tailwind translate utility on the same element. */}
            <div className="z-base order-1 w-fit lg:absolute lg:right-0 lg:bottom-0 lg:order-none lg:translate-x-[68%] xl:translate-x-[52%]">
              <motion.div {...rise(0.16, 24)}>
                <HeroPortrait className="h-[var(--size-hero-photo-sm)] lg:h-[var(--size-hero-photo)]" />
              </motion.div>
            </div>
          </div>

          {/* §4.7 — companion card pinned bottom-right of the portrait block.
              Only pinned from xl: the card is ~200px tall, and below 1280px the
              two-line name is shorter than that, so bottom-aligning it pushes
              the card up over the eyebrow. Between lg and xl it stays in flow
              but right-aligned and narrow, which keeps the secondary role §4.7
              asks for. Below lg it is full-width in flow (§6 sm). */}
          <div className="z-float lg:mt-6 lg:ml-auto lg:w-[340px] xl:absolute xl:right-0 xl:bottom-0 xl:mt-0 xl:w-[min(340px,38%)]">
            <StatusCard />
          </div>
        </div>

        <motion.p
          {...rise(0.24)}
          className="max-w-[62ch] text-body-lg text-platinum-muted"
        >
          {SUBTEXT}
        </motion.p>

        <motion.div {...rise(0.32)} className="flex flex-wrap gap-4">
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
