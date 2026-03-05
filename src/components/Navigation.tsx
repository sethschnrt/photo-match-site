'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

export default function Navigation() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06]"
      style={{ backdropFilter: 'blur(12px)', background: 'rgba(10, 10, 10, 0.8)' }}
    >
      <div className="container-site flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2">
          <Image
            src={`${basePath}/assets/logos/photo-match-logo.svg`}
            alt="Photo Match"
            width={120}
            height={32}
            className="h-7 w-auto"
          />
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#how" className="text-sm text-zinc-400 hover:text-white transition-colors">How It Works</a>
          <a href="#venues" className="text-sm text-zinc-400 hover:text-white transition-colors">For Venues</a>
          <a href="#app" className="text-sm text-zinc-400 hover:text-white transition-colors">The App</a>
          <a href="#locations" className="text-sm text-zinc-400 hover:text-white transition-colors">Locations</a>
        </div>

        <a
          href="#app"
          className="text-sm font-semibold px-5 py-2.5 rounded-lg bg-accent text-white hover:bg-accent-bright transition-colors"
        >
          Get the App
        </a>
      </div>
    </motion.nav>
  )
}
