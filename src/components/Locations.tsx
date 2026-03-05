'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { IconFire } from './Icons'

const venues = [
  { name: 'The Driskill', area: 'Dirty Sixth', status: 'Live', hot: true },
  { name: 'Handlebar', area: 'Rainey Street', status: 'Live', hot: false },
  { name: 'Summit Rooftop', area: 'Rainey Street', status: 'Live', hot: true },
  { name: 'Maggie Mae\'s', area: 'Dirty Sixth', status: 'Coming Soon', hot: false },
]

export default function Locations() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section id="locations" className="section-gap relative overflow-hidden" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-medium text-accent text-xs tracking-[0.3em] uppercase block mb-4">
            Locations
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4">
            Live on 6th Street.
          </h2>
          <p className="text-zinc-500 text-lg">
            Austin, TX — and expanding soon.
          </p>
        </motion.div>

        {/* Venue Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {venues.map((venue, i) => (
            <motion.div
              key={venue.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="glass-card p-6 flex items-center justify-between group"
            >
              <div>
                <h3 className="text-white font-semibold text-lg">{venue.name}</h3>
                <p className="text-zinc-500 text-sm">{venue.area}</p>
              </div>
              <div className="flex items-center gap-2">
                {venue.hot && (
                  <motion.div
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="text-accent"
                  >
                    <IconFire size={16} weight="fill" />
                  </motion.div>
                )}
                <span
                  className={`text-xs font-medium px-3 py-1 rounded-full ${
                    venue.status === 'Live'
                      ? 'bg-accent/10 text-accent border border-accent/20'
                      : 'bg-zinc-800 text-zinc-500 border border-zinc-700'
                  }`}
                >
                  {venue.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Coming to more cities */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center text-zinc-600 text-sm mt-10 font-medium"
        >
          Dallas, Houston, Nashville — coming 2026
        </motion.p>
      </div>
    </section>
  )
}
