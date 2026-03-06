'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const features = [
  { num: '01', title: 'Real photos, not profiles', desc: 'No filters, no catfishing. Your photo reel is printed right there in front of you. What you see is what you get.' },
  { num: '02', title: 'Same venue, same night', desc: 'Your match is not across town or three days away. They are here. Right now. Walk over and say hi.' },
  { num: '03', title: 'Keep your reel', desc: 'A printed photo strip from every night out. Stick it on your fridge, tape it to your mirror, share it with friends.' },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="section_experience" ref={ref}>
      {/* Gradient header area with pattern instead of reused image */}
      <div className="experience_header-band">
        <div className="experience_header-pattern" />
        <div className="experience_header-gradient" />
        <div className="padding-global experience_header-content">
          <div className="container-large">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
              className="experience_heading"
            >
              Not another<br />dating app.
            </motion.h2>
          </div>
        </div>
      </div>

      {/* Feature grid */}
      <div className="padding-global padding-section-medium">
        <div className="container-large">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="experience_lead text-color-secondary max-width-large"
          >
            Photo Match happens in real life. Same venue, same night, face to face. The way it should be.
          </motion.p>

          <div className="experience_grid">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease: [0.4, 0, 0.2, 1] }}
                className="experience_feature"
              >
                <span className="experience_feature-num text-color-accent text-style-muted">{f.num}</span>
                <h3 className="experience_feature-title">{f.title}</h3>
                <p className="experience_feature-desc text-color-secondary">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .experience_header-band { position: relative; padding: 96px 0 64px; overflow: hidden; }
        .experience_header-pattern { position: absolute; inset: 0; opacity: 0.04; background-image: radial-gradient(circle at 1px 1px, rgba(255,0,110,0.5) 1px, transparent 0); background-size: 32px 32px; }
        .experience_header-gradient { position: absolute; inset: 0; background: linear-gradient(135deg, rgba(255,0,110,0.06) 0%, transparent 50%, rgba(255,0,110,0.03) 100%); }
        .experience_header-content { position: relative; z-index: 1; }
        .experience_heading { font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 600; letter-spacing: -0.04em; line-height: 1.0; max-width: 560px; }
        .experience_lead { font-size: 1.0625rem; line-height: 1.6; margin-bottom: 64px; }
        .experience_grid { display: grid; grid-template-columns: 1fr; gap: 1px; background: var(--color-border); border-radius: 16px; overflow: hidden; }
        .experience_feature { background: var(--color-bg-primary); padding: 40px; transition: background 0.3s; }
        .experience_feature:hover { background: var(--color-bg-secondary); }
        .experience_feature-num { display: block; font-size: 0.75rem; font-family: monospace; margin-bottom: 16px; }
        .experience_feature-title { font-size: 1.125rem; font-weight: 600; color: var(--color-text-primary); margin-bottom: 8px; transition: color 0.3s; }
        .experience_feature:hover .experience_feature-title { color: var(--color-accent); }
        .experience_feature-desc { font-size: 0.9375rem; line-height: 1.6; }
        @media (min-width: 768px) {
          .experience_grid { grid-template-columns: repeat(3, 1fr); }
        }
      `}</style>
    </section>
  )
}
