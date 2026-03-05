'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'
import { List, X } from '@phosphor-icons/react/dist/ssr'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

const links = [
  { href: '#how', label: 'How It Works' },
  { href: '#venues', label: 'For Venues' },
  { href: '#app', label: 'The App' },
  { href: '#locations', label: 'Locations' },
]

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { scrollY } = useScroll()
  const bgOpacity = useTransform(scrollY, [0, 100], [0, 0.9])
  const borderOpacity = useTransform(scrollY, [0, 100], [0, 0.06])

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          backdropFilter: 'blur(16px)',
        }}
      >
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundColor: 'rgba(10, 10, 10, 0.85)',
            opacity: bgOpacity,
          }}
        />
        <motion.div
          className="absolute inset-x-0 bottom-0 h-px bg-white"
          style={{ opacity: borderOpacity }}
        />

        <div className="container-site relative z-10 flex items-center justify-between h-16">
          <a href="#" className="flex items-center">
            <Image
              src={`${basePath}/assets/logos/photo-match-logo.svg`}
              alt="Photo Match"
              width={120}
              height={32}
              className="h-7 w-auto"
            />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-zinc-400 hover:text-white transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#app"
              className="hidden md:inline-block text-sm font-semibold px-5 py-2.5 rounded-lg bg-accent text-white hover:bg-accent-bright hover:-translate-y-0.5 transition-all duration-200"
            >
              Get the App
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} weight="bold" /> : <List size={22} weight="bold" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 bg-[#0a0a0a]/95 backdrop-blur-lg pt-20"
        >
          <div className="container-site flex flex-col gap-2">
            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                onClick={() => setMobileOpen(false)}
                className="text-2xl font-semibold text-white py-4 border-b border-white/[0.06] hover:text-accent transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#app"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.35 }}
              onClick={() => setMobileOpen(false)}
              className="mt-6 inline-block text-center px-7 py-4 rounded-lg bg-accent text-white font-bold text-lg hover:bg-accent-bright transition-colors"
            >
              Get the App
            </motion.a>
          </div>
        </motion.div>
      )}
    </>
  )
}
