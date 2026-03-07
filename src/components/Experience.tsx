'use client'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import ImageReveal from './ImageReveal'
import BgHearts from './BgHearts'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

const features = [
  { num: '01', title: 'Real photos, not profiles', desc: 'No filters, no catfishing. Your photo reel is printed right there in front of you. What you see is what you get.' },
  { num: '02', title: 'Same venue, same night', desc: 'Your match is not across town or three days away. They are here. Right now. Walk over and say hi.' },
  { num: '03', title: 'Keep your reel', desc: 'A printed photo strip from every night out. Stick it on your fridge, tape it to your mirror, share it with friends.' },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-20px' })
  const imgRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: imgRef, offset: ['start end', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])

  const barRef = useRef(null)
  const { scrollYProgress: barScrollY } = useScroll({ target: barRef, offset: ['start end', 'end start'] })
  const barY = useTransform(barScrollY, [0, 1], ['-15%', '15%'])

  return (
    <section className="section_experience" ref={ref} style={{ position: 'relative', overflow: 'hidden' }}>
      <BgHearts layout="experience" />
      {/* Editorial hero: massive heading left + overlapping image right */}
      <div ref={imgRef} className="experience_editorial-hero">
        {/* Background image, offset to the right */}
        <motion.div className="experience_hero-image" style={{ y: imgY }}>
          <ImageReveal
            src={`${basePath}/assets/images/nightlife-candid.webp`}
            alt="Austin nightlife scene"
            className="experience_image-reveal"
            priority
          />
        </motion.div>
        <div className="experience_image-overlay" />

        {/* Heading overlapping from the left */}
        <div className="experience_hero-content">
          <div className="padding-global">
            <div className="container-large">
              <h2 className="experience_heading">
                Not another<br />dating app.
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Feature grid with waterfall stagger */}
      <div className="padding-global padding-section-medium">
        <div className="container-large">
          <motion.p
            initial={{ opacity: 1 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="experience_lead text-color-secondary max-width-large"
          >
            Photo Match happens in real life. Same venue, same night, face to face. The way it should be.
          </motion.p>

          <div className="experience_grid">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="experience_feature"
              >
                <span className="experience_feature-num text-color-accent text-style-muted">{f.num}</span>
                <h3 className="experience_feature-title">{f.title}</h3>
                <p className="experience_feature-desc text-color-secondary">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bar atmosphere image with parallax + overlay */}
      <div className="experience_photo-toss" ref={barRef}>
        <div className="experience_photo-toss-inner">
          <motion.div className="experience_parallax-img" style={{ y: barY }}>
            <ImageReveal
              src={`${basePath}/assets/images/photo-strips-bar.webp`}
              alt="Packed Austin bar on a Friday night"
              className="experience_image-reveal"
            />
          </motion.div>
          <div className="experience_bar-overlay" />
        </div>
      </div>

      <style jsx global>{`
        /* Editorial hero: heading left, image right, overlapping */
        .experience_editorial-hero {
          position: relative;
          height: 60vh;
          overflow: hidden;
        }
        .experience_hero-image {
          position: absolute;
          top: 0;
          right: 0;
          width: 100%;
          height: 100%;
        }
        .experience_hero-image .experience_image-reveal {
          position: absolute;
          inset: 0;
        }
        .experience_hero-image .experience_image-reveal .image-reveal_inner {
          position: absolute;
          inset: 0;
        }
        .experience_image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, var(--color-bg-primary) 25%, rgba(10,10,10,0.6) 60%, rgba(0,0,0,0.2));
          z-index: 2;
        }
        .experience_image-overlay.is-subtle {
          background: linear-gradient(to top, var(--color-bg-primary) 5%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.3) 100%);
        }
        .experience_bar-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, var(--color-bg-primary) 3%, rgba(10,10,10,0.45) 40%, rgba(10,10,10,0.35) 70%, var(--color-bg-primary) 97%);
          z-index: 2;
          pointer-events: none;
        }
        .experience_hero-content {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: flex-end;
          padding-bottom: 64px;
          z-index: 3;
        }
        .experience_heading {
          font-size: clamp(3rem, 6vw, 6rem);
          font-weight: 600;
          letter-spacing: -0.04em;
          line-height: 0.95;
          max-width: 600px;
          text-align: left;
        }

        /* Lead text */
        .experience_lead { font-size: 1.0625rem; line-height: 1.6; margin-bottom: 64px; }

        /* Feature grid with waterfall */
        .experience_grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
          position: relative;
        }

        .experience_feature {
          background: var(--color-bg-secondary);
          border: 1px solid var(--color-border);
          border-radius: 16px;
          padding: 40px;
          position: relative;
          z-index: 1;
        }
        .experience_feature-num { display: block; font-size: 0.75rem; font-family: monospace; margin-bottom: 16px; }
        .experience_feature-title { font-size: 1.125rem; font-weight: 600; color: var(--color-text-primary); margin-bottom: 8px; }
        .experience_feature-desc { font-size: 0.9375rem; line-height: 1.6; }

        /* Photo toss: rotated, offset */
        .experience_photo-toss {
          overflow: hidden;
          padding: 32px 0 64px;
        }
        .experience_photo-toss-inner {
          position: relative;
          height: 45vh;
          width: 100%;
          border-radius: 0;
          overflow: hidden;
        }
        .experience_parallax-img {
          position: absolute;
          inset: -15% 0;
          height: 130%;
          width: 100%;
        }
        .experience_photo-toss-inner .experience_image-reveal {
          position: absolute;
          inset: 0;
        }
        .experience_photo-toss-inner .experience_image-reveal .image-reveal_inner {
          position: absolute;
          inset: 0;
        }

        @media (min-width: 768px) {
          .experience_editorial-hero { height: 70vh; }
          .experience_grid {
            grid-template-columns: repeat(3, 1fr);
            align-items: start;
            gap: 24px;
          }
          /* Waterfall cascade: each card steps down */
          .experience_feature:nth-child(2) { margin-top: 40px; }
          .experience_feature:nth-child(3) { margin-top: 80px; }
        }

        @media (max-width: 767px) {
          .experience_hero-image { width: 100%; }
          .experience_image-overlay {
            background: linear-gradient(to top, var(--color-bg-primary), rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.2));
          }
          .experience_heading {
            font-size: clamp(2.5rem, 8vw, 3.5rem);
          }
          .experience_feature { margin-top: 0 !important; }
          .experience_photo-toss-inner {
            width: 100%;
          }
        }
      `}</style>
    </section>
  )
}
