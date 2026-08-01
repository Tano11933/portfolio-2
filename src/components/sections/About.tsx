import halftone from '../../assets/images/gabriel-poster-halftone.webp'
import halftoneMobile from '../../assets/images/gabriel-poster-halftone-mobile.webp'
import { Section, SectionHeading } from '../layout/Section'
import { Reveal } from '../motion/Reveal'

/**
 * CONTENT-STRATEGY §6. The quote is set in the body face rather than the
 * display face: §2 assigns body-lg to intro paragraphs, and 55 words of Clash
 * Display at display-md would be a wall of display type.
 *
 * Education sits small underneath as §6 asks — credibility, not a headline.
 * The graduation clause §6 leaves blank is omitted rather than invented.
 *
 * DESIGN-SYSTEM §4.8 adds the halftone portrait beside the copy. The heading
 * moved above the two columns rather than beside them: §4.8 wants a 2-column
 * text/portrait split, and keeping the old heading column as a third track left
 * the quote about 270px wide in the lg band.
 */
export function About() {
  return (
    <Section id="about" tone="light">
      <Reveal>
        <SectionHeading tone="light" label="About" title="Beyond code" />
      </Reveal>

      {/* One reveal for the pair — §4.8 asks for a simple fade here and nothing
          more; this section should read calmer than the hero. */}
      <Reveal className="mt-7 grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start lg:gap-8">
        <div className="order-2 flex flex-col gap-6 lg:order-none">
          <blockquote className="max-w-[60ch] text-body-lg text-onyx">
            Outside of code, I&rsquo;ve led fundraising and sponsorship efforts for two major
            campus events (Sparkfest, Kopma Fest) — negotiating with sponsors, managing budgets,
            and coordinating teams. It&rsquo;s the same skill set that makes client work smooth:
            clear communication, realistic scoping, and following through.
          </blockquote>

          <dl className="flex max-w-[60ch] flex-col gap-4 border-t border-platinum-muted pt-5">
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

        {/* §4.8 — second, quieter appearance of the portrait. Below lg it moves
            above the copy and shrinks, per §4.8's sm rule. */}
        <figure className="order-1 flex flex-col items-center gap-3 lg:order-none lg:items-end">
          <img
            src={halftone}
            srcSet={`${halftoneMobile} 420w, ${halftone} 1039w`}
            // Matches the max-widths on this element exactly.
            sizes="(max-width: 767px) 180px, (max-width: 1279px) 200px, 280px"
            // Decorative callback: the hero portrait already identifies him and
            // the name is the page h1, so a second identical alt would just be
            // announced twice.
            alt=""
            width={1039}
            height={1224}
            // Well below the fold — stays lazy, unlike the hero portrait.
            loading="lazy"
            decoding="async"
            className="w-full max-w-[180px] lg:max-w-[200px] xl:max-w-[280px]"
          />
          {/* §4.8 specifies Steel-light for this label, but this section is the
              Platinum surface, where Steel-light measures 2.5:1. Steel is the
              light-surface equivalent already used for the section eyebrow. */}
          <figcaption className="font-mono text-mono-xs text-steel">
            // beyond the code
          </figcaption>
        </figure>
      </Reveal>
    </Section>
  )
}
