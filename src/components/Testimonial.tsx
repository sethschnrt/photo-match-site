'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Quotes, CaretLeft, CaretRight } from '@phosphor-icons/react/dist/ssr'

const testimonials = [
  {
    quote: 'We walked into the bar with zero expectations. Thirty minutes later my friend was talking to the funniest guy she had ever met. Photo Match made the whole night.',
    name: 'Sarah M.',
    location: 'Austin, TX',
  },
  {
    quote: 'I have tried every dating app and hated all of them. This is the first thing that actually feels natural because you are already in the same room.',
    name: 'Marcus T.',
    location: 'Austin, TX',
  },
  {
    quote: 'The photo reel is such a nice touch. My friends and I went back three weekends in a row just for that.',
    name: 'Jess K.',
    location: 'Austin, TX',
  },
]

export default function Testimonial() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((c) => (c + 1) % testimonials.length)
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  const t = testimonials[current]

  return (
    <section className="py-24 md:py-32 border-t border-white/[0.06] overflow-hidden" ref={ref}>
      <div className="container-site max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, type: 'spring', stiffness: 200, damping: 25 }}
        >
          <Quotes size={36} weight="fill" className="text-accent/20 mx-auto mb-6" />
        </motion.div>

        <motion.blockquote
          key={current}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="text-2xl md:text-3xl font-semibold text-white leading-snug tracking-tight min-h-[120px]"
        >
          &ldquo;{t.quote}&rdquo;
        </motion.blockquote>

        <motion.p
          key={`name-${current}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.15 }}
          className="text-zinc-500 mt-8"
        >
          <span className="text-white font-medium">{t.name}</span> &middot; {t.location}
        </motion.p>

        {/* Navigation dots + arrows */}
        <div className="flex items-center justify-center gap-6 mt-10">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-white/[0.08] flex items-center justify-center text-zinc-500 hover:text-white hover:border-white/20 transition-all duration-200"
            aria-label="Previous testimonial"
          >
            <CaretLeft size={16} weight="bold" />
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === current ? 'bg-accent w-6' : 'bg-zinc-700 hover:bg-zinc-500'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-white/[0.08] flex items-center justify-center text-zinc-500 hover:text-white hover:border-white/20 transition-all duration-200"
            aria-label="Next testimonial"
          >
            <CaretRight size={16} weight="bold" />
          </button>
        </div>
      </div>
    </section>
  )
}
