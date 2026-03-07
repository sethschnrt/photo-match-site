'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import AnimatedText from './AnimatedText'
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
        <div className="container-large hero_content">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="hero_text-block"
          >
            <AnimatedText
              text="The photo booth that finds your match."
              as="h1"
              className="hero_tagline"
              delay={1.0}
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 1.2 }}
              className="hero_subtitle text-style-allcaps"
            >
              $5 flat &middot; Live on 6th Street, Austin TX
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.3, ease: [0.4, 0, 0.2, 1] }}
              className="hero_button-wrapper"
            >
              <MagneticButton href="#app" className="button is-primary">
                Download the App
              </MagneticButton>
              <a href="#how" className="button is-secondary">How It Works</a>
            </motion.div>
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
            transparent 50%,
            rgba(10, 10, 10, 0.35) 75%,
            rgba(10, 10, 10, 0.8) 100%
          );
        }
        .hero_content-wrapper {
          position: relative;
          z-index: 10;
          width: 100%;
          padding-bottom: 64px;
        }
        .hero_content {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .hero_text-block {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .hero_tagline {
          font-size: clamp(1.25rem, 2.5vw, 1.5rem);
          font-weight: 500;
          letter-spacing: -0.01em;
          margin-bottom: 12px;
          color: var(--color-text-primary);
          line-height: 1.3;
          text-align: center;
        }
        .hero_subtitle { margin-bottom: 32px; color: rgb(180, 184, 192); }
        .hero_button-wrapper { display: flex; flex-wrap: wrap; justify-content: center; gap: 16px; }
        @media (min-width: 768px) {
          .hero_tagline { font-size: 1.5rem; }
        }
      `}</style>
    </section>
  )
}
