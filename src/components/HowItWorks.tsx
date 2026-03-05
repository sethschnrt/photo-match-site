'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Camera, Lightning, HeartStraight, Handshake } from '@phosphor-icons/react/dist/ssr'

const steps = [
  {
    num: '01',
    title: 'Walk up to the booth',
    desc: 'Find a Photo Match booth at your favorite bar or club. Impossible to miss.',
    Icon: Camera,
  },
  {
    num: '02',
    title: 'Get your photo reel',
    desc: 'Pose, smile, be weird. Your reel prints instantly. It is yours to keep.',
    Icon: Lightning,
  },
  {
    num: '03',
    title: 'We find your match',
    desc: 'Our algorithm pairs you with someone at this venue. Both of you get notified.',
    Icon: HeartStraight,
  },
  {
    num: '04',
    title: 'Go say hey',
    desc: 'Your match is already here. Walk over, introduce yourself. No pressure.',
    Icon: Handshake,
  },
]

export default function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="how" className="py-24 md:py-32 overflow-hidden" ref={ref}>
      <div className="container-site">
        <div className="grid lg:grid-cols-5 gap-16">
          {/* Left column - sticky heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <p className="text-accent font-medium text-sm tracking-widest uppercase mb-4">How It Works</p>
            <h2>Four steps.<br />No swiping required.</h2>
          </motion.div>

          {/* Right column - steps */}
          <div className="lg:col-span-3 space-y-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.1 }}
                className="flex gap-6 py-8 border-b border-white/[0.06] first:pt-0 last:border-0 last:pb-0"
              >
                <div className="text-accent shrink-0 mt-1">
                  <step.Icon size={24} weight="duotone" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs text-zinc-600 font-medium">{step.num}</span>
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-zinc-400 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
