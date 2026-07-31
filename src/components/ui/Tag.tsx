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
        'inline-flex items-center rounded-pill border border-steel-light px-3 py-1 font-mono text-mono-xs',
        tone === 'light' ? 'text-steel-deep' : 'text-platinum',
        className,
      )}
    >
      {children}
    </span>
  )
}
