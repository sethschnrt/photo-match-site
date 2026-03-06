'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface AnimatedTextProps {
  text: string
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
  className?: string
  delay?: number
  once?: boolean
}

export default function AnimatedText({
  text,
  as: Tag = 'h2',
  className = '',
  delay = 0,
  once = true,
}: AnimatedTextProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: '-60px' })

  // Split text by words, preserving line breaks
  const lines = text.split('\n')

  return (
    <Tag ref={ref} className={`animated-text_wrapper ${className}`}>
      {lines.map((line, lineIdx) => (
        <span key={lineIdx} className="animated-text_line">
          {line.split(' ').map((word, wordIdx) => {
            const globalIdx = lines.slice(0, lineIdx).reduce((acc, l) => acc + l.split(' ').length, 0) + wordIdx
            return (
              <span key={`${lineIdx}-${wordIdx}`} className="animated-text_word-wrap">
                <motion.span
                  className="animated-text_word"
                  initial={{ y: '100%', opacity: 0 }}
                  animate={isInView ? { y: '0%', opacity: 1 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: delay + globalIdx * 0.06,
                    ease: [0.33, 1, 0.68, 1],
                  }}
                >
                  {word}
                </motion.span>
              </span>
            )
          })}
          {lineIdx < lines.length - 1 && <br />}
        </span>
      ))}

      <style jsx global>{`
        .animated-text_wrapper {
          overflow: hidden;
        }
        .animated-text_line {
          display: inline;
        }
        .animated-text_word-wrap {
          display: inline-block;
          overflow: hidden;
          margin-right: 0.3em;
          vertical-align: top;
        }
        .animated-text_word {
          display: inline-block;
        }
      `}</style>
    </Tag>
  )
}
