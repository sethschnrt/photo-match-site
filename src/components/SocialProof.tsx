'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const duration = 2000
    const startTime = Date.now()

    const tick = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      start = Math.floor(eased * target)
      setCount(start)
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [isInView, target])

  return (
    <span ref={ref} className="font-[family-name:var(--font-body)] font-medium tabular-nums">
      {count.toLocaleString()}{suffix}
    </span>
  )
}

const stats = [
  { value: 12847, suffix: '+', label: 'Matches made' },
  { value: 94, suffix: '%', label: 'Match rate' },
  { value: 5, suffix: '', label: 'Dollar flat fee' },
]

const testimonials = [
  {
    quote: 'Best $5 I ever spent. Got matched with this amazing person and we\'ve been talking ever since.',
    name: 'Sarah K.',
    venue: 'The Driskill',
  },
  {
    quote: 'Way more fun than swiping on my phone in bed. Actually meeting someone face to face hits different.',
    name: 'Marcus T.',
    venue: 'Rainey Street',
  },
  {
    quote: 'My friends and I go every weekend now. It\'s become our thing. The photo reels are so cute.',
    name: 'Jess R.',
    venue: 'Dirty Sixth',
  },
]

export default function SocialProof() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section className="section-gap relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-3 gap-8 mb-20"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white mb-2">
                {stat.label === 'Dollar flat fee' ? (
                  <span className="font-[family-name:var(--font-body)] font-medium">${stat.value}</span>
                ) : (
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                )}
              </div>
              <div className="text-sm text-zinc-500 font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className="glass-card p-8 flex flex-col justify-between"
            >
              <p className="text-zinc-300 leading-relaxed mb-6 text-[15px]">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="text-white font-semibold text-sm">{t.name}</p>
                <p className="text-zinc-600 text-xs font-[family-name:var(--font-body)] font-medium">
                  {t.venue}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
