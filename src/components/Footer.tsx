'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { InstagramLogo, TiktokLogo, XLogo } from '@phosphor-icons/react/dist/ssr'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

const navLinks = [
  { href: '#how', label: 'How It Works' },
  { href: '#venues', label: 'For Venues' },
  { href: '#app', label: 'The App' },
  { href: '#locations', label: 'Locations' },
]

const legalLinks = [
  { href: '#', label: 'Privacy' },
  { href: '#', label: 'Terms' },
  { href: '#', label: 'Contact' },
]

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <footer className="footer_component" ref={ref}>
      {/* CTA band */}
      <div className="footer_cta">
        <div className="footer_cta-pattern" />
        <div className="footer_cta-gradient" />
        <div className="padding-global">
          <div className="container-medium footer_cta-content">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="footer_cta-heading"
            >
              Ready to meet someone new?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="footer_cta-text"
            >
              Find a Photo Match booth tonight. $5, a printed photo reel, and a real connection.
            </motion.p>
            <motion.a
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.25 }}
              href="#app"
              className="button is-white is-large"
            >
              Download the App
            </motion.a>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="footer_bottom">
        <div className="padding-global">
          <div className="container-large footer_bottom-inner">
            {/* Logo + tagline */}
            <div className="footer_brand">
              <Image src={`${basePath}/assets/logos/photo-match-logo-v2.png`} alt="Photo Match" width={160} height={36} unoptimized className="footer_logo" />
              <p className="footer_tagline text-color-secondary">The photo booth that finds your match.</p>
            </div>

            {/* Navigation links */}
            <div className="footer_nav">
              <p className="footer_nav-heading text-color-primary">Navigate</p>
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="footer_link text-color-secondary">{link.label}</a>
              ))}
            </div>

            {/* Legal links */}
            <div className="footer_nav">
              <p className="footer_nav-heading text-color-primary">Legal</p>
              {legalLinks.map((link) => (
                <a key={link.label} href={link.href} className="footer_link text-color-secondary">{link.label}</a>
              ))}
            </div>

            {/* Social */}
            <div className="footer_nav">
              <p className="footer_nav-heading text-color-primary">Follow Us</p>
              <div className="footer_social">
                <a href="#" className="footer_social-link text-color-secondary"><InstagramLogo size={22} weight="fill" /></a>
                <a href="#" className="footer_social-link text-color-secondary"><TiktokLogo size={22} weight="fill" /></a>
                <a href="#" className="footer_social-link text-color-secondary"><XLogo size={22} weight="fill" /></a>
              </div>
            </div>
          </div>

          <div className="container-large">
            <div className="footer_divider" />
            <p className="footer_copyright text-color-secondary">&copy; 2026 Photo Match. All rights reserved.</p>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .footer_cta { position: relative; overflow: hidden; background: #b30050; }
        .footer_cta-pattern { position: absolute; inset: 0; opacity: 0.08; background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 0); background-size: 24px 24px; }
        .footer_cta-gradient { position: absolute; inset: 0; background: linear-gradient(135deg, rgba(255,0,110,0.3) 0%, transparent 40%, rgba(180,0,70,0.2) 100%); }
        .footer_cta-content { position: relative; z-index: 1; text-align: center; padding: 80px 0; }
        .footer_cta-heading { font-size: clamp(1.75rem, 4vw, 2.5rem); font-weight: 600; letter-spacing: -0.03em; line-height: 1.0; color: white; margin-bottom: 16px; }
        .footer_cta-text { color: rgba(255,255,255,0.8); font-size: 1rem; max-width: 400px; margin: 0 auto 40px; line-height: 1.6; }
        .footer_bottom { background: #050505; padding-top: 64px; padding-bottom: 32px; }
        .footer_bottom-inner { display: grid; grid-template-columns: 1fr; gap: 40px; padding-bottom: 48px; }
        .footer_brand { display: flex; flex-direction: column; gap: 12px; }
        .footer_logo { height: 34px; width: auto; opacity: 0.5; object-fit: contain; }
        .footer_tagline { font-size: 0.875rem; }
        .footer_nav { display: flex; flex-direction: column; gap: 10px; }
        .footer_nav-heading { font-size: 0.8125rem; font-weight: 600; margin-bottom: 4px; }
        .footer_link { font-size: 0.875rem; text-decoration: none; transition: color 0.2s; }
        .footer_link:hover { color: var(--color-text-primary) !important; }
        .footer_social { display: flex; align-items: center; gap: 16px; }
        .footer_social-link { transition: color 0.2s; text-decoration: none; }
        .footer_social-link:hover { color: var(--color-accent) !important; }
        .footer_divider { height: 1px; background: var(--color-border); margin-bottom: 24px; }
        .footer_copyright { font-size: 0.75rem; text-align: center; padding-bottom: 16px; }
        @media (min-width: 768px) {
          .footer_bottom-inner { grid-template-columns: 2fr 1fr 1fr 1fr; gap: 48px; }
        }
      `}</style>
    </footer>
  )
}
