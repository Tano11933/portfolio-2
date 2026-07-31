import { createContext, useContext } from 'react'

export type SmoothScrollApi = {
  /** Scroll to an element by CSS selector, honouring reduced-motion. */
  scrollTo: (target: string) => void
  /** Pause/resume scrolling — used while the mobile menu overlay is open. */
  setLocked: (locked: boolean) => void
}

export const SmoothScrollContext = createContext<SmoothScrollApi | null>(null)

export function useSmoothScroll(): SmoothScrollApi {
  const ctx = useContext(SmoothScrollContext)
  if (!ctx) throw new Error('useSmoothScroll must be used inside <SmoothScrollProvider>')
  return ctx
}
