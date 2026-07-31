import { CONTACT } from '../../data/nav'
import { Section, SectionHeading } from '../layout/Section'
import { Reveal } from '../motion/Reveal'

/**
 * CONTENT-STRATEGY §8 — the email is the CTA, set as a large typographic
 * element rather than a small button.
 *
 * It steps down to display-md below 480px: at display-lg the address is wider
 * than a 360px screen's content column and would either overflow or break
 * mid-address.
 */
export function Contact() {
  return (
    <Section id="contact">
      {/* One reveal for the closing statement — it reads as a single unit. */}
      <Reveal className="flex flex-col gap-6">
        <SectionHeading label="Contact" title="Have a project in mind?" />

        <p className="max-w-[52ch] text-body-lg text-platinum-muted">
          Whether it&rsquo;s a production system, a mobile app, or something in between —
          let&rsquo;s talk about what you need.
        </p>

        <a
          href={`mailto:${CONTACT.email}`}
          className="mt-2 inline-block w-fit rounded-btn font-display text-display-md font-semibold text-platinum underline decoration-steel underline-offset-8 transition-colors duration-200 hover:decoration-platinum md:text-display-lg"
        >
          {CONTACT.email}
        </a>

        <ul className="mt-2 flex flex-wrap items-center gap-x-6 gap-y-3">
          <li>
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="rounded-btn text-body-sm text-steel-light no-underline transition-colors duration-200 hover:text-platinum"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noreferrer noopener"
              className="rounded-btn text-body-sm text-steel-light no-underline transition-colors duration-200 hover:text-platinum"
            >
              WhatsApp {CONTACT.whatsappLabel}
            </a>
          </li>
        </ul>
      </Reveal>
    </Section>
  )
}
