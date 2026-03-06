'use client'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { ReactNode } from 'react'

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  href?: string
  onClick?: () => void
}

export default function MagneticButton({
  children,
  className = '',
  href,
  onClick,
}: MagneticButtonProps) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 150, damping: 15 })
  const springY = useSpring(y, { stiffness: 150, damping: 15 })

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - rect.left - rect.width / 2) * 0.3)
    y.set((e.clientY - rect.top - rect.height / 2) * 0.3)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  const motionProps = {
    className: `magnetic-button_element ${className}`,
    style: { x: springX, y: springY },
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
  }

  return (
    <>
      {href ? (
        <motion.a href={href} {...motionProps}>
          {children}
        </motion.a>
      ) : (
        <motion.button onClick={onClick} {...motionProps}>
          {children}
        </motion.button>
      )}

      <style jsx global>{`
        .magnetic-button_element {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          border: none;
          cursor: pointer;
        }
      `}</style>
    </>
  )
}
