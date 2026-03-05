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
    desc: 'Your match is already here. Walk over, introduce yourself. The hard part is done.',
    Icon: Handshake,
  },
]

export default function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="how" className="py-24 md:py-32 overflow-hidden" ref={ref}>
      <div className="container-site">
        <div className="grid lg:grid-cols-5 gap-16">
          {/* Left column - sticky heading */}
          <div className="lg:col-span-2 lg:sticky lg:top-32 lg:self-start">
            <motion.p
              initial={{ opacity: 0, x: -16 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="text-accent font-medium text-sm tracking-widest uppercase mb-4"
            >
              How It Works
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, x: -16 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
            >
              Four steps.<br />No swiping required.
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="w-16 h-0.5 bg-accent mt-6 origin-left"
            />
          </div>

          {/* Right column - steps */}
          <div className="lg:col-span-3 space-y-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: 24 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.12, ease: [0.4, 0, 0.2, 1] }}
                className="group flex gap-5 py-8 border-b border-white/[0.06] first:pt-0 last:border-0 last:pb-0 cursor-default"
              >
                {/* Step number + icon */}
                <div className="shrink-0 flex flex-col items-center gap-3">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.12, type: 'spring', stiffness: 300, damping: 20 }}
                    className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300"
                  >
                    <step.Icon size={22} weight="duotone" className="text-accent" />
                  </motion.div>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs text-accent/50 font-mono font-medium">{step.num}</span>
                    <h3 className="text-lg font-semibold group-hover:text-accent transition-colors duration-300">{step.title}</h3>
                  </div>
                  <p className="text-zinc-400 leading-relaxed text-base">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
