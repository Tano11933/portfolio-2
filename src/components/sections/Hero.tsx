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
/** §2 supporting headline, option C (the recommended one). */
const POSITIONING = 'Full-stack developer building production systems for real businesses.'
const SUBTEXT =
  'Informatics undergraduate at Atma Jaya Yogyakarta, currently building production software for garment manufacturing while finishing a thesis on financial systems. I work across web, mobile, and database — from Laravel and Express.js to React and Flutter, end to end.'

/**
 * DESIGN-SYSTEM §4.7 — Name-Behind-Photo as a 1.3fr / 1fr asymmetric grid.
 *
 * Three grid children rather than two, so the sm order (eyebrow → photo → name)
 * works without duplicating the eyebrow: the eyebrow is its own item on row 1,
 * the rest of the copy is row 2, and the portrait takes column 2 of row 2 — which
 * is what makes it span from the top of the name down to the CTA line.
 *
 * The overlap is a consequence of the grid, not manual placement: `min-w-0` lets
 * the 1.3fr column resolve narrower than the name is wide, so GAETANO overflows
 * its own column and the portrait — later in the DOM, same base layer — paints
 * over the tail. No pixel offsets are tied to the navbar.
 *
 * Layering stays on §5 values: name and portrait both sit at base (0) and rely on
 * DOM order; the card takes float (10); the navbar (50) is above both.
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
      className="relative isolate flex min-h-svh scroll-mt-8 items-center overflow-hidden pt-8 pb-8 outline-none lg:pb-9"
    >
      <GradientMesh scrollTargetRef={heroRef} />

      <div className="shell w-full">
        {/* The column gap is what sets how far the name reaches behind the
            portrait: the photo column starts at (left column width + gap), so a
            wider gap pushes it right and eats the overlap. space-5 keeps ~100px
            of GAETANO behind the photo; at space-8 the two merely touched. */}
        <div className="grid items-stretch gap-5 lg:grid-cols-[1.3fr_1fr]">
          {/* Row 1, column 1 — eyebrow. §2 offers a shorter variant for tight
              space; the full line only fits the narrowed column from xl up. */}
          <motion.p
            {...rise(0)}
            className="order-1 w-fit rounded-pill border border-steel-light/40 px-3 py-1 font-mono text-mono-xs text-platinum lg:order-none lg:col-start-1 lg:row-start-1"
          >
            <span aria-hidden="true" className="mr-2 inline-block h-1 w-1 rounded-pill bg-success" />
            <span className="xl:hidden">{EYEBROW_SHORT}</span>
            <span className="hidden xl:inline">{EYEBROW}</span>
          </motion.p>

          {/* Row 2, column 2 — portrait. Ahead of the text block in the DOM only
              for source order on mobile; `order` restores the visual order, and
              the portrait still paints above the name because it is the later
              *positioned* sibling in this stacking context. */}
          <div className="relative order-2 lg:order-none lg:col-start-2 lg:row-start-2">
            {/* Nudged left so the silhouette actually reaches the name. The
                cut-out is only full-width at the shoulders; at the height
                GAETANO sits it is just the head, so the figure's own edge
                starts ~150px inside the column and letters and body merely met
                without touching.

                xl only. The same shift also drags the shoulders left over the
                body copy, and in the lg band the text column is narrow enough
                that there is no offset which reaches the name without covering
                the subtext. Below 1280px the two meet without overlapping.

                Sits on the portrait wrapper rather than the motion element:
                Motion writes `transform` inline and would clobber a Tailwind
                translate on the same node. */}
            <motion.div {...rise(0.16, 24)} className="h-full">
              <HeroPortrait className="h-[var(--size-hero-photo-sm)] w-fit lg:h-full lg:w-full xl:-translate-x-[18%]" />
            </motion.div>

            {/* §4.7 — card sits on the portrait's bottom-left corner, hanging
                slightly past its edge (Armory pattern), not beside the text.
                Hidden below lg under the §4.5 allowance; see note below. */}
            {/* Overhang is kept to space-3: the photo column starts one gap
                (space-5) past the text column, so a space-5 overhang would put
                the card's edge exactly on the subtext's last character. */}
            <div className="absolute bottom-7 -left-3 z-float hidden w-[min(320px,92%)] lg:block">
              <StatusCard />
            </div>
          </div>

          {/* Row 2, column 1 — name through CTAs. min-w-0 is what allows the
              column to resolve narrower than the name, producing the overlap. */}
          <div className="order-3 flex min-w-0 flex-col gap-5 lg:order-none lg:col-start-1 lg:row-start-2 lg:gap-6">
            {/* Deliberately unpositioned. The portrait column is the only
                positioned box here, so it paints in a later step than in-flow
                text and covers the tail of GAETANO. Giving the name
                `relative z-base` made it positioned too — same paint step, and
                being later in tree order it landed *above* the photo, which is
                the inverse of what §4.7 asks for. */}
            <motion.h1
              {...rise(0.08, 24)}
              className="font-display text-name font-semibold text-platinum uppercase"
            >
              <span className="block">Gabriel</span>
              <span className="block">Gaetano</span>
            </motion.h1>

            {/* Body copy is capped short of the column edge. Only the name is
                meant to run into the portrait; the silhouette is full-width at
                the shoulders, so at subtext height it reaches ~50px inside the
                column and would otherwise cover the last words of each line. */}
            <motion.p
              {...rise(0.24)}
              className="max-w-[40ch] font-display text-display-md font-medium text-platinum"
            >
              {POSITIONING}
            </motion.p>

            <motion.p {...rise(0.3)} className="max-w-[46ch] text-body-lg text-platinum-muted">
              {SUBTEXT}
            </motion.p>

            <motion.div {...rise(0.38)} className="mt-1 flex flex-wrap gap-4">
              <Button href="#work" onClick={(e) => goTo(e, '#work')}>
                View Work
              </Button>
              <Button variant="outline" href="#contact" onClick={(e) => goTo(e, '#contact')}>
                Get in Touch
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
