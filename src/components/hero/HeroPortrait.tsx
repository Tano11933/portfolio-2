import type { CSSProperties } from 'react'
import portrait from '../../assets/images/gabriel-duotone.webp'
import portraitMobile from '../../assets/images/gabriel-duotone-mobile.webp'
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
        srcSet={`${portraitMobile} 420w, ${portrait} 1039w`}
        // Real CSS slot widths, not guesses:
        //   <768px  the sm fallback is height-driven (clamp 180-240px) at the
        //           asset's 0.849 ratio, so at most ~204px wide.
        //   768-1279px  the grid column is proportional — 1fr of a 1.3fr/1fr
        //           split inside a (100vw - 64px) container less a 24px gap,
        //           which works out to 43.5vw - 38px (verified: 296px @768,
        //           407px @1024).
        //   >=1280px  the container caps at 1280, so the column is a fixed 518px.
        sizes="(max-width: 767px) 204px, (max-width: 1279px) calc(43.5vw - 38px), 518px"
        // The name sits beside this at display size, so the portrait is
        // identifying rather than informational — short alt, no "photo of".
        alt="Gabriel Gaetano Onen Baskara"
        // Intrinsic dimensions of the largest candidate, so the aspect-ratio
        // box stays correct regardless of which srcset entry is chosen.
        width={1039}
        height={1224}
        // This is the LCP element. Eager + high priority is stated explicitly
        // rather than relied on as the default, so a later shared-image
        // refactor can't quietly hand it a lazy default.
        loading="eager"
        fetchPriority="high"
        decoding="async"
        className="block h-full w-full object-contain object-bottom"
      />
    </div>
  )
}
