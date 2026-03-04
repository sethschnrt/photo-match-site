'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

// Components
const Logo = () => (
  <svg 
    viewBox="0 0 400 80" 
    className="w-full h-full"
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <text
      x="50"
      y="50"
      fontSize="28"
      fontWeight="700"
      className="neon-glow pulse-glow"
      fill="currentColor"
    >
      Photo
    </text>
    <g className="neon-glow pulse-glow">
      <path
        d="M200 35 L210 25 L220 35 L210 45 Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
      />
    </g>
    <text
      x="250"
      y="50"
      fontSize="28"
      fontWeight="700"
      className="neon-glow pulse-glow"
      fill="currentColor"
    >
      Match
    </text>
  </svg>
)

const Counter = ({ end, duration = 2000 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    let startTime: number
    let animationId: number
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      
      setCount(Math.floor(progress * end))
      
      if (progress < 1) {
        animationId = requestAnimationFrame(animate)
      }
    }
    
    animationId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationId)
  }, [end, duration])
  
  return <span className="counter">{count.toLocaleString()}</span>
}

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 gradient-noise bg-noise opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/50 to-black/80"></div>
        
        <div className="relative z-10 text-center max-w-4xl px-4">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="w-96 h-20 mx-auto mb-6">
              <Logo />
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            Get Matched.<br />
            <span className="text-neon-pink-bright">Get Memories.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Austin's hottest nightlife experience. Pay $5, snap photos, answer questions, and get matched with someone special at the venue.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <button className="neon-button px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform">
              Find a Booth
            </button>
            <button className="bg-white/10 border-2 border-white/30 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-colors">
              Host a Booth
            </button>
          </motion.div>
        </div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-neon-pink rounded-full opacity-50"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 4,
              }}
            />
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding relative">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            How It <span className="neon-glow">Works</span>
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Walk Up",
                description: "Find a Photo Match booth at your favorite Austin venue",
                icon: "👋",
              },
              {
                step: "02", 
                title: "Snap Photos",
                description: "Pay $5 and take fun photos for your printed reel",
                icon: "📸",
              },
              {
                step: "03",
                title: "Answer Questions", 
                description: "Quick personality questions help us find your perfect match",
                icon: "💭",
              },
              {
                step: "04",
                title: "Get Matched",
                description: "Connect with someone special at the same venue tonight",
                icon: "💕",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-neon-pink/20 to-neon-pink-bright/20 rounded-full flex items-center justify-center text-4xl mb-4 border border-neon-pink/30 group-hover:neon-box transition-all duration-300">
                    {item.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-neon-pink rounded-full flex items-center justify-center text-sm font-bold text-black">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-neon-pink-bright transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The App */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-pink/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                See Where The <span className="neon-glow">Action</span> Is.
                <br />
                <span className="text-neon-pink-bright">In Real Time.</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Our mobile app shows live heat maps of booth activity across 6th Street. 
                See which venues are buzzing and where the matches are happening right now.
              </p>
              <ul className="space-y-4 text-lg text-gray-300">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-neon-pink rounded-full neon-glow"></div>
                  Live venue activity tracking
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-neon-pink rounded-full neon-glow"></div>
                  Real-time match notifications
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-neon-pink rounded-full neon-glow"></div>
                  6th Street venue directory
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="phone-mockup"
            >
              <div className="phone-screen w-80 h-160 mx-auto p-4 relative">
                <div className="w-full h-full bg-black rounded-xl p-6 relative overflow-hidden">
                  <div className="text-center mb-6">
                    <h3 className="text-white text-lg font-semibold">6th Street Heat Map</h3>
                    <p className="text-gray-400 text-sm">Live Activity</p>
                  </div>
                  <div className="relative bg-gray-900 rounded-lg h-80 overflow-hidden">
                    {/* Map background */}
                    <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
                    {/* Heat spots */}
                    {[
                      { top: '20%', left: '30%', intensity: 'high' },
                      { top: '40%', left: '60%', intensity: 'medium' },
                      { top: '60%', left: '25%', intensity: 'high' },
                      { top: '70%', left: '70%', intensity: 'low' },
                      { top: '30%', left: '80%', intensity: 'medium' },
                    ].map((spot, i) => (
                      <div
                        key={i}
                        className={`absolute w-8 h-8 rounded-full ${
                          spot.intensity === 'high' 
                            ? 'bg-neon-pink neon-glow' 
                            : spot.intensity === 'medium'
                            ? 'bg-neon-pink-bright/70'
                            : 'bg-neon-pink-dim/50'
                        } animate-pulse`}
                        style={{ top: spot.top, left: spot.left }}
                      ></div>
                    ))}
                    {/* Street labels */}
                    <div className="absolute bottom-4 left-4 text-white text-xs">
                      E 6th Street
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* For Venues */}
      <section className="section-padding bg-gradient-to-br from-gray-900/50 to-black">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              For <span className="text-neon-pink-bright">Venues</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your venue into Austin's next hotspot. Photo Match drives traffic, 
              keeps customers longer, and creates buzz that gets shared across social media.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "More Foot Traffic",
                description: "Photo Match locations see 35% increase in new customers seeking the experience",
                icon: "🚶‍♀️",
                stat: "+35%",
              },
              {
                title: "Longer Stays",
                description: "Customers stay 50% longer while waiting for matches and taking photos",
                icon: "⏰",
                stat: "+50%",
              },
              {
                title: "Social Media Buzz",
                description: "Every photo reel gets shared, putting your venue in front of thousands",
                icon: "📱",
                stat: "2.8K",
              },
              {
                title: "Revenue Share",
                description: "Earn 40% of every $5 transaction plus increased bar sales",
                icon: "💰",
                stat: "40%",
              },
              {
                title: "Zero Effort",
                description: "We handle everything - setup, maintenance, customer support",
                icon: "✨",
                stat: "0",
              },
              {
                title: "Analytics Dashboard",
                description: "Track booth performance, peak hours, and customer demographics",
                icon: "📊",
                stat: "24/7",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-neon-pink/50 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-3xl">{item.icon}</div>
                  <div className="text-2xl font-bold text-neon-pink-bright group-hover:neon-glow transition-all">
                    {item.stat}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button className="neon-button px-10 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform">
              Partner With Us
            </button>
          </motion.div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Austin's <span className="neon-glow">#1</span> Nightlife Experience
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { number: 2847, label: "Matches Made", suffix: "" },
              { number: 47, label: "Partner Venues", suffix: "" },
              { number: 89, label: "Success Rate", suffix: "%" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="text-5xl md:text-6xl font-bold text-neon-pink-bright mb-2 group-hover:neon-glow transition-all">
                  <Counter end={stat.number} />{stat.suffix}
                </div>
                <div className="text-xl text-gray-300 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Sarah & Jake",
                text: "Met at Chupacabra on 6th Street through Photo Match. Dating for 3 months now!",
                venue: "Chupacabra",
              },
              {
                name: "Alex T.",
                text: "Bar owner here. Photo Match brings in 20+ new customers every Friday night.",
                venue: "Venue Owner",
              },
              {
                name: "Maria & Chris", 
                text: "The photos are so fun and the matching actually works. Best $5 I've ever spent!",
                venue: "Lucky Lounge",
              },
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-neon-pink/30 transition-all duration-300"
              >
                <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                <div className="flex justify-between items-center">
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-neon-pink">{testimonial.venue}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/80 border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="w-48 h-12 mb-4">
                <Logo />
              </div>
              <p className="text-gray-400 mb-4">
                Austin's premier nightlife photo booth experience.
              </p>
              <p className="text-neon-pink font-semibold">
                Coming to 6th Street, Austin TX
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">For Users</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-neon-pink transition-colors">Find a Booth</a></li>
                <li><a href="#" className="hover:text-neon-pink transition-colors">Download App</a></li>
                <li><a href="#" className="hover:text-neon-pink transition-colors">How It Works</a></li>
                <li><a href="#" className="hover:text-neon-pink transition-colors">Support</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">For Venues</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-neon-pink transition-colors">Partner With Us</a></li>
                <li><a href="#" className="hover:text-neon-pink transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-neon-pink transition-colors">Analytics</a></li>
                <li><a href="#" className="hover:text-neon-pink transition-colors">Contact Sales</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Photo Match. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-neon-pink transition-colors">
                Instagram
              </a>
              <a href="#" className="text-gray-400 hover:text-neon-pink transition-colors">
                TikTok
              </a>
              <a href="#" className="text-gray-400 hover:text-neon-pink transition-colors">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}