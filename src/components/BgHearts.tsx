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
      { size: 240, top: '-5%', right: '2%', rotate: 15, opacity: 0.05 },
      { size: 160, bottom: '-3%', left: '-2%', rotate: -20, opacity: 0.04 },
      { size: 100, top: '40%', right: '12%', rotate: 35, opacity: 0.035 },
    ],
    'experience': [
      { size: 200, top: '-8%', left: '0%', rotate: -12, opacity: 0.045 },
      { size: 140, bottom: '-5%', right: '0%', rotate: 25, opacity: 0.05 },
    ],
    'for-venues': [
      { size: 220, top: '5%', right: '-3%', rotate: 18, opacity: 0.05 },
      { size: 150, bottom: '5%', left: '-2%', rotate: -30, opacity: 0.04 },
    ],
    'locations': [
      { size: 200, top: '-5%', right: '-3%', rotate: -15, opacity: 0.045 },
      { size: 160, bottom: '-5%', left: '-2%', rotate: 22, opacity: 0.04 },
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
