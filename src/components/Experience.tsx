'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const features = [
  {
    title: 'Physical photo reel',
    desc: 'A printed strip you actually keep. Not another screenshot in your camera roll.',
    span: 'col-span-1',
    accent: true,
  },
  {
    title: 'Matched at THIS venue',
    desc: 'Not someone across town. Someone here, right now, tonight.',
    span: 'col-span-1',
  },
  {
    title: '$5 flat',
    desc: 'No subscriptions. No premium tier. No swiping for hours. Five bucks.',
    span: 'col-span-1 md:col-span-2',
    large: true,
  },
  {
    title: 'Live heat map',
    desc: 'See which booths are popping off tonight. Go where the energy is.',
    span: 'col-span-1',
  },
  {
    title: 'Not another dating app',
    desc: 'This is real life. Face to face. The way it should be.',
    span: 'col-span-1',
    accent: true,
  },
]

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`${feature.span} group`}
    >
      <div
        className={`glass-card h-full transition-all duration-300 hover:-translate-y-1 ${
          feature.large ? 'p-10 sm:p-12' : 'p-8'
        } ${feature.accent ? 'border-accent/10 hover:border-accent/30' : ''}`}
      >
        <h3
          className={`font-bold text-white mb-3 ${
            feature.large ? 'text-3xl sm:text-4xl' : 'text-xl'
          }`}
        >
          {feature.title}
          {feature.title === '$5 flat' && (
            <span className="text-accent">.</span>
          )}
        </h3>
        <p
          className={`text-zinc-400 leading-relaxed ${
            feature.large ? 'text-lg max-w-lg' : ''
          }`}
        >
          {feature.desc}
        </p>

        {feature.accent && (
          <div className="mt-6 w-8 h-[2px] bg-accent rounded-full group-hover:w-16 transition-all" />
        )}
      </div>
    </motion.div>
  )
}

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section id="experience" className="section-gap relative" ref={ref}>
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/[0.03] blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="font-[family-name:var(--font-mono)] text-accent text-xs tracking-[0.3em] uppercase block mb-4">
            The Experience
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white">
            This isn&apos;t a dating app.
          </h2>
          <p className="text-xl text-zinc-500 mt-4">
            It&apos;s better.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
