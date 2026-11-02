import { useEffect, useId, useRef, useState, type CSSProperties, type KeyboardEvent } from 'react'
import { createPortal } from 'react-dom'
import './AccordionGallery.css'
import { useSmoothScroll } from '../../lib/smooth-scroll-context'

export type GalleryItem = {
  image: string
  fullImage?: string
  label: string
  alt: string
  kind: 'web' | 'phone' | 'document'
  device?: boolean
  statusInset?: number
  screenFit?: 'contain'
  screenTheme?: 'dark'
  aspectRatio?: string
}

function Screenshot({ item, full = false }: { item: GalleryItem; full?: boolean }) {
  const [failed, setFailed] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [attempt, setAttempt] = useState(0)
  if (failed) return <div className="ag__error" role="status">
    <p>Screenshot could not load.</p>
    <button type="button" onClick={() => { setFailed(false); setLoaded(false); setAttempt(attempt + 1) }}>Try again</button>
  </div>
  return <>
    <img key={attempt} src={full ? item.fullImage ?? item.image : item.image} alt={item.alt}
      aria-busy={!loaded} data-loaded={loaded} onLoad={() => setLoaded(true)}
      loading={full ? 'eager' : 'lazy'} decoding="async" onError={() => setFailed(true)} />
    {!loaded && <span className="ag__loading" aria-hidden="true">Loading screenshot...</span>}
  </>
}

function Capture({ item, full = false }: { item: GalleryItem; full?: boolean }) {
  return <div className="ag__capture" data-device={item.device ?? false}
    data-screen-fit={item.screenFit} data-screen-theme={item.screenTheme}
    style={{
      '--capture-ratio': item.device ? '9 / 19.5' : item.aspectRatio ?? 'auto',
      '--source-status-inset': item.statusInset ?? 0,
    } as CSSProperties}>
    {item.device ? <>
      <div className="ag-device__screen"><Screenshot item={item} full={full} /></div>
      <div className="ag-device__status" aria-hidden="true">
        <span>9:41</span>
        <span className="ag-device__icons"><span className="ag-device__signal"><i /><i /><i /></span><span className="ag-device__battery" /></span>
      </div>
      <span className="ag-device__island" aria-hidden="true"><i /></span>
      <span className="ag-device__home" aria-hidden="true" />
      <span className="ag-device__buttons" aria-hidden="true" />
    </> : <Screenshot item={item} full={full} />}
  </div>
}

export default function AccordionGallery({ items, projectName }: { items: GalleryItem[]; projectName: string }) {
  const { setLocked } = useSmoothScroll()
  const [active, setActive] = useState(0)
  const [expanded, setExpanded] = useState(false)
  const [zoomed, setZoomed] = useState(false)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const expandRef = useRef<HTMLButtonElement>(null)
  const selectorRefs = useRef<Array<HTMLButtonElement | null>>([])
  const titleId = useId()
  const selected = items[active]

  useEffect(() => {
    if (!expanded) return
    const dialog = dialogRef.current
    const trigger = expandRef.current
    const previousOverflow = document.body.style.overflow
    setLocked(true)
    dialog?.showModal()
    return () => {
      dialog?.close()
      setLocked(false)
      document.body.style.overflow = previousOverflow
      trigger?.focus({ preventScroll: true })
    }
  }, [expanded, setLocked])

  const select = (index: number) => {
    setActive((index + items.length) % items.length)
    setZoomed(false)
  }
  const navigate = (event: KeyboardEvent, moveFocus = false) => {
    let next: number
    if (event.key === 'ArrowRight') next = (active + 1) % items.length
    else if (event.key === 'ArrowLeft') next = (active - 1 + items.length) % items.length
    else if (event.key === 'Home') next = 0
    else if (event.key === 'End') next = items.length - 1
    else return
    event.preventDefault()
    select(next)
    if (moveFocus) selectorRefs.current[next]?.focus()
  }
  if (!selected) return null

  return <>
    <div className="ag" role="group" aria-label={`${projectName} screenshots`}>
      <div className="ag__stage">
        {items.map((item, index) => <div key={item.image} className="ag__panel"
          data-active={index === active} data-kind={item.kind}
          onPointerEnter={(event) => {
            if (event.pointerType === 'mouse' && window.matchMedia('(hover: hover) and (pointer: fine)').matches && !expanded) select(index)
          }}>
          <Capture item={item} />
          <button type="button" className="ag__image-button" tabIndex={-1}
            aria-label={index === active ? `Enlarge ${item.label}` : `Select ${item.label}`}
            onClick={() => { if (index === active) setExpanded(true); else select(index) }} />
        </div>)}
      </div>
      <div className="ag__toolbar">
        <p className="ag__caption" aria-live="polite" aria-atomic="true">
          <span>{active + 1} / {items.length}</span> {selected.label}
        </p>
        <button type="button" ref={expandRef} onClick={() => setExpanded(true)}
          aria-label={`Enlarge ${projectName}: ${selected.label}`}>Enlarge</button>
      </div>
      <div className="ag__selectors" aria-label="Choose a screenshot" onKeyDown={(event) => navigate(event, true)}>
        {items.map((item, index) => <button key={item.image} type="button"
          ref={(element) => { selectorRefs.current[index] = element }}
          aria-label={`${index + 1}. ${item.label}`} aria-pressed={index === active}
          tabIndex={index === active ? 0 : -1} onFocus={() => select(index)} onClick={() => select(index)}>
          <span className="ag__number">{String(index + 1).padStart(2, '0')}</span>
          <span className="ag__selector-label">{item.label}</span>
        </button>)}
      </div>
    </div>
    {expanded && createPortal(<dialog ref={dialogRef} className="ag-dialog" aria-labelledby={titleId}
      onCancel={(event) => { event.preventDefault(); setExpanded(false) }}
      onClick={(event) => { if (event.target === event.currentTarget) setExpanded(false) }}
      onKeyDown={(event) => navigate(event)}>
      <div className="ag-dialog__content">
        <header>
          <h2 id={titleId}>{projectName}</h2>
          <button type="button" autoFocus onClick={() => setExpanded(false)}>Close</button>
        </header>
        <div className="ag-dialog__viewport" data-kind={selected.kind} data-lenis-prevent data-zoomed={zoomed}>
          <Capture key={selected.image} item={selected} full />
        </div>
        <footer>
          <button type="button" aria-label="Previous screenshot" onClick={() => select(active - 1)}>Previous</button>
          <p aria-live="polite">{active + 1} / {items.length} · {selected.label}</p>
          <button type="button" aria-label="Next screenshot" onClick={() => select(active + 1)}>Next</button>
          <button type="button" aria-pressed={zoomed} onClick={() => setZoomed(!zoomed)}>{zoomed ? 'Fit image' : 'Full size'}</button>
          <a href={selected.fullImage ?? selected.image} target="_blank" rel="noreferrer">Open image</a>
        </footer>
      </div>
    </dialog>, document.body)}
  </>
}
