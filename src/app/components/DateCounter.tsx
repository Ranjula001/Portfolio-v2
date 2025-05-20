'use client'

import { useEffect, useState } from 'react'

export default function DateCounter() {
  const today = new Date()
  const targetDay = today.getDate()       // 1‑31
  const monthName = today.toLocaleString('default', { month: 'long' }) // May

  const [day, setDay] = useState(1)

  useEffect(() => {
    let current = 1
    const duration = 800           // total animation ms
    const step = Math.max(1, Math.floor(duration / targetDay))

    const id = setInterval(() => {
      current += 1
      if (current >= targetDay) {
        clearInterval(id)
        setDay(targetDay)
      } else {
        setDay(current)
      }
    }, step)

    return () => clearInterval(id)
  }, [targetDay])

  return (
    <div className="text-center">
      <p className="font-maelstrom text-[80px] sm:text-[140px] md:text-[180px] lg:text-[240px] xl:text-[280px] text-[#f5eee6]">
        {day} <span className="text-base sm:text-lg md:text-2xl lg:text-3xl font-hand-written lowercase text-[#f3dbc7]">{monthName}</span>
      </p>
    </div>
  )
}
