import type { ReactNode } from 'react'
import { cx } from '../../lib/cx'

/**
 * `solid` and `outline` are the two §4.3 variants as written, which assume a
 * light section. `ghost` is the same outline idea for a dark section, where a
 * platinum-filled card would be a light block rather than an outline.
 */
export type CardVariant = 'solid' | 'outline' | 'ghost'

/**
 * DESIGN-SYSTEM §4.3 — 16px radius, alternating solid/outline surfaces.
 *
 * §4.3 offers Onyx *or* Steel-deep for the solid variant; Onyx is used here so
 * large card fills stay on the base palette and don't eat into the ~10% accent
 * budget §1 allows Steel and its relatives.
 */
export function Card({
  variant,
  className,
  children,
}: {
  variant: CardVariant
  className?: string
  children: ReactNode
}) {
  return (
    <div
      className={cx(
        'relative overflow-hidden rounded-card',
        variant === 'solid' && 'bg-onyx text-platinum',
        variant === 'outline' && 'border border-platinum-muted bg-platinum text-onyx',
        variant === 'ghost' && 'border border-steel-deep bg-steel-deep/20 text-platinum',
        className,
      )}
    >
      {children}
    </div>
  )
}

/**
 * The oversized ghost numeral used only on the "How I Work" cards (§4.3 keeps
 * it off Featured Work deliberately).
 */
export function CardWatermark({ value, variant }: { value: string; variant: CardVariant }) {
  return (
    <span
      aria-hidden="true"
      className={cx(
        'pointer-events-none absolute -top-3 right-3 font-display text-watermark font-semibold select-none',
        'opacity-10',
        variant === 'outline' ? 'text-onyx' : 'text-platinum',
      )}
    >
      {value}
    </span>
  )
}
