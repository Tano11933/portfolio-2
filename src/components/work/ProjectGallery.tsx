import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import type { GalleryItem } from './AccordionGallery'

/**
 * §4.9 requires the gallery to stay off the critical path — Featured Work sits
 * well below the hero and must not affect LCP.
 *
 * Code-splitting alone does not achieve that: `React.lazy` fetches the chunk as
 * soon as the component *renders*, and these cards render at mount even though
 * they are far below the fold. Measured on the production build, that pulled
 * the gallery chunk plus six screenshots during initial load. So the lazy
 * boundary is additionally gated on proximity — nothing is requested until the
 * card approaches the viewport.
 */
const AccordionGallery = lazy(() => import('./AccordionGallery'))

export function ProjectGallery({
  items,
  height,
  className,
}: {
  items: GalleryItem[]
  height: number
  className?: string
}) {
  const holderRef = useRef<HTMLDivElement>(null)
  // Browsers without IntersectionObserver start in the shown state, so the
  // gallery still renders for them without the effect having to set state.
  const [near, setNear] = useState(() => typeof IntersectionObserver === 'undefined')

  useEffect(() => {
    if (near) return
    const el = holderRef.current
    if (!el) return

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setNear(true)
          io.disconnect()
        }
      },
      // Start fetching a screen early so it is ready by the time it is read.
      { rootMargin: '600px 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [near])

  // Projects whose screenshots haven't been supplied yet render nothing rather
  // than an empty frame.
  if (items.length === 0) return null

  return (
    <div ref={holderRef} className={className}>
      {near ? (
        <Suspense fallback={<GallerySkeleton height={height} />}>
          <AccordionGallery
            items={items}
            accentColor="var(--color-steel-light)"
            overlayColor="var(--color-onyx)"
            textColor="var(--color-platinum)"
            grayscale
            height={height}
            trigger="hover"
          />
        </Suspense>
      ) : (
        <GallerySkeleton height={height} />
      )}
    </div>
  )
}

/** Same height and radius as the loaded gallery, so nothing shifts. */
function GallerySkeleton({ height }: { height: number }) {
  return (
    <div aria-hidden="true" className="w-full rounded-card bg-steel-deep/25" style={{ height }} />
  )
}
