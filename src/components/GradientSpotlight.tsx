'use client'
import { useMotionValue, motion, useSpring } from 'framer-motion'
import { ReactNode } from 'react'

interface GradientSpotlightProps {
  children: ReactNode
  className?: string
}

export default function GradientSpotlight({ children, className = '' }: GradientSpotlightProps) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 })
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 })

  return (
    <motion.div
      className={`gradient-spotlight_wrapper ${className}`}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        mouseX.set(e.clientX - rect.left)
        mouseY.set(e.clientY - rect.top)
      }}
    >
      <motion.div
        className="gradient-spotlight_glow"
        style={{
          background: `radial-gradient(600px circle at var(--spot-x) var(--spot-y), rgba(255, 0, 110, 0.12), transparent 40%)`,
          // @ts-expect-error -- CSS custom properties via motion style
          '--spot-x': springX,
          '--spot-y': springY,
        }}
      />
      <div className="gradient-spotlight_content">{children}</div>

      <style jsx global>{`
        .gradient-spotlight_wrapper {
          position: relative;
          overflow: hidden;
        }
        .gradient-spotlight_glow {
          position: absolute;
          inset: 0;
          opacity: 1;
          pointer-events: none;
          z-index: 1;
        }
        .gradient-spotlight_content {
          position: relative;
          z-index: 2;
        }
      `}</style>
    </motion.div>
  )
}
