'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

function Counter({ end, suffix = '', label }: { end: number; suffix?: string; label: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const duration = 2000
    const step = (timestamp: number) => {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [isInView, end])

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-neon-pink font-mono tracking-tight">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-zinc-400 mt-2 text-sm uppercase tracking-widest">{label}</div>
    </div>
  )
}

function Section({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.section>
  )
}

function NeonLogo({ size = 'large' }: { size?: 'large' | 'small' }) {
  const isLarge = size === 'large'
  return (
    <div className={`flex items-center justify-center gap-3 ${isLarge ? 'text-5xl md:text-7xl lg:text-8xl' : 'text-2xl'}`}>
      <span className="font-bold neon-glow pulse-glow" style={{ fontStyle: 'italic' }}>Photo</span>
      <span className="text-neon-pink neon-glow pulse-glow" style={{ fontSize: isLarge ? '0.6em' : '0.8em' }}>♥</span>
      <span className="font-bold neon-glow pulse-glow" style={{ fontStyle: 'italic' }}>Match</span>
    </div>
  )
}

function HowItWorksStep({ number, emoji, title, desc }: { number: number; emoji: string; title: string; desc: string }) {
  return (
    <div className="relative group">
      <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-neon-pink/20 border border-neon-pink/50 flex items-center justify-center text-xs font-mono text-neon-pink">
        {number}
      </div>
      <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 md:p-8 hover:border-neon-pink/50 transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(255,0,110,0.15)] h-full">
        <div className="text-4xl mb-4">{emoji}</div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-zinc-400 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  )
}

export default function Home() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; duration: number; delay: number }>>([])

  useEffect(() => {
    setParticles(
      Array.from({ length: 30 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 8 + 4,
        delay: Math.random() * 5,
      }))
    )
  }, [])

  return (
    <main className="bg-black text-white min-h-screen">
      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 gradient-noise" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,0,110,0.08)_0%,transparent_70%)]" />

        {/* Floating particles */}
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-neon-pink/30"
            style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
            animate={{ y: [-20, 20, -20], opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}

        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <NeonLogo />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold mt-8 mb-4 tracking-tight"
          >
            Get Matched. Get Memories.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-10"
          >
            Pay $5. Snap photos. Answer a few questions. Get matched with someone at the venue. Keep the photo reel.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="#how-it-works" className="neon-button px-8 py-4 rounded-full text-lg font-semibold tracking-wide">
              Find a Booth
            </a>
            <a href="#venues" className="px-8 py-4 rounded-full text-lg font-semibold border border-zinc-700 text-zinc-300 hover:border-zinc-500 hover:text-white transition-all">
              Host a Booth
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-zinc-700 rounded-full flex justify-center pt-2"
          >
            <div className="w-1.5 h-1.5 bg-neon-pink rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════ HOW IT WORKS ═══════════════════ */}
      <Section className="section-padding px-6" delay={0}>
        <div id="how-it-works" className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-neon-pink font-mono text-sm uppercase tracking-[0.3em] mb-4">How It Works</p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Four steps to your next connection</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <HowItWorksStep number={1} emoji="📸" title="Walk Up" desc="Find a Photo Match booth at any partner bar or club on 6th Street. No app download needed to start." />
            <HowItWorksStep number={2} emoji="🎞️" title="Strike a Pose" desc="Step in, get your photos taken. You walk away with a printed photo reel regardless." />
            <HowItWorksStep number={3} emoji="💬" title="Quick Questions" desc="Answer 3 rapid-fire questions about your vibe tonight. Takes 15 seconds." />
            <HowItWorksStep number={4} emoji="🔥" title="Get Your Match" desc="Our algorithm pairs you with someone at the same venue. Both of you get notified." />
          </div>
        </div>
      </Section>

      {/* ═══════════════════ THE APP ═══════════════════ */}
      <Section className="section-padding px-6" delay={0.1}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Text */}
            <div>
              <p className="text-neon-pink font-mono text-sm uppercase tracking-[0.3em] mb-4">The App</p>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                See where the action is.{' '}
                <span className="text-neon-pink">In real time.</span>
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                The Photo Match app shows you a live heat map of every booth on 6th Street. See which venues are popping off right now, how many people are getting matched, and head to where the energy is.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center gap-3 text-zinc-300">
                  <div className="w-10 h-10 rounded-full bg-neon-pink/10 border border-neon-pink/30 flex items-center justify-center text-sm">🗺️</div>
                  <span>Live heat map</span>
                </div>
                <div className="flex items-center gap-3 text-zinc-300">
                  <div className="w-10 h-10 rounded-full bg-neon-pink/10 border border-neon-pink/30 flex items-center justify-center text-sm">⚡</div>
                  <span>Real-time activity</span>
                </div>
                <div className="flex items-center gap-3 text-zinc-300">
                  <div className="w-10 h-10 rounded-full bg-neon-pink/10 border border-neon-pink/30 flex items-center justify-center text-sm">📍</div>
                  <span>Venue finder</span>
                </div>
              </div>
            </div>

            {/* Right: Phone Mockup */}
            <div className="flex justify-center phone-mockup">
              <div className="phone-screen w-[280px] h-[560px] md:w-[300px] md:h-[600px] p-4 relative overflow-hidden">
                {/* Status bar */}
                <div className="flex justify-between items-center text-[10px] text-zinc-500 mb-4 px-2">
                  <span>9:41</span>
                  <span>⚡ 87%</span>
                </div>
                {/* App header */}
                <div className="text-center mb-4">
                  <div className="text-neon-pink font-bold text-lg">Photo ♥ Match</div>
                  <div className="text-zinc-500 text-xs">6th Street, Austin</div>
                </div>
                {/* Heat map placeholder */}
                <div className="bg-zinc-900 rounded-xl h-[280px] md:h-[320px] relative overflow-hidden">
                  {/* Map grid lines */}
                  <div className="absolute inset-0 opacity-10">
                    {[...Array(8)].map((_, i) => (
                      <div key={`h${i}`} className="absolute w-full h-px bg-zinc-500" style={{ top: `${(i + 1) * 12.5}%` }} />
                    ))}
                    {[...Array(8)].map((_, i) => (
                      <div key={`v${i}`} className="absolute h-full w-px bg-zinc-500" style={{ left: `${(i + 1) * 12.5}%` }} />
                    ))}
                  </div>
                  {/* Street label */}
                  <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2">
                    <div className="h-[2px] bg-zinc-700 mx-4" />
                    <div className="text-[8px] text-zinc-600 text-center mt-1">E 6TH STREET</div>
                  </div>
                  {/* Heat spots */}
                  <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }} transition={{ duration: 2, repeat: Infinity }}
                    className="absolute w-12 h-12 rounded-full bg-neon-pink/40 blur-md" style={{ top: '35%', left: '25%' }} />
                  <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.8, 0.4] }} transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                    className="absolute w-16 h-16 rounded-full bg-neon-pink/50 blur-md" style={{ top: '40%', left: '55%' }} />
                  <motion.div animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                    className="absolute w-10 h-10 rounded-full bg-neon-pink/30 blur-md" style={{ top: '30%', left: '75%' }} />
                  {/* Booth pins */}
                  <div className="absolute w-3 h-3 rounded-full bg-neon-pink border-2 border-white shadow-[0_0_8px_rgba(255,0,110,0.8)]" style={{ top: '38%', left: '30%' }} />
                  <div className="absolute w-3 h-3 rounded-full bg-neon-pink border-2 border-white shadow-[0_0_8px_rgba(255,0,110,0.8)]" style={{ top: '43%', left: '62%' }} />
                  <div className="absolute w-3 h-3 rounded-full bg-neon-pink border-2 border-white shadow-[0_0_8px_rgba(255,0,110,0.8)]" style={{ top: '33%', left: '78%' }} />
                </div>
                {/* Bottom stats */}
                <div className="flex justify-between mt-4 px-2">
                  <div className="text-center">
                    <div className="text-neon-pink font-bold text-lg font-mono">127</div>
                    <div className="text-zinc-500 text-[10px]">Active now</div>
                  </div>
                  <div className="text-center">
                    <div className="text-neon-pink font-bold text-lg font-mono">34</div>
                    <div className="text-zinc-500 text-[10px]">Matches tonight</div>
                  </div>
                  <div className="text-center">
                    <div className="text-neon-pink font-bold text-lg font-mono">8</div>
                    <div className="text-zinc-500 text-[10px]">Booths live</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ═══════════════════ STATS ═══════════════════ */}
      <Section className="section-padding-sm px-6 border-y border-zinc-900" delay={0}>
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-8">
          <Counter end={2847} label="Matches Made" />
          <Counter end={47} label="Partner Venues" />
          <Counter end={89} suffix="%" label="Match Rate" />
        </div>
      </Section>

      {/* ═══════════════════ FOR VENUES ═══════════════════ */}
      <Section className="section-padding px-6" delay={0}>
        <div id="venues" className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-zinc-950 via-zinc-950 to-zinc-900 rounded-3xl border border-zinc-800 p-8 md:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-neon-pink font-mono text-sm uppercase tracking-[0.3em] mb-4">For Venues</p>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                  Turn your bar into <span className="text-neon-pink">the place to be</span>
                </h2>
                <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                  Photo Match brings people in and keeps them longer. Customers stay for their match. They come back because they had fun. Zero effort on your end.
                </p>
                <a href="#contact" className="neon-button inline-block px-8 py-4 rounded-full text-lg font-semibold">
                  Partner With Us
                </a>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { stat: '+35%', label: 'Foot traffic increase' },
                  { stat: '+22min', label: 'Avg. longer stays' },
                  { stat: '0', label: 'Setup effort' },
                  { stat: '$$', label: 'Revenue share included' },
                ].map((item, i) => (
                  <div key={i} className="bg-black/50 border border-zinc-800 rounded-xl p-6 text-center hover:border-neon-pink/30 transition-all duration-300">
                    <div className="text-2xl md:text-3xl font-bold text-neon-pink font-mono">{item.stat}</div>
                    <div className="text-zinc-500 text-xs mt-2 uppercase tracking-wider">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ═══════════════════ TESTIMONIALS ═══════════════════ */}
      <Section className="section-padding px-6" delay={0}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-neon-pink font-mono text-sm uppercase tracking-[0.3em] mb-4">What People Are Saying</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { quote: "We met at Maggie Mae's through Photo Match. Been dating for 3 months now. Best $5 I ever spent.", name: 'Sarah & Jake', detail: 'Matched on 6th Street' },
              { quote: "Our Thursday nights went from slow to packed after we got a Photo Match booth. People literally come in asking for it.", name: 'Marcus Rivera', detail: 'Bar owner, Dirty Sixth' },
              { quote: "Way less awkward than walking up to someone. The photo reel is a sick keepsake even if you don\'t match.", name: 'Daniela Torres', detail: 'UT Austin senior' },
            ].map((t, i) => (
              <div key={i} className="bg-zinc-950 border border-zinc-800 rounded-2xl p-8 hover:border-neon-pink/30 transition-all duration-500">
                <p className="text-zinc-300 leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <div className="font-semibold text-white">{t.name}</div>
                  <div className="text-zinc-500 text-sm">{t.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ═══════════════════ CTA ═══════════════════ */}
      <Section className="section-padding px-6" delay={0}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Ready to find your match?
          </h2>
          <p className="text-zinc-400 text-lg mb-10">
            Coming to 6th Street, Austin TX. Download the app to find a booth near you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="neon-button px-8 py-4 rounded-full text-lg font-semibold">
              Download the App
            </a>
            <a href="#venues" className="px-8 py-4 rounded-full text-lg font-semibold border border-zinc-700 text-zinc-300 hover:border-zinc-500 hover:text-white transition-all">
              Venue Partnerships
            </a>
          </div>
        </div>
      </Section>

      {/* ═══════════════════ FOOTER ═══════════════════ */}
      <footer className="border-t border-zinc-900 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <NeonLogo size="small" />
              <p className="text-zinc-600 text-sm mt-2">Coming to 6th Street, Austin TX</p>
            </div>
            <div className="flex gap-8 text-sm text-zinc-500">
              <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
              <a href="#venues" className="hover:text-white transition-colors">For Venues</a>
              <a href="#" className="hover:text-white transition-colors">The App</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-700 text-xs">&copy; 2026 Photo Match. All rights reserved.</p>
            <div className="flex gap-6 text-zinc-600 text-sm">
              <a href="#" className="hover:text-neon-pink transition-colors">Instagram</a>
              <a href="#" className="hover:text-neon-pink transition-colors">TikTok</a>
              <a href="#" className="hover:text-neon-pink transition-colors">Twitter</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
