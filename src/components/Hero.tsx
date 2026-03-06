'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

export default function Hero() {
  return (
    <section className="section_hero">
      {/* Background: brick wall */}
      <div className="hero_background">
        <Image
          src={`${basePath}/assets/images/brick-wall-2.jpg`}
          alt=""
          fill
          className="hero_background-image"
          priority
        />
        <div className="hero_vignette" />
        {/* Light spill from neon */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="hero_glow"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="hero_glow is-inner"
        />
      </div>

      <div className="padding-global hero_content-wrapper">
        <div className="container-large hero_content">
          {/* Neon logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="hero_logo-wrapper"
          >
            <div className="hero_logo-glow">
              <Image src={`${basePath}/assets/logos/photo-match-logo.svg`} alt="" width={360} height={200} className="hero_logo-blur" />
            </div>
            <div className="hero_logo-glow is-outer">
              <Image src={`${basePath}/assets/logos/photo-match-logo.svg`} alt="" width={360} height={200} className="hero_logo-blur is-wide" />
            </div>
            <Image
              src={`${basePath}/assets/logos/photo-match-logo.svg`}
              alt="Photo Match"
              width={360}
              height={200}
              className="hero_logo"
            />
            <motion.div
              animate={{ opacity: [1, 0.92, 1, 1, 0.95, 1, 1, 0.88, 1, 1, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
              className="hero_flicker"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0, ease: [0.4, 0, 0.2, 1] }}
            className="hero_tagline text-color-primary"
          >
            The photo booth that finds your match.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 1.2 }}
            className="hero_subtitle text-color-tertiary text-style-allcaps"
          >
            $5 flat &middot; Live on 6th Street, Austin TX
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.3, ease: [0.4, 0, 0.2, 1] }}
            className="hero_button-wrapper"
          >
            <a href="#app" className="button is-primary">Download the App</a>
            <a href="#how" className="button is-secondary">How It Works</a>
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        .section_hero { position: relative; min-height: 100vh; display: flex; align-items: center; justify-content: center; overflow: hidden; }
        .hero_background { position: absolute; inset: 0; }
        .hero_background-image { object-fit: cover; }
        .hero_vignette { position: absolute; inset: 0; background: radial-gradient(ellipse at center, transparent 20%, rgba(0,0,0,0.5) 70%, rgba(0,0,0,0.8) 100%); }
        .hero_glow { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -55%); width: 450px; height: 350px; background: rgba(255,0,110,0.07); border-radius: 50%; filter: blur(80px); pointer-events: none; }
        .hero_glow.is-inner { width: 250px; height: 200px; background: rgba(255,0,110,0.12); filter: blur(50px); }
        .hero_content-wrapper { position: relative; z-index: 10; padding-top: 120px; padding-bottom: 80px; }
        .hero_content { text-align: center; display: flex; flex-direction: column; align-items: center; }
        .hero_logo-wrapper { position: relative; margin-bottom: 32px; }
        .hero_logo-glow { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; pointer-events: none; }
        .hero_logo-blur { width: 280px; height: auto; filter: blur(20px); opacity: 0.6; }
        .hero_logo-blur.is-wide { filter: blur(40px); opacity: 0.3; }
        .hero_logo-glow.is-outer .hero_logo-blur { filter: blur(40px); opacity: 0.3; }
        .hero_logo { position: relative; width: 280px; height: auto; filter: drop-shadow(0 0 15px rgba(255,0,110,0.5)); }
        .hero_flicker { position: absolute; inset: 0; pointer-events: none; }
        .hero_tagline { font-size: clamp(1.125rem, 2vw, 1.25rem); font-weight: 500; letter-spacing: -0.01em; margin-bottom: 8px; }
        .hero_subtitle { margin-bottom: 40px; }
        .hero_button-wrapper { display: flex; flex-wrap: wrap; justify-content: center; gap: 16px; }
        @media (min-width: 768px) {
          .hero_logo, .hero_logo-blur, .hero_logo-blur.is-wide { width: 360px; }
          .hero_tagline { font-size: 1.25rem; }
        }
      `}</style>
    </section>
  )
}
