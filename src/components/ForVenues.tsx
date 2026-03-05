'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const benefits = [
  { stat: '40%', label: 'longer average stay', desc: 'People stick around waiting for their match.' },
  { stat: '2x', label: 'social mentions', desc: 'Photo reels get shared. Your venue gets tagged.' },
  { stat: '$0', label: 'upfront cost', desc: 'We bring the booth. You bring the crowd.' },
]

export default function ForVenues() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section id="venues" className="section-gap relative" ref={ref}>
      {/* Subtle divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="font-[family-name:var(--font-body)] font-medium text-accent text-xs tracking-[0.3em] uppercase block mb-4">
              For Venues
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
              Make your venue
              <br />
              <span className="text-accent">the place to be.</span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-10 max-w-md">
              Photo Match booths drive foot traffic, increase dwell time, and create 
              social media buzz. Your venue becomes a destination, not just a stop.
            </p>

            {/* Benefits */}
            <div className="space-y-6 mb-10">
              {benefits.map((b, i) => (
                <motion.div
                  key={b.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="text-2xl sm:text-3xl font-extrabold text-accent font-[family-name:var(--font-body)] font-medium min-w-[4rem]">
                    {b.stat}
                  </div>
                  <div>
                    <div className="text-white font-semibold">{b.label}</div>
                    <div className="text-zinc-500 text-sm">{b.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <a
              href="mailto:hello@photomatch.live"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-semibold text-lg hover:bg-zinc-200 transition-all hover:-translate-y-0.5"
            >
              Bring Photo Match to Your Venue
              <span>&rarr;</span>
            </a>
          </motion.div>

          {/* Right: Booth mockup placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="glass-card aspect-[4/5] rounded-2xl flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />
              {/* Abstract booth visualization */}
              <div className="relative z-10 w-full h-full flex flex-col items-center justify-center gap-6 px-8">
                <div className="w-32 h-44 rounded-xl border border-zinc-800 bg-zinc-900/50 flex flex-col items-center justify-center gap-2 relative">
                  <div className="w-8 h-8 rounded-full border-2 border-accent/40" />
                  <div className="w-16 h-1 bg-zinc-800 rounded" />
                  <div className="w-12 h-1 bg-zinc-800 rounded" />
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-20 h-1.5 bg-accent/20 rounded-full blur-sm" />
                </div>
                <p className="text-zinc-600 text-xs font-[family-name:var(--font-body)] font-medium uppercase tracking-wider">
                  Sleek. Modern. On-brand.
                </p>
              </div>
            </div>
            {/* Glow behind card */}
            <div className="absolute -inset-4 bg-accent/[0.02] rounded-3xl blur-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
