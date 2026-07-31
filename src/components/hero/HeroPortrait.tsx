import type { CSSProperties } from 'react'
import portrait from '../../assets/images/gabriel-duotone.png'
import { cx } from '../../lib/cx'

/**
 * DESIGN-SYSTEM §4.7 — pre-processed asset, not a runtime CSS treatment.
 *
 * `gabriel-duotone.png` is a transparent silhouette with the onyx → steel-light
 * duotone already baked in, so the old `grayscale/contrast` filter, the
 * `mix-blend-mode: color` tint layer and the saturation boost that compensated
 * for it are all gone — they existed only to duotone a flat rectangular photo.
 *
 * `object-contain` (not cover) because this is a cut-out silhouette: cover would
 * crop the shoulders to fill the column box.
 */
export function HeroPortrait({ className }: { className?: string }) {
  return (
    <div
      className={cx('relative', className)}
      style={
        {
          // §4.7 makes this optional now that the asset's edges are transparent.
          // Kept because the torso is cut flat at the asset's bottom edge, and
          // the fade is what stops that straight cut from reading as a crop.
          maskImage: 'var(--mask-photo-fade)',
          WebkitMaskImage: 'var(--mask-photo-fade)',
        } as CSSProperties
      }
    >
      <img
        src={portrait}
        // The name sits beside this at display size, so the portrait is
        // identifying rather than informational — short alt, no "photo of".
        alt="Gabriel Gaetano Onen Baskara"
        width={433}
        height={510}
        decoding="async"
        className="block h-full w-full object-contain object-bottom"
      />
    </div>
  )
}
