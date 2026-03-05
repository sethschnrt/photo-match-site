'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const stats = [
  { value: '10,000+', label: 'matches made' },
  { value: '45', label: 'partner venues' },
  { value: '4.9', label: 'app rating' },
  { value: '$5', label: 'flat fee' },
]

export default function SocialProof() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section ref={ref} className="py-12 md:py-16 border-b border-white/[0.06]">
      <div className="container-site">
        <div className="flex flex-wrap justify-between gap-y-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-baseline gap-2"
            >
              <span className="text-2xl md:text-3xl font-bold text-white tracking-tight">{stat.value}</span>
              <span className="text-sm text-zinc-500">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
