'use client'
import { motion, useInView, animate } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

function Counter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    const controls = animate(0, target, {
      duration: 1.5,
      ease: [0.4, 0, 0.2, 1],
      onUpdate: (v) => setCount(Math.round(v)),
    })
    return () => controls.stop()
  }, [isInView, target])

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>
}

const stats = [
  { value: 10000, suffix: '+', label: 'matches made' },
  { value: 45, suffix: '', label: 'partner venues' },
  { value: 4.9, suffix: '', label: 'app rating', isDecimal: true },
]

export default function SocialProof() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section className="section_social-proof" ref={ref}>
      <div className="padding-global padding-section-small">
        <div className="container-large">
          <div className="social-proof_grid">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.12, ease: [0.4, 0, 0.2, 1] }}
                className="social-proof_item"
              >
                <span className="social-proof_number text-color-primary">
                  {stat.isDecimal ? '4.9' : <Counter target={stat.value} suffix={stat.suffix} />}
                </span>
                <span className="social-proof_label text-color-tertiary">{stat.label}</span>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.36, ease: [0.4, 0, 0.2, 1] }}
              className="social-proof_item"
            >
              <span className="social-proof_number text-color-accent">$5</span>
              <span className="social-proof_label text-color-tertiary">flat fee</span>
            </motion.div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .section_social-proof { border-bottom: 1px solid var(--color-border); }
        .social-proof_grid { display: flex; flex-wrap: wrap; justify-content: center; gap: 48px; }
        .social-proof_item { display: flex; align-items: baseline; gap: 8px; }
        .social-proof_number { font-size: 1.75rem; font-weight: 600; letter-spacing: -0.02em; }
        .social-proof_label { font-size: 0.875rem; }
        @media (min-width: 768px) {
          .social-proof_grid { justify-content: space-between; }
        }
      `}</style>
    </section>
  )
}
