'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { IconBooth, IconFlash, IconHeart, IconSpark } from './Icons'

const steps = [
  {
    num: '01',
    title: 'Step up to the booth',
    desc: 'Find a Photo Match booth at your favorite bar or club. They\'re hard to miss.',
    Icon: IconBooth,
  },
  {
    num: '02',
    title: 'Strike a pose',
    desc: 'Get your photo reel printed. It\'s yours to keep — the night\'s best souvenir.',
    Icon: IconFlash,
  },
  {
    num: '03',
    title: 'Get matched',
    desc: 'Our algorithm pairs you with someone at this venue based on your vibe.',
    Icon: IconHeart,
  },
  {
    num: '04',
    title: 'Meet your match',
    desc: 'Both of you get notified. The rest is up to you. No pressure, just connection.',
    Icon: IconSpark,
  },
]

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function StepCard({ step, index }: { step: { num: string; title: string; desc: string; Icon: any }; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative"
    >
      <div className="glass-card p-8 sm:p-10 relative overflow-visible transition-all duration-300">
        {/* Step number */}
        <span className="font-medium text-accent/30 text-7xl sm:text-8xl font-bold absolute top-4 right-6 select-none group-hover:text-accent/50 transition-colors">
          {step.num}
        </span>

        {/* Icon */}
        <div className="mb-6 text-accent">
          <step.Icon size={36} weight="duotone" />
        </div>

        {/* Content */}
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 relative z-10">
          {step.title}
        </h3>
        <p className="text-zinc-400 text-base leading-relaxed relative z-10 max-w-sm">
          {step.desc}
        </p>

        {/* Accent line */}
        <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-accent to-transparent w-0 group-hover:w-full transition-all duration-500" />
      </div>
    </motion.div>
  )
}

export default function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section id="how-it-works" className="section-gap relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-medium text-accent text-xs tracking-[0.3em] uppercase block mb-4">
            How It Works
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white max-w-xl">
            Four steps to your
            <br />
            <span className="text-accent">next connection.</span>
          </h2>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step, i) => (
            <StepCard key={step.num} step={step} index={i} />
          ))}
        </div>

        {/* Connecting line between steps (desktop) */}
        <div className="hidden md:block absolute left-1/2 top-[45%] h-[40%] w-px bg-gradient-to-b from-accent/20 via-accent/5 to-transparent" />
      </div>
    </section>
  )
}
