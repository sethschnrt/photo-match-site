'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { InstagramLogo, TiktokLogo, XLogo } from '@phosphor-icons/react/dist/ssr'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <footer ref={ref}>
      {/* Final CTA */}
      <div className="relative overflow-hidden bg-accent">
        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '24px 24px',
          }}
        />
        <div className="container-site py-16 md:py-24 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4"
          >
            Ready to meet someone new?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="text-white/70 mb-10 max-w-md mx-auto text-lg"
          >
            Find a Photo Match booth tonight. $5, a printed photo reel, and a real connection.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.25 }}
            href="#app"
            className="inline-block px-8 py-4 rounded-lg bg-white text-black font-bold hover:bg-zinc-100 hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200 text-lg"
          >
            Download the App
          </motion.a>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#050505]">
        <div className="container-site py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <Image
            src={`${basePath}/assets/logos/photo-match-logo.svg`}
            alt="Photo Match"
            width={100}
            height={28}
            className="h-5 w-auto opacity-25"
          />

          <div className="flex items-center gap-6 text-sm text-zinc-600">
            <a href="#" className="hover:text-zinc-300 transition-colors duration-200">Privacy</a>
            <a href="#" className="hover:text-zinc-300 transition-colors duration-200">Terms</a>
            <a href="#" className="hover:text-zinc-300 transition-colors duration-200">Contact</a>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="text-zinc-600 hover:text-accent transition-colors duration-200">
              <InstagramLogo size={18} weight="fill" />
            </a>
            <a href="#" className="text-zinc-600 hover:text-accent transition-colors duration-200">
              <TiktokLogo size={18} weight="fill" />
            </a>
            <a href="#" className="text-zinc-600 hover:text-accent transition-colors duration-200">
              <XLogo size={18} weight="fill" />
            </a>
          </div>
        </div>
        <div className="container-site pb-8">
          <p className="text-zinc-800 text-xs text-center">&copy; 2026 Photo Match. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
