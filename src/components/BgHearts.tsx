'use client'

interface BgHeartsProps {
  layout: 'how-it-works' | 'experience' | 'for-venues' | 'locations' | 'cta'
}

function RadialHearts({ 
  position = 'right',
  opacity = 0.065,
  scale = 1,
  offsetY = '0%',
  rings = 3,
}: { 
  position?: 'left' | 'right' | 'center'
  opacity?: number 
  scale?: number
  offsetY?: string
  rings?: number
}) {
  const posStyle: React.CSSProperties = {
    position: 'absolute',
    top: offsetY,
    pointerEvents: 'none',
    zIndex: 0,
    width: `${65 * scale}%`,
    maxWidth: `${900 * scale}px`,
    aspectRatio: '1',
    ...(position === 'right' && { right: '-12%' }),
    ...(position === 'left' && { left: '-12%' }),
    ...(position === 'center' && { left: '50%', transform: 'translateX(-50%)' }),
  }

  const heartPath = "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"

  return (
    <div style={posStyle}>
      <div style={{
        position: 'absolute',
        inset: '-10%',
        background: `radial-gradient(circle, rgba(255, 0, 110, ${opacity * 0.35}) 0%, transparent 60%)`,
        borderRadius: '50%',
        pointerEvents: 'none',
      }} />
      {Array.from({ length: rings }).map((_, i) => {
        const ringScale = 0.4 + i * 0.3
        const ringOpacity = opacity * (1 - i * 0.25)
        const size = `${ringScale * 100}%`
        const offset = `${(1 - ringScale) * 50}%`
        return (
          <svg
            key={i}
            viewBox="0 0 24 24"
            style={{
              position: 'absolute',
              width: size,
              height: size,
              top: offset,
              left: offset,
              fill: 'none',
              stroke: `rgba(255, 0, 110, ${ringOpacity})`,
              strokeWidth: 0.5 - i * 0.1,
            }}
          >
            <path d={heartPath} />
          </svg>
        )
      })}
    </div>
  )
}

export default function BgHearts({ layout }: BgHeartsProps) {
  switch (layout) {
    case 'how-it-works':
      return <RadialHearts position="right" opacity={0.07} scale={0.95} offsetY="-15%" rings={3} />
    case 'experience':
      return <RadialHearts position="left" opacity={0.065} scale={0.85} offsetY="5%" rings={3} />
    case 'for-venues':
      return <RadialHearts position="right" opacity={0.07} scale={0.9} offsetY="40%" rings={3} />
    case 'locations':
      return null
    case 'cta':
      return <RadialHearts position="center" opacity={0.075} scale={1} offsetY="-20%" rings={4} />
    default:
      return null
  }
}
