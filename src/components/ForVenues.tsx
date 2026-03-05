'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ChartLineUp, CurrencyDollar, Megaphone } from '@phosphor-icons/react/dist/ssr'

const benefits = [
  {
    title: 'Increase dwell time',
    desc: 'Guests stay longer when they have a reason to stick around. Average visit time increases by 40 minutes.',
    Icon: ChartLineUp,
  },
  {
    title: 'New revenue stream',
    desc: '$5 per session, split with your venue. Zero setup cost, zero maintenance. We handle everything.',
    Icon: CurrencyDollar,
  },
  {
    title: 'Free marketing',
    desc: 'Every photo reel has your venue branding. Guests share them on social. Organic reach you did not pay for.',
    Icon: Megaphone,
  },
]

export default function ForVenues() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="venues" className="section-large overflow-hidden" ref={ref}>
      <div className="container-site">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <p className="text-accent font-medium text-sm tracking-wide uppercase mb-3">For Venues</p>
            <h2 className="mb-6">Turn your bar into the place to be.</h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-10">
              Photo Match booths bring energy to your venue. More engagement, longer stays, and a reason for guests to come back next weekend.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-white text-black font-semibold hover:bg-zinc-200 transition-colors"
            >
              Book a Demo
            </a>
          </motion.div>

          <div className="space-y-5">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="glass-card p-6 flex gap-5"
              >
                <div className="text-accent shrink-0 mt-1">
                  <b.Icon size={24} weight="duotone" />
                </div>
                <div>
                  <h3 className="text-base font-semibold mb-1.5">{b.title}</h3>
                  <p className="text-zinc-400 text-[15px] leading-relaxed">{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
