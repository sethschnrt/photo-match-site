'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { MapPin } from '@phosphor-icons/react/dist/ssr'

const locations = [
  { name: 'Dirty Sixth', venues: 12, x: 48, y: 42, hot: true },
  { name: 'Rainey Street', venues: 8, x: 53, y: 52, hot: true },
  { name: 'West Sixth', venues: 6, x: 38, y: 40, hot: false },
  { name: 'East Austin', venues: 4, x: 65, y: 38, hot: false },
  { name: 'South Congress', venues: 3, x: 46, y: 62, hot: false },
  { name: 'The Domain', venues: 5, x: 42, y: 15, hot: false },
]

export default function Locations() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-20px' })
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <section id="locations" className="section_locations" ref={ref}>
      <div className="padding-global padding-section-large">
        <div className="container-large">
          <div className="locations_header">
            <div>
              <motion.p
                initial={{ opacity: 1, x: -16 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4 }}
                className="text-style-label text-color-accent"
              >
                Locations
              </motion.p>
              <motion.h2
                initial={{ opacity: 1, x: -16 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Where to find us.
              </motion.h2>
            </div>
            <motion.p
              initial={{ opacity: 1 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-color-secondary"
            >
              Austin is just the beginning.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="locations_map-container"
          >
            {/* SVG Map of Austin */}
            <div className="locations_map">
              <svg viewBox="0 0 100 80" className="locations_map-svg" xmlns="http://www.w3.org/2000/svg">
                {/* Austin area outline - simplified */}
                <path
                  d="M20,10 Q25,5 35,8 L50,6 Q60,5 70,10 L78,18 Q82,25 80,35 L82,50 Q80,60 75,68 L65,74 Q55,78 45,76 L35,72 Q25,70 20,62 L18,50 Q15,40 18,30 L16,20 Q17,14 20,10Z"
                  fill="none"
                  stroke="rgba(255,0,110,0.15)"
                  strokeWidth="0.5"
                />
                {/* Roads / grid lines */}
                <line x1="15" y1="42" x2="85" y2="42" stroke="rgba(255,255,255,0.04)" strokeWidth="0.3" />
                <line x1="48" y1="5" x2="48" y2="75" stroke="rgba(255,255,255,0.04)" strokeWidth="0.3" />
                <line x1="20" y1="55" x2="80" y2="55" stroke="rgba(255,255,255,0.03)" strokeWidth="0.2" />
                <line x1="30" y1="8" x2="30" y2="70" stroke="rgba(255,255,255,0.03)" strokeWidth="0.2" />
                <line x1="65" y1="10" x2="65" y2="70" stroke="rgba(255,255,255,0.03)" strokeWidth="0.2" />
                {/* I-35 */}
                <path d="M48,5 Q50,30 51,42 Q52,55 48,75" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" strokeDasharray="2,1" />
                {/* MoPac */}
                <path d="M30,8 Q32,25 33,42 Q34,55 32,70" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" strokeDasharray="2,1" />
                {/* Lady Bird Lake */}
                <path d="M20,48 Q35,50 50,48 Q60,47 75,50" fill="none" stroke="rgba(100,150,255,0.12)" strokeWidth="0.8" />

                {/* Location pins */}
                {locations.map((loc, i) => (
                  <g key={loc.name}>
                    {/* Pulse ring for hot locations */}
                    {loc.hot && (
                      <circle
                        cx={loc.x}
                        cy={loc.y}
                        r="3"
                        fill="none"
                        stroke="rgba(255,0,110,0.3)"
                        strokeWidth="0.5"
                        className="locations_pulse-ring"
                      />
                    )}
                    {/* Pin glow */}
                    <circle
                      cx={loc.x}
                      cy={loc.y}
                      r={hovered === loc.name ? 3 : 2}
                      fill={hovered === loc.name ? 'rgba(255,0,110,0.3)' : 'rgba(255,0,110,0.15)'}
                      className="locations_pin-glow"
                    />
                    {/* Pin dot */}
                    <circle
                      cx={loc.x}
                      cy={loc.y}
                      r="1.2"
                      fill="var(--color-accent)"
                      className="locations_pin"
                      onMouseEnter={() => setHovered(loc.name)}
                      onMouseLeave={() => setHovered(null)}
                      style={{ cursor: 'pointer' }}
                    />
                  </g>
                ))}
              </svg>

              {/* Labels overlay */}
              {locations.map((loc) => (
                <div
                  key={loc.name}
                  className={`locations_label ${hovered === loc.name ? 'is-active' : ''}`}
                  style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
                  onMouseEnter={() => setHovered(loc.name)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <span className="locations_label-name">{loc.name}</span>
                  <span className="locations_label-count">{loc.venues} venues</span>
                </div>
              ))}
            </div>

            {/* Legend list */}
            <div className="locations_legend">
              {locations.map((loc) => (
                <div
                  key={loc.name}
                  className={`locations_legend-item ${hovered === loc.name ? 'is-active' : ''}`}
                  onMouseEnter={() => setHovered(loc.name)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <MapPin size={16} weight="fill" className="locations_legend-icon" />
                  <div>
                    <p className="locations_legend-name text-color-primary">{loc.name}</p>
                    <p className="locations_legend-count text-color-secondary">{loc.venues} venues {loc.hot ? ' - Popular' : ''}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        .locations_header { display: flex; flex-direction: column; gap: 8px; margin-bottom: 48px; }
        .locations_header .text-style-label { margin-bottom: 12px; }
        .locations_map-container { display: grid; grid-template-columns: 1fr; gap: 32px; }
        .locations_map { position: relative; background: var(--color-bg-secondary); border: 1px solid var(--color-border); border-radius: 16px; padding: 32px; aspect-ratio: 5/4; overflow: hidden; }
        .locations_map-svg { position: absolute; inset: 0; width: 100%; height: 100%; }
        .locations_pin { transition: r 0.2s; }
        .locations_pin-glow { transition: all 0.3s; }
        @keyframes pulse-ring {
          0% { r: 2; opacity: 0.6; }
          100% { r: 6; opacity: 0; }
        }
        .locations_pulse-ring { animation: pulse-ring 2s ease-out infinite; }
        .locations_label { position: absolute; transform: translate(8px, -50%); display: flex; flex-direction: column; gap: 2px; opacity: 0; transition: opacity 0.2s; pointer-events: none; white-space: nowrap; }
        .locations_label.is-active { opacity: 1; }
        .locations_label-name { font-size: 0.8125rem; font-weight: 600; color: var(--color-text-primary); }
        .locations_label-count { font-size: 0.6875rem; color: var(--color-text-secondary); }
        .locations_legend { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; }
        .locations_legend-item { display: flex; align-items: center; gap: 12px; padding: 12px 16px; background: var(--color-bg-secondary); border: 1px solid var(--color-border); border-radius: 10px; cursor: pointer; transition: all 0.2s; }
        .locations_legend-item.is-active { border-color: rgba(255,0,110,0.3); }
        .locations_legend-icon { color: var(--color-accent); flex-shrink: 0; }
        .locations_legend-name { font-size: 0.875rem; font-weight: 600; }
        .locations_legend-count { font-size: 0.75rem; }
        @media (min-width: 768px) {
          .locations_legend { grid-template-columns: repeat(3, 1fr); }
        }
        @media (min-width: 992px) {
          .locations_header { flex-direction: row; justify-content: space-between; align-items: flex-end; }
          .locations_map-container { grid-template-columns: 2fr 1fr; gap: 48px; align-items: start; }
          .locations_legend { grid-template-columns: 1fr; }
          .locations_map { aspect-ratio: 16/10; }
        }
      `}</style>
    </section>
  )
}
