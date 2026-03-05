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
          <p className="text-zinc-700 text-xs">
            Made with <span className="text-accent">♥</span> in Austin, TX
          </p>
        </div>
      </div>
    </footer>
  )
}
