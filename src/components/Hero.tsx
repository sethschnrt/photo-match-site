'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center">
      {/* Brick wall photo */}
      <Image
        src={`${basePath}/assets/images/brick-wall-2.jpg`}
        alt=""
        fill
        className="object-cover"
        priority
      />

      {/* Darken edges more */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(0,0,0,0.5)_70%,rgba(0,0,0,0.8)_100%)]" />

      {/* Pink light spill from the sign onto the wall */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%] w-[450px] h-[350px] bg-[#FF006E]/[0.08] rounded-full blur-[80px] pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%] w-[250px] h-[200px] bg-[#FF006E]/[0.12] rounded-full blur-[50px] pointer-events-none"
      />

      <div className="relative z-10 text-center px-6">
        {/* Neon logo sign */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="relative mb-8"
        >
          {/* Glow layer behind logo */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <Image
              src={`${basePath}/assets/logos/photo-match-logo.svg`}
              alt=""
              width={320}
              height={200}
              className="w-[280px] md:w-[360px] h-auto blur-[20px] opacity-60"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <Image
              src={`${basePath}/assets/logos/photo-match-logo.svg`}
              alt=""
              width={320}
              height={200}
              className="w-[280px] md:w-[360px] h-auto blur-[40px] opacity-30"
            />
          </div>
          {/* Main logo */}
          <Image
            src={`${basePath}/assets/logos/photo-match-logo.svg`}
            alt="Photo Match"
            width={320}
            height={200}
            className="relative w-[280px] md:w-[360px] h-auto mx-auto drop-shadow-[0_0_15px_rgba(255,0,110,0.5)]"
          />
          {/* Subtle flicker on the whole sign */}
          <motion.div
            animate={{ opacity: [1, 0.92, 1, 1, 0.95, 1, 1, 0.88, 1, 1, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0"
          />
        </motion.div>

        {/* Tagline below the sign */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0, ease: [0.4, 0, 0.2, 1] }}
          className="text-white/80 text-lg md:text-xl font-medium mb-3 tracking-tight"
        >
          The photo booth that finds your match.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.2 }}
          className="text-zinc-500 text-sm mb-10"
        >
          $5 flat &middot; Live on 6th Street, Austin TX
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.3, ease: [0.4, 0, 0.2, 1] }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="#app"
            className="px-7 py-3.5 rounded-lg bg-accent text-white font-semibold hover:bg-accent-bright hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/25 transition-all duration-200"
          >
            Download the App
          </a>
          <a
            href="#how"
            className="px-7 py-3.5 rounded-lg bg-white/10 text-white font-medium hover:bg-white/15 hover:-translate-y-0.5 transition-all duration-200 backdrop-blur-sm border border-white/[0.06]"
          >
            How It Works
          </a>
        </motion.div>
      </div>
    </section>
  )
}
