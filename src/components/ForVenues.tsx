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
            <span className="font-[family-name:var(--font-mono)] text-accent text-xs tracking-[0.3em] uppercase block mb-4">
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
                  <div className="text-2xl sm:text-3xl font-extrabold text-accent font-[family-name:var(--font-mono)] min-w-[4rem]">
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
              <div className="text-center relative z-10 px-8">
                <div className="text-6xl mb-4">🎪</div>
                <p className="text-zinc-500 text-sm font-[family-name:var(--font-mono)] uppercase tracking-wider">
                  Booth Preview
                </p>
                <p className="text-zinc-600 text-xs mt-2">
                  Sleek, modern, fits any venue aesthetic
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
