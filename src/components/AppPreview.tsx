'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Bell, Camera, MapPin, ArrowRight } from '@phosphor-icons/react/dist/ssr'

const features = [
  'Live heat map of nearby venues',
  'Push notifications when you get matched',
  'Photo reel history and digital copies',
]

export default function AppPreview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="app" className="section_app-preview" ref={ref}>
      <div className="padding-global padding-section-large">
        <div className="container-large">
          <div className="app-preview_layout">
            {/* Phone mockup */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="app-preview_phone"
            >
              <div className="app-preview_phone-frame">
                <div className="app-preview_phone-notch" />
                <div className="app-preview_phone-screen">
                  <div className="app-preview_screen-header">
                    <p className="text-style-label text-color-accent" style={{ fontSize: '10px', letterSpacing: '0.15em' }}>PHOTO MATCH</p>
                    <p className="text-color-primary" style={{ fontSize: '16px', fontWeight: 600, marginTop: '4px' }}>Nearby Venues</p>
                  </div>
                  {['The Blind Pig', 'Summit Rooftop', 'Handlebar', 'Lustre Pearl'].map((venue, i) => (
                    <div key={venue} className="app-preview_venue-row">
                      <div className="app-preview_venue-icon"><MapPin size={14} weight="fill" className="text-color-accent" /></div>
                      <div>
                        <p className="text-color-primary" style={{ fontSize: '13px', fontWeight: 500 }}>{venue}</p>
                        <p className="text-color-tertiary" style={{ fontSize: '11px' }}>{12 + i * 3} active &middot; {Math.round(0.3 + i * 0.2)} mi</p>
                      </div>
                      <ArrowRight size={12} className="text-color-tertiary" style={{ marginLeft: 'auto' }} />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <div className="app-preview_content">
              <motion.p
                initial={{ opacity: 0, x: 16 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4 }}
                className="text-style-label text-color-accent"
              >
                The App
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, x: 16 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                See who is out tonight.
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="app-preview_desc text-color-secondary"
              >
                The Photo Match app shows you which venues near you have active booths, real-time activity, and where your crew is going. Find the spot with the best energy.
              </motion.p>

              <div className="app-preview_features">
                {features.map((f, i) => (
                  <motion.div
                    key={f}
                    initial={{ opacity: 0, x: 16 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                    className="app-preview_feature"
                  >
                    <div className="app-preview_check" />
                    <span className="text-color-secondary text-size-regular">{f}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="app-preview_badges"
              >
                <span className="text-color-tertiary text-size-small">Coming soon to iOS and Android</span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .section_app-preview { border-top: 1px solid var(--color-border); }
        .app-preview_layout { display: grid; grid-template-columns: 1fr; gap: 48px; align-items: center; }
        .app-preview_phone { display: flex; justify-content: center; }
        .app-preview_phone-frame { width: 260px; background: var(--color-bg-secondary); border-radius: 32px; border: 1px solid rgba(255,255,255,0.08); padding: 12px; overflow: hidden; }
        .app-preview_phone-notch { width: 80px; height: 4px; background: rgba(255,255,255,0.1); border-radius: 2px; margin: 0 auto 16px; }
        .app-preview_phone-screen { background: var(--color-bg-primary); border-radius: 20px; padding: 20px 16px; min-height: 360px; }
        .app-preview_screen-header { margin-bottom: 20px; }
        .app-preview_venue-row { display: flex; align-items: center; gap: 12px; padding: 12px 0; border-bottom: 1px solid var(--color-border); }
        .app-preview_venue-row:last-child { border-bottom: none; }
        .app-preview_venue-icon { width: 28px; height: 28px; border-radius: 8px; background: rgba(255,0,110,0.1); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .app-preview_content .text-style-label { margin-bottom: 12px; }
        .app-preview_content h2 { margin-bottom: 16px; }
        .app-preview_desc { font-size: 0.9375rem; line-height: 1.6; margin-bottom: 32px; max-width: 480px; }
        .app-preview_features { display: flex; flex-direction: column; gap: 16px; margin-bottom: 32px; }
        .app-preview_feature { display: flex; align-items: center; gap: 12px; }
        .app-preview_check { width: 6px; height: 6px; border-radius: 50%; background: var(--color-accent); flex-shrink: 0; }
        @media (min-width: 992px) {
          .app-preview_layout { grid-template-columns: 1fr 1fr; gap: 96px; }
        }
      `}</style>
    </section>
  )
}
