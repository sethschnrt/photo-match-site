'use client'

interface BgHeartsProps {
  layout: 'how-it-works' | 'experience' | 'for-venues' | 'locations' | 'cta'
}

function LargeHeart({ 
  position = 'right',
  opacity = 0.06,
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
    width: `${80 * scale}%`,
    maxWidth: `${1200 * scale}px`,
    aspectRatio: '1',
    ...(position === 'right' && { right: '-15%' }),
    ...(position === 'left' && { left: '-15%' }),
    ...(position === 'center' && { left: '50%', transform: 'translateX(-50%)' }),
  }

  return (
    <div style={posStyle}>
      {/* Radial glow behind the heart */}
      <div style={{
        position: 'absolute',
        inset: '-20%',
        background: `radial-gradient(circle, rgba(255, 0, 110, ${opacity * 0.6}) 0%, rgba(255, 0, 110, ${opacity * 0.2}) 40%, transparent 70%)`,
        borderRadius: '50%',
        pointerEvents: 'none',
      }} />
      {/* Heart outline — thick stroke */}
      <svg viewBox="0 0 24 24" width="100%" height="100%" style={{
        fill: 'none',
        stroke: `rgba(255, 0, 110, ${opacity})`,
        strokeWidth: 0.6,
        position: 'relative',
        zIndex: 1,
        filter: `drop-shadow(0 0 40px rgba(255, 0, 110, ${opacity * 0.5}))`,
      }}>
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    </div>
  )
}

export default function BgHearts({ layout }: BgHeartsProps) {
  switch (layout) {
    case 'how-it-works':
      return <LargeHeart position="right" opacity={0.07} scale={1.1} offsetY="-15%" />
    case 'experience':
      return <LargeHeart position="left" opacity={0.06} scale={1} offsetY="0%" />
    case 'for-venues':
      return <LargeHeart position="right" opacity={0.07} scale={1.05} offsetY="-5%" />
    case 'locations':
      return <LargeHeart position="left" opacity={0.06} scale={0.95} offsetY="-10%" />
    case 'cta':
      return <LargeHeart position="center" opacity={0.08} scale={1.3} offsetY="-25%" />
    default:
      return null
  }
}
