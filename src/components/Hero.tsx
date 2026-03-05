'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  
  // Parallax: image moves slower than scroll
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section ref={ref} className="relative h-screen overflow-hidden">
      {/* Parallax background image */}
      <motion.div className="absolute inset-0" style={{ y }}>
        <Image
          src={`${basePath}/assets/images/hero-booth.jpg`}
          alt="Friends in a Photo Match booth"
          fill
          className="object-cover scale-110"
          priority
        />
      </motion.div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />

      <motion.div className="relative z-10 h-full flex flex-col justify-end pb-20 md:pb-28" style={{ opacity }}>
        <div className="container-site">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="text-accent font-semibold text-sm tracking-widest uppercase mb-4"
          >
            Live on 6th Street, Austin TX
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="max-w-2xl"
          >
            Find Your Match.{' '}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="text-accent"
            >
              Tonight.
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="text-white/70 text-lg mt-5 mb-8 max-w-md leading-relaxed"
          >
            Step into the booth. Get your photo reel. We match you with someone here, right now. $5 flat.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.75, ease: [0.4, 0, 0.2, 1] }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#app"
              className="px-7 py-3.5 rounded-lg bg-accent text-white font-semibold hover:bg-accent-bright hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/20 transition-all duration-200"
            >
              Download the App
            </a>
            <a
              href="#how"
              className="px-7 py-3.5 rounded-lg bg-white/10 text-white font-medium hover:bg-white/15 hover:-translate-y-0.5 transition-all duration-200 backdrop-blur-sm"
            >
              How It Works
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
