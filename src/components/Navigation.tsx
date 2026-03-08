'use client'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
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
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 40)
  })

  return (
    <>
      <div className="nav_spacer" />
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        className={`nav_component ${scrolled ? 'is-scrolled' : ''}`}
      >
        <div className="nav_pill">
          <a href="#" className="nav_logo-link">
            <Image src={`${basePath}/assets/logos/photo-match-logo-v2-transparent.png`} alt="Photo Match" width={200} height={200} unoptimized className="nav_logo" />
          </a>

          <div className="nav_menu">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="nav_link">
                {link.label}
              </a>
            ))}
          </div>

          <div className="nav_right">
            <a href="#app" className="nav_cta">Get the App</a>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="nav_mobile-toggle" aria-label="Toggle menu">
              {mobileOpen ? <X size={20} weight="bold" /> : <List size={20} weight="bold" />}
            </button>
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
                  className="nav_cta is-large"
                  style={{ marginTop: '24px', padding: '14px 32px', fontSize: '1rem' }}
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
        .nav_spacer { height: 0; }

        .nav_component {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          display: flex;
          justify-content: center;
          padding: 16px 20px;
          transition: padding 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .nav_component.is-scrolled {
          padding: 10px 20px;
        }

        .nav_pill {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          max-width: 900px;
          padding: 10px 10px 10px 16px;
          border-radius: 100px;
          background: #0f0f0f;
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.04);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .nav_component.is-scrolled .nav_pill {
          padding: 8px 8px 8px 14px;
          background: #0c0c0c;
          box-shadow: 0 8px 40px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.04);
        }

        .nav_logo-link { display: flex; align-items: center; flex-shrink: 0; }
        .nav_logo {
          height: 2.25rem;
          width: auto;
          object-fit: contain;
          transition: height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .nav_component.is-scrolled .nav_logo { height: 1.85rem; }

        .nav_menu { display: none; align-items: center; gap: 8px; }
        .nav_link {
          font-size: 0.8125rem;
          font-weight: 500;
          padding: 6px 14px;
          border-radius: 100px;
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
          transition: all 0.25s ease;
          white-space: nowrap;
        }
        .nav_link:hover {
          color: rgba(255, 255, 255, 0.95);
          background: rgba(255, 255, 255, 0.06);
        }

        .nav_right { display: flex; align-items: center; gap: 10px; }

        .nav_cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 8px 18px;
          font-size: 0.8125rem;
          font-weight: 700;
          color: white;
          background: #FF006E;
          border-radius: 100px;
          text-decoration: none;
          white-space: nowrap;
          transition: all 0.25s ease;
          border: none;
          cursor: pointer;
        }
        .nav_cta:hover {
          background: #E0005F;
          transform: scale(1.03);
          box-shadow: 0 0 20px rgba(255, 0, 110, 0.3);
        }

        .nav_mobile-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 100px;
          color: rgba(255, 255, 255, 0.7);
          cursor: pointer;
          transition: all 0.25s ease;
          z-index: 60;
          position: relative;
        }
        .nav_mobile-toggle:hover {
          color: white;
          background: rgba(255, 255, 255, 0.1);
        }

        /* Full-screen overlay */
        .nav_fullscreen-overlay { position: fixed; inset: 0; z-index: 55; background: #0a0a0a; display: flex; align-items: center; justify-content: center; }
        .nav_fullscreen-close { position: absolute; top: 20px; right: 24px; width: 48px; height: 48px; display: flex; align-items: center; justify-content: center; background: none; border: none; color: white; cursor: pointer; z-index: 56; }
        .nav_fullscreen-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; align-items: center; gap: 12px; }
        .nav_fullscreen-link { font-size: clamp(2.5rem, 8vw, 4.5rem); font-weight: 600; letter-spacing: -0.04em; color: white; text-decoration: none; transition: color 0.3s ease; display: block; line-height: 1.2; }
        .nav_fullscreen-link:hover { color: #FF006E; }

        @media (min-width: 768px) {
          .nav_menu { display: flex; }
          .nav_cta { padding: 9px 22px; font-size: 0.8125rem; }
          .nav_mobile-toggle { display: none; }
        }
      `}</style>
    </>
  )
}
