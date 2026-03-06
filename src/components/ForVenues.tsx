'use client'
import { motion, useInView, animate } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

function AnimatedNum({ value, suffix, visible }: { value: number; suffix: string; visible: boolean }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!visible) return
    const c = animate(0, value, { duration: 1.2, ease: [0.4, 0, 0.2, 1], onUpdate: (v) => setCount(Math.round(v)) })
    return () => c.stop()
  }, [visible, value])
  return <>{count}{suffix}</>
}

const benefits = [
  { stat: 40, prefix: '+', suffix: ' min', title: 'Longer average visits', desc: 'Guests stay longer when they have a reason to stick around and a match to meet.' },
  { stat: 0, prefix: '$', suffix: '', title: 'Setup cost', desc: 'We handle installation, maintenance, and support. You just collect your revenue share.' },
  { stat: 3, prefix: '', suffix: 'x', title: 'More social shares', desc: 'Every photo reel has your venue branding. Guests share them without even thinking about it.' },
]

export default function ForVenues() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="venues" className="section_for-venues" ref={ref}>
      <div className="padding-global padding-section-large">
        <div className="container-large">
          <div className="for-venues_layout">
            <div className="for-venues_left">
              <motion.p
                initial={{ opacity: 0, x: -16 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4 }}
                className="text-style-label text-color-accent"
              >
                For Venues
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, x: -16 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Turn your bar into the place to be.
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="for-venues_desc text-color-secondary"
              >
                Photo Match booths bring energy to your venue. More engagement, longer stays, and a reason for guests to come back next weekend.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="for-venues_image-wrapper"
              >
                <Image src={`${basePath}/assets/images/venue-interior.jpg`} alt="Photo Match booth in a bar" fill className="for-venues_image" />
                <div className="for-venues_image-overlay" />
                <div className="for-venues_live-badge">
                  <span className="for-venues_live-dot" />
                  <span className="text-size-tiny text-color-primary text-weight-medium">Live at 45 venues</span>
                </div>
              </motion.div>
            </div>

            <div className="for-venues_right">
              {benefits.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 24 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
                  className="for-venues_benefit"
                >
                  <div className="for-venues_stat text-color-accent">
                    {item.prefix}<AnimatedNum value={item.stat} suffix={item.suffix} visible={isInView} />
                  </div>
                  <div className="for-venues_benefit-content">
                    <h3 className="for-venues_benefit-title">{item.title}</h3>
                    <p className="for-venues_benefit-desc text-color-secondary">{item.desc}</p>
                  </div>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                <a href="#" className="button is-primary">Book a Demo</a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .for-venues_layout { display: grid; grid-template-columns: 1fr; gap: 48px; }
        .for-venues_left .text-style-label { margin-bottom: 12px; }
        .for-venues_left h2 { margin-bottom: 16px; }
        .for-venues_desc { font-size: 1.0625rem; line-height: 1.6; margin-bottom: 40px; }
        .for-venues_image-wrapper { position: relative; aspect-ratio: 4/3; border-radius: 16px; overflow: hidden; }
        .for-venues_image { object-fit: cover; }
        .for-venues_image-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.6), transparent); }
        .for-venues_live-badge { position: absolute; bottom: 16px; left: 16px; display: flex; align-items: center; gap: 8px; }
        .for-venues_live-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--color-accent); animation: pulse 2s infinite; }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
        .for-venues_right { display: flex; flex-direction: column; gap: 32px; }
        .for-venues_benefit { display: flex; gap: 24px; }
        .for-venues_stat { flex-shrink: 0; width: 80px; text-align: right; font-size: 1.75rem; font-weight: 600; letter-spacing: -0.02em; }
        .for-venues_benefit-content { border-left: 1px solid var(--color-border); padding-left: 24px; transition: border-color 0.3s; }
        .for-venues_benefit:hover .for-venues_benefit-content { border-color: rgba(255,0,110,0.3); }
        .for-venues_benefit-title { font-size: 1rem; font-weight: 600; color: var(--color-text-primary); margin-bottom: 4px; transition: color 0.3s; }
        .for-venues_benefit:hover .for-venues_benefit-title { color: var(--color-accent); }
        .for-venues_benefit-desc { font-size: 0.9375rem; line-height: 1.6; }
        @media (min-width: 992px) {
          .for-venues_layout { grid-template-columns: 1fr 1fr; gap: 96px; align-items: start; }
          .for-venues_right { padding-top: 48px; }
        }
      `}</style>
    </section>
  )
}
