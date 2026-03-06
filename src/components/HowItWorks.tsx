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
}

const steps: Step[] = [
  { num: '01', title: 'Walk up to the booth', desc: 'Find a Photo Match booth at your favorite bar or club. Impossible to miss.', Icon: Camera },
  { num: '02', title: 'Get your photo reel', desc: 'Pose, smile, be weird. Your reel prints instantly. It is yours to keep.', Icon: Lightning },
  { num: '03', title: 'We find your match', desc: 'Our algorithm pairs you with someone at this venue. Both of you get notified.', Icon: HeartStraight },
  { num: '04', title: 'Go say hey', desc: 'Your match is already here. Walk over, introduce yourself. The hard part is done.', Icon: Handshake },
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
  const y = useTransform(
    scrollYProgress,
    [start, fadeIn],
    [40, 0]
  )

  return (
    <motion.div className="how-it-works_step-card" style={{ opacity, y }}>
      <div className="how-it-works_icon-wrapper">
        <step.Icon size={24} weight="duotone" className="text-color-accent" />
      </div>
      <span className="how-it-works_step-num text-color-accent text-style-muted">{step.num}</span>
      <h3 className="how-it-works_step-title">{step.title}</h3>
      <p className="how-it-works_step-desc text-color-secondary">{step.desc}</p>
    </motion.div>
  )
}

export default function HowItWorks() {
  const containerRef = useRef(null)
  const headingRef = useRef(null)
  const isInView = useInView(headingRef, { once: true, margin: '-80px' })

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

              {/* Progress dots for desktop */}
              <div className="how-it-works_progress">
                {steps.map((_, i) => (
                  <ProgressDot key={i} index={i} scrollYProgress={scrollYProgress} />
                ))}
              </div>
            </div>

            {/* Right: animated steps */}
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
        .how-it-works_steps-area { position: relative; min-height: 220px; }
        .how-it-works_step-card { position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: center; }
        .how-it-works_icon-wrapper { width: 56px; height: 56px; border-radius: 14px; background: rgba(255,0,110,0.08); display: flex; align-items: center; justify-content: center; margin-bottom: 20px; }
        .how-it-works_step-num { font-size: 0.75rem; font-family: monospace; margin-bottom: 8px; display: block; }
        .how-it-works_step-title { font-size: clamp(1.5rem, 2.5vw, 2rem); font-weight: 600; color: var(--color-text-primary); margin-bottom: 12px; letter-spacing: -0.02em; }
        .how-it-works_step-desc { font-size: 1.0625rem; line-height: 1.6; max-width: 420px; }
        @media (min-width: 992px) {
          .how-it-works_layout { grid-template-columns: 1fr 1fr; gap: 80px; }
          .how-it-works_progress { display: flex; }
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
