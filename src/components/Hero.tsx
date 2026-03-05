'use client'
import { motion } from 'framer-motion'

const headlineWords = ['Find', 'Your', 'Match.', 'Tonight.']

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Layered backgrounds for depth */}
      <div className="absolute inset-0 bg-[#050505]" />
      <div className="absolute inset-0 gradient-mesh" />
      
      {/* Radial glow behind headline */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-accent/[0.04] blur-[120px] pointer-events-none" />
      
      {/* Grid pattern overlay for texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
      
      {/* Top gradient fade */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#050505] to-transparent z-20 pointer-events-none" />
      
      {/* Floating photo strip elements */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [12, 14, 12] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[15%] right-[8%] w-20 h-56 rounded-lg bg-gradient-to-b from-zinc-800 to-zinc-900 border border-zinc-700/30 opacity-20 hidden lg:block"
      />
      <motion.div
        animate={{ y: [0, 15, 0], rotate: [-8, -10, -8] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-[20%] left-[5%] w-16 h-48 rounded-lg bg-gradient-to-b from-zinc-800 to-zinc-900 border border-zinc-700/30 opacity-15 hidden lg:block"
      />
      <motion.div
        animate={{ y: [0, -12, 0], rotate: [5, 7, 5] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute top-[40%] left-[12%] w-14 h-40 rounded-lg bg-gradient-to-b from-accent/5 to-zinc-900 border border-accent/10 opacity-20 hidden lg:block"
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900/50 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-xs font-medium text-zinc-400 tracking-widest uppercase font-[family-name:var(--font-body)] font-medium">
            Live on 6th Street, Austin TX
          </span>
        </motion.div>

        {/* Headline */}
        <h1 className="text-[3.5rem] sm:text-7xl md:text-[5.5rem] lg:text-[7rem] xl:text-[8rem] font-extrabold tracking-tighter mb-8 leading-[0.95]">
          {headlineWords.map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 60, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.7, delay: 0.5 + i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
              className={`inline-block mr-3 sm:mr-5 ${
                word === 'Match.' || word === 'Tonight.'
                  ? 'text-gradient'
                  : 'text-white'
              }`}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          The photo booth that connects you with someone at this venue.
          <span className="text-white font-medium"> Right now.</span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#app"
            className="group relative px-8 py-4 rounded-full bg-accent text-white font-semibold text-lg hover:bg-accent-bright transition-all shadow-[0_0_20px_rgba(255,0,110,0.15)] hover:shadow-[0_0_50px_rgba(255,0,110,0.3)] hover:-translate-y-1 active:translate-y-0"
          >
            Download the App
            <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">&rarr;</span>
          </a>
          <a
            href="#venues"
            className="px-8 py-4 rounded-full border border-zinc-700/80 text-zinc-300 font-medium text-lg hover:border-accent/30 hover:text-white transition-all hover:-translate-y-1 hover:bg-white/[0.02] active:translate-y-0"
          >
            Host a Booth
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 rounded-full border-2 border-zinc-700 flex items-start justify-center p-1.5"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-zinc-500" />
        </motion.div>
      </motion.div>
    </section>
  )
}
