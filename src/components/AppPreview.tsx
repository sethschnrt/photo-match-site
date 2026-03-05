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
                      <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center text-accent">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 22c4-4 8-7.5 8-12a8 8 0 00-16 0c0 4.5 4 8 8 12z" />
                          <path d="M12 22c-1.5-2-3-3.5-3-6a3 3 0 016 0c0 2.5-1.5 4-3 6z" />
                        </svg>
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
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div>
                  <p className="text-[10px] text-zinc-500">Download on the</p>
                  <p className="text-white text-sm font-semibold">App Store</p>
                </div>
              </div>
              <div className="glass-card px-6 py-3 flex items-center gap-3 opacity-60">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
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
