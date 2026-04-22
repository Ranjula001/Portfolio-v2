'use client'

import dynamic from 'next/dynamic'

const Scene = dynamic(() => import('@/app/components/Scene'), { ssr: false })

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <Scene />
    </main>
  )
}
