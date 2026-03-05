'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/assets/logos/photo-match-logo.svg`}
            alt="Photo Match"
            width={48}
            height={48}
            className="w-12 h-12"
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {['How It Works', 'Experience', 'Venues', 'Locations'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s/g, '-')}`}
              className="text-sm text-zinc-400 hover:text-white transition-colors font-medium tracking-wide uppercase"
            >
              {item}
            </a>
          ))}
          <a
            href="#venues"
            className="text-sm font-extrabold px-5 py-2.5 rounded-full bg-accent text-white hover:bg-accent-bright transition-all hover:shadow-[0_0_30px_rgba(255,0,110,0.3)]"
          >
            Host a Booth
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2"
          aria-label="Menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block h-0.5 bg-white transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 bg-white transition-opacity ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 bg-white transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-4 glass-card p-6 flex flex-col gap-4"
        >
          {['How It Works', 'Experience', 'Venues', 'Locations'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s/g, '-')}`}
              onClick={() => setIsOpen(false)}
              className="text-zinc-300 hover:text-white text-lg"
            >
              {item}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  )
}
