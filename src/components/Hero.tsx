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
        <div className="container-large">
          <motion.div
            className="hero_stack"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <span className="hero_badge">NEW LOCATION — Now on Rainey Street</span>
            <h1 className="hero_heading">The photo booth that<br />finds your match.</h1>
            <p className="hero_subtitle">
              Step in, snap a photo, and see who you match with.<br className="hero_br-desktop" />
              $5 flat — no downloads needed to play.
            </p>
            <MagneticButton href="#app" className="hero_cta-btn">
              Download the App
            </MagneticButton>
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        .section_hero {
          position: relative;
          overflow: hidden;
          min-height: 100vh;
          max-height: 100vh;
          display: flex;
          align-items: flex-end;
        }
        .hero_bg {
          position: absolute;
          inset: -15% 0 0 0;
          transform: scale(1.10);
        }
        .hero_bg-image {
          object-fit: cover;
          object-position: center 10%;
        }
        .hero_overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            transparent 50%,
            rgba(10, 10, 10, 0.25) 70%,
            rgba(10, 10, 10, 0.75) 90%,
            #0a0a0a 100%
          );
        }

        .hero_content-wrapper {
          position: relative;
          z-index: 10;
          width: 100%;
          padding-bottom: 64px;
        }

        .hero_stack {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .hero_badge {
          display: inline-flex;
          align-items: center;
          padding: 5px 14px;
          font-size: 0.6875rem;
          font-weight: 400;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.7);
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 100px;
          margin-bottom: 20px;
        }

        .hero_heading {
          font-size: clamp(2rem, 5vw, 3.25rem);
          font-weight: 700;
          letter-spacing: -0.03em;
          line-height: 1.1;
          color: white;
          margin-bottom: 16px;
          max-width: 560px;
        }

        .hero_subtitle {
          font-size: 1rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.55);
          margin-bottom: 32px;
          max-width: 480px;
        }

        .hero_br-desktop { display: none; }

        .hero_cta-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 14px 32px;
          font-size: 0.9375rem;
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

        @media (min-width: 768px) {
          .hero_br-desktop { display: inline; }
          .hero_heading { font-size: clamp(2.5rem, 4.5vw, 3.25rem); }
        }
      `}</style>
    </section>
  )
}
