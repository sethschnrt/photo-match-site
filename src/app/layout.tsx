import type { Metadata } from 'next'
import { Inter, Righteous } from 'next/font/google'
import './globals.css'

const righteous = Righteous({
  subsets: ['latin'],
  variable: '--font-display',
  weight: '400',
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: 'Photo Match — Find Your Match Tonight',
  description: 'The photo booth that connects you with someone at this venue. Right now. $5 flat. Live on 6th Street, Austin TX.',
  keywords: 'photo booth, matching, nightlife, Austin, 6th Street, dating, bars, nightclub',
  openGraph: {
    title: 'Photo Match — Find Your Match Tonight',
    description: 'The photo booth that connects you with someone at this venue. Right now.',
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
      <body className={`${righteous.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
