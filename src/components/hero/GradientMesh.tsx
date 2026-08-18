import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from 'motion/react'
import { useEffect, useState, type CSSProperties, type RefObject } from 'react'

type Props = {
  /** The hero element, used as the scroll-progress target. */
  scrollTargetRef: RefObject<HTMLElement | null>
}

/**
 * Combine scroll progress and pointer lean into one translate percentage.
 * §1 puts the mesh drift at roughly ±15% across the hero; the pointer term is
 * deliberately a fraction of that so it reads as a lean, not a drag.
 */
function useShift(
  pointer: MotionValue<number>,
  progress: MotionValue<number>,
  pointerFactor: number,
  scrollFactor: number,
) {
  return useTransform<number, string>(
    [pointer, progress],
    ([p, s]: number[]) => `${p * pointerFactor + s * scrollFactor}%`,
  )
}

/**
 * Signature "Metal Flow" mesh (§1). Three blurred radial blobs in the gradient's
 * own colours, drifting on scroll progress and — desktop only, per §6 md —
 * leaning slightly toward the pointer.
 *
 * Everything animates via `transform` only (PRD §7: no reflow properties).
 * Under prefers-reduced-motion the blobs render at rest and nothing subscribes
 * to scroll or pointer events.
 */
function useChromeDesktopSafeMode() {
  return (
    typeof window !== 'undefined' &&
    typeof navigator !== 'undefined' &&
    /Chrome\//.test(navigator.userAgent) &&
    !/Edg|OPR|SamsungBrowser/.test(navigator.userAgent) &&
    window.matchMedia('(pointer: fine)').matches &&
    window.innerWidth >= 1024
  )
}

export function GradientMesh({ scrollTargetRef }: Props) {
  const prefersReduced = useReducedMotion()
  const chromeSafeMode = useChromeDesktopSafeMode()
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setIsReady(true))
    return () => window.cancelAnimationFrame(frame)
  }, [])

  const { scrollYProgress } = useScroll({
    target: scrollTargetRef,
    offset: ['start start', 'end start'],
  })

  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)
  const mouseX = useSpring(pointerX, { stiffness: 40, damping: 22, mass: 0.7 })
  const mouseY = useSpring(pointerY, { stiffness: 40, damping: 22, mass: 0.7 })

  const enableMotion =
    isReady &&
    !prefersReduced &&
    !chromeSafeMode &&
    window.matchMedia('(min-width: 1024px) and (pointer: fine)').matches

  useEffect(() => {
    if (prefersReduced || !isReady) return
    // §6: pointer parallax is desktop-only, and meaningless on touch.
    const mq = window.matchMedia('(min-width: 1024px) and (pointer: fine)')
    if (!mq.matches) return

    const onMove = (event: PointerEvent) => {
      pointerX.set((event.clientX / window.innerWidth - 0.5) * 2)
      pointerY.set((event.clientY / window.innerHeight - 0.5) * 2)
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [isReady, prefersReduced, pointerX, pointerY])

  const steelX = useShift(mouseX, scrollYProgress, 2.5, -8)
  const steelY = useShift(mouseY, scrollYProgress, 1.8, 15)
  const deepX = useShift(mouseX, scrollYProgress, -3, 10)
  const deepY = useShift(mouseY, scrollYProgress, -2, 12)
  const lightX = useShift(mouseX, scrollYProgress, 4, 6)
  const lightY = useShift(mouseY, scrollYProgress, 2.5, -10)

  const blobs = [
    {
      // Steel, upper-left — the lightest note in the gradient.
      color: 'var(--color-steel)',
      className: 'top-[-15%] left-[-10%] h-[70%] w-[70%] opacity-70 md:h-[65%] md:w-[55%]',
      x: steelX,
      y: steelY,
    },
    {
      // Steel-deep, centre-right — the mid stop.
      color: 'var(--color-steel-deep)',
      className: 'top-[10%] right-[-15%] h-[75%] w-[75%] opacity-80 md:h-[70%] md:w-[55%]',
      x: deepX,
      y: deepY,
    },
    {
      // Steel-light, low and faint — one bright accent only, so Steel and its
      // relatives stay inside the ~10% accent budget in §1.
      color: 'var(--color-steel-light)',
      className: 'bottom-[-20%] left-[25%] h-[55%] w-[55%] opacity-40 md:h-[50%] md:w-[40%]',
      x: lightX,
      y: lightY,
    },
  ]

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-mesh overflow-hidden">
      {/* Resting state and reduced-motion fallback: the flow gradient itself. */}
      <div className="bg-flow absolute inset-0 opacity-45" />

      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          style={
            {
              // A held core stop before the falloff, otherwise 96px of blur
              // dilutes the blob into near-invisibility.
              backgroundImage: `radial-gradient(circle at center, ${blob.color} 0%, ${blob.color} 32%, transparent 70%)`,
              filter: enableMotion ? 'blur(36px)' : 'none',
              willChange: enableMotion ? 'transform' : 'auto',
              ...(enableMotion ? { x: blob.x, y: blob.y } : {}),
            } as CSSProperties
          }
          className={`absolute rounded-full ${blob.className}`}
        />
      ))}

      {/* Settle the mesh into the page surface instead of cutting off. */}
      <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-b from-transparent to-onyx" />
    </div>
  )
}
