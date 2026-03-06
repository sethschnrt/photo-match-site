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

const stats: {
  value: number
  suffix: string
  label: string
  isDecimal?: boolean
  isHero?: boolean
  isAccent?: boolean
}[] = [
  { value: 10000, suffix: '+', label: 'matches made', isHero: true },
  { value: 45, suffix: '', label: 'partner venues' },
  { value: 4.9, suffix: '', label: 'app rating', isDecimal: true },
  { value: 5, suffix: '', label: 'flat fee', isAccent: true },
]

/* Vertical offsets to create a wave: high, low, mid, lower */
const offsets = [0, 24, -8, 32]
const sizes = ['3.5rem', '1.75rem', '1.75rem', '2.25rem']

export default function SocialProof() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-20px' })

  return (
    <section className="section_social-proof" ref={ref}>
      <div className="padding-global padding-section-small">
        <div className="container-large">
          <div className="social-proof_grid">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12, ease: [0.4, 0, 0.2, 1] }}
                className={`social-proof_item ${stat.isHero ? 'is-hero' : ''}`}
                style={{ transform: `translateY(${offsets[i]}px)` }}
              >
                <span
                  className={`social-proof_number ${stat.isAccent ? 'text-color-accent' : 'text-color-primary'}`}
                  style={{ fontSize: sizes[i] }}
                >
                  {stat.isAccent && '$'}
                  {stat.isDecimal ? '4.9' : <Counter target={stat.value} suffix={stat.suffix} />}
                </span>
                <span className="social-proof_label text-color-tertiary">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .section_social-proof { border-bottom: 1px solid var(--color-border); overflow-x: hidden; }
        .social-proof_grid {
          display: flex;
          flex-wrap: wrap;
          gap: 32px;
          align-items: flex-start;
        }
        .social-proof_item {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .social-proof_item.is-hero {
          flex-basis: 100%;
        }
        .social-proof_number {
          font-weight: 600;
          letter-spacing: -0.03em;
          line-height: 1;
        }
        .social-proof_label { font-size: 0.875rem; }
        @media (min-width: 768px) {
          .social-proof_grid {
            flex-wrap: nowrap;
            justify-content: space-between;
            align-items: flex-start;
          }
          .social-proof_item.is-hero {
            flex-basis: auto;
          }
        }
      `}</style>
    </section>
  )
}
