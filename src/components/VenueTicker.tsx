'use client'
import { motion } from 'framer-motion'

const venues = [
  'The Blind Pig',
  'Summit Rooftop',
  'Handlebar',
  'Maggie Mae\'s',
  'The Elephant Room',
  'Stubb\'s',
  'Midnight Cowboy',
  'Rain on 4th',
  'Lustre Pearl',
  'Container Bar',
  'Cedar Street Courtyard',
  'Pete\'s Dueling Piano Bar',
]

export default function VenueTicker() {
  return (
    <div className="py-6 overflow-hidden border-b border-white/[0.06] bg-white/[0.01]">
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="flex gap-8 whitespace-nowrap"
      >
        {[...venues, ...venues].map((name, i) => (
          <span key={i} className="text-sm text-zinc-600 flex items-center gap-8">
            {name}
            <span className="text-accent/40 text-xs">&#9679;</span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}
