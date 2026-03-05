'use client'
import Image from 'next/image'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

export default function Footer() {
  return (
    <footer>
      {/* Final CTA - full width accent bg */}
      <div className="bg-accent">
        <div className="container-site py-16 md:py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            Ready to meet someone new?
          </h2>
          <p className="text-white/70 mb-8 max-w-md mx-auto">
            Find a Photo Match booth tonight. $5, a printed photo reel, and a real connection.
          </p>
          <a
            href="#app"
            className="inline-block px-8 py-4 rounded-lg bg-white text-black font-semibold hover:bg-zinc-100 transition-colors"
          >
            Download the App
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#070707]">
        <div className="container-site py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Image
            src={`${basePath}/assets/logos/photo-match-logo.svg`}
            alt="Photo Match"
            width={100}
            height={28}
            className="h-5 w-auto opacity-30"
          />
          <div className="flex items-center gap-6 text-sm text-zinc-600">
            <a href="#" className="hover:text-zinc-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-zinc-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-zinc-400 transition-colors">Contact</a>
          </div>
          <p className="text-zinc-700 text-xs">2026 Photo Match</p>
        </div>
      </div>
    </footer>
  )
}
