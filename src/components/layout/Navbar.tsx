import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from 'motion/react'
import { useCallback, useEffect, useRef, useState } from 'react'
import { CONTACT, NAV_ITEMS, WORDMARK } from '../../data/nav'
import { cx } from '../../lib/cx'
import { useSmoothScroll } from '../../lib/smooth-scroll-context'
import { Button } from '../ui/Button'

/** §4.1 — the bar swaps to its solid+blur state past this scroll offset. */
const SOLID_AT = 80

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { scrollY } = useScroll()
  const { scrollTo, setLocked } = useSmoothScroll()
  const prefersReduced = useReducedMotion()
  const triggerRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  useMotionValueEvent(scrollY, 'change', (y) => setScrolled(y > SOLID_AT))

  useEffect(() => {
    setLocked(menuOpen)
    return () => setLocked(false)
  }, [menuOpen, setLocked])

  // Escape to dismiss, and keep Tab cycling inside the overlay while it's open.
  useEffect(() => {
    if (!menuOpen) return
    const panel = panelRef.current
    panel?.querySelector<HTMLElement>('a[href], button')?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        triggerRef.current?.focus()
        return
      }
      if (event.key !== 'Tab' || !panel) return
      const items = panel.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')
      if (items.length === 0) return
      const first = items[0]
      const last = items[items.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  const goTo = useCallback(
    (event: React.MouseEvent, href: string) => {
      event.preventDefault()
      setMenuOpen(false)
      scrollTo(href)
    },
    [scrollTo],
  )

  const fade = prefersReduced ? { duration: 0 } : { duration: 0.32, ease: [0.22, 1, 0.36, 1] as const }

  return (
    <>
      <a
        href="#main"
        onClick={(e) => goTo(e, '#main')}
        className="sr-only rounded-btn focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-toast focus:bg-platinum focus:px-4 focus:py-2 focus:text-body-sm focus:font-semibold focus:text-onyx"
      >
        Skip to content
      </a>

      <header
        className={cx(
          'fixed inset-x-0 top-0 z-nav transition-[background-color,box-shadow,backdrop-filter] duration-300',
          scrolled
            ? 'bg-onyx/85 shadow-nav backdrop-blur-nav'
            : 'bg-transparent shadow-none backdrop-blur-none',
        )}
      >
        <div className="shell flex h-8 items-center justify-between gap-5">
          <a
            href="#hero"
            onClick={(e) => goTo(e, '#hero')}
            className="font-display text-body-lg font-semibold tracking-tight text-platinum no-underline"
          >
            {WORDMARK}
          </a>

          {/* §6 — full nav (index + label) appears from lg (768px) up. */}
          <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => goTo(e, item.href)}
                className="group inline-flex items-baseline gap-2 rounded-btn text-platinum no-underline"
              >
                <span className="font-mono text-mono-xs text-steel-light transition-colors duration-200 group-hover:text-platinum">
                  {item.index}
                </span>
                <span className="text-body-md transition-colors duration-200 group-hover:text-steel-light">
                  {item.label}
                </span>
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button pill href="#contact" onClick={(e) => goTo(e, '#contact')}>
              Let&rsquo;s Talk
            </Button>
          </div>

          <button
            ref={triggerRef}
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
            className="-mr-2 flex h-6 w-6 items-center justify-center rounded-btn lg:hidden"
          >
            {/* Bars are positioned by fraction of the icon box rather than a
                magic pixel offset, so no literal px appears in component code. */}
            <span aria-hidden="true" className="relative block h-5 w-5">
              <span
                className={cx(
                  'absolute left-0 block h-px w-5 bg-platinum transition-all duration-300',
                  menuOpen ? 'top-1/2 rotate-45' : 'top-1/3',
                )}
              />
              <span
                className={cx(
                  'absolute left-0 block h-px w-5 bg-platinum transition-all duration-300',
                  menuOpen ? 'top-1/2 -rotate-45' : 'top-2/3',
                )}
              />
            </span>
          </button>
        </div>
      </header>

      {/* §4.1 / §5 — full-screen overlay (z 100), not a dropdown. */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={fade}
            className="fixed inset-0 z-overlay flex flex-col bg-onyx lg:hidden"
          >
            <div className="shell flex h-8 shrink-0 items-center justify-between">
              <span className="font-display text-body-lg font-semibold tracking-tight text-platinum">
                {WORDMARK}
              </span>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => {
                  setMenuOpen(false)
                  triggerRef.current?.focus()
                }}
                className="-mr-2 flex h-6 w-6 items-center justify-center rounded-btn"
              >
                <span aria-hidden="true" className="relative block h-5 w-5">
                  <span className="absolute top-1/2 left-0 block h-px w-5 rotate-45 bg-platinum" />
                  <span className="absolute top-1/2 left-0 block h-px w-5 -rotate-45 bg-platinum" />
                </span>
              </button>
            </div>

            <nav
              aria-label="Mobile"
              className="shell flex flex-1 flex-col justify-center gap-6 pb-8"
            >
              {NAV_ITEMS.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => goTo(e, item.href)}
                  initial={prefersReduced ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={
                    prefersReduced ? { duration: 0 } : { ...fade, delay: 0.06 + i * 0.06 }
                  }
                  className="flex items-baseline gap-4 border-b border-steel-deep pb-4 text-platinum no-underline"
                >
                  <span className="font-mono text-mono-xs text-steel-light">{item.index}</span>
                  <span className="font-display text-display-md font-medium">{item.label}</span>
                </motion.a>
              ))}

              <div className="mt-4 flex flex-col gap-4">
                <Button pill href="#contact" onClick={(e) => goTo(e, '#contact')}>
                  Let&rsquo;s Talk
                </Button>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="rounded-btn text-body-sm text-steel-light no-underline"
                >
                  {CONTACT.email}
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
