'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, Fire } from '@phosphor-icons/react/dist/ssr'

const venues = [
  { name: 'Dirty Sixth', area: '6th Street', count: 12, hot: true },
  { name: 'Rainey Street', area: 'Rainey District', count: 8, hot: true },
  { name: 'West Sixth', area: 'West 6th', count: 6, hot: false },
  { name: 'East Austin', area: 'East Side', count: 4, hot: false },
  { name: 'South Congress', area: 'SoCo', count: 3, hot: false },
  { name: 'The Domain', area: 'North Austin', count: 5, hot: false },
]

export default function Locations() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="locations" className="section-large overflow-hidden" ref={ref}>
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-accent font-medium text-sm tracking-wide uppercase mb-3">Locations</p>
          <h2>Where to find us.</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {venues.map((v, i) => (
            <motion.div
              key={v.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
              className="glass-card p-6 flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/[0.04] flex items-center justify-center text-accent">
                  <MapPin size={18} weight="fill" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-white font-semibold text-base">{v.name}</p>
                    {v.hot && <Fire size={14} weight="fill" className="text-accent" />}
                  </div>
                  <p className="text-zinc-500 text-sm">{v.area}</p>
                </div>
              </div>
              <p className="text-zinc-500 text-sm">{v.count} venues</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-zinc-600 text-sm mt-8 text-center"
        >
          Expanding to more cities soon. Austin is just the beginning.
        </motion.p>
      </div>
    </section>
  )
}
