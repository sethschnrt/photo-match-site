'use client'
import { motion, useInView, animate } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

function AnimatedStat({ value, suffix, isInView: visible }: { value: string; suffix?: string; isInView: boolean }) {
  const numericPart = parseInt(value.replace(/[^0-9]/g, ''))
  const prefix = value.replace(/[0-9]/g, '')
  const [count, setCount] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    if (!visible) return
    const controls = animate(0, numericPart, {
      duration: 1.2,
      ease: [0.4, 0, 0.2, 1],
      onUpdate: (v) => setCount(Math.round(v)),
    })
    return () => controls.stop()
  }, [visible, numericPart])

  return <span ref={ref}>{prefix}{count}{suffix}</span>
}

const benefits = [
  {
    stat: '40',
    prefix: '+',
    suffix: ' min',
    title: 'Longer average visits',
    desc: 'Guests stay longer when they have a reason to stick around and a match to meet.',
  },
  {
    stat: '0',
    prefix: '$',
    suffix: '',
    title: 'Setup cost',
    desc: 'We handle installation, maintenance, and support. You just collect your revenue share.',
  },
  {
    stat: '3',
    prefix: '',
    suffix: 'x',
    title: 'More social shares',
    desc: 'Every photo reel has your venue branding. Guests share them without even thinking about it.',
  },
]

export default function ForVenues() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="venues" className="py-24 md:py-32 overflow-hidden" ref={ref}>
      <div className="container-site">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Image + heading */}
          <div>
            <motion.p
              initial={{ opacity: 0, x: -16 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="text-accent font-medium text-sm tracking-widest uppercase mb-4"
            >
              For Venues
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, x: -16 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
              className="mb-6"
            >
              Turn your bar into the place to be.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-zinc-400 text-lg leading-relaxed mb-10"
            >
              Photo Match booths bring energy to your venue. More engagement, longer stays, and a reason for guests to come back next weekend.
            </motion.p>

            {/* Venue photo with overlay */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative aspect-[4/3] rounded-xl overflow-hidden"
            >
              <Image
                src={`${basePath}/assets/images/venue-interior.jpg`}
                alt="Photo Match booth in a bar"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-white/80 text-xs font-medium">Live at 45 venues</span>
              </div>
            </motion.div>
          </div>

          {/* Right: Stats */}
          <div className="space-y-8 lg:pt-12">
            {benefits.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 24 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.12, ease: [0.4, 0, 0.2, 1] }}
                className="group"
              >
                <div className="flex gap-6">
                  <div className="shrink-0 w-20 text-right">
                    <span className="text-3xl font-bold text-accent tracking-tight">
                      {item.prefix}
                      <AnimatedStat value={item.stat} suffix={item.suffix} isInView={isInView} />
                    </span>
                  </div>
                  <div className="border-l border-white/[0.08] pl-6 group-hover:border-accent/30 transition-colors duration-300">
                    <h3 className="text-base font-semibold mb-1 group-hover:text-accent transition-colors duration-300">{item.title}</h3>
                    <p className="text-zinc-400 text-[15px] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="pt-6 pl-26"
            >
              <a
                href="#"
                className="inline-block px-7 py-3.5 rounded-lg bg-accent text-white font-semibold hover:bg-accent-bright hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/20 transition-all duration-200"
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
