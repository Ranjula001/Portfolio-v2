'use client'

import { AnimatePresence, motion } from 'framer-motion'

export default function MotionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  /**
   * AnimatePresence handles exit/enter animations.
   * We key the wrapper from `location.pathname` so it changes on
   * every full route navigation.
   */
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={typeof window === 'undefined' ? 'initial' : location.pathname}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="min-h-screen"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
