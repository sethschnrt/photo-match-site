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
        className="nav_component"
      >
        <motion.div className="nav_background" style={{ opacity: bgOpacity }} />
        <motion.div className="nav_border" style={{ opacity: borderOpacity }} />

        <div className="padding-global nav_inner">
          <div className="container-large nav_container">
            <a href="#" className="nav_logo-link">
              <Image src={`${basePath}/assets/logos/photo-match-logo.svg`} alt="Photo Match" width={120} height={32} className="nav_logo" />
            </a>

            <div className="nav_menu">
              {links.map((link) => (
                <a key={link.href} href={link.href} className="nav_link text-color-secondary">
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

      {mobileOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="nav_mobile-overlay">
          <div className="padding-global">
            <div className="nav_mobile-menu">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.08 }}
                  onClick={() => setMobileOpen(false)}
                  className="nav_mobile-link text-color-primary"
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
                className="button is-primary is-large"
                style={{ marginTop: '24px', textAlign: 'center' }}
              >
                Get the App
              </motion.a>
            </div>
          </div>
        </motion.div>
      )}

      <style jsx global>{`
        .nav_component { position: fixed; top: 0; left: 0; right: 0; z-index: 50; }
        .nav_background { position: absolute; inset: 0; background: rgba(10,10,10,0.85); backdrop-filter: blur(16px); }
        .nav_border { position: absolute; inset-inline: 0; bottom: 0; height: 1px; background: white; }
        .nav_inner { position: relative; z-index: 10; }
        .nav_container { display: flex; align-items: center; justify-content: space-between; height: 64px; }
        .nav_logo { height: 28px; width: auto; }
        .nav_menu { display: none; align-items: center; gap: 32px; }
        .nav_link { font-size: 0.8125rem; position: relative; transition: color 0.2s; text-decoration: none; }
        .nav_link:hover { color: var(--color-text-primary); }
        .nav_link-underline { position: absolute; bottom: -4px; left: 0; width: 0; height: 1px; background: var(--color-accent); transition: width 0.3s; }
        .nav_link:hover .nav_link-underline { width: 100%; }
        .nav_right { display: flex; align-items: center; gap: 16px; }
        .nav_cta { display: none; padding: 10px 20px; font-size: 13px; }
        .nav_mobile-toggle { display: flex; align-items: center; justify-content: center; width: 40px; height: 40px; background: none; border: none; color: var(--color-text-secondary); cursor: pointer; transition: color 0.2s; }
        .nav_mobile-toggle:hover { color: var(--color-text-primary); }
        .nav_mobile-overlay { position: fixed; inset: 0; z-index: 40; background: rgba(10,10,10,0.95); backdrop-filter: blur(16px); padding-top: 80px; }
        .nav_mobile-menu { display: flex; flex-direction: column; }
        .nav_mobile-link { font-size: 1.5rem; font-weight: 600; padding: 16px 0; border-bottom: 1px solid var(--color-border); text-decoration: none; transition: color 0.2s; }
        .nav_mobile-link:hover { color: var(--color-accent) !important; }
        @media (min-width: 768px) {
          .nav_menu { display: flex; }
          .nav_cta { display: inline-flex; }
          .nav_mobile-toggle { display: none; }
        }
      `}</style>
    </>
  )
}
