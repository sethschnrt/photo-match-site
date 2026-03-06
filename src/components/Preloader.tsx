'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import Image from 'next/image'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

export default function Preloader() {
  const [complete, setComplete] = useState(false)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const timer = setTimeout(() => {
      setComplete(true)
      document.body.style.overflow = ''
    }, 1800)
    return () => {
      clearTimeout(timer)
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <>
      <AnimatePresence>
        {!complete && (
          <motion.div
            className="preloader_component"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="preloader_logo"
            >
              <Image
                src={`${basePath}/assets/logos/photo-match-logo-v2-transparent.png`}
                alt="Photo Match"
                width={200}
                height={200}
                unoptimized
              />
            </motion.div>
            <motion.div
              className="preloader_bar-track"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <motion.div
                className="preloader_bar-fill"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.4, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
              />
            </motion.div>
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
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 32px;
        }
        .preloader_logo {
          width: 160px;
          height: auto;
        }
        .preloader_logo img {
          width: 100%;
          height: auto;
        }
        .preloader_bar-track {
          width: 160px;
          height: 2px;
          background: rgba(255, 255, 255, 0.08);
        }
        .preloader_bar-fill {
          height: 100%;
          background: #FF006E;
        }
      `}</style>
    </>
  )
}
