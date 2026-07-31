import { PROCESS } from '../../data/process'
import { Section, SectionHeading } from '../layout/Section'
import { Reveal, RevealGroup, RevealItem } from '../motion/Reveal'
import { Card, CardWatermark, type CardVariant } from '../ui/Card'

/**
 * §4.3 — 2×2 grid (one column below 480px per §6), solid and outline cards
 * alternating in a checkerboard so neither column reads as a single block.
 */
const variantFor = (index: number): CardVariant => {
  const row = Math.floor(index / 2)
  const column = index % 2
  return (row + column) % 2 === 0 ? 'solid' : 'outline'
}

export function HowIWork() {
  return (
    <Section id="process" tone="light">
      {/* CONTENT-STRATEGY §4 supplies the four cards but no section intro, so
          there is no supporting line here rather than an invented one. */}
      <Reveal>
        <SectionHeading tone="light" label="Process" title="How I work" />
      </Reveal>

      <RevealGroup className="mt-7 grid gap-5 md:grid-cols-2">
        {PROCESS.map((step, i) => {
          const variant = variantFor(i)
          return (
            <RevealItem key={step.number} className="h-full">
              <Card variant={variant} className="h-full p-5 md:p-6">
                <CardWatermark value={step.number} variant={variant} />
                <div className="relative flex flex-col gap-3">
                  <h3>{step.title}</h3>
                  <p
                    className={
                      variant === 'solid'
                        ? 'max-w-[46ch] text-platinum-muted'
                        : 'max-w-[46ch] text-steel-deep'
                    }
                  >
                    {step.body}
                  </p>
                </div>
              </Card>
            </RevealItem>
          )
        })}
      </RevealGroup>
    </Section>
  )
}
