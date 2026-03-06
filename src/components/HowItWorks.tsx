'use client'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Camera, Lightning, HeartStraight, Handshake } from '@phosphor-icons/react/dist/ssr'
import type { Icon } from '@phosphor-icons/react'

interface Step {
  num: string
  title: string
  desc: string
  Icon: Icon
  layout: 'left-heavy' | 'right-image' | 'full-center' | 'split-diagonal'
}

const steps: Step[] = [
  { num: '01', title: 'Walk up to the booth', desc: 'Find a Photo Match booth at your favorite bar or club. Impossible to miss.', Icon: Camera, layout: 'left-heavy' },
  { num: '02', title: 'Get your photo reel', desc: 'Pose, smile, be weird. Your reel prints instantly. It is yours to keep.', Icon: Lightning, layout: 'right-image' },
  { num: '03', title: 'We find your match', desc: 'Our algorithm pairs you with someone at this venue. Both of you get notified.', Icon: HeartStraight, layout: 'full-center' },
  { num: '04', title: 'Go say hey', desc: 'Your match is already here. Walk over, introduce yourself. The hard part is done.', Icon: Handshake, layout: 'split-diagonal' },
]

function StepCard({ step, index, scrollYProgress }: { step: Step; index: number; scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress'] }) {
  const start = index / steps.length
  const fadeIn = start + 0.05
  const fadeOut = (index + 1) / steps.length - 0.05
  const end = (index + 1) / steps.length

  const opacity = useTransform(
    scrollYProgress,
    [start, fadeIn, fadeOut, end],
    index === steps.length - 1 ? [0, 1, 1, 1] : [0, 1, 1, 0]
  )
  const y = useTransform(scrollYProgress, [start, fadeIn], [40, 0])

  return (
    <motion.div className={`how-it-works_step-card is-${step.layout}`} style={{ opacity, y }}>
      {step.layout === 'left-heavy' && (
        /* Step 1: Big number left, text right, offset down */
        <div className="how-it-works_layout-left-heavy">
          <div className="how-it-works_big-num-col">
            <span className="how-it-works_giant-num text-color-accent">{step.num}</span>
          </div>
          <div className="how-it-works_text-col" style={{ paddingTop: '48px' }}>
            <div className="how-it-works_icon-wrapper">
              <step.Icon size={24} weight="duotone" className="text-color-accent" />
            </div>
            <h3 className="how-it-works_step-title">{step.title}</h3>
            <p className="how-it-works_step-desc text-color-secondary">{step.desc}</p>
          </div>
        </div>
      )}

      {step.layout === 'right-image' && (
        /* Step 2: Text left, icon placeholder right, offset up */
        <div className="how-it-works_layout-right-image">
          <div className="how-it-works_text-col" style={{ paddingBottom: '32px' }}>
            <span className="how-it-works_step-num text-color-accent text-style-muted">{step.num}</span>
            <h3 className="how-it-works_step-title">{step.title}</h3>
            <p className="how-it-works_step-desc text-color-secondary">{step.desc}</p>
          </div>
          <div className="how-it-works_image-placeholder">
            <step.Icon size={64} weight="duotone" className="text-color-accent" />
          </div>
        </div>
      )}

      {step.layout === 'full-center' && (
        /* Step 3: Centered, HUGE text, full width */
        <div className="how-it-works_layout-full-center">
          <span className="how-it-works_step-num text-color-accent text-style-muted">{step.num}</span>
          <h3 className="how-it-works_huge-title">{step.title}</h3>
          <p className="how-it-works_step-desc text-color-secondary" style={{ maxWidth: '520px', margin: '0 auto' }}>{step.desc}</p>
        </div>
      )}

      {step.layout === 'split-diagonal' && (
        /* Step 4: Number far left, text far right, diagonal line */
        <div className="how-it-works_layout-split">
          <span className="how-it-works_split-num text-color-accent">{step.num}</span>
          <div className="how-it-works_split-line" />
          <div className="how-it-works_split-text">
            <div className="how-it-works_icon-wrapper">
              <step.Icon size={24} weight="duotone" className="text-color-accent" />
            </div>
            <h3 className="how-it-works_step-title">{step.title}</h3>
            <p className="how-it-works_step-desc text-color-secondary">{step.desc}</p>
          </div>
        </div>
      )}
    </motion.div>
  )
}

export default function HowItWorks() {
  const containerRef = useRef(null)
  const headingRef = useRef(null)
  const isInView = useInView(headingRef, { once: true, margin: '-20px' })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  return (
    <section id="how" className="section_how-it-works" ref={containerRef}>
      <div className="how-it-works_sticky">
        <div className="padding-global">
          <div className="container-large how-it-works_layout">
            {/* Left: sticky heading */}
            <div className="how-it-works_heading-side" ref={headingRef}>
              <motion.p
                initial={{ opacity: 1, x: -16 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4 }}
                className="text-style-label text-color-accent"
              >
                How It Works
              </motion.p>
              <motion.h2
                initial={{ opacity: 1, x: -16 }}
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

              {/* Progress dots for desktop */}
              <div className="how-it-works_progress">
                {steps.map((_, i) => (
                  <ProgressDot key={i} index={i} scrollYProgress={scrollYProgress} />
                ))}
              </div>
            </div>

            {/* Right: animated steps with unique layouts */}
            <div className="how-it-works_steps-area">
              {steps.map((step, i) => (
                <StepCard key={step.num} step={step} index={i} scrollYProgress={scrollYProgress} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .section_how-it-works { position: relative; height: ${steps.length * 100}vh; }
        .how-it-works_sticky { position: sticky; top: 0; height: 100vh; display: flex; align-items: center; overflow: hidden; }
        .how-it-works_layout { display: grid; grid-template-columns: 1fr; gap: 48px; align-items: center; }
        .how-it-works_heading-side .text-style-label { margin-bottom: 12px; }
        .how-it-works_accent-line { width: 64px; height: 2px; background: #FF006E; margin-top: 24px; transform-origin: left; }
        .how-it-works_progress { display: none; margin-top: 32px; gap: 8px; }
        .how-it-works_progress-dot { width: 8px; height: 8px; border-radius: 50%; background: rgba(255,255,255,0.1); transition: background 0.3s; }
        .how-it-works_progress-dot.is-active { background: #FF006E; }
        .how-it-works_steps-area { position: relative; min-height: 280px; }
        .how-it-works_step-card { position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: center; }

        /* Icon wrapper */
        .how-it-works_icon-wrapper { width: 56px; height: 56px; border-radius: 14px; background: rgba(255,0,110,0.08); display: flex; align-items: center; justify-content: center; margin-bottom: 20px; }
        .how-it-works_step-num { font-size: 0.75rem; font-family: monospace; margin-bottom: 8px; display: block; }
        .how-it-works_step-title { font-size: clamp(1.5rem, 2.5vw, 2rem); font-weight: 600; color: var(--color-text-primary); margin-bottom: 12px; letter-spacing: -0.02em; }
        .how-it-works_step-desc { font-size: 1.0625rem; line-height: 1.6; max-width: 420px; }

        /* Layout: left-heavy (Step 1) */
        .how-it-works_layout-left-heavy {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 40px;
          align-items: start;
        }
        .how-it-works_giant-num {
          font-size: clamp(5rem, 10vw, 8rem);
          font-weight: 600;
          line-height: 0.85;
          letter-spacing: -0.06em;
        }

        /* Layout: right-image (Step 2) */
        .how-it-works_layout-right-image {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 40px;
          align-items: center;
        }
        .how-it-works_image-placeholder {
          width: 140px;
          height: 140px;
          border-radius: 20px;
          background: rgba(255,0,110,0.04);
          border: 1px solid rgba(255,0,110,0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          transform: translateY(-24px);
        }

        /* Layout: full-center (Step 3) */
        .how-it-works_layout-full-center {
          text-align: center;
        }
        .how-it-works_layout-full-center .how-it-works_step-num {
          margin-bottom: 16px;
        }
        .how-it-works_huge-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 600;
          color: var(--color-text-primary);
          letter-spacing: -0.04em;
          line-height: 1.0;
          margin-bottom: 16px;
        }

        /* Layout: split-diagonal (Step 4) */
        .how-it-works_layout-split {
          display: grid;
          grid-template-columns: auto 1fr auto;
          gap: 0;
          align-items: center;
          width: 100%;
        }
        .how-it-works_split-num {
          font-size: clamp(4rem, 8vw, 6rem);
          font-weight: 600;
          line-height: 1;
          letter-spacing: -0.04em;
        }
        .how-it-works_split-line {
          height: 1px;
          background: linear-gradient(90deg, #FF006E, transparent);
          transform: rotate(-3deg);
          margin: 0 32px;
        }
        .how-it-works_split-text {
          max-width: 320px;
        }

        @media (min-width: 992px) {
          .how-it-works_layout { grid-template-columns: 1fr 1fr; gap: 80px; }
          .how-it-works_progress { display: flex; }
        }

        @media (max-width: 599px) {
          .how-it-works_layout-left-heavy { grid-template-columns: 1fr; gap: 16px; }
          .how-it-works_giant-num { font-size: 4rem; }
          .how-it-works_layout-right-image { grid-template-columns: 1fr; gap: 24px; }
          .how-it-works_image-placeholder { width: 100px; height: 100px; transform: none; }
          .how-it-works_layout-split { grid-template-columns: 1fr; gap: 16px; }
          .how-it-works_split-line { transform: none; margin: 8px 0; width: 64px; }
          .how-it-works_split-num { font-size: 3rem; }
        }
      `}</style>
    </section>
  )
}

function ProgressDot({ index, scrollYProgress }: { index: number; scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress'] }) {
  const start = index / steps.length
  const end = (index + 1) / steps.length
  const opacity = useTransform(scrollYProgress, [start, start + 0.05, end - 0.05, end], [0.3, 1, 1, 0.3])

  return (
    <motion.div className="how-it-works_progress-dot" style={{ opacity, background: '#FF006E' }} />
  )
}
