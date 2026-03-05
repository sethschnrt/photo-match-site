'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function AppPreview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section id="app" className="section-gap relative overflow-hidden" ref={ref}>
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-accent/[0.03] blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Phone mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center order-2 lg:order-1"
          >
            <div className="relative" style={{ perspective: '1200px' }}>
              <motion.div
                animate={{ rotateY: [-3, 3, -3] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="w-[280px] sm:w-[320px] rounded-[2.5rem] bg-gradient-to-b from-zinc-800 to-zinc-950 p-3 shadow-2xl shadow-black/50"
              >
                {/* Phone screen */}
                <div className="rounded-[2rem] bg-[#0a0a0a] overflow-hidden aspect-[9/19.5]">
                  {/* Status bar */}
                  <div className="flex items-center justify-between px-6 pt-4 pb-2">
                    <span className="text-[10px] text-zinc-500 font-[family-name:var(--font-mono)]">9:41</span>
                    <div className="flex gap-1">
                      <div className="w-3.5 h-1.5 rounded-sm bg-zinc-600" />
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
                    </div>
                  </div>

                  {/* App header */}
                  <div className="px-5 pt-4 pb-3">
                    <h3 className="text-white text-sm font-bold">Heat Map</h3>
                    <p className="text-zinc-600 text-[10px]">6th Street, Austin TX</p>
                  </div>

                  {/* Fake heat map */}
                  <div className="px-4 pb-4">
                    <div className="rounded-xl bg-zinc-900/80 p-4 aspect-square relative overflow-hidden">
                      {/* Grid lines */}
                      <div className="absolute inset-4 grid grid-cols-4 grid-rows-4">
                        {Array.from({ length: 16 }).map((_, i) => (
                          <div key={i} className="border border-zinc-800/30" />
                        ))}
                      </div>

                      {/* Heat dots */}
                      <motion.div
                        animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute top-[25%] left-[35%] w-10 h-10 rounded-full bg-accent/40 blur-md"
                      />
                      <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.8, 0.4] }}
                        transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                        className="absolute top-[45%] left-[55%] w-8 h-8 rounded-full bg-accent/30 blur-md"
                      />
                      <motion.div
                        animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0.9, 0.5] }}
                        transition={{ duration: 1.8, repeat: Infinity, delay: 1 }}
                        className="absolute top-[60%] left-[25%] w-12 h-12 rounded-full bg-accent/50 blur-md"
                      />

                      {/* Venue pins */}
                      <div className="absolute top-[22%] left-[33%] w-3 h-3 rounded-full bg-accent border-2 border-white/20 z-10" />
                      <div className="absolute top-[42%] left-[53%] w-2.5 h-2.5 rounded-full bg-accent/70 border-2 border-white/10 z-10" />
                      <div className="absolute top-[57%] left-[23%] w-3.5 h-3.5 rounded-full bg-accent border-2 border-white/20 z-10" />
                    </div>
                  </div>

                  {/* Venue card */}
                  <div className="px-4 pb-6">
                    <div className="rounded-xl bg-zinc-900/60 p-3 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center text-lg">
                        🔥
                      </div>
                      <div>
                        <p className="text-white text-xs font-semibold">The Driskill</p>
                        <p className="text-accent text-[10px] font-[family-name:var(--font-mono)]">
                          47 people matching now
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Phone glow */}
              <div className="absolute -inset-8 bg-accent/[0.04] rounded-full blur-3xl -z-10" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <span className="font-[family-name:var(--font-mono)] text-accent text-xs tracking-[0.3em] uppercase block mb-4">
              The App
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
              See where the
              <br />
              <span className="text-accent">action is.</span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8 max-w-md">
              The Photo Match app shows you a live heat map of every booth in the city. 
              See which venues are heating up and head straight to the energy.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="glass-card px-6 py-3 flex items-center gap-3 opacity-60">
                <span className="text-2xl">🍎</span>
                <div>
                  <p className="text-[10px] text-zinc-500">Download on the</p>
                  <p className="text-white text-sm font-semibold">App Store</p>
                </div>
              </div>
              <div className="glass-card px-6 py-3 flex items-center gap-3 opacity-60">
                <span className="text-2xl">▶️</span>
                <div>
                  <p className="text-[10px] text-zinc-500">Get it on</p>
                  <p className="text-white text-sm font-semibold">Google Play</p>
                </div>
              </div>
            </div>
            <p className="text-zinc-600 text-xs mt-3 font-[family-name:var(--font-mono)]">
              Coming soon — join the waitlist
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
