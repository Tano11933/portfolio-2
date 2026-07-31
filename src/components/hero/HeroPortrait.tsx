import type { CSSProperties } from 'react'
import portrait from '../../assets/images/portrait.png'
import { cx } from '../../lib/cx'

/**
 * DESIGN-SYSTEM §4.7 — duotone portrait, deliberately not a generic B&W crop.
 *
 * Inner blend group, exactly as §4.7 specifies:
 *   1. `grayscale(1) contrast(1.15)` on the image, so it carries luminance only.
 *   2. A `mix-blend-mode: color` layer over it — that blend takes lightness from
 *      the greyscaled photo and hue/saturation from --gradient-duotone, putting
 *      the portrait in the same steel-deep→onyx palette as the page.
 *   `isolate` keeps the blend inside this group; without it the colour layer
 *   would also tint the gradient mesh and the name type behind the portrait.
 *
 * Outer wrapper adds the §4.7 bottom mask, plus a saturation boost on the
 * blended result. The boost is not in §4.7, but without it §4.7's own stated
 * goal fails: steel-deep is only ~20% saturated, so a literal colour blend
 * lands visually neutral and the photo still reads as plain black-and-white.
 * Amplifying the blend's own output keeps the hue exactly the palette's.
 */
export function HeroPortrait({ className }: { className?: string }) {
  return (
    <div
      className={cx('relative', className)}
      style={
        {
          maskImage: 'var(--mask-photo-fade), var(--mask-photo-edge)',
          maskComposite: 'intersect',
          WebkitMaskImage: 'var(--mask-photo-fade), var(--mask-photo-edge)',
          WebkitMaskComposite: 'source-in',
          filter: 'saturate(var(--duotone-saturation))',
        } as CSSProperties
      }
    >
      <div className="relative isolate h-full">
        <img
          src={portrait}
          // The name sits beside this at display size, so the portrait is
          // identifying rather than informational — short alt, no "photo of".
          alt="Gabriel Gaetano Onen Baskara"
          width={433}
          height={577}
          decoding="async"
          // w-auto below lg keeps the sm fallback at its native aspect; from lg
          // the portrait fills the grid column and §4.7's cover/top crop applies.
          className="block h-full w-auto object-cover object-top lg:w-full"
          style={{ filter: 'grayscale(1) contrast(1.15)' }}
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 mix-blend-color"
          style={{ backgroundImage: 'var(--gradient-duotone)' }}
        />
      </div>
    </div>
  )
}
