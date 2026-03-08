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
          className="hero_bg-image hero_bg-desktop"
          priority
          unoptimized
        />
        <Image
          src={`${basePath}/assets/images/hero-mobile-brick.webp`}
          alt="Brick wall background"
          fill
          className="hero_bg-image hero_bg-mobile"
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
            <span className="hero_badge">Where Sparks Fly IRL</span>
            <h1 className="hero_heading">The photo booth that<br />finds your match.</h1>
            <p className="hero_subtitle">
              Step in, snap a photo, and see who you match with.<br className="hero_br-desktop" />
              $5 flat — no downloads needed to play.
            </p>

            {/* Phone mockup — mobile only */}
            <div className="hero_phone-mockup">
              <div className="hero_phone-notch" />
              <div className="hero_phone-screen">
                <div className="hero_phone-profiles">
                  <div className="hero_phone-avatar hero_phone-avatar--pink" />
                  <div className="hero_phone-heart">
                    <svg viewBox="0 0 24 24" fill="#FF006E" width="28" height="28">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                  </div>
                  <div className="hero_phone-avatar hero_phone-avatar--blue" />
                </div>
                <p className="hero_phone-match-text">It&apos;s a Match!</p>
                <p className="hero_phone-compat-text">94% Compatible</p>
                <div className="hero_phone-chat-btn">Start Chatting</div>
              </div>
            </div>

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
          min-height: 100dvh;
          max-height: 100vh;
          max-height: 100dvh;
          display: flex;
          align-items: flex-end;
        }
        .hero_bg {
          position: absolute;
          inset: -30% 0 0 0;
          transform: scale(1.10);
        }
        .hero_bg-image {
          object-fit: cover;
          object-position: center 10%;
        }
        .hero_bg-mobile {
          display: none;
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

        /* Phone mockup — hidden on desktop */
        .hero_phone-mockup {
          display: none;
        }

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

        /* Mobile: phone mockup layout */
        @media (max-width: 767px) {
          .section_hero {
            align-items: flex-start;
            justify-content: center;
          }
          .hero_bg-desktop {
            display: none;
          }
          .hero_bg-mobile {
            display: block;
          }
          .hero_overlay {
            background: linear-gradient(
              to bottom,
              transparent 10%,
              rgba(10, 10, 10, 0.35) 35%,
              rgba(10, 10, 10, 0.85) 65%,
              #0a0a0a 100%
            );
          }
          .hero_content-wrapper {
            padding-top: 0;
            padding-bottom: calc(24px + env(safe-area-inset-bottom, 16px));
            display: flex;
            align-items: center;
            min-height: 100vh;
            min-height: 100dvh;
          }
          .hero_bg {
            inset: 0;
          }
          .hero_stack {
            justify-content: center;
            gap: 0;
          }
          .hero_heading {
            font-size: 2rem;
            margin-bottom: 8px;
          }
          .hero_subtitle {
            display: none;
          }
          .hero_badge {
            margin-bottom: 12px;
          }

          /* Phone mockup styles */
          .hero_phone-mockup {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 220px;
            height: 440px;
            background: #111;
            border: 2px solid #333;
            border-radius: 32px;
            position: relative;
            overflow: hidden;
            box-shadow: 0 0 60px rgba(255, 0, 110, 0.3);
            margin: 20px 0 24px 0;
          }
          .hero_phone-notch {
            width: 80px;
            height: 22px;
            background: #000;
            border-radius: 0 0 16px 16px;
            margin: 0 auto;
            position: relative;
            z-index: 2;
            flex-shrink: 0;
          }
          .hero_phone-screen {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            flex: 1;
            width: 100%;
            background: #1a1a1a;
            padding: 16px 12px 20px;
            gap: 12px;
          }
          .hero_phone-profiles {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
          }
          .hero_phone-avatar {
            width: 72px;
            height: 72px;
            border-radius: 50%;
            flex-shrink: 0;
          }
          .hero_phone-avatar--pink {
            background: linear-gradient(135deg, #FF006E, #8B5CF6);
          }
          .hero_phone-avatar--blue {
            background: linear-gradient(135deg, #3B82F6, #06B6D4);
          }
          .hero_phone-heart {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
          }
          .hero_phone-match-text {
            font-size: 1.25rem;
            font-weight: 700;
            color: #fff;
            margin: 0;
            line-height: 1.2;
          }
          .hero_phone-compat-text {
            font-size: 0.875rem;
            font-weight: 600;
            color: #FF006E;
            margin: 0;
            line-height: 1.2;
          }
          .hero_phone-chat-btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 10px 28px;
            font-size: 0.8125rem;
            font-weight: 700;
            color: #fff;
            background: #FF006E;
            border-radius: 100px;
            margin-top: 4px;
          }
        }

        @media (min-width: 768px) {
          .hero_br-desktop { display: inline; }
          .hero_heading { font-size: clamp(2.5rem, 4.5vw, 3.25rem); }
        }
      `}</style>
    </section>
  )
}
