'use client'

import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef, useEffect, useState, type ReactNode } from 'react'

/* ───────────────────── UTILITIES ───────────────────── */

function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 50 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }} className={className}>
      {children}
    </motion.div>
  )
}

function Counter({ end, suffix = '', label }: { end: number; suffix?: string; label: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  useEffect(() => {
    if (!inView) return
    let start = 0
    const dur = 2000
    const step = (t: number) => {
      if (!start) start = t
      const p = Math.min((t - start) / dur, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setCount(Math.floor(eased * end))
      if (p < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [inView, end])
  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-neon-pink font-mono tracking-tighter leading-none">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-zinc-500 mt-3 text-xs uppercase tracking-[0.25em] font-semibold">{label}</div>
    </div>
  )
}

/* ───────────────────── PHOTO STRIP ───────────────────── */

function PhotoStrip({ className = '' }: { className?: string }) {
  return (
    <div className={`bg-white rounded-sm p-2 shadow-2xl ${className}`} style={{ width: 140 }}>
      {[1, 2, 3, 4].map(i => (
        <div key={i} className="bg-zinc-800 rounded-xs mb-1.5 last:mb-0" style={{ height: 90, position: 'relative', overflow: 'hidden' }}>
          <div className="absolute inset-0" style={{
            background: i === 1
              ? 'linear-gradient(135deg, #1a0a1a 0%, #2d0a2d 50%, #0a0a1a 100%)'
              : i === 2
              ? 'linear-gradient(135deg, #0a1a1a 0%, #0a2d1a 50%, #0a0a2d 100%)'
              : i === 3
              ? 'linear-gradient(135deg, #2d1a0a 0%, #2d0a1a 50%, #1a0a2d 100%)'
              : 'linear-gradient(135deg, #0a0a2d 0%, #1a0a2d 50%, #2d0a2d 100%)'
          }}>
            {/* Silhouette shapes */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-3">
              <div className="w-6 h-10 rounded-t-full" style={{ background: 'rgba(255,255,255,0.06)' }} />
              <div className="w-6 h-12 rounded-t-full" style={{ background: 'rgba(255,255,255,0.08)' }} />
            </div>
            {/* Neon light streak */}
            <div className="absolute top-2 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,0,110,0.4), transparent)' }} />
          </div>
        </div>
      ))}
      <div className="text-center mt-2">
        <div className="text-[7px] font-bold tracking-wider text-zinc-400 uppercase">Photo ♥ Match</div>
        <div className="text-[6px] text-zinc-500">6th St, Austin</div>
      </div>
    </div>
  )
}

/* ───────────────────── MAIN PAGE ───────────────────── */

export default function Home() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; dur: number; delay: number }>>([])
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.9])

  useEffect(() => {
    setParticles(Array.from({ length: 40 }, (_, i) => ({
      id: i, x: Math.random() * 100, y: Math.random() * 100,
      size: Math.random() * 4 + 1, dur: Math.random() * 10 + 6, delay: Math.random() * 5,
    })))
  }, [])

  return (
    <main className="bg-black text-white overflow-x-hidden">
      {/* ═══ FLOATING NAV ═══ */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-lg font-bold">
            <span className="text-neon-pink">Photo</span>
            <span className="text-neon-pink text-sm">♥</span>
            <span className="text-neon-pink">Match</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
            <a href="#how" className="hover:text-white transition-colors duration-300">How It Works</a>
            <a href="#app" className="hover:text-white transition-colors duration-300">The App</a>
            <a href="#venues" className="hover:text-white transition-colors duration-300">For Venues</a>
            <a href="#" className="neon-button px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider">
              Find a Booth
            </a>
          </div>
        </div>
      </nav>

      {/* ═══ HERO ═══ */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Layered backgrounds */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(255,0,110,0.12) 0%, transparent 60%)'
        }} />
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(circle at 20% 80%, rgba(255,0,110,0.06) 0%, transparent 40%), radial-gradient(circle at 80% 20%, rgba(255,45,123,0.06) 0%, transparent 40%)'
        }} />
        {/* Grain overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`
        }} />
        {/* Horizontal neon line */}
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px opacity-20" style={{
          background: 'linear-gradient(90deg, transparent 5%, rgba(255,0,110,0.8) 30%, rgba(255,0,110,1) 50%, rgba(255,0,110,0.8) 70%, transparent 95%)'
        }} />

        {/* Particles */}
        {particles.map(p => (
          <motion.div key={p.id} className="absolute rounded-full"
            style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size,
              background: p.id % 3 === 0 ? 'rgba(255,0,110,0.4)' : 'rgba(255,255,255,0.15)' }}
            animate={{ y: [-30, 30, -30], x: [-10, 10, -10], opacity: [0.1, 0.5, 0.1] }}
            transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}

        <motion.div style={{ opacity: heroOpacity, scale: heroScale }} className="relative z-10 text-center px-6">
          {/* Logo */}
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}>
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9]">
              <span className="neon-glow pulse-glow italic">Photo</span>
              <span className="inline-block mx-3 md:mx-5 text-neon-pink neon-glow pulse-glow" style={{ fontSize: '0.5em', verticalAlign: 'middle' }}>♥</span>
              <span className="neon-glow pulse-glow italic">Match</span>
            </h1>
          </motion.div>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 1 }}
            className="text-xl md:text-2xl lg:text-3xl font-semibold mt-8 tracking-tight text-white/90">
            Get Matched. Get Memories.
          </motion.p>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 1 }}
            className="text-zinc-500 text-base md:text-lg mt-4 max-w-lg mx-auto leading-relaxed">
            The photo booth that matches you with someone at the bar. $5. Real photos. Real people.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <a href="#how" className="neon-button px-8 py-4 rounded-full text-base font-semibold tracking-wide">
              See How It Works
            </a>
            <a href="#venues" className="px-8 py-4 rounded-full text-base font-semibold text-zinc-400 border border-zinc-800 hover:border-zinc-600 hover:text-white transition-all duration-300">
              Partner With Us
            </a>
          </motion.div>
        </motion.div>

        {/* Floating photo strips */}
        <motion.div className="absolute -right-4 top-1/4 hidden lg:block"
          initial={{ opacity: 0, x: 100 }} animate={{ opacity: 0.6, x: 0 }}
          transition={{ delay: 1.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}>
          <motion.div animate={{ y: [-15, 15, -15], rotate: [8, 12, 8] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}>
            <PhotoStrip />
          </motion.div>
        </motion.div>

        <motion.div className="absolute -left-2 bottom-1/4 hidden lg:block"
          initial={{ opacity: 0, x: -100 }} animate={{ opacity: 0.4, x: 0 }}
          transition={{ delay: 1.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}>
          <motion.div animate={{ y: [10, -10, 10], rotate: [-12, -8, -12] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}>
            <PhotoStrip />
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.4 }} transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2">
            <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-600">Scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-zinc-600 to-transparent" />
          </motion.div>
        </motion.div>
      </section>

      {/* ═══ HOW IT WORKS ═══ */}
      <section id="how" className="relative py-32 md:py-40 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <p className="text-neon-pink font-mono text-xs uppercase tracking-[0.3em] mb-5">How It Works</p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.95] max-w-3xl">
              Walk up. Snap. Match.{' '}
              <span className="text-zinc-600">It&apos;s that simple.</span>
            </h2>
          </Reveal>

          <div className="mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">
            {[
              { num: '01', title: 'Find a booth', desc: 'Photo Match booths live inside the best bars and clubs on 6th Street. Walk up to any one of them. No app needed to start.', visual: '📸' },
              { num: '02', title: 'Get your photos', desc: 'Step in, strike a pose, get 4 shots taken. You walk out with a printed photo reel you keep forever.', visual: '🎞️' },
              { num: '03', title: '3 quick questions', desc: '"What are you looking for tonight?" "Shots or cocktails?" "Dance floor or rooftop?" Takes 15 seconds.', visual: '💬' },
              { num: '04', title: 'Meet your match', desc: 'Our algorithm pairs you with someone at the same venue. You both get notified. The rest is up to you.', visual: '🔥' },
            ].map((step, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="group">
                  <div className="flex items-start gap-6">
                    <div className="shrink-0">
                      <span className="text-neon-pink/30 font-mono text-6xl md:text-7xl font-bold leading-none group-hover:text-neon-pink/60 transition-colors duration-500">
                        {step.num}
                      </span>
                    </div>
                    <div className="pt-3">
                      <h3 className="text-xl md:text-2xl font-bold mb-3">{step.title}</h3>
                      <p className="text-zinc-500 leading-relaxed text-base">{step.desc}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ DIVIDER STATS ═══ */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-zinc-950/50" />
        <div className="absolute left-0 right-0 top-0 h-px" style={{
          background: 'linear-gradient(90deg, transparent, rgba(255,0,110,0.3), transparent)'
        }} />
        <div className="absolute left-0 right-0 bottom-0 h-px" style={{
          background: 'linear-gradient(90deg, transparent, rgba(255,0,110,0.3), transparent)'
        }} />
        <Reveal>
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
            <Counter end={2847} label="Matches made" />
            <Counter end={47} label="Venues" />
            <Counter end={89} suffix="%" label="Match rate" />
            <Counter end={12} suffix="K" label="Photo reels printed" />
          </div>
        </Reveal>
      </section>

      {/* ═══ THE APP ═══ */}
      <section id="app" className="py-32 md:py-40 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <Reveal>
              <div>
                <p className="text-neon-pink font-mono text-xs uppercase tracking-[0.3em] mb-5">The App</p>
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-[0.95] mb-6">
                  See where the action is.
                </h2>
                <p className="text-zinc-500 text-lg leading-relaxed mb-10 max-w-md">
                  The Photo Match heat map shows you which booths are popping off right now. Head to where the energy is.
                </p>
                <div className="space-y-5">
                  {[
                    { icon: '🗺️', label: 'Live heat map', desc: 'Real-time booth activity across 6th Street' },
                    { icon: '⚡', label: 'Instant notifications', desc: 'Know the moment you get a match' },
                    { icon: '📊', label: 'Your match history', desc: 'See all your past matches and photo reels' },
                  ].map((f, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-base shrink-0">{f.icon}</div>
                      <div>
                        <div className="font-semibold text-sm text-white">{f.label}</div>
                        <div className="text-zinc-600 text-sm">{f.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Phone mockup */}
            <Reveal delay={0.2}>
              <div className="flex justify-center lg:justify-end">
                <div className="relative" style={{ perspective: '1200px' }}>
                  <motion.div
                    animate={{ rotateY: [-8, -4, -8], rotateX: [2, 4, 2] }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <div className="w-[260px] md:w-[280px] rounded-[2.5rem] border-[3px] border-zinc-700 overflow-hidden shadow-2xl"
                      style={{ boxShadow: '0 40px 80px rgba(0,0,0,0.8), 0 0 40px rgba(255,0,110,0.15)' }}>
                      {/* Phone notch area */}
                      <div className="bg-zinc-950 px-6 pt-3 pb-2">
                        <div className="flex justify-between items-center text-[9px] text-zinc-600">
                          <span className="font-semibold">9:41 PM</span>
                          <div className="w-16 h-4 bg-zinc-900 rounded-full mx-auto" />
                          <span>⚡ 87%</span>
                        </div>
                      </div>
                      {/* App content */}
                      <div className="bg-zinc-950 px-4 pb-6">
                        <div className="text-center py-3">
                          <div className="text-neon-pink font-bold text-sm">Photo ♥ Match</div>
                          <div className="text-zinc-600 text-[9px] mt-0.5">6th Street, Austin TX</div>
                        </div>
                        {/* Map */}
                        <div className="bg-zinc-900 rounded-2xl overflow-hidden relative" style={{ height: 280 }}>
                          {/* Grid */}
                          {[...Array(6)].map((_, i) => (
                            <div key={`h${i}`} className="absolute w-full h-px bg-zinc-800/30" style={{ top: `${(i + 1) * 14.3}%` }} />
                          ))}
                          {[...Array(6)].map((_, i) => (
                            <div key={`v${i}`} className="absolute h-full w-px bg-zinc-800/30" style={{ left: `${(i + 1) * 14.3}%` }} />
                          ))}
                          {/* Street */}
                          <div className="absolute top-[48%] left-0 right-0">
                            <div className="h-[3px] bg-zinc-800 mx-3 rounded-full" />
                            <div className="text-[7px] text-zinc-700 text-center mt-1 tracking-widest font-mono">E 6TH STREET</div>
                          </div>
                          {/* Heat spots */}
                          <motion.div className="absolute rounded-full blur-lg" style={{ width: 60, height: 60, top: '32%', left: '18%', background: 'radial-gradient(circle, rgba(255,0,110,0.5) 0%, transparent 70%)' }}
                            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.9, 0.5] }}
                            transition={{ duration: 2.5, repeat: Infinity }} />
                          <motion.div className="absolute rounded-full blur-lg" style={{ width: 80, height: 80, top: '35%', left: '48%', background: 'radial-gradient(circle, rgba(255,0,110,0.6) 0%, transparent 70%)' }}
                            animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
                            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} />
                          <motion.div className="absolute rounded-full blur-lg" style={{ width: 50, height: 50, top: '28%', left: '72%', background: 'radial-gradient(circle, rgba(255,0,110,0.35) 0%, transparent 70%)' }}
                            animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.7, 0.3] }}
                            transition={{ duration: 3, repeat: Infinity, delay: 1 }} />
                          {/* Pins */}
                          {[
                            { top: '36%', left: '28%' },
                            { top: '42%', left: '58%' },
                            { top: '32%', left: '78%' },
                          ].map((pos, i) => (
                            <div key={i} className="absolute" style={pos}>
                              <div className="w-2.5 h-2.5 rounded-full bg-neon-pink border-[1.5px] border-white" style={{ boxShadow: '0 0 8px rgba(255,0,110,0.8)' }} />
                            </div>
                          ))}
                        </div>
                        {/* Stats row */}
                        <div className="flex justify-between mt-4 px-1">
                          {[
                            { n: '127', l: 'Active' },
                            { n: '34', l: 'Matches' },
                            { n: '8', l: 'Booths' },
                          ].map((s, i) => (
                            <div key={i} className="text-center">
                              <div className="text-neon-pink font-bold text-lg font-mono">{s.n}</div>
                              <div className="text-zinc-600 text-[9px] uppercase tracking-wider">{s.l}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                      {/* Home indicator */}
                      <div className="bg-zinc-950 pb-2 pt-1 flex justify-center">
                        <div className="w-24 h-1 bg-zinc-700 rounded-full" />
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ FOR VENUES ═══ */}
      <section id="venues" className="py-32 md:py-40 px-6 relative">
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(180deg, transparent 0%, rgba(255,0,110,0.03) 50%, transparent 100%)'
        }} />
        <div className="max-w-6xl mx-auto relative">
          <Reveal>
            <div className="max-w-3xl">
              <p className="text-neon-pink font-mono text-xs uppercase tracking-[0.3em] mb-5">For Venues</p>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.95]">
                Your bar.{' '}
                <span className="text-zinc-600">Their favorite night out.</span>
              </h2>
              <p className="text-zinc-500 text-lg leading-relaxed mt-6 max-w-xl">
                Photo Match brings people in, keeps them longer, and gives them a reason to come back. We handle everything. You get the foot traffic.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 md:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { metric: '+35%', title: 'More foot traffic', desc: 'People come specifically to use Photo Match. It becomes part of the night out.' },
              { metric: '+22min', title: 'Longer stays', desc: 'Customers wait for their match results. More time in your venue means more drinks sold.' },
              { metric: '$0', title: 'Setup cost', desc: 'We install and maintain the booth. Zero cost, zero effort on your end.' },
              { metric: '100%', title: 'We handle it all', desc: 'Installation, maintenance, customer support, payment processing. You just collect rent.' },
              { metric: '24/7', title: 'Real-time analytics', desc: 'See how many people are using your booth, peak times, and match stats in your dashboard.' },
              { metric: '💰', title: 'Revenue share', desc: 'Earn a cut of every $5 session. The busier your venue, the more you make.' },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="group bg-zinc-950 border border-zinc-900 rounded-2xl p-6 md:p-8 hover:border-neon-pink/20 transition-all duration-500 h-full">
                  <div className="text-3xl md:text-4xl font-bold text-neon-pink/80 font-mono mb-4 group-hover:text-neon-pink transition-colors duration-500">
                    {item.metric}
                  </div>
                  <h3 className="text-base font-bold mb-2">{item.title}</h3>
                  <p className="text-zinc-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <div className="mt-16 text-center md:text-left">
              <a href="#" className="neon-button inline-block px-8 py-4 rounded-full text-base font-semibold">
                Get in Touch
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-center mb-20">
              Don&apos;t take our word for it
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { quote: "We met at Maggie Mae's through Photo Match. Three months later, still going strong. Best $5 I ever spent.", name: 'Sarah & Jake', tag: 'Matched on Dirty 6th' },
              { quote: "Thursday nights went from dead to packed. People walk in asking if we have the booth. It's become our thing.", name: 'Marcus R.', tag: 'Bar owner, 6th Street' },
              { quote: "Way less awkward than walking up to someone random. Plus the photo reel is a sick keepsake even if you don't match.", name: 'Daniela T.', tag: 'UT Austin' },
            ].map((t, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="bg-zinc-950 border border-zinc-900 rounded-2xl p-8 h-full flex flex-col justify-between">
                  <p className="text-zinc-300 leading-relaxed text-base">&ldquo;{t.quote}&rdquo;</p>
                  <div className="mt-6 pt-6 border-t border-zinc-900">
                    <div className="font-semibold text-sm">{t.name}</div>
                    <div className="text-zinc-600 text-xs mt-0.5">{t.tag}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section className="py-32 md:py-40 px-6 relative text-center">
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 60%, rgba(255,0,110,0.08) 0%, transparent 60%)'
        }} />
        <Reveal>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.95]">
              Your next story starts at the booth.
            </h2>
            <p className="text-zinc-500 text-lg mt-6 mb-10">
              Coming to 6th Street, Austin TX.
            </p>
            <a href="#" className="neon-button inline-block px-10 py-5 rounded-full text-lg font-semibold">
              Download the App
            </a>
          </div>
        </Reveal>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="border-t border-zinc-900 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-1.5 text-xl font-bold mb-3">
                <span className="text-neon-pink italic">Photo</span>
                <span className="text-neon-pink text-sm">♥</span>
                <span className="text-neon-pink italic">Match</span>
              </div>
              <p className="text-zinc-600 text-sm max-w-xs leading-relaxed">
                Austin&apos;s premier nightlife photo booth experience. Get matched with someone special at the hottest venues on 6th Street.
              </p>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 mb-4">For Users</h4>
              <div className="space-y-3 text-sm text-zinc-600">
                <a href="#how" className="block hover:text-white transition-colors duration-300">How It Works</a>
                <a href="#app" className="block hover:text-white transition-colors duration-300">The App</a>
                <a href="#" className="block hover:text-white transition-colors duration-300">Find a Booth</a>
                <a href="#" className="block hover:text-white transition-colors duration-300">Support</a>
              </div>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 mb-4">For Venues</h4>
              <div className="space-y-3 text-sm text-zinc-600">
                <a href="#venues" className="block hover:text-white transition-colors duration-300">Partner With Us</a>
                <a href="#" className="block hover:text-white transition-colors duration-300">Pricing</a>
                <a href="#" className="block hover:text-white transition-colors duration-300">Analytics</a>
                <a href="#" className="block hover:text-white transition-colors duration-300">Contact Sales</a>
              </div>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-800 text-xs">&copy; 2026 Photo Match. All rights reserved.</p>
            <div className="flex gap-6">
              {['Instagram', 'TikTok', 'Twitter'].map(s => (
                <a key={s} href="#" className="text-zinc-700 text-xs hover:text-neon-pink transition-colors duration-300">{s}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
