'use client'

import { useEffect, useState } from 'react'

export default function Counter({ end, label }: { end: number; label: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const duration = 1000 // ms
    const increment = end / (duration / 20)

    const interval = setInterval(() => {
      start += increment
      if (start >= end) {
        clearInterval(interval)
        setCount(end)
      } else {
        setCount(Math.floor(start))
      }
    }, 20)

    return () => clearInterval(interval)
  }, [end])

  return (
    <div className="text-center">
      <p className="text-6xl font-bold text-audi-purple">{count}</p>
      <p className="text-lg text-gray-300">{label}</p>
    </div>
  )
}
