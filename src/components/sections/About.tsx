import { Section, SectionHeading } from '../layout/Section'
import { Reveal } from '../motion/Reveal'

/**
 * CONTENT-STRATEGY §6. The quote is set in the body face rather than the
 * display face: §2 assigns body-lg to intro paragraphs, and 55 words of Clash
 * Display at display-md would be a wall of display type.
 *
 * Education sits small underneath as §6 asks — credibility, not a headline.
 * The graduation clause §6 leaves blank is omitted rather than invented.
 */
export function About() {
  return (
    <Section id="about" tone="light">
      {/* One reveal for the whole block — the section is a single statement. */}
      <Reveal className="grid gap-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-9">
        <SectionHeading tone="light" label="About" title="Beyond code" />

        <div className="flex flex-col gap-6">
          <blockquote className="text-body-lg text-onyx">
            Outside of code, I&rsquo;ve led fundraising and sponsorship efforts for two major
            campus events (Sparkfest, Kopma Fest) — negotiating with sponsors, managing budgets,
            and coordinating teams. It&rsquo;s the same skill set that makes client work smooth:
            clear communication, realistic scoping, and following through.
          </blockquote>

          <dl className="flex flex-col gap-4 border-t border-platinum-muted pt-5">
            <div className="flex flex-col gap-1">
              <dt className="font-mono text-mono-xs uppercase text-steel">Education</dt>
              <dd className="text-body-sm text-steel-deep">
                Informatics undergraduate at Universitas Atma Jaya Yogyakarta (GPA 3.54)
              </dd>
            </div>

            {/* PRD §5 keeps the internship as an experience line, not a project card. */}
            <div className="flex flex-col gap-1">
              <dt className="font-mono text-mono-xs uppercase text-steel">Experience</dt>
              <dd className="text-body-sm text-steel-deep">
                Internship at PT Aerotek Global Inovasi (Beehive Drones)
              </dd>
            </div>
          </dl>
        </div>
      </Reveal>
    </Section>
  )
}
