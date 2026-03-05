'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const stats = [
  { value: '10,000+', label: 'Matches Made' },
  { value: '45+', label: 'Partner Venues' },
  { value: '4.9', label: 'App Store Rating' },
  { value: '$5', label: 'Flat Fee' },
]

export default function SocialProof() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="border-y border-white/[0.06]">
      <div className="container-site py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <p className="text-3xl md:text-4xl font-bold text-white tracking-tight">{stat.value}</p>
              <p className="text-sm text-zinc-500 mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
