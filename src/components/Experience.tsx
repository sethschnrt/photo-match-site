'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Sparkle, Users, MapPin, Trophy } from '@phosphor-icons/react/dist/ssr'

const features = [
  {
    title: 'Real photos, real people',
    desc: 'No filters, no catfishing. Your photo reel is printed right there.',
    Icon: Sparkle,
    span: 'md:col-span-2',
  },
  {
    title: 'Same venue, same night',
    desc: 'Your match is already here. Walk over and introduce yourself.',
    Icon: MapPin,
    span: '',
  },
  {
    title: 'Built for groups',
    desc: 'Bring your crew. Group photos, group matches, better nights out.',
    Icon: Users,
    span: '',
  },
  {
    title: 'Keep your reel',
    desc: 'A printed photo strip from every night out. Way better than a blurry phone pic.',
    Icon: Trophy,
    span: 'md:col-span-2',
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="section-large overflow-hidden" ref={ref}>
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-accent font-medium text-sm tracking-wide uppercase mb-3">The Experience</p>
          <h2>Not another dating app.</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className={`glass-card p-8 ${f.span}`}
            >
              <div className="text-accent mb-4">
                <f.Icon size={24} weight="duotone" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-zinc-400 text-base leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
