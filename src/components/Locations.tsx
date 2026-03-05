'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, Fire, ArrowRight } from '@phosphor-icons/react/dist/ssr'

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
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="locations" className="section-large overflow-hidden" ref={ref}>
      <div className="container-site">
        <div className="grid lg:grid-cols-3 gap-16 mb-16">
          <div className="lg:col-span-2">
            <motion.p
              initial={{ opacity: 0, x: -16 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4 }}
              className="text-accent font-medium text-sm tracking-widest uppercase mb-4"
            >
              Locations
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, x: -16 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Where to find us.
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-end lg:justify-end"
          >
            <p className="text-zinc-500 text-base">Austin is just the beginning.</p>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {venues.map((v, i) => (
            <motion.div
              key={v.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.07, ease: [0.4, 0, 0.2, 1] }}
              className="glass-card p-5 group cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                  <MapPin size={18} weight="fill" className="text-accent" />
                </div>
                {v.hot && (
                  <div className="flex items-center gap-1.5 text-accent text-xs font-medium">
                    <Fire size={12} weight="fill" />
                    Popular
                  </div>
                )}
              </div>
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-white font-semibold text-base group-hover:text-accent transition-colors duration-300">{v.name}</p>
                  <p className="text-zinc-500 text-sm">{v.count} venues</p>
                </div>
                <ArrowRight size={16} weight="bold" className="text-zinc-700 group-hover:text-accent group-hover:translate-x-1 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
