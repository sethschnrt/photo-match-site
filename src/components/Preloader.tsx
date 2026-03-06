'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Preloader() {
  const [progress, setProgress] = useState(0)
  const [complete, setComplete] = useState(false)

  useEffect(() => {
    // Lock scroll while loading
    document.body.style.overflow = 'hidden'

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 12
        if (next >= 100) {
          clearInterval(timer)
          setTimeout(() => {
            setComplete(true)
            document.body.style.overflow = ''
          }, 500)
          return 100
        }
        return next
      })
    }, 80)

    return () => {
      clearInterval(timer)
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <>
      <AnimatePresence>
        {!complete && (
          <motion.div
            className="preloader_component"
            exit={{ y: '-100%' }}
            transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
          >
            <div className="preloader_content">
              <div className="preloader_number">
                {Math.round(progress)}
              </div>
              <div className="preloader_bar-track">
                <motion.div
                  className="preloader_bar-fill"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: 'linear' }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .preloader_component {
          position: fixed;
          inset: 0;
          z-index: 100;
          background: #0a0a0a;
          display: flex;
          align-items: flex-end;
          padding: 48px;
        }
        .preloader_content {
          width: 100%;
        }
        .preloader_number {
          color: #FF006E;
          font-size: 12vw;
          font-weight: 600;
          line-height: 1;
          font-variant-numeric: tabular-nums;
          letter-spacing: -0.04em;
        }
        .preloader_bar-track {
          width: 100%;
          height: 2px;
          background: rgba(255, 255, 255, 0.08);
          margin-top: 16px;
        }
        .preloader_bar-fill {
          height: 100%;
          background: #FF006E;
        }
      `}</style>
    </>
  )
}
