'use client'
import { motion, useInView, animate } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import ImageReveal from './ImageReveal'
import AnimatedText from './AnimatedText'

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
      {/* Full-bleed image with reveal */}
      <div className="for-venues_image-break">
        <ImageReveal
          src={`${basePath}/assets/images/austin-nightlife.jpg`}
          alt="Austin bar street at night"
          className="for-venues_image-reveal"
        />
        <div className="for-venues_image-overlay" />
        <div className="for-venues_image-content">
          <div className="padding-global">
            <div className="container-large">
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4 }}
                className="text-style-label text-color-accent"
              >
                For Venues
              </motion.p>
              <AnimatedText
                text="Turn your bar into the place to be."
                as="h2"
                className="for-venues_heading"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="padding-global padding-section-medium">
        <div className="container-large">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="for-venues_desc text-color-secondary max-width-large"
          >
            Photo Match booths bring energy to your venue. More engagement, longer stays, and a reason for guests to come back next weekend.
          </motion.p>

          <div className="for-venues_benefits">
            {benefits.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
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
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.6 }}
            style={{ marginTop: '48px' }}
          >
            <a href="#" className="button is-primary">Book a Demo</a>
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        .for-venues_image-break { position: relative; height: 45vh; overflow: hidden; }
        .for-venues_image-reveal { position: absolute; inset: 0; }
        .for-venues_image-reveal .image-reveal_inner { position: absolute; inset: 0; }
        .for-venues_image-overlay { position: absolute; inset: 0; background: linear-gradient(to top, var(--color-bg-primary), rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.3)); z-index: 2; }
        .for-venues_image-content { position: absolute; inset: 0; display: flex; align-items: flex-end; padding-bottom: 64px; z-index: 3; }
        .for-venues_heading { max-width: 480px; }
        .for-venues_desc { font-size: 1.0625rem; line-height: 1.6; margin-bottom: 48px; }
        .for-venues_benefits { display: flex; flex-direction: column; gap: 32px; }
        .for-venues_benefit { display: flex; gap: 24px; }
        .for-venues_stat { flex-shrink: 0; width: 80px; text-align: right; font-size: 1.75rem; font-weight: 600; letter-spacing: -0.02em; }
        .for-venues_benefit-content { border-left: 1px solid var(--color-border); padding-left: 24px; transition: border-color 0.3s; }
        .for-venues_benefit:hover .for-venues_benefit-content { border-color: rgba(255,0,110,0.3); }
        .for-venues_benefit-title { font-size: 1rem; font-weight: 600; color: var(--color-text-primary); margin-bottom: 4px; transition: color 0.3s; }
        .for-venues_benefit:hover .for-venues_benefit-title { color: #FF006E; }
        .for-venues_benefit-desc { font-size: 0.9375rem; line-height: 1.6; }
        @media (min-width: 768px) {
          .for-venues_image-break { height: 55vh; }
        }
      `}</style>
    </section>
  )
}
