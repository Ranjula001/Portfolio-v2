'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

const Scene = dynamic(() => import('@/app/components/Scene'), { ssr: false })
const LoadingScreen = dynamic(() => import('@/app/components/LoadingScreen'), { ssr: false })

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Hide loading screen after 7 seconds (matches LoadingScreen duration)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 7000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="min-h-screen w-full">
      {isLoading ? <LoadingScreen /> : <Scene />}
    </main>
  )
}
