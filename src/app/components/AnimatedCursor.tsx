'use client'

import { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'

export default function AnimatedCursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [enabled, setEnabled] = useState(false)
  const controls = useAnimation()

  useEffect(() => {
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches
    setEnabled(hasFinePointer)

    if (!hasFinePointer) return

    const handleMouseMove = (event: MouseEvent) => {
      setMousePos({ x: event.clientX, y: event.clientY })
    }

    const checkHover = () => {
      const hovered = document.querySelector('.hover-trigger:hover')
      setIsHovering(Boolean(hovered))
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
      scale: isHovering ? 1.9 : 1,
      backgroundColor: isHovering ? 'rgba(243,219,199,0.14)' : 'transparent',
      borderColor: isHovering ? '#f3dbc7' : 'rgba(255,255,255,0.6)',
    })
  }, [controls, isHovering])

  if (!enabled) return null

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[120] h-6 w-6 rounded-full border"
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
      <motion.div animate={controls} className="h-full w-full rounded-full border" />
    </motion.div>
  )
}
