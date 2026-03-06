'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Quotes, CaretLeft, CaretRight } from '@phosphor-icons/react/dist/ssr'

const testimonials = [
  { quote: 'We walked into the bar with zero expectations. Thirty minutes later my friend was talking to the funniest guy she had ever met. Photo Match made the whole night.', name: 'Sarah M.', location: 'Austin, TX' },
  { quote: 'I have tried every dating app and hated all of them. This is the first thing that actually feels natural because you are already in the same room.', name: 'Marcus T.', location: 'Austin, TX' },
  { quote: 'The photo reel is such a nice touch. My friends and I went back three weekends in a row just for that.', name: 'Jess K.', location: 'Austin, TX' },
]

export default function Testimonial() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [current, setCurrent] = useState(0)
  const next = () => setCurrent((c) => (c + 1) % testimonials.length)
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  const t = testimonials[current]

  return (
    <section className="section_testimonial" ref={ref}>
      <div className="padding-global padding-section-large">
        <div className="container-small">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, type: 'spring', stiffness: 200, damping: 25 }}
            className="testimonial_icon"
          >
            <Quotes size={32} weight="fill" />
          </motion.div>

          <motion.blockquote
            key={current}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="testimonial_quote text-color-primary"
          >
            {t.quote}
          </motion.blockquote>

          <motion.p
            key={`name-${current}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.15 }}
            className="testimonial_author"
          >
            <span className="text-color-primary text-weight-medium">{t.name}</span>
            <span className="text-color-tertiary"> &middot; {t.location}</span>
          </motion.p>

          <div className="testimonial_nav">
            <button onClick={prev} className="testimonial_arrow" aria-label="Previous">
              <CaretLeft size={16} weight="bold" />
            </button>
            <div className="testimonial_dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`testimonial_dot ${i === current ? 'is-active' : ''}`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button onClick={next} className="testimonial_arrow" aria-label="Next">
              <CaretRight size={16} weight="bold" />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .section_testimonial { border-top: 1px solid var(--color-border); }
        .testimonial_icon { text-align: center; color: rgba(255,0,110,0.2); margin-bottom: 24px; }
        .testimonial_quote { font-size: clamp(1.375rem, 3vw, 1.75rem); font-weight: 600; letter-spacing: -0.02em; line-height: 1.35; text-align: center; min-height: 100px; }
        .testimonial_author { text-align: center; margin-top: 32px; font-size: 0.9375rem; }
        .testimonial_nav { display: flex; align-items: center; justify-content: center; gap: 24px; margin-top: 40px; }
        .testimonial_arrow { width: 40px; height: 40px; border-radius: 50%; border: 1px solid rgba(255,255,255,0.08); display: flex; align-items: center; justify-content: center; color: var(--color-text-tertiary); background: none; cursor: pointer; transition: all 0.2s; }
        .testimonial_arrow:hover { color: var(--color-text-primary); border-color: rgba(255,255,255,0.2); }
        .testimonial_dots { display: flex; gap: 8px; }
        .testimonial_dot { width: 8px; height: 8px; border-radius: 50%; background: rgb(60,60,60); border: none; cursor: pointer; transition: all 0.3s; padding: 0; }
        .testimonial_dot.is-active { background: var(--color-accent); width: 24px; border-radius: 4px; }
      `}</style>
    </section>
  )
}
