'use client'

interface BgHeartsProps {
  layout: 'how-it-works' | 'experience' | 'for-venues' | 'locations' | 'cta'
}

const heartPath = "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"

function RadialHearts({
  id,
  opacity = 0.065,
  rings = 3,
}: {
  id: string
  opacity?: number
  rings?: number
}) {
  return (
    <div className={`bg-hearts bg-hearts--${id}`}>
      <div className="bg-hearts_glow" style={{
        background: `radial-gradient(circle, rgba(255, 0, 110, ${opacity * 0.35}) 0%, transparent 60%)`,
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
              strokeWidth: 0.7 - i * 0.15,
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
      return <RadialHearts id="hiw" opacity={0.09} rings={3} />
    case 'experience':
      return <RadialHearts id="exp" opacity={0.08} rings={3} />
    case 'for-venues':
      return <RadialHearts id="fv" opacity={0.09} rings={3} />
    case 'locations':
      return null
    case 'cta':
      return <RadialHearts id="cta" opacity={0.1} rings={4} />
    default:
      return null
  }
}
