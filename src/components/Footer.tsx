'use client'
import Image from 'next/image'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06]">
      {/* Final CTA */}
      <div className="container-site py-24 text-center">
        <h2 className="mb-4">Ready to meet someone new?</h2>
        <p className="text-zinc-400 text-lg mb-8 max-w-lg mx-auto">
          Find a Photo Match booth tonight. $5 flat fee, a printed photo reel, and a real connection.
        </p>
        <a
          href="#app"
          className="inline-block px-8 py-4 rounded-lg bg-accent text-white font-semibold hover:bg-accent-bright transition-colors"
        >
          Download the App
        </a>
      </div>

      {/* Footer links */}
      <div className="border-t border-white/[0.06]">
        <div className="container-site py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Image
            src={`${basePath}/assets/logos/photo-match-logo.svg`}
            alt="Photo Match"
            width={100}
            height={28}
            className="h-5 w-auto opacity-40"
          />
          <div className="flex items-center gap-6 text-sm text-zinc-600">
            <a href="#" className="hover:text-zinc-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-zinc-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-zinc-400 transition-colors">Contact</a>
          </div>
          <p className="text-zinc-700 text-xs">
            2026 Photo Match. Austin, TX.
          </p>
        </div>
      </div>
    </footer>
  )
}
