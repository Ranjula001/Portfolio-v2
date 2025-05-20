'use client'

import { motion, useScroll } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setHasScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.div
      className="fixed top-0 left-0 h-1 bg-audi-purple z-[9999] origin-left"
      style={{
        scaleX: scrollYProgress,
      }}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: hasScrolled ? 1 : 0 }}
      transition={{ ease: 'easeOut', duration: 0.2 }}
    />
  )
}
