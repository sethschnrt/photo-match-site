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
          <span key={i} className="ticker_item">
            {name}
            <svg className="ticker_pin" viewBox="0 0 24 32" width="12" height="16" fill="#FF006E" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0C5.373 0 0 5.373 0 12c0 9 12 20 12 20s12-11 12-20c0-6.627-5.373-12-12-12zm0 16a4 4 0 110-8 4 4 0 010 8z"/>
            </svg>
          </span>
        ))}
      </motion.div>

      <style jsx global>{`
        .ticker_component { padding: 20px 0; overflow: hidden; border-bottom: 1px solid var(--color-border); }
        .ticker_track { display: flex; gap: 32px; white-space: nowrap; }
        .ticker_item { font-size: 0.8125rem; font-weight: 600; color: rgba(255,255,255,0.75); display: flex; align-items: center; gap: 32px; }
        .ticker_pin { flex-shrink: 0; opacity: 0.6; }
      `}</style>
    </div>
  )
}
