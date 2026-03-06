'use client'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const springX = useSpring(cursorX, { stiffness: 300, damping: 28 })
  const springY = useSpring(cursorY, { stiffness: 300, damping: 28 })
  const [hovered, setHovered] = useState(false)
  const [visible, setVisible] = useState(false)
  const [isTouch, setIsTouch] = useState(true)

  useEffect(() => {
    // Detect touch device
    const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    setIsTouch(hasTouch)
    if (hasTouch) return

    setVisible(true)

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-grow')
      ) {
        setHovered(true)
      }
    }

    const handleOut = () => setHovered(false)

    window.addEventListener('mousemove', moveCursor)
    document.addEventListener('mouseover', handleOver)
    document.addEventListener('mouseout', handleOut)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      document.removeEventListener('mouseover', handleOver)
      document.removeEventListener('mouseout', handleOut)
    }
  }, [cursorX, cursorY])

  if (isTouch || !visible) return null

  return (
    <>
      <motion.div
        className="custom-cursor_dot"
        style={{
          left: springX,
          top: springY,
          width: hovered ? 48 : 16,
          height: hovered ? 48 : 16,
        }}
      />

      <style jsx global>{`
        .custom-cursor_dot {
          position: fixed;
          border-radius: 50%;
          background: white;
          mix-blend-mode: difference;
          pointer-events: none;
          z-index: 9998;
          transform: translate(-50%, -50%);
          transition: width 0.25s ease, height 0.25s ease;
        }
        * {
          cursor: none !important;
        }
      `}</style>
    </>
  )
}
