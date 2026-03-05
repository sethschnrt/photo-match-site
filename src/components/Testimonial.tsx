'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Testimonial() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-24 md:py-32 border-t border-white/[0.06]" ref={ref}>
      <div className="container-site max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-zinc-600 text-sm tracking-widest uppercase mb-8">What People Say</p>
          <blockquote className="text-2xl md:text-3xl font-semibold text-white leading-snug tracking-tight">
            &ldquo;We walked into the bar with zero expectations. Thirty minutes later my friend was talking to the funniest guy she had ever met. Photo Match made the whole night.&rdquo;
          </blockquote>
          <p className="text-zinc-500 mt-6">
            <span className="text-white font-medium">Sarah M.</span> &middot; Austin, TX
          </p>
        </motion.div>
      </div>
    </section>
  )
}
