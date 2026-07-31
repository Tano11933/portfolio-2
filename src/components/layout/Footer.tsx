import { CONTACT, NAV_ITEMS, WORDMARK } from '../../data/nav'
import { useSmoothScroll } from '../../lib/smooth-scroll-context'

const LINK =
  'rounded-btn text-body-sm text-steel-light no-underline transition-colors duration-200 hover:text-platinum'

/**
 * DESIGN-SYSTEM §4.6 — contact column, quick links, social, with the year and
 * location small on the last row.
 *
 * §4.6 asks for a large email link here, but CONTENT-STRATEGY §8 already gives
 * that treatment to the Contact section directly above. Repeating it would put
 * two oversized addresses back to back, so the footer's is a normal link.
 */
export function Footer() {
  const { scrollTo } = useSmoothScroll()

  return (
    <footer className="border-t border-steel-deep bg-onyx pt-8 pb-6 md:pt-9">
      <div className="shell">
        <div className="grid gap-7 lg:grid-cols-[1.5fr_1fr_1fr] lg:gap-6">
          <div className="flex flex-col gap-3">
            <span className="font-display text-display-md font-semibold text-platinum">
              {WORDMARK}
            </span>
            <a href={`mailto:${CONTACT.email}`} className={LINK}>
              {CONTACT.email}
            </a>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-3">
            <h2 className="font-mono text-mono-xs uppercase text-steel-light">Navigate</h2>
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(event) => {
                  event.preventDefault()
                  scrollTo(item.href)
                }}
                className={LINK}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <h2 className="font-mono text-mono-xs uppercase text-steel-light">Elsewhere</h2>
            <a href={CONTACT.linkedin} target="_blank" rel="noreferrer noopener" className={LINK}>
              LinkedIn
            </a>
            <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer noopener" className={LINK}>
              WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-steel-deep pt-5 font-mono text-mono-xs text-steel-light md:flex-row md:items-center md:justify-between">
          <span>
            © {new Date().getFullYear()} {WORDMARK}
          </span>
          {/* §4.6 — matches the hero eyebrow in CONTENT-STRATEGY §2. */}
          <span>Yogyakarta / Jakarta</span>
        </div>
      </div>
    </footer>
  )
}
