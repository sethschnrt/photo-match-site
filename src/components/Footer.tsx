'use client'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="border-t border-zinc-900 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo + tagline */}
          <div className="md:col-span-2">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/assets/logos/photo-match-logo.svg`}
              alt="Photo Match"
              width={56}
              height={56}
              className="w-14 h-14 mb-4"
            />
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
              The photo booth that connects you with someone at this venue. 
              Live on 6th Street, Austin TX.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">
              Navigate
            </h4>
            <ul className="space-y-3">
              {['How It Works', 'Experience', 'Venues', 'Locations'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/\s/g, '-')}`}
                    className="text-zinc-500 text-sm hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">
              Connect
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@photomatch.live"
                  className="text-zinc-500 text-sm hover:text-accent transition-colors"
                >
                  hello@photomatch.live
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-500 text-sm hover:text-white transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-500 text-sm hover:text-white transition-colors">
                  TikTok
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-zinc-600 text-xs">
            &copy; {new Date().getFullYear()} Photo Match. All rights reserved.
          </p>
          <p className="text-zinc-700 text-xs flex items-center gap-1">
            Made with
            <svg className="w-3 h-3 text-accent" viewBox="0 0 24 24" fill="currentColor" stroke="none">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            in Austin, TX
          </p>
        </div>
      </div>
    </footer>
  )
}
