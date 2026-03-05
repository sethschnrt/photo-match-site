'use client'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/[0.07] rounded-full blur-[120px] pointer-events-none" />

      <div className="container-site relative z-10 pt-32 pb-24">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <p className="text-accent font-medium text-sm tracking-wide uppercase mb-6">
              Live on 6th Street, Austin TX
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          >
            Find Your Match.{' '}
            <span className="text-accent">Tonight.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="text-zinc-400 text-lg mt-6 mb-10 max-w-xl leading-relaxed"
          >
            Step into a Photo Match booth, get your photo reel, and we will match you with someone at this venue. $5 flat. No swiping. Just real people.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
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
              className="px-7 py-3.5 rounded-lg border border-white/10 text-zinc-300 font-medium hover:border-white/20 hover:text-white transition-all"
            >
              See How It Works
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
