import { Component, lazy, Suspense, useEffect, useRef, useState, type ReactNode } from 'react'
import type { GalleryItem } from './AccordionGallery'
import './AccordionGallery.css'

const AccordionGallery = lazy(() => import('./AccordionGallery'))

class GalleryBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false }
  static getDerivedStateFromError() { return { failed: true } }
  render() {
    if (this.state.failed) return <div className="ag-skeleton ag__error" role="status">
      <p>The screenshot gallery could not load.</p>
      <button type="button" onClick={() => window.location.reload()}>Reload page</button>
    </div>
    return this.props.children
  }
}

export function ProjectGallery({ items, projectName, compact = false, tone = 'dark', className = '' }: {
  items: GalleryItem[]
  projectName: string
  compact?: boolean
  tone?: 'dark' | 'light'
  className?: string
}) {
  const holderRef = useRef<HTMLDivElement>(null)
  const [near, setNear] = useState(() => typeof IntersectionObserver === 'undefined')
  useEffect(() => {
    if (near) return
    const holder = holderRef.current
    if (!holder) return
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) { setNear(true); observer.disconnect() }
    }, { rootMargin: '600px 0px' })
    observer.observe(holder)
    return () => observer.disconnect()
  }, [near])
  if (!items.length) return null
  const placeholder = <div className="ag-skeleton" aria-hidden="true" />
  return <div ref={holderRef} className={`project-gallery ${className}`}
    data-tone={tone} data-compact={compact} data-phone={items.every((item) => item.kind === 'phone')}>
    <GalleryBoundary>
      {near ? <Suspense fallback={placeholder}><AccordionGallery items={items} projectName={projectName} /></Suspense> : placeholder}
    </GalleryBoundary>
  </div>
}
