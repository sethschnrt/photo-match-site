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
    <section id="locations" className="section_locations" ref={ref}>
      <div className="padding-global padding-section-large">
        <div className="container-large">
          <div className="locations_header">
            <div>
              <motion.p
                initial={{ opacity: 0, x: -16 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4 }}
                className="text-style-label text-color-accent"
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
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-color-tertiary"
            >
              Austin is just the beginning.
            </motion.p>
          </div>

          <div className="locations_grid">
            {venues.map((v, i) => (
              <motion.div
                key={v.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.07 }}
                className="card locations_card"
              >
                <div className="locations_card-top">
                  <div className="locations_card-icon">
                    <MapPin size={18} weight="fill" className="text-color-accent" />
                  </div>
                  {v.hot && (
                    <span className="locations_hot-badge text-color-accent">
                      <Fire size={12} weight="fill" /> Popular
                    </span>
                  )}
                </div>
                <div className="locations_card-bottom">
                  <div>
                    <p className="locations_card-name text-color-primary">{v.name}</p>
                    <p className="locations_card-count text-color-tertiary">{v.count} venues</p>
                  </div>
                  <ArrowRight size={16} weight="bold" className="locations_card-arrow text-color-tertiary" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .locations_header { display: flex; flex-direction: column; gap: 8px; margin-bottom: 48px; }
        .locations_header .text-style-label { margin-bottom: 12px; }
        .locations_grid { display: grid; grid-template-columns: 1fr; gap: 12px; }
        .locations_card { padding: 20px; cursor: pointer; }
        .locations_card-top { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 16px; }
        .locations_card-icon { width: 40px; height: 40px; border-radius: 10px; background: rgba(255,0,110,0.08); display: flex; align-items: center; justify-content: center; transition: background 0.3s; }
        .locations_card:hover .locations_card-icon { background: rgba(255,0,110,0.15); }
        .locations_hot-badge { display: flex; align-items: center; gap: 6px; font-size: 0.75rem; font-weight: 500; }
        .locations_card-bottom { display: flex; align-items: flex-end; justify-content: space-between; }
        .locations_card-name { font-size: 0.9375rem; font-weight: 600; transition: color 0.3s; }
        .locations_card:hover .locations_card-name { color: var(--color-accent) !important; }
        .locations_card-count { font-size: 0.8125rem; margin-top: 2px; }
        .locations_card-arrow { transition: all 0.3s; }
        .locations_card:hover .locations_card-arrow { color: var(--color-accent) !important; transform: translateX(4px); }
        @media (min-width: 600px) { .locations_grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 992px) {
          .locations_header { flex-direction: row; justify-content: space-between; align-items: flex-end; }
          .locations_grid { grid-template-columns: repeat(3, 1fr); }
        }
      `}</style>
    </section>
  )
}
