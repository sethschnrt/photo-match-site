import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import 'maplibre-gl/dist/maplibre-gl.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-main',
})

export const metadata: Metadata = {
  title: 'Photo Match - Find Your Match Tonight',
  description: 'The photo booth that matches you with someone at this venue. $5 flat. Live on 6th Street, Austin TX.',
  keywords: 'photo booth, matching, nightlife, Austin, 6th Street, bars, nightclub',
  openGraph: {
    title: 'Photo Match - Find Your Match Tonight',
    description: 'The photo booth that matches you with someone at this venue. Right now.',
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
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
