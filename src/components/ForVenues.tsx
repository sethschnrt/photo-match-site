'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function ForVenues() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="venues" className="py-24 md:py-32 overflow-hidden border-t border-white/[0.06]" ref={ref}>
      <div className="container-site">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <p className="text-accent font-medium text-sm tracking-widest uppercase mb-4">For Venues</p>
            <h2 className="mb-6">Turn your bar into the place to be.</h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Photo Match booths bring energy to your venue. More engagement, longer stays, and a reason for guests to come back next weekend.
            </p>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                stat: '+40 min',
                title: 'Longer average visits',
                desc: 'Guests stay longer when they have a reason to stick around and a match to meet.',
              },
              {
                stat: '$0',
                title: 'Setup cost',
                desc: 'We handle installation, maintenance, and support. You just collect your revenue share.',
              },
              {
                stat: '3x',
                title: 'More social shares',
                desc: 'Every photo reel has your venue branding. Guests share them on social without thinking about it.',
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 16 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                className="flex gap-6"
              >
                <span className="text-3xl font-bold text-accent shrink-0 w-20 text-right">{item.stat}</span>
                <div className="border-l border-white/[0.08] pl-6">
                  <h3 className="text-base font-semibold mb-1">{item.title}</h3>
                  <p className="text-zinc-400 text-[15px] leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="pt-4"
            >
              <a
                href="#"
                className="inline-block px-7 py-3.5 rounded-lg bg-white text-black font-semibold hover:bg-zinc-200 transition-colors"
              >
                Book a Demo
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
