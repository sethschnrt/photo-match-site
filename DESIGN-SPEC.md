# Photo Match Website — Design Specification V3

## Research Summary

### 2026 Web Design Trends Applied
1. **Kinetic/Animated Typography** — Hero text that moves, splits, reveals on scroll
2. **Scroll Storytelling** — Cinematic narrative that unfolds as user scrolls (not just sections appearing)
3. **Bento Grid Layouts** — Modular asymmetric card layouts for features/how-it-works
4. **Dark Mode as Standard** — Nightlife brand = dark by default, no toggle needed
5. **Glassmorphism** — Frosted glass cards over dark backgrounds for depth
6. **Micro-interactions** — Hover states, cursor effects, button ripples, card tilts
7. **Variable/Custom Fonts** — Not Inter/Roboto. Bold display + refined body.
8. **Vibrant Color with Restraint** — Hot pink (#FF006E) as accent, not everywhere

### What Premium Sites Do Right (Bumble, Hinge, Nike, Apple)
- **ONE hero idea, executed perfectly** — not 5 things competing for attention
- **Whitespace is the luxury** — generous padding, breathing room
- **Real content hierarchy** — one headline dominates, everything else supports
- **Motion with purpose** — animations guide the eye, not distract
- **Social proof early** — testimonials, numbers, logos within first 2 scrolls
- **Phone mockups that feel real** — 3D perspective, screen content, not flat screenshots
- **CTAs that build urgency** — "Find Your Match Tonight" not "Learn More"

### What V1/V2 Did Wrong
- Too simple, too generic, spacing issues (Seth rated 1/10)
- Generic startup template feel
- No distinctive personality
- Weak typography hierarchy
- No scroll narrative or progressive reveal
- Static, lifeless feel

## Design Direction: "Electric Intimacy"

### Concept
Dark, cinematic, slightly dangerous. Like walking into the best nightclub you've ever been to — dark walls, neon accents, bass you can feel. The website should feel like an EXPERIENCE, not a brochure.

### Tone
- **Premium nightlife** — not cheap, not corporate
- **Playful but sophisticated** — fun without being childish
- **Confident** — knows it's cool, doesn't try too hard
- **Austin energy** — live music capital, 6th street vibes

### Color System
```
--bg-primary: #050505        /* Near-black, not pure #000 */
--bg-card: #0a0a0a           /* Slightly lighter for cards */
--bg-glass: rgba(255,255,255,0.03)  /* Frosted glass panels */
--accent: #FF006E            /* Hot pink — THE brand color */
--accent-bright: #FF3D8F     /* Lighter pink for hovers */
--accent-glow: rgba(255,0,110,0.15) /* Ambient glow */
--text-primary: #FFFFFF      /* White headlines */
--text-secondary: #9CA3AF    /* Gray body text */
--text-muted: #4B5563        /* Subtle labels */
--gradient-start: #FF006E
--gradient-end: #FF6B35      /* Pink to warm orange for energy */
```

### Typography
- **Display**: "Clash Display" (Indian Type Foundry) — bold geometric, modern, distinctive
  - Fallback: "Sora" or "Space Grotesk" — NO Inter/Roboto
- **Body**: "Satoshi" — clean geometric sans, excellent readability
  - Fallback: "DM Sans"
- **Accent/Label**: "JetBrains Mono" or "Space Mono" — for stats, labels, tech feel

### Layout Principles
- Full-bleed sections with 80-120px vertical padding
- Max content width 1200px, centered
- Asymmetric splits (60/40, 70/30) not 50/50
- Overlapping elements for depth (text over images, cards breaking grid)
- Generous spacing between sections (120-200px)

## Page Structure

### 1. HERO (viewport height)
**The "holy shit" moment**
- Full dark background with subtle animated grain/noise texture
- Massive headline: "Find Your Match. Tonight." with staggered letter-by-letter animation
- Subtext fades in after headline: "The photo booth that connects you with someone at this venue. Right now."
- Floating photo strip elements (tilted, at different depths) with parallax
- Pulsing hot pink glow behind the logo
- Two CTAs: "Download the App" (primary pink) + "Host a Booth" (outline)
- Subtle scroll indicator arrow with bounce animation

### 2. HOW IT WORKS (scroll narrative)
**Cinematic 4-step reveal**
- Steps revealed as user scrolls, not all visible at once
- Each step has: big number, icon/illustration, headline, one-line description
- Step 1: "Step up to the booth" — booth illustration
- Step 2: "Strike a pose" — camera flash animation
- Step 3: "Get matched" — heart pulse animation
- Step 4: "Meet your match" — two photo strips connecting
- Progress bar or connected timeline showing which step you're on
- Phone mockup showing the app at each step

### 3. THE EXPERIENCE (bento grid)
**What makes Photo Match different**
- Bento-style grid with mixed card sizes
- Cards with glassmorphism effect
- "Not another dating app" headline
- Cards: Physical photo reel you keep / Matched at THIS venue / $5 flat — no subscriptions / See the heat map / Live matching, not endless swiping
- One large card with phone mockup showing heat map
- Subtle card hover effects (tilt, glow, scale)

### 4. SOCIAL PROOF
**Trust & FOMO**
- Animated counter: "X matches made tonight" (fake but compelling number)
- Testimonial cards with photo strips as backgrounds
- "As seen at" venue logos (even if placeholder)
- Quote: "Best $5 I ever spent" style testimonials

### 5. FOR VENUES (B2B pitch)
**Clean, professional, still on-brand**
- Split layout: benefits list + booth mockup
- Key stats: "40% longer average stay" / "2x social media mentions" / "New revenue stream"
- "Bring Photo Match to your venue" CTA
- More subdued, less playful — this section sells to business owners

### 6. APP PREVIEW
**Heat map teaser**
- Large phone mockup with interactive-looking heat map
- "See where the action is" headline
- App store badges (coming soon)
- Subtle map animation (dots pulsing)

### 7. LOCATIONS
**Where to find us**
- Dark map with pink pins
- "Live on 6th Street, Austin TX"
- Venue cards with name, address, "heating up" indicator
- "Coming to more cities soon" 

### 8. FOOTER
- Logo, nav links, social icons
- "Made with ♥ in Austin, TX"
- Newsletter signup
- Legal links

## Technical Stack
- **Next.js 14+** with App Router
- **Tailwind CSS v4** with custom theme
- **Framer Motion** for scroll animations, page transitions, hover effects
- **GSAP + ScrollTrigger** for cinematic scroll narrative (How It Works section)
- **Custom fonts** via next/font or @font-face
- Static export for GitHub Pages deployment

## Animation Strategy
- **Page load**: Logo pulse → headline stagger → subtext fade → floating elements drift in
- **Scroll**: IntersectionObserver triggers for section reveals, parallax for depth
- **Hover**: Cards tilt (3D transform), buttons glow, links color shift
- **Continuous**: Grain overlay, floating particles (sparse, not snow), subtle glow pulses
- **Performance**: Use `will-change`, `transform` only, avoid layout thrashing. Keep animation on GPU.

## Key Differentiators from V1/V2
1. **Scroll narrative** — content unfolds cinematically, not just sections stacked
2. **Real depth** — overlapping elements, parallax, glassmorphism, not flat
3. **Typography as design** — massive display font, letter spacing, weight contrast
4. **Purposeful motion** — every animation guides attention or tells a story
5. **Atmospheric details** — grain texture, ambient glow, subtle particles
6. **Confidence** — bold choices, not safe/generic
