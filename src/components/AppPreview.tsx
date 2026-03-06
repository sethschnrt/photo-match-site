'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { DeviceMobileCamera, Bell, MapTrifold, ImageSquare } from '@phosphor-icons/react/dist/ssr'

const features = [
  { Icon: MapTrifold, text: 'Live heat map of nearby venues' },
  { Icon: Bell, text: 'Push notifications when you get matched' },
  { Icon: ImageSquare, text: 'Photo reel history and digital copies' },
]

export default function AppPreview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-20px' })

  return (
    <section id="app" className="section_app-preview" ref={ref}>
      <div className="padding-global padding-section-large">
        <div className="container-large">
          <div className="app-preview_layout">
            {/* Clean placeholder card */}
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="app-preview_placeholder"
            >
              <div className="app-preview_placeholder-icon">
                <DeviceMobileCamera size={48} weight="duotone" />
              </div>
              <p className="app-preview_placeholder-title text-color-primary">App preview coming soon</p>
              <p className="app-preview_placeholder-sub text-color-secondary">iOS and Android</p>
            </motion.div>

            {/* Content */}
            <div className="app-preview_content">
              <motion.p
                initial={{ opacity: 1, x: 16 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4 }}
                className="text-style-label text-color-accent"
              >
                The App
              </motion.p>
              <motion.h2
                initial={{ opacity: 1, x: 16 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                See who is out tonight.
              </motion.h2>
              <motion.p
                initial={{ opacity: 1 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="app-preview_desc text-color-secondary"
              >
                The Photo Match app shows you which venues near you have active booths, real-time activity, and where your crew is going. Find the spot with the best energy.
              </motion.p>

              <div className="app-preview_features">
                {features.map((f, i) => (
                  <motion.div
                    key={f.text}
                    initial={{ opacity: 1, x: 16 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                    className="app-preview_feature"
                  >
                    <div className="app-preview_feature-icon">
                      <f.Icon size={18} weight="duotone" />
                    </div>
                    <span className="text-color-secondary text-size-regular">{f.text}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 1, y: 0 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="app-preview_badges"
              >
                <span className="text-color-secondary text-size-small">Coming soon to iOS and Android</span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .section_app-preview { border-top: 1px solid var(--color-border); }
        .app-preview_layout { display: grid; grid-template-columns: 1fr; gap: 48px; align-items: center; }
        .app-preview_placeholder { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 16px; padding: 64px 32px; background: var(--color-bg-secondary); border: 1px solid var(--color-border); border-radius: 20px; text-align: center; min-height: 320px; }
        .app-preview_placeholder-icon { color: var(--color-accent); opacity: 1; }
        .app-preview_placeholder-title { font-size: 1.125rem; font-weight: 600; }
        .app-preview_placeholder-sub { font-size: 0.875rem; }
        .app-preview_content .text-style-label { margin-bottom: 12px; }
        .app-preview_content h2 { margin-bottom: 16px; }
        .app-preview_desc { font-size: 0.9375rem; line-height: 1.6; margin-bottom: 32px; max-width: 480px; }
        .app-preview_features { display: flex; flex-direction: column; gap: 16px; margin-bottom: 32px; }
        .app-preview_feature { display: flex; align-items: center; gap: 12px; }
        .app-preview_feature-icon { width: 32px; height: 32px; border-radius: 8px; background: rgba(255,0,110,0.08); display: flex; align-items: center; justify-content: center; flex-shrink: 0; color: var(--color-accent); }
        @media (min-width: 992px) {
          .app-preview_layout { grid-template-columns: 1fr 1fr; gap: 96px; }
        }
      `}</style>
    </section>
  )
}
