'use client'

import { useScroll } from '@react-three/drei'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronUp } from 'lucide-react'

export default function ScrollToTop() {
  const scroll = useScroll()
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handle = () => {
      const offset = scroll.offset
      setShow(offset > 0.1)
    }

    scroll.el?.addEventListener('scroll', handle)
    return () => scroll.el?.removeEventListener('scroll', handle)
  }, [scroll])

  const scrollToTop = () => {
    scroll.el?.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    show && (
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-[9999] bg-audi-purple hover:bg-white hover:text-black text-white p-3 rounded-full shadow-lg transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-6 h-6" />
      </motion.button>
    )
  )
}
