import type { Metadata } from 'next'
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['400', '500', '600', '700']
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  weight: ['400', '500', '600']
})

export const metadata: Metadata = {
  title: 'Photo ♥ Match | Get Matched. Get Memories.',
  description: 'Austin\'s premier nightlife photo booth experience. Pay $5, snap photos, get matched with someone special at the hottest venues on 6th Street.',
  keywords: 'nightlife, photo booth, dating, Austin, 6th Street, nightclub, bars, matching',
  openGraph: {
    title: 'Photo ♥ Match | Get Matched. Get Memories.',
    description: 'Austin\'s premier nightlife photo booth experience.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased bg-black overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
}