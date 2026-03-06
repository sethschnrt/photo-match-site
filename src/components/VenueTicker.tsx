'use client'
import { motion } from 'framer-motion'

const venues = [
  'The Blind Pig', 'Summit Rooftop', 'Handlebar', 'Maggie Mae\'s',
  'The Elephant Room', 'Stubb\'s', 'Midnight Cowboy', 'Rain on 4th',
  'Lustre Pearl', 'Container Bar', 'Cedar Street Courtyard', 'Pete\'s Dueling Piano Bar',
]

export default function VenueTicker() {
  return (
    <div className="ticker_component">
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="ticker_track"
      >
        {[...venues, ...venues].map((name, i) => (
          <span key={i} className="ticker_item text-color-tertiary">
            {name}
            <span className="ticker_dot" />
          </span>
        ))}
      </motion.div>

      <style jsx>{`
        .ticker_component { padding: 20px 0; overflow: hidden; border-bottom: 1px solid var(--color-border); }
        .ticker_track { display: flex; gap: 32px; white-space: nowrap; }
        .ticker_item { font-size: 0.8125rem; display: flex; align-items: center; gap: 32px; }
        .ticker_dot { width: 4px; height: 4px; border-radius: 50%; background: rgba(255,0,110,0.3); flex-shrink: 0; }
      `}</style>
    </div>
  )
}
