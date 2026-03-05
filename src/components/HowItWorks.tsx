'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Camera, Lightning, HeartStraight, Handshake } from '@phosphor-icons/react/dist/ssr'

const steps = [
  {
    num: '01',
    title: 'Step up to the booth',
    desc: 'Find a Photo Match booth at your favorite spot. They are impossible to miss.',
    Icon: Camera,
  },
  {
    num: '02',
    title: 'Strike a pose',
    desc: 'Get your photo reel printed on the spot. Keep it, share it, stick it on your fridge.',
    Icon: Lightning,
  },
  {
    num: '03',
    title: 'Get matched',
    desc: 'Our algorithm finds someone at this venue who matches your vibe. Both of you get notified.',
    Icon: HeartStraight,
  },
  {
    num: '04',
    title: 'Meet your match',
    desc: 'Walk over, say hey. No screens, no swiping, just two people in the same place.',
    Icon: Handshake,
  },
]

export default function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="how" className="section-large overflow-hidden" ref={ref}>
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-accent font-medium text-sm tracking-wide uppercase mb-3">How It Works</p>
          <h2>Four steps. No awkward openers.</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="glass-card p-8 group"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-accent text-xs font-semibold tracking-wider">{step.num}</span>
                <div className="h-px flex-1 bg-white/[0.06]" />
              </div>
              <div className="text-accent mb-4">
                <step.Icon size={28} weight="duotone" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
              <p className="text-zinc-400 text-base leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
