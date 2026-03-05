'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Full-screen background image */}
      <Image
        src={`${basePath}/assets/images/hero-booth.jpg`}
        alt="Friends in a Photo Match booth"
        fill
        className="object-cover"
        priority
      />
      
      {/* Gradient overlays for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />

      <div className="relative z-10 h-full flex flex-col justify-end pb-20 md:pb-28">
        <div className="container-site">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-accent font-semibold text-sm tracking-widest uppercase mb-4"
          >
            Live on 6th Street, Austin TX
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-2xl"
          >
            Find Your Match.{' '}
            <span className="text-accent">Tonight.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="text-white/70 text-lg mt-5 mb-8 max-w-md leading-relaxed"
          >
            Step into the booth. Get your photo reel. We match you with someone here, right now. $5 flat.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#app"
              className="px-7 py-3.5 rounded-lg bg-accent text-white font-semibold hover:bg-accent-bright transition-colors"
            >
              Download the App
            </a>
            <a
              href="#how"
              className="px-7 py-3.5 rounded-lg bg-white/10 text-white font-medium hover:bg-white/15 transition-colors backdrop-blur-sm"
            >
              How It Works
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
