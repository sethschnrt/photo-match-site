'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface ImageRevealProps {
  src: string
  alt: string
  fill?: boolean
  className?: string
  priority?: boolean
}

export default function ImageReveal({
  src,
  alt,
  fill = true,
  className = '',
  priority = false,
}: ImageRevealProps) {
  return (
    <motion.div
      className={`image-reveal_wrapper ${className}`}
      initial={{ clipPath: 'inset(0 100% 0 0)' }}
      whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
      transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
      viewport={{ once: true, margin: '-20px' }}
    >
      <motion.div
        className="image-reveal_inner"
        initial={{ scale: 1.3 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.6, ease: [0.33, 1, 0.68, 1] }}
        viewport={{ once: true, margin: '-20px' }}
      >
        {fill ? (
          <Image
            src={src}
            alt={alt}
            fill
            unoptimized
            priority={priority}
            className="image-reveal_image"
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            width={1200}
            height={800}
            unoptimized
            priority={priority}
            className="image-reveal_image"
          />
        )}
      </motion.div>

      <style jsx global>{`
        .image-reveal_wrapper {
          overflow: hidden;
          position: relative;
        }
        .image-reveal_inner {
          width: 100%;
          height: 100%;
          position: relative;
        }
        .image-reveal_image {
          object-fit: cover;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </motion.div>
  )
}
