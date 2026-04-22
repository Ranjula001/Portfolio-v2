'use client'

import { useEffect, useState } from 'react'
import { Menu, Search, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { personalInfo, sectionLinks } from '../data/portfolio'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    const sectionElements = sectionLinks
      .map((link) => document.getElementById(link.to))
      .filter(Boolean) as HTMLElement[]

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visibleEntry?.target.id) {
          setActiveSection(visibleEntry.target.id)
        }
      },
      {
        rootMargin: '-35% 0px -45% 0px',
        threshold: [0.2, 0.35, 0.5, 0.7],
      }
    )

    sectionElements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  const navigateTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setIsOpen(false)
  }

  return (
    <nav className="fixed left-0 top-0 z-[70] w-full px-3 py-3 md:px-8 md:py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 rounded-full border border-white/10 bg-black/35 px-4 py-3 text-white shadow-[0_10px_40px_rgba(0,0,0,0.18)] backdrop-blur-xl md:px-5">
        <button
          type="button"
          onClick={() => navigateTo('hero')}
          className="min-w-0 text-left transition-opacity hover:opacity-100"
        >
          <span className="block truncate font-migraExtrabold text-sm leading-none sm:text-base">{personalInfo.name}</span>
          <span className="mt-1 hidden text-[10px] uppercase tracking-[0.24em] text-white/60 sm:block">
            {personalInfo.role}
          </span>
        </button>

        <ul className="hidden items-center gap-2 md:flex">
          {sectionLinks.map((link) => {
            const isActive = activeSection === link.to
            return (
              <li key={link.to}>
                <button
                  type="button"
                  onClick={() => navigateTo(link.to)}
                  className={`hover-trigger rounded-full px-4 py-2 text-xs uppercase tracking-[0.16em] transition-colors ${
                    isActive ? 'bg-white text-black' : 'text-white/70 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {link.name}
                </button>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', ctrlKey: true }))}
            className="hover-trigger hidden rounded-full border border-white/10 bg-white/5 p-2 text-white/70 transition-colors hover:text-white lg:inline-flex"
            aria-label="Open quick jump"
          >
            <Search className="h-4 w-4" />
          </button>

          <button
            type="button"
            className="inline-flex shrink-0 rounded-full border border-white/10 bg-white/5 p-2 text-white md:hidden"
            onClick={() => setIsOpen((value) => !value)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mx-auto mt-3 max-w-7xl rounded-[24px] border border-white/10 bg-black/75 p-3 text-white backdrop-blur-xl md:hidden"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
          >
            <div className="grid gap-2">
              {sectionLinks.map((link) => (
                <button
                  key={link.to}
                  type="button"
                  onClick={() => navigateTo(link.to)}
                  className={`rounded-2xl px-4 py-3 text-left text-sm uppercase tracking-[0.16em] transition-colors ${
                    activeSection === link.to ? 'bg-white text-black' : 'bg-white/5 text-white/75'
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
