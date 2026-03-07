'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import AnimatedText from './AnimatedText'
import MagneticButton from './MagneticButton'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

export default function Hero() {
  return (
    <section className="section_hero">
      {/* Background: brick wall */}
      <div className="hero_background">
        <Image
          src={`${basePath}/assets/images/hero-bar-wall-v2.webp`}
          alt=""
          fill
          className="hero_background-image"
          priority
          unoptimized
        />
        {/* Darken the wall */}
        <div className="hero_wall-darken" />
        {/* Pink light wash on the wall from the neon sign */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.3 }}
          className="hero_wall-light"
        />
        {/* Vignette edges */}
        <div className="hero_vignette" />
      </div>

      <div className="padding-global hero_content-wrapper">
        <div className="container-large hero_content">
          {/* Neon sign: multiple layers for photorealistic effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="hero_neon-sign"
          >
            {/* Layer 1: Wide ambient glow on the wall (very blurred, large) */}
            <div className="hero_neon-layer is-ambient">
              <Image src={`${basePath}/assets/logos/photo-match-logo-v2-transparent.png`} alt="" width={500} height={500} unoptimized />
            </div>

            {/* Layer 2: Medium glow halo */}
            <div className="hero_neon-layer is-halo">
              <Image src={`${basePath}/assets/logos/photo-match-logo-v2-transparent.png`} alt="" width={500} height={500} unoptimized />
            </div>

            {/* Layer 3: Tight glow around tubes */}
            <div className="hero_neon-layer is-tube-glow">
              <Image src={`${basePath}/assets/logos/photo-match-logo-v2-transparent.png`} alt="" width={500} height={500} unoptimized />
            </div>

            {/* Layer 4: White-hot center of tubes */}
            <div className="hero_neon-layer is-hot-center">
              <Image src={`${basePath}/assets/logos/photo-match-logo-v2-transparent.png`} alt="" width={500} height={500} unoptimized />
            </div>

            {/* Layer 5: The actual crisp logo on top */}
            <div className="hero_neon-layer is-logo">
              <Image
                src={`${basePath}/assets/logos/photo-match-logo-v2-transparent.png`}
                alt="Photo Match"
                width={500}
                height={500}
                unoptimized
              />
            </div>

            {/* Flicker overlay */}
            <motion.div
              animate={{
                opacity: [1, 0.94, 1, 1, 0.97, 1, 1, 1, 0.92, 1, 1, 0.96, 1, 1, 1],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              className="hero_neon-flicker"
            />
          </motion.div>

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
        </div>
      </div>

      <style jsx global>{`
        .section_hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        /* Background layers */
        .hero_background { position: absolute; inset: 0; }
        .hero_background-image { object-fit: cover; }
        .hero_wall-darken {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.45);
        }
        .hero_wall-light {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -58%);
          width: 700px;
          height: 550px;
          background: radial-gradient(ellipse, rgba(255, 0, 110, 0.15) 0%, rgba(255, 0, 110, 0.06) 40%, transparent 70%);
          pointer-events: none;
        }
        .hero_vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at center, transparent 30%, rgba(0, 0, 0, 0.5) 70%, rgba(0, 0, 0, 0.85) 100%);
        }

        /* Content */
        .hero_content-wrapper {
          position: relative;
          z-index: 10;
          padding-top: 120px;
          padding-bottom: 80px;
        }
        .hero_content {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* Neon sign container */
        .hero_neon-sign {
          position: relative;
          width: 340px;
          height: 340px;
          margin-bottom: 32px;
        }

        /* All neon layers are absolutely positioned and centered */
        .hero_neon-layer {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
        }
        .hero_neon-layer img {
          width: 100%;
          height: auto;
        }

        /* Layer 1: Ambient wall glow — very large, very blurred */
        .hero_neon-layer.is-ambient img {
          filter: blur(60px) brightness(1.5) saturate(1.3);
          opacity: 0.35;
          transform: scale(1.3);
        }

        /* Layer 2: Medium halo glow */
        .hero_neon-layer.is-halo img {
          filter: blur(30px) brightness(1.4) saturate(1.2);
          opacity: 0.5;
          transform: scale(1.1);
        }

        /* Layer 3: Tight tube glow — close to the logo shape */
        .hero_neon-layer.is-tube-glow img {
          filter: blur(12px) brightness(1.6) saturate(1.1);
          opacity: 0.7;
        }

        /* Layer 4: White-hot center — desaturated, bright */
        .hero_neon-layer.is-hot-center img {
          filter: blur(4px) brightness(2) saturate(0.4);
          opacity: 0.5;
          mix-blend-mode: screen;
        }

        /* Layer 5: Crisp logo */
        .hero_neon-layer.is-logo {
          pointer-events: auto;
        }
        .hero_neon-layer.is-logo img {
          filter: drop-shadow(0 0 2px rgba(255, 200, 220, 0.9)) drop-shadow(0 0 6px rgba(255, 0, 110, 0.7));
        }

        /* Flicker */
        .hero_neon-flicker {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        /* Text */
        .hero_tagline {
          font-size: clamp(1.25rem, 2.5vw, 1.5rem);
          font-weight: 500;
          letter-spacing: -0.01em;
          margin-bottom: 12px;
          color: var(--color-text-primary);
          line-height: 1.3;
          text-align: center;
        }
        .hero_subtitle { margin-bottom: 40px; color: rgb(180, 184, 192); }
        .hero_button-wrapper { display: flex; flex-wrap: wrap; justify-content: center; gap: 16px; }

        @media (min-width: 768px) {
          .hero_neon-sign { width: 440px; height: 440px; }
          .hero_tagline { font-size: 1.5rem; }
          .hero_wall-light { width: 900px; height: 700px; }
        }
        @media (min-width: 1200px) {
          .hero_neon-sign { width: 500px; height: 500px; }
          .hero_wall-light { width: 1100px; height: 800px; }
        }
      `}</style>
    </section>
  )
}
