'use client'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
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
        className="nav_component"
      >
        <motion.div className="nav_background" style={{ opacity: bgOpacity }} />
        <motion.div className="nav_border" style={{ opacity: borderOpacity }} />

        <div className="padding-global nav_inner">
          <div className="container-large nav_container">
            <a href="#" className="nav_logo-link">
              <Image src={`${basePath}/assets/logos/photo-match-logo-v2-transparent.png`} alt="Photo Match" width={160} height={40} unoptimized className="nav_logo" />
            </a>

            <div className="nav_menu">
              {links.map((link) => (
                <a key={link.href} href={link.href} className="nav_link">
                  {link.label}
                  <span className="nav_link-underline" />
                </a>
              ))}
            </div>

            <div className="nav_right">
              <a href="#app" className="button is-primary nav_cta">Get the App</a>
              <button onClick={() => setMobileOpen(!mobileOpen)} className="nav_mobile-toggle" aria-label="Toggle menu">
                {mobileOpen ? <X size={22} weight="bold" /> : <List size={22} weight="bold" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Full-screen clip-path circle expansion overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="nav_fullscreen-overlay"
            initial={{ clipPath: 'circle(0% at calc(100% - 40px) 32px)' }}
            animate={{ clipPath: 'circle(150% at calc(100% - 40px) 32px)' }}
            exit={{ clipPath: 'circle(0% at calc(100% - 40px) 32px)' }}
            transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="nav_fullscreen-close"
              aria-label="Close menu"
            >
              <X size={28} weight="bold" />
            </button>
            <ul className="nav_fullscreen-list">
              {links.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
                >
                  <a
                    href={link.href}
                    className="nav_fullscreen-link"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ delay: 0.3 + links.length * 0.1, duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
              >
                <a
                  href="#app"
                  className="button is-primary is-large"
                  style={{ marginTop: '24px' }}
                  onClick={() => setMobileOpen(false)}
                >
                  Get the App
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .nav_component { position: fixed; top: 0; left: 0; right: 0; z-index: 50; }
        .nav_background { position: absolute; inset: 0; background: rgba(10,10,10,0.85); backdrop-filter: blur(16px); }
        .nav_border { position: absolute; inset-inline: 0; bottom: 0; height: 1px; background: white; }
        .nav_inner { position: relative; z-index: 10; }
        .nav_container { display: flex; align-items: center; justify-content: space-between; height: 64px; }
        .nav_logo { height: 38px; width: auto; object-fit: contain; }
        .nav_menu { display: none; align-items: center; gap: 32px; }
        .nav_link { font-size: 0.8125rem; position: relative; transition: color 0.2s; text-decoration: none; color: rgba(180, 184, 192, 0.85); }
        .nav_link:hover { color: var(--color-text-primary); }
        .nav_link-underline { position: absolute; bottom: -4px; left: 0; width: 0; height: 1px; background: #FF006E; transition: width 0.3s ease; }
        .nav_link:hover .nav_link-underline { width: 100%; }
        .nav_right { display: flex; align-items: center; gap: 16px; }
        .nav_cta { display: none; padding: 10px 20px; font-size: 13px; font-weight: 800; }
        .nav_mobile-toggle { display: flex; align-items: center; justify-content: center; width: 40px; height: 40px; background: none; border: none; color: var(--color-text-secondary); cursor: pointer; transition: color 0.2s; z-index: 60; position: relative; }
        .nav_mobile-toggle:hover { color: var(--color-text-primary); }

        /* Full-screen overlay */
        .nav_fullscreen-overlay { position: fixed; inset: 0; z-index: 55; background: #0a0a0a; display: flex; align-items: center; justify-content: center; }
        .nav_fullscreen-close { position: absolute; top: 20px; right: 24px; width: 48px; height: 48px; display: flex; align-items: center; justify-content: center; background: none; border: none; color: white; cursor: pointer; z-index: 56; }
        .nav_fullscreen-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; align-items: center; gap: 12px; }
        .nav_fullscreen-link { font-size: clamp(2.5rem, 8vw, 4.5rem); font-weight: 600; letter-spacing: -0.04em; color: white; text-decoration: none; transition: color 0.3s ease; display: block; line-height: 1.2; }
        .nav_fullscreen-link:hover { color: #FF006E; }

        @media (min-width: 768px) {
          .nav_menu { display: flex; }
          .nav_cta { display: inline-flex; }
          .nav_mobile-toggle { display: none; }
        }
      `}</style>
    </>
  )
}
