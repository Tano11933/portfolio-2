import type { ReactNode } from 'react'
import { cx } from '../../lib/cx'

type Props = {
  id: string
  /** §1 — Onyx and Platinum are the two base surfaces; sections alternate. */
  tone?: 'dark' | 'light'
  /** Drop the top padding when this section continues the previous surface. */
  flushTop?: boolean
  className?: string
  children: ReactNode
}

/**
 * Section wrapper: owns the surface colour, the §3 vertical rhythm and the
 * 1280px shell. `tabIndex={-1}` lets nav clicks move keyboard focus here.
 */
export function Section({ id, tone = 'dark', flushTop = false, className, children }: Props) {
  return (
    <section
      id={id}
      tabIndex={-1}
      className={cx(
        'section-pb scroll-mt-8 outline-none',
        !flushTop && 'section-pt',
        tone === 'light' ? 'bg-platinum text-onyx' : 'bg-onyx text-platinum',
        className,
      )}
    >
      <div className="shell">{children}</div>
    </section>
  )
}

/**
 * Section eyebrow + title.
 *
 * The eyebrow is a word, not a number. The navbar already owns one numbering
 * system (01/02/03) and the process cards own another (the ghost watermark);
 * numbering sections too would be a third, which is exactly the repetition the
 * §7 checklist warns about.
 */
export function SectionHeading({
  label,
  title,
  description,
  tone = 'dark',
  className,
}: {
  label: string
  title: string
  description?: string
  tone?: 'dark' | 'light'
  className?: string
}) {
  return (
    <div className={cx('flex flex-col gap-3', className)}>
      <span
        className={cx(
          'font-mono text-mono-xs uppercase',
          tone === 'light' ? 'text-steel' : 'text-steel-light',
        )}
      >
        {label}
      </span>
      <h2 className="max-w-[20ch]">{title}</h2>
      {description && (
        <p
          className={cx(
            'max-w-[62ch] text-body-lg',
            tone === 'light' ? 'text-steel-deep' : 'text-platinum-muted',
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
