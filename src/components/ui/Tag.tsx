import type { ReactNode } from 'react'
import { cx } from '../../lib/cx'

/**
 * DESIGN-SYSTEM §4.4 — mono chip: text-mono-xs, space-1/space-3 padding,
 * pill radius, 1px steel-light border, transparent fill.
 */
export function Tag({
  children,
  tone = 'dark',
  className,
}: {
  children: ReactNode
  /** Which surface the chip sits on — only affects the label colour. */
  tone?: 'dark' | 'light'
  className?: string
}) {
  return (
    <span
      className={cx(
        'inline-flex items-center rounded-pill border px-3 py-1 font-mono text-mono-xs',
        // §4.4 specifies a Steel-light border outright, but §1's per-surface
        // rule takes precedence: on Platinum, Steel-light is 2.5:1, under the
        // 3:1 WCAG needs for a UI component boundary. Chips on the light
        // Featured Work card are the case that hits this.
        tone === 'light' ? 'border-steel text-steel-deep' : 'border-steel-light text-platinum',
        className,
      )}
    >
      {children}
    </span>
  )
}
