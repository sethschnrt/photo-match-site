'use client'

interface HeartProps {
  size: number
  top?: string
  bottom?: string
  left?: string
  right?: string
  rotate?: number
  opacity?: number
}

function Heart({ size, top, bottom, left, right, rotate = 0, opacity = 0.06 }: HeartProps) {
  return (
    <div
      className="bg-heart"
      style={{
        top, bottom, left, right,
        transform: `rotate(${rotate}deg)`,
        width: size,
        height: size,
      }}
    >
      <svg viewBox="0 0 24 24" width={size} height={size}>
        <path
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          style={{ stroke: `rgba(255, 0, 110, ${opacity})` }}
        />
      </svg>
    </div>
  )
}

interface BgHeartsProps {
  layout: 'how-it-works' | 'experience' | 'for-venues' | 'locations'
}

export default function BgHearts({ layout }: BgHeartsProps) {
  const configs: Record<string, HeartProps[]> = {
    'how-it-works': [
      { size: 140, top: '6%', right: '4%', rotate: 15, opacity: 0.08 },
      { size: 80, bottom: '10%', left: '2%', rotate: -20, opacity: 0.07 },
      { size: 48, top: '45%', right: '18%', rotate: 35, opacity: 0.06 },
    ],
    'experience': [
      { size: 100, top: '4%', left: '6%', rotate: -12, opacity: 0.07 },
      { size: 60, bottom: '15%', right: '5%', rotate: 25, opacity: 0.08 },
      { size: 36, top: '60%', left: '25%', rotate: -8, opacity: 0.06 },
    ],
    'for-venues': [
      { size: 120, top: '8%', right: '3%', rotate: 18, opacity: 0.08 },
      { size: 72, bottom: '12%', left: '5%', rotate: -30, opacity: 0.07 },
      { size: 40, top: '50%', left: '18%', rotate: 10, opacity: 0.06 },
    ],
    'locations': [
      { size: 90, top: '5%', left: '3%', rotate: -15, opacity: 0.07 },
      { size: 56, bottom: '8%', right: '6%', rotate: 22, opacity: 0.08 },
    ],
  }

  const hearts = configs[layout] || []

  return (
    <>
      {hearts.map((h, i) => (
        <Heart key={i} {...h} />
      ))}
    </>
  )
}
