import { useCallback, useRef, useState, type CSSProperties, type KeyboardEvent } from 'react'
import './AccordionGallery.css'

export type GalleryItem = {
  image: string
  label: string
  alt: string
}

type Props = {
  items: GalleryItem[]
  /** §4.9 — pass tokens, e.g. `var(--color-steel-light)`. */
  accentColor?: string
  overlayColor?: string
  textColor?: string
  /** §4.9 — keep on: collapsed panels desaturated, active panel full colour. */
  grayscale?: boolean
  /** Row height in px (desktop). Panels stack and use a fraction of this below 480px. */
  height?: number
  trigger?: 'hover' | 'click'
  className?: string
}

/**
 * DESIGN-SYSTEM §4.9 — project screenshot gallery.
 *
 * Colour props are written to CSS custom properties rather than resolved in JS,
 * so `var(--color-steel-light)` can be passed through untouched and the values
 * stay tokenised (no getComputedStyle, no hex duplicated out of tokens.css).
 *
 * Panel sizing animates through a CSS transition on flex-grow rather than a
 * JS-driven tween. §4.9 flags GSAP as a bundle risk; this needs no animation
 * runtime at all, so the lazy chunk stays tiny even though it is still
 * code-split as §4.9 requires.
 *
 * Keyboard: roving tabindex — the gallery is a single tab stop and the arrow
 * keys move between panels, so six galleries don't add ~36 tab stops to the page.
 */
export default function AccordionGallery({
  items,
  accentColor = 'var(--color-steel-light)',
  overlayColor = 'var(--color-onyx)',
  textColor = 'var(--color-platinum)',
  grayscale = true,
  height = 320,
  trigger = 'hover',
  className,
}: Props) {
  const [active, setActive] = useState(0)
  // Per-image object-fit, derived from intrinsic size on load so screenshots
  // added later need no extra metadata.
  const [fits, setFits] = useState<Record<number, 'cover' | 'contain'>>({})
  const panelRefs = useRef<Array<HTMLButtonElement | null>>([])

  const onKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      const last = items.length - 1
      let next: number | null = null
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = Math.min(active + 1, last)
      else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = Math.max(active - 1, 0)
      else if (event.key === 'Home') next = 0
      else if (event.key === 'End') next = last
      if (next === null || next === active) return
      event.preventDefault()
      setActive(next)
      panelRefs.current[next]?.focus()
    },
    [active, items.length],
  )

  if (items.length === 0) return null

  return (
    <div
      className={['ag', className].filter(Boolean).join(' ')}
      role="group"
      aria-label="Project screenshots"
      onKeyDown={onKeyDown}
      style={
        {
          '--ag-accent': accentColor,
          '--ag-overlay': overlayColor,
          '--ag-text': textColor,
          '--ag-height': `${height}px`,
          '--ag-gray': grayscale ? 1 : 0,
        } as CSSProperties
      }
    >
      {items.map((item, i) => {
        const isActive = i === active
        return (
          <button
            key={item.image + i}
            type="button"
            ref={(el) => {
              panelRefs.current[i] = el
            }}
            className="ag__panel"
            data-active={isActive}
            data-fit={fits[i] ?? 'cover'}
            // Roving tabindex: only the open panel is reachable by Tab.
            tabIndex={isActive ? 0 : -1}
            aria-label={item.label}
            aria-current={isActive}
            onMouseEnter={trigger === 'hover' ? () => setActive(i) : undefined}
            onFocus={() => setActive(i)}
            onClick={() => setActive(i)}
          >
            <img
              src={item.image}
              alt={item.alt}
              className="ag__img"
              loading="lazy"
              decoding="async"
              onLoad={(e) => {
                const img = e.currentTarget
                // Portrait captures (phone screens) letterbox; landscape fills.
                const fit = img.naturalWidth / img.naturalHeight < 1 ? 'contain' : 'cover'
                setFits((prev) => (prev[i] === fit ? prev : { ...prev, [i]: fit }))
              }}
            />
            <span className="ag__label">{item.label}</span>
          </button>
        )
      })}
    </div>
  )
}
