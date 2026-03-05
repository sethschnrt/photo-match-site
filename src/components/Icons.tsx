// Custom SVG icon pack for Photo Match
// Solid filled icons with personality

export function IconBooth({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      {/* Retro camera with flash */}
      <path d="M4 6a2 2 0 012-2h2l1-2h6l1 2h2a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" />
      <circle cx="12" cy="11" r="3.5" fill="black" opacity="0.3" />
      <circle cx="12" cy="11" r="2" fill="black" opacity="0.15" />
      <path d="M17 7h1" stroke="black" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
      {/* Flash lines */}
      <path d="M19 2l1.5 2M21 1l.5 2.5M23 2.5L21 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
    </svg>
  )
}

export function IconFlash({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      {/* Bold lightning bolt */}
      <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
    </svg>
  )
}

export function IconHeart({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  )
}

export function IconSpark({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      {/* Two people connecting — silhouettes with spark between */}
      <circle cx="7" cy="6" r="3" />
      <path d="M3 18v-1a4 4 0 014-4h0a4 4 0 014 4v1" />
      <circle cx="17" cy="6" r="3" />
      <path d="M13 18v-1a4 4 0 014-4h0a4 4 0 014 4v1" />
      {/* Spark between */}
      <path d="M12 9l-.8 2h1.6L12 13" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function IconMap({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
      <circle cx="12" cy="9" r="2.5" fill="black" opacity="0.2" />
    </svg>
  )
}

export function IconFire({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 23c-4.97 0-8-3.03-8-7 0-2.5 1.5-5.5 3-7.5.75-1 1.5-2 2-3.5.5 1 1 2 1 3.5 1-1.5 2.5-4 3-5.5.5 2 1.5 4 2 5.5.5-1.5 1.5-3 2-4 1 2 3 5 3 7.5 0 3.97-3.03 7-8 7z" />
      <path d="M12 23c-2 0-3.5-1.5-3.5-3.5 0-1.5 1-3 2-4 .5.5 1 1.5 1 2.5.5-1 1.5-2.5 2-3.5.5 1.5 2 3 2 5 0 2-1.5 3.5-3.5 3.5z" fill="black" opacity="0.15" />
    </svg>
  )
}

export function IconPhoto({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      {/* Photo strip */}
      <rect x="6" y="1" width="12" height="22" rx="1.5" />
      <rect x="8" y="3" width="8" height="5" rx="1" fill="black" opacity="0.2" />
      <rect x="8" y="10" width="8" height="5" rx="1" fill="black" opacity="0.2" />
      <rect x="8" y="17" width="8" height="3" rx="1" fill="black" opacity="0.1" />
    </svg>
  )
}

export function IconTarget({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="10" opacity="0.2" />
      <circle cx="12" cy="12" r="6" opacity="0.3" />
      <circle cx="12" cy="12" r="2.5" />
    </svg>
  )
}

export function IconArrowRight({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" />
    </svg>
  )
}

export function IconSwipe({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      {/* Phone with X — anti-swipe */}
      <rect x="5" y="2" width="14" height="20" rx="3" />
      <rect x="7" y="5" width="10" height="12" rx="1" fill="black" opacity="0.2" />
      {/* X mark */}
      <path d="M9 8l6 6M15 8l-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function IconDollar({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v12M15 9.5c0-1.38-1.34-2.5-3-2.5s-3 1.12-3 2.5 1.34 2.5 3 2.5 3 1.12 3 2.5-1.34 2.5-3 2.5" fill="none" stroke="black" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
    </svg>
  )
}
