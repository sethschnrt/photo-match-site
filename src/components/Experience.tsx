'use client'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  
  // Parallax on the image
  const imgRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ['start end', 'end start'],
  })
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])

  return (
    <section ref={ref} className="overflow-hidden">
      {/* Full-width image break with parallax */}
      <div ref={imgRef} className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: imgY }}>
          <Image
            src={`${basePath}/assets/images/venue-interior.jpg`}
            alt="Inside an Austin bar"
            fill
            className="object-cover scale-110"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/40 to-black/20" />
        <div className="absolute inset-0 flex items-end pb-16 md:pb-20">
          <div className="container-site">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight max-w-xl leading-[1.05]"
            >
              Not another<br />dating app.
            </motion.h2>
          </div>
        </div>
      </div>

      {/* Feature grid below the image */}
      <div className="py-20 md:py-28">
        <div className="container-site">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-zinc-400 text-lg max-w-2xl mb-16 leading-relaxed"
          >
            Photo Match happens in real life. Same venue, same night, face to face. The way it should be.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-px bg-white/[0.06] rounded-xl overflow-hidden">
            {[
              {
                title: 'Real photos, not profiles',
                desc: 'No filters, no catfishing. Your photo reel is printed right there in front of you. What you see is what you get.',
              },
              {
                title: 'Same venue, same night',
                desc: 'Your match is not across town or three days away. They are here. Right now. Walk over and say hi.',
              },
              {
                title: 'Keep your reel',
                desc: 'A printed photo strip from every night out. Stick it on your fridge, tape it to your mirror, share it with friends.',
              },
            ].map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease: [0.4, 0, 0.2, 1] }}
                className="bg-[#0a0a0a] p-8 md:p-10 group hover:bg-[#111] transition-colors duration-300"
              >
                <span className="text-accent/40 text-sm font-mono mb-4 block">0{i + 1}</span>
                <h3 className="text-lg font-semibold mb-3 group-hover:text-accent transition-colors duration-300">{f.title}</h3>
                <p className="text-zinc-400 leading-relaxed text-base">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
