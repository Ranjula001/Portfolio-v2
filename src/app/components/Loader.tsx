'use client'

import { useProgress } from '@react-three/drei'
import { motion, AnimatePresence } from 'framer-motion'

export default function Loader() {
  const { active, progress } = useProgress()   // safe to call anywhere

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0a0a]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8 } }}
        >
          <p className="text-xl font-semibold text-audi-purple">
            Loading {progress.toFixed(0)}%
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
