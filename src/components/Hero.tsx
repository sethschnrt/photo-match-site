'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import MagneticButton from './MagneticButton'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

export default function Hero() {
  return (
    <section className="section_hero">
      {/* Full hero background image */}
      <div className="hero_bg">
        <Image
          src={`${basePath}/assets/images/neon-sign-hero.webp`}
          alt="Photo Match neon sign on bar wall"
          fill
          className="hero_bg-image"
          priority
          unoptimized
        />
        <div className="hero_overlay" />
      </div>

      <div className="padding-global hero_content-wrapper">
        <div className="container-large hero_bottom">
          {/* Left side — announcement + heading + subtitle */}
          <motion.div
            className="hero_left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <span className="hero_badge">🎉 NEW: Now on Rainey Street!</span>
            <h1 className="hero_heading">The photo booth that finds your match.</h1>
            <p className="hero_subtitle">
              Step in, snap a photo, and see who you match with. $5 flat — no downloads needed to play.
            </p>
          </motion.div>

          {/* Right side — CTA */}
          <motion.div
            className="hero_right"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1, ease: [0.4, 0, 0.2, 1] }}
          >
            <MagneticButton href="#app" className="hero_cta-btn">
              Download the App
            </MagneticButton>
            <p className="hero_cta-note">Available on iOS & Android</p>
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        .section_hero {
          position: relative;
          overflow: hidden;
          min-height: 100vh;
          display: flex;
          align-items: flex-end;
        }
        .hero_bg {
          position: absolute;
          inset: 0;
          transform: scale(1.10);
        }
        .hero_bg-image {
          object-fit: cover;
          object-position: center center;
        }
        .hero_overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            transparent 40%,
            rgba(10, 10, 10, 0.3) 65%,
            rgba(10, 10, 10, 0.85) 90%,
            #0a0a0a 100%
          );
        }

        .hero_content-wrapper {
          position: relative;
          z-index: 10;
          width: 100%;
          padding-bottom: 56px;
        }

        .hero_bottom {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        /* Left — text content */
        .hero_left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .hero_badge {
          display: inline-flex;
          align-items: center;
          padding: 6px 14px;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          color: #FF006E;
          background: rgba(255, 0, 110, 0.1);
          border: 1px solid rgba(255, 0, 110, 0.2);
          border-radius: 100px;
          margin-bottom: 16px;
        }

        .hero_heading {
          font-size: clamp(1.75rem, 4vw, 2.75rem);
          font-weight: 700;
          letter-spacing: -0.03em;
          line-height: 1.15;
          color: white;
          margin-bottom: 12px;
          max-width: 500px;
        }

        .hero_subtitle {
          font-size: 1rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.65);
          max-width: 420px;
        }

        /* Right — CTA */
        .hero_right {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .hero_cta-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 16px 36px;
          font-size: 1rem;
          font-weight: 700;
          color: white;
          background: #FF006E;
          border-radius: 100px;
          text-decoration: none;
          transition: all 0.25s ease;
          border: none;
          cursor: pointer;
        }
        .hero_cta-btn:hover {
          background: #E0005F;
          transform: scale(1.03);
          box-shadow: 0 0 30px rgba(255, 0, 110, 0.3);
        }

        .hero_cta-note {
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.4);
          margin-top: 10px;
          padding-left: 4px;
        }

        /* Desktop: split layout */
        @media (min-width: 768px) {
          .hero_bottom {
            flex-direction: row;
            align-items: flex-end;
            justify-content: space-between;
          }
          .hero_right {
            align-items: flex-end;
            text-align: right;
          }
          .hero_cta-note {
            padding-left: 0;
            padding-right: 4px;
          }
        }
      `}</style>
    </section>
  )
}
