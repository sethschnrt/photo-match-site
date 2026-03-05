'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="overflow-hidden" ref={ref}>
      {/* Full-width image break */}
      <div className="relative h-[50vh] md:h-[60vh]">
        <Image
          src={`${basePath}/assets/images/venue-interior.jpg`}
          alt="Inside an Austin bar"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="container-site">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight max-w-xl leading-[1.05]">
                Not another<br />dating app.
              </h2>
              <p className="text-white/60 text-lg mt-4 max-w-md">
                Photo Match happens in real life. Same venue, same night, face to face. The way it should be.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Feature grid below the image */}
      <div className="py-20 md:py-28">
        <div className="container-site">
          <div className="grid md:grid-cols-3 gap-12 md:gap-8">
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
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
              >
                <h3 className="text-lg font-semibold mb-3">{f.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
