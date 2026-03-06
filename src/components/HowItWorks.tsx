'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Camera, Lightning, HeartStraight, Handshake } from '@phosphor-icons/react/dist/ssr'
import type { Icon } from '@phosphor-icons/react'

interface Step {
  num: string
  title: string
  desc: string
  Icon: Icon
}

const steps: Step[] = [
  { num: '01', title: 'Walk up to the booth', desc: 'Find a Photo Match booth at your favorite bar or club. Impossible to miss.', Icon: Camera },
  { num: '02', title: 'Get your photo reel', desc: 'Pose, smile, be weird. Your reel prints instantly. It is yours to keep.', Icon: Lightning },
  { num: '03', title: 'We find your match', desc: 'Our algorithm pairs you with someone at this venue. Both of you get notified.', Icon: HeartStraight },
  { num: '04', title: 'Go say hey', desc: 'Your match is already here. Walk over, introduce yourself. The hard part is done.', Icon: Handshake },
]

export default function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-20px' })

  return (
    <section id="how" className="section_how-it-works" ref={ref}>
      <div className="padding-global padding-section-medium">
        <div className="container-large">
          <div className="how-it-works_header">
            <p className="text-style-label text-color-accent">How It Works</p>
            <h2>Four steps.<br />No swiping required.</h2>
            <div className="how-it-works_accent-line" />
          </div>

          <div className="how-it-works_grid">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className={`how-it-works_card ${i % 2 === 1 ? 'is-offset' : ''}`}
              >
                <div className="how-it-works_card-top">
                  <span className="how-it-works_num text-color-accent">{step.num}</span>
                  <div className="how-it-works_icon-box">
                    <step.Icon size={24} weight="duotone" />
                  </div>
                </div>
                <h3 className="how-it-works_card-title">{step.title}</h3>
                <p className="how-it-works_card-desc text-color-secondary">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .how-it-works_header { margin-bottom: 64px; }
        .how-it-works_header .text-style-label { margin-bottom: 12px; }
        .how-it-works_accent-line { width: 64px; height: 2px; background: #FF006E; margin-top: 24px; }
        .how-it-works_grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }
        .how-it-works_card {
          padding: 40px 32px;
          border: 1px solid var(--color-border);
          border-radius: 16px;
          background: var(--color-bg-secondary);
          transition: border-color 0.3s;
        }
        .how-it-works_card:hover {
          border-color: rgba(255, 0, 110, 0.3);
        }
        .how-it-works_card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 24px;
        }
        .how-it-works_num {
          font-size: 2.5rem;
          font-weight: 600;
          letter-spacing: -0.04em;
          line-height: 1;
        }
        .how-it-works_icon-box {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: rgba(255, 0, 110, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FF006E;
        }
        .how-it-works_card-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--color-text-primary);
          margin-bottom: 8px;
          letter-spacing: -0.02em;
        }
        .how-it-works_card-desc {
          font-size: 0.9375rem;
          line-height: 1.6;
        }
        @media (min-width: 768px) {
          .how-it-works_grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }
          .how-it-works_card.is-offset {
            transform: translateY(40px);
          }
        }
        @media (min-width: 992px) {
          .how-it-works_grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
          }
          .how-it-works_card.is-offset {
            transform: translateY(40px);
          }
        }
      `}</style>
    </section>
  )
}
