'use client'

import { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'

export default function AnimatedCursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const controls = useAnimation()

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }

    const checkHover = () => {
      const hovered = document.querySelector('.hover-trigger:hover')
      setIsHovering(!!hovered)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseover', checkHover)
    window.addEventListener('mouseout', checkHover)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseover', checkHover)
      window.removeEventListener('mouseout', checkHover)
    }
  }, [])

  useEffect(() => {
    controls.start({
      scale: isHovering ? 2 : 1,
      backgroundColor: isHovering ? 'rgba(255,255,255,0.2)' : 'transparent',
      borderColor: isHovering ? 'white' : 'white',
    })
  }, [isHovering, controls])

  return (
    <motion.div
      className="pointer-events-none fixed z-[9999] top-0 left-0 h-6 w-6 rounded-full border"
      animate={{
        x: mousePos.x - 12,
        y: mousePos.y - 12,
      }}
      transition={{
        type: 'spring',
        damping: 20,
        stiffness: 300,
        mass: 0.6,
      }}
    >
      <motion.div
        animate={controls}
        className="w-full h-full rounded-full border"
      />
    </motion.div>
  )
}
