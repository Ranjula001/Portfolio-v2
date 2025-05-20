'use client'

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'

const Scene = dynamic(() => import('@/app/components/Scene'), { ssr: false })

export default function Home() {
  return (
    <motion.main
      key="home"                           // unique key per page
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="h-screen w-screen snap-y snap-mandatory overflow-y-scroll"
    >
      <Scene />
    </motion.main>
  )
}
