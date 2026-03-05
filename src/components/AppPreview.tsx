'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Fire, MapPin, Bell } from '@phosphor-icons/react/dist/ssr'

export default function AppPreview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="app" className="section-large overflow-hidden" ref={ref}>
      <div className="container-site">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Phone mockup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex justify-center order-2 lg:order-1"
          >
            <div className="relative w-[280px]">
              {/* Phone frame */}
              <div className="rounded-[40px] border-2 border-white/10 bg-[#111] p-3 shadow-2xl">
                <div className="rounded-[32px] bg-[#0a0a0a] overflow-hidden">
                  {/* Status bar */}
                  <div className="flex justify-between items-center px-6 pt-4 pb-2">
                    <span className="text-[10px] text-zinc-500 font-medium">9:41</span>
                    <div className="flex gap-1">
                      <div className="w-3.5 h-2 rounded-sm bg-zinc-600" />
                      <div className="w-3.5 h-2 rounded-sm bg-zinc-600" />
                      <div className="w-4 h-2 rounded-sm bg-white/80" />
                    </div>
                  </div>

                  {/* App header */}
                  <div className="px-5 pt-2 pb-4">
                    <p className="text-accent text-[10px] font-semibold tracking-wider uppercase">Photo Match</p>
                    <p className="text-white text-lg font-bold mt-1">Nearby Venues</p>
                  </div>

                  {/* Venue cards */}
                  <div className="px-4 space-y-3 pb-6">
                    {[
                      { name: 'The Blind Pig', type: 'Bar', distance: '0.2 mi', hot: true },
                      { name: 'Summit Rooftop', type: 'Nightclub', distance: '0.4 mi', hot: true },
                      { name: 'Handlebar', type: 'Bar', distance: '0.5 mi', hot: false },
                    ].map((venue) => (
                      <div key={venue.name} className="bg-white/[0.04] rounded-xl p-4 border border-white/[0.06]">
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="flex items-center gap-2">
                              <p className="text-white text-sm font-semibold">{venue.name}</p>
                              {venue.hot && <Fire size={12} weight="fill" className="text-accent" />}
                            </div>
                            <p className="text-zinc-500 text-xs mt-0.5">{venue.type}</p>
                          </div>
                          <div className="flex items-center gap-1 text-zinc-500">
                            <MapPin size={10} weight="fill" />
                            <span className="text-[10px]">{venue.distance}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 mt-3">
                          <div className="h-1 flex-1 bg-accent/20 rounded-full overflow-hidden">
                            <div className="h-full bg-accent rounded-full" style={{ width: venue.hot ? '78%' : '34%' }} />
                          </div>
                          <span className="text-[9px] text-zinc-500">{venue.hot ? '78% match rate' : '34% match rate'}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Bottom nav */}
                  <div className="flex justify-around py-4 border-t border-white/[0.06]">
                    <MapPin size={18} weight="fill" className="text-accent" />
                    <Bell size={18} weight="duotone" className="text-zinc-600" />
                    <Fire size={18} weight="duotone" className="text-zinc-600" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="order-1 lg:order-2"
          >
            <p className="text-accent font-medium text-sm tracking-wide uppercase mb-3">The App</p>
            <h2 className="mb-6">See who is out tonight.</h2>
            <p className="text-zinc-400 leading-relaxed mb-8 max-w-lg">
              The Photo Match app shows you which venues near you have active booths, live match rates, and how many people are using it right now. Find the spot with the best energy.
            </p>

            <div className="space-y-4">
              {[
                'Live venue heat map',
                'Push notifications when you get matched',
                'Photo reel history and digital copies',
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  <p className="text-zinc-300 text-base">{feature}</p>
                </div>
              ))}
            </div>

            <div className="flex gap-3 mt-10">
              <div className="glass-card px-5 py-3 flex items-center gap-3 opacity-50 cursor-not-allowed">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div>
                  <p className="text-[9px] text-zinc-500">Download on the</p>
                  <p className="text-white text-xs font-semibold">App Store</p>
                </div>
              </div>
              <div className="glass-card px-5 py-3 flex items-center gap-3 opacity-50 cursor-not-allowed">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div>
                  <p className="text-[9px] text-zinc-500">Get it on</p>
                  <p className="text-white text-xs font-semibold">Google Play</p>
                </div>
              </div>
            </div>
            <p className="text-zinc-600 text-xs mt-3">Coming soon to iOS and Android</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
