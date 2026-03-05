'use client'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center">
      {/* Brick wall background */}
      <div className="absolute inset-0">
        {/* Dark brick texture via CSS pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: '#1a1410',
            backgroundImage: `
              linear-gradient(to right, rgba(0,0,0,0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0,0,0,0.2) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0,0,0,0.15) 1px, transparent 1px)
            `,
            backgroundSize: '68px 34px, 68px 34px, 34px 34px',
            backgroundPosition: '0 0, 34px 17px, 0 0',
          }}
        />
        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.7)_100%)]" />
        {/* Light spill from the neon sign */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-[#FF006E]/[0.06] rounded-full blur-[100px] pointer-events-none" />
      </div>

      <div className="container-site relative z-10 pt-24 pb-20">
        <div className="flex flex-col items-center text-center">
          {/* LED Neon Sign */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="mb-12"
          >
            <div className="relative inline-block">
              {/* Neon glow behind text */}
              <div className="absolute inset-0 blur-[30px] opacity-50">
                <p className="text-[clamp(2.5rem,7vw,5rem)] font-extrabold leading-[1.1] tracking-tight text-[#FF006E]">
                  Find Your<br />Match Tonight
                </p>
              </div>
              {/* Outer glow */}
              <div className="absolute inset-0 blur-[60px] opacity-25">
                <p className="text-[clamp(2.5rem,7vw,5rem)] font-extrabold leading-[1.1] tracking-tight text-[#FF006E]">
                  Find Your<br />Match Tonight
                </p>
              </div>
              {/* Main neon text */}
              <h1
                className="relative text-[clamp(2.5rem,7vw,5rem)] font-extrabold leading-[1.1] tracking-tight"
                style={{
                  color: '#fff',
                  textShadow: `
                    0 0 7px #FF006E,
                    0 0 10px #FF006E,
                    0 0 21px #FF006E,
                    0 0 42px #FF006E80,
                    0 0 82px #FF006E40
                  `,
                }}
              >
                Find Your<br />Match Tonight
              </h1>
              {/* Small flickering detail */}
              <motion.div
                animate={{ opacity: [1, 0.85, 1, 1, 0.9, 1, 1, 1, 0.88, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 pointer-events-none"
                style={{ mixBlendMode: 'multiply' }}
              />
            </div>
          </motion.div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="text-zinc-400 text-lg mb-8 max-w-md leading-relaxed"
          >
            Step into the booth. Get your photo reel. We match you with someone here, right now. $5 flat.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 1.0 }}
            className="text-accent/60 text-sm font-medium tracking-widest uppercase mb-8"
          >
            Live on 6th Street, Austin TX
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1, ease: [0.4, 0, 0.2, 1] }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="#app"
              className="px-7 py-3.5 rounded-lg bg-accent text-white font-semibold hover:bg-accent-bright hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/20 transition-all duration-200"
            >
              Download the App
            </a>
            <a
              href="#how"
              className="px-7 py-3.5 rounded-lg bg-white/10 text-white font-medium hover:bg-white/15 hover:-translate-y-0.5 transition-all duration-200 backdrop-blur-sm"
            >
              How It Works
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
