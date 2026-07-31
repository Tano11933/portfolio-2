import Lenis from 'lenis'
import { useReducedMotion } from 'motion/react'
import { useCallback, useEffect, useMemo, useRef, type ReactNode } from 'react'
import { SmoothScrollContext } from './smooth-scroll-context'

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const prefersReduced = useReducedMotion()
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    // With reduced motion we never instantiate Lenis at all, so the browser's
    // own instant scrolling is left completely untouched.
    if (prefersReduced) return

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })
    lenisRef.current = lenis

    let frame = 0
    const raf = (time: number) => {
      lenis.raf(time)
      frame = requestAnimationFrame(raf)
    }
    frame = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(frame)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [prefersReduced])

  const scrollTo = useCallback((target: string) => {
    const el = document.querySelector<HTMLElement>(target)
    if (!el) return

    if (lenisRef.current) {
      lenisRef.current.scrollTo(el, { offset: 0 })
    } else {
      el.scrollIntoView({ behavior: 'auto', block: 'start' })
    }
    // Move keyboard focus with the viewport, otherwise tabbing after a nav
    // click resumes from the top of the document.
    el.focus({ preventScroll: true })
  }, [])

  const setLocked = useCallback((locked: boolean) => {
    const lenis = lenisRef.current
    if (lenis) {
      if (locked) lenis.stop()
      else lenis.start()
    }
    // Also needed on the reduced-motion path, where Lenis is absent.
    document.body.style.overflow = locked ? 'hidden' : ''
  }, [])

  const api = useMemo(() => ({ scrollTo, setLocked }), [scrollTo, setLocked])

  return <SmoothScrollContext.Provider value={api}>{children}</SmoothScrollContext.Provider>
}
