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
    <section ref={ref} className="py-12 md:py-16 border-b border-white/[0.06]">
      <div className="container-site">
        <div className="flex flex-wrap justify-center md:justify-between gap-y-8 gap-x-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.12, ease: [0.4, 0, 0.2, 1] }}
              className="flex items-baseline gap-2"
            >
              <span className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                {stat.isDecimal ? '4.9' : <Counter target={stat.value} suffix={stat.suffix} />}
              </span>
              <span className="text-sm text-zinc-500">{stat.label}</span>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.36, ease: [0.4, 0, 0.2, 1] }}
            className="flex items-baseline gap-2"
          >
            <span className="text-2xl md:text-3xl font-bold text-accent tracking-tight">$5</span>
            <span className="text-sm text-zinc-500">flat fee</span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
