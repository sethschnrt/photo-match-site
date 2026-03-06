'use client'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import ImageReveal from './ImageReveal'
import AnimatedText from './AnimatedText'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

const features = [
  { num: '01', title: 'Real photos, not profiles', desc: 'No filters, no catfishing. Your photo reel is printed right there in front of you. What you see is what you get.' },
  { num: '02', title: 'Same venue, same night', desc: 'Your match is not across town or three days away. They are here. Right now. Walk over and say hi.' },
  { num: '03', title: 'Keep your reel', desc: 'A printed photo strip from every night out. Stick it on your fridge, tape it to your mirror, share it with friends.' },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const imgRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: imgRef, offset: ['start end', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])

  return (
    <section className="section_experience" ref={ref}>
      {/* Full-bleed image break with reveal */}
      <div ref={imgRef} className="experience_image-break">
        <motion.div className="experience_image-parallax" style={{ y: imgY }}>
          <ImageReveal
            src={`${basePath}/assets/images/nightlife-candid.jpg`}
            alt="Austin nightlife scene"
            className="experience_image-reveal"
            priority
          />
        </motion.div>
        <div className="experience_image-overlay" />
        <div className="experience_image-content">
          <div className="padding-global">
            <div className="container-large">
              <AnimatedText
                text="Not another\ndating app."
                as="h2"
                className="experience_heading"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Feature grid */}
      <div className="padding-global padding-section-medium">
        <div className="container-large">
          <motion.p
            initial={{ opacity: 0 }}
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
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease: [0.4, 0, 0.2, 1] }}
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

      {/* Photo strips flatlay image break */}
      <div className="experience_image-break is-small">
        <ImageReveal
          src={`${basePath}/assets/images/photo-strips-bar.jpg`}
          alt="Photo booth strips on a bar counter"
          className="experience_image-reveal"
        />
        <div className="experience_image-overlay is-subtle" />
      </div>

      <style jsx global>{`
        .experience_image-break { position: relative; height: 55vh; overflow: hidden; }
        .experience_image-break.is-small { height: 35vh; }
        .experience_image-parallax { position: absolute; inset: 0; }
        .experience_image-reveal { position: absolute; inset: 0; }
        .experience_image-reveal .image-reveal_inner { position: absolute; inset: 0; }
        .experience_image-overlay { position: absolute; inset: 0; background: linear-gradient(to top, var(--color-bg-primary), rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.2)); z-index: 2; }
        .experience_image-overlay.is-subtle { background: linear-gradient(to top, var(--color-bg-primary) 5%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.3) 100%); }
        .experience_image-content { position: absolute; inset: 0; display: flex; align-items: flex-end; padding-bottom: 64px; z-index: 3; }
        .experience_heading { font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 600; letter-spacing: -0.04em; line-height: 1.0; max-width: 560px; }
        .experience_lead { font-size: 1.0625rem; line-height: 1.6; margin-bottom: 64px; }
        .experience_grid { display: grid; grid-template-columns: 1fr; gap: 1px; background: var(--color-border); border-radius: 16px; overflow: hidden; }
        .experience_feature { background: var(--color-bg-primary); padding: 40px; transition: background 0.3s; }
        .experience_feature:hover { background: var(--color-bg-secondary); }
        .experience_feature-num { display: block; font-size: 0.75rem; font-family: monospace; margin-bottom: 16px; }
        .experience_feature-title { font-size: 1.125rem; font-weight: 600; color: var(--color-text-primary); margin-bottom: 8px; transition: color 0.3s; }
        .experience_feature:hover .experience_feature-title { color: #FF006E; }
        .experience_feature-desc { font-size: 0.9375rem; line-height: 1.6; }
        @media (min-width: 768px) {
          .experience_image-break { height: 60vh; }
          .experience_grid { grid-template-columns: repeat(3, 1fr); }
        }
      `}</style>
    </section>
  )
}
