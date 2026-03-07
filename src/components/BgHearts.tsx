'use client'

interface BgHeartsProps {
  layout: 'how-it-works' | 'experience' | 'for-venues' | 'locations' | 'cta'
}

/* Large single heart SVG — used as a section-wide background graphic.
   Positioned to fill a significant portion of the section,
   anchored to one side, behind all content. */
function LargeHeart({ 
  position = 'right',
  opacity = 0.04,
  scale = 1,
  offsetY = '0%',
}: { 
  position?: 'left' | 'right' | 'center'
  opacity?: number 
  scale?: number
  offsetY?: string
}) {
  const posStyle: React.CSSProperties = {
    position: 'absolute',
    top: offsetY,
    pointerEvents: 'none',
    zIndex: 0,
    width: `${60 * scale}%`,
    maxWidth: `${800 * scale}px`,
    aspectRatio: '1',
    ...(position === 'right' && { right: '-10%' }),
    ...(position === 'left' && { left: '-10%' }),
    ...(position === 'center' && { left: '50%', transform: 'translateX(-50%)' }),
  }

  return (
    <div style={posStyle}>
      <svg viewBox="0 0 24 24" width="100%" height="100%" style={{ fill: 'none', stroke: `rgba(255, 0, 110, ${opacity})`, strokeWidth: 0.3 }}>
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    </div>
  )
}

export default function BgHearts({ layout }: BgHeartsProps) {
  switch (layout) {
    case 'how-it-works':
      return <LargeHeart position="right" opacity={0.045} scale={1} offsetY="-10%" />
    case 'experience':
      return <LargeHeart position="left" opacity={0.04} scale={0.85} offsetY="5%" />
    case 'for-venues':
      return <LargeHeart position="right" opacity={0.045} scale={0.9} offsetY="0%" />
    case 'locations':
      return <LargeHeart position="left" opacity={0.04} scale={0.8} offsetY="-5%" />
    case 'cta':
      return <LargeHeart position="center" opacity={0.06} scale={1.2} offsetY="-20%" />
    default:
      return null
  }
}
