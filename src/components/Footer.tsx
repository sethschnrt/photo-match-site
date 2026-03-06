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
    <footer className="footer_component" ref={ref}>
      {/* CTA band */}
      <div className="footer_cta background-color-accent">
        <div className="footer_cta-pattern" />
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
            <Image src={`${basePath}/assets/logos/photo-match-logo.svg`} alt="Photo Match" width={100} height={28} className="footer_logo" />
            <div className="footer_links">
              <a href="#" className="footer_link text-color-tertiary">Privacy</a>
              <a href="#" className="footer_link text-color-tertiary">Terms</a>
              <a href="#" className="footer_link text-color-tertiary">Contact</a>
            </div>
            <div className="footer_social">
              <a href="#" className="footer_social-link text-color-tertiary"><InstagramLogo size={18} weight="fill" /></a>
              <a href="#" className="footer_social-link text-color-tertiary"><TiktokLogo size={18} weight="fill" /></a>
              <a href="#" className="footer_social-link text-color-tertiary"><XLogo size={18} weight="fill" /></a>
            </div>
          </div>
          <div className="container-large">
            <p className="footer_copyright" style={{ color: 'rgb(40,40,40)', fontSize: '12px', textAlign: 'center', paddingBottom: '32px' }}>&copy; 2026 Photo Match. All rights reserved.</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer_cta { position: relative; overflow: hidden; }
        .footer_cta-pattern { position: absolute; inset: 0; opacity: 0.1; background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 0); background-size: 24px 24px; }
        .footer_cta-content { position: relative; z-index: 1; text-align: center; padding: 80px 0; }
        .footer_cta-heading { font-size: clamp(1.75rem, 4vw, 2.5rem); font-weight: 600; letter-spacing: -0.03em; line-height: 1.0; color: white; margin-bottom: 16px; }
        .footer_cta-text { color: rgba(255,255,255,0.7); font-size: 1rem; max-width: 400px; margin: 0 auto 40px; line-height: 1.6; }
        .footer_bottom { background: #050505; padding-top: 40px; }
        .footer_bottom-inner { display: flex; flex-direction: column; align-items: center; gap: 24px; padding-bottom: 32px; }
        .footer_logo { height: 20px; width: auto; opacity: 0.25; }
        .footer_links { display: flex; align-items: center; gap: 24px; }
        .footer_link { font-size: 0.8125rem; text-decoration: none; transition: color 0.2s; }
        .footer_link:hover { color: var(--color-text-secondary) !important; }
        .footer_social { display: flex; align-items: center; gap: 16px; }
        .footer_social-link { transition: color 0.2s; text-decoration: none; }
        .footer_social-link:hover { color: var(--color-accent) !important; }
        @media (min-width: 768px) {
          .footer_bottom-inner { flex-direction: row; justify-content: space-between; }
        }
      `}</style>
    </footer>
  )
}
