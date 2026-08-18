import { motion } from 'motion/react'
import { type CSSProperties, type RefObject } from 'react'

type Props = {
  /** The hero element, used as the scroll-progress target. */
  scrollTargetRef: RefObject<HTMLElement | null>
}

export function GradientMesh({ scrollTargetRef }: Props) {
  void scrollTargetRef

  const blobs = [
    {
      color: 'var(--color-steel)',
      className: 'top-[-12%] left-[-8%] h-[62%] w-[62%] opacity-55 md:h-[60%] md:w-[52%]',
    },
    {
      color: 'var(--color-steel-deep)',
      className: 'top-[10%] right-[-10%] h-[68%] w-[68%] opacity-60 md:h-[64%] md:w-[54%]',
    },
    {
      color: 'var(--color-steel-light)',
      className: 'bottom-[-16%] left-[22%] h-[48%] w-[48%] opacity-28 md:h-[46%] md:w-[38%]',
    },
  ]

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-mesh overflow-hidden">
      <div className="bg-flow absolute inset-0 opacity-30" />

      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          style={
            {
              backgroundImage: `radial-gradient(circle at center, ${blob.color} 0%, ${blob.color} 28%, transparent 72%)`,
              filter: 'blur(18px)',
              opacity: 0.5,
              transform: 'scale(0.9)',
              boxShadow: `0 0 48px -12px ${blob.color}`,
            } as CSSProperties
          }
          className={`absolute rounded-full ${blob.className}`}
        />
      ))}

      <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-b from-transparent to-onyx" />
    </div>
  )
}
