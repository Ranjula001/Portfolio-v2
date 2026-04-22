'use client'

import { motion, useScroll } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      className="fixed left-0 top-0 z-[90] h-[3px] origin-left bg-[linear-gradient(90deg,#f3dbc7_0%,#7B61FF_45%,#93c5fd_100%)]"
      style={{ scaleX: scrollYProgress, width: '100%' }}
    />
  )
}
