import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { cx } from '../../lib/cx'

type Variant = 'primary' | 'outline'
type Tone = 'on-dark' | 'on-light'

type Props = {
  variant?: Variant
  /** Which background the button sits on — decides the solid/text pairing (§4.2). */
  tone?: Tone
  /** Pill radius for the navbar CTA (§4.1); everything else uses the 12px token. */
  pill?: boolean
  children: ReactNode
  className?: string
} & Omit<ComponentPropsWithoutRef<'a'>, 'className'>

/**
 * DESIGN-SYSTEM §4.2. Primary hover reveals a gradient-flow border rather than
 * swapping to a different solid colour.
 *
 * Note: §4.2 says the outline hover border becomes `steel`. On the dark base
 * that reads as a *dimmer* border than the platinum-muted resting state, so on
 * dark we use `steel-light`, which §1 already designates as the hover colour.
 */
export function Button({
  variant = 'primary',
  tone = 'on-dark',
  pill = false,
  children,
  className,
  ...rest
}: Props) {
  return (
    <a
      className={cx(
        'inline-flex items-center justify-center gap-2 px-5 py-3',
        'text-body-md font-semibold no-underline transition-colors duration-200',
        pill ? 'rounded-pill' : 'rounded-btn',
        variant === 'primary' && 'gradient-ring',
        variant === 'primary' && tone === 'on-dark' && 'bg-platinum text-onyx hover:bg-white',
        variant === 'primary' && tone === 'on-light' && 'bg-onyx text-platinum',
        variant === 'outline' && 'border bg-transparent',
        variant === 'outline' &&
          tone === 'on-dark' &&
          'border-platinum-muted/40 text-platinum hover:border-steel-light',
        variant === 'outline' &&
          tone === 'on-light' &&
          'border-platinum-muted text-onyx hover:border-steel',
        className,
      )}
      {...rest}
    >
      {children}
    </a>
  )
}
