'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Camera, Lightning, HeartStraight, Handshake } from '@phosphor-icons/react/dist/ssr'

const steps = [
  { num: '01', title: 'Walk up to the booth', desc: 'Find a Photo Match booth at your favorite bar or club. Impossible to miss.', Icon: Camera },
  { num: '02', title: 'Get your photo reel', desc: 'Pose, smile, be weird. Your reel prints instantly. It is yours to keep.', Icon: Lightning },
  { num: '03', title: 'We find your match', desc: 'Our algorithm pairs you with someone at this venue. Both of you get notified.', Icon: HeartStraight },
  { num: '04', title: 'Go say hey', desc: 'Your match is already here. Walk over, introduce yourself. The hard part is done.', Icon: Handshake },
]

export default function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="how" className="section_how-it-works" ref={ref}>
      <div className="padding-global padding-section-large">
        <div className="container-large">
          <div className="how-it-works_layout">
            {/* Left: sticky heading */}
            <div className="how-it-works_heading-side">
              <motion.p
                initial={{ opacity: 0, x: -16 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4 }}
                className="text-style-label text-color-accent"
              >
                How It Works
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, x: -16 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Four steps.<br />No swiping required.
              </motion.h2>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="how-it-works_accent-line"
              />
            </div>

            {/* Right: steps */}
            <div className="how-it-works_steps">
              {steps.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: 24 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.12, ease: [0.4, 0, 0.2, 1] }}
                  className="how-it-works_step"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.12, type: 'spring', stiffness: 300, damping: 20 }}
                    className="how-it-works_icon-wrapper"
                  >
                    <step.Icon size={22} weight="duotone" className="text-color-accent" />
                  </motion.div>
                  <div className="how-it-works_step-content">
                    <div className="how-it-works_step-header">
                      <span className="how-it-works_step-num text-color-accent text-style-muted">{step.num}</span>
                      <h3 className="how-it-works_step-title">{step.title}</h3>
                    </div>
                    <p className="how-it-works_step-desc text-color-secondary">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .how-it-works_layout { display: grid; grid-template-columns: 1fr; gap: 48px; }
        .how-it-works_heading-side .text-style-label { margin-bottom: 12px; }
        .how-it-works_accent-line { width: 64px; height: 2px; background: var(--color-accent); margin-top: 24px; transform-origin: left; }
        .how-it-works_steps { display: flex; flex-direction: column; }
        .how-it-works_step { display: flex; gap: 20px; padding: 32px 0; border-bottom: 1px solid var(--color-border); cursor: default; }
        .how-it-works_step:first-child { padding-top: 0; }
        .how-it-works_step:last-child { border-bottom: none; padding-bottom: 0; }
        .how-it-works_icon-wrapper { flex-shrink: 0; width: 48px; height: 48px; border-radius: 12px; background: rgba(255,0,110,0.08); display: flex; align-items: center; justify-content: center; transition: background 0.3s; }
        .how-it-works_step:hover .how-it-works_icon-wrapper { background: rgba(255,0,110,0.15); }
        .how-it-works_step-header { display: flex; align-items: center; gap: 12px; margin-bottom: 6px; }
        .how-it-works_step-num { font-size: 0.75rem; font-family: monospace; }
        .how-it-works_step-title { font-size: 1.125rem; font-weight: 600; color: var(--color-text-primary); transition: color 0.3s; }
        .how-it-works_step:hover .how-it-works_step-title { color: var(--color-accent); }
        .how-it-works_step-desc { font-size: 0.9375rem; line-height: 1.6; }
        @media (min-width: 992px) {
          .how-it-works_layout { grid-template-columns: 2fr 3fr; gap: 64px; }
          .how-it-works_heading-side { position: sticky; top: 128px; align-self: start; }
        }
      `}</style>
    </section>
  )
}
