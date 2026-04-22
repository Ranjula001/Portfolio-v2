'use client'

import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Search } from 'lucide-react'
import { sectionLinks } from '../data/portfolio'

export default function CommandMenu() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const isShortcut = (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k'
      if (isShortcut) {
        event.preventDefault()
        setOpen((value) => !value)
      }

      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const filteredSections = useMemo(() => {
    const normalized = query.trim().toLowerCase()
    if (!normalized) return sectionLinks
    return sectionLinks.filter((section) => section.name.toLowerCase().includes(normalized))
  }, [query])

  const navigateToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
    setQuery('')
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="hover-trigger fixed bottom-5 left-5 z-[70] hidden items-center gap-3 rounded-full border border-white/15 bg-black/45 px-4 py-3 text-sm text-white/80 backdrop-blur-md transition-colors hover:border-white/30 hover:text-white lg:flex"
      >
        <Search className="h-4 w-4" />
        <span>Quick jump</span>
        <span className="rounded-full border border-white/15 px-2 py-0.5 text-xs text-white/55">Ctrl K</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-start justify-center bg-black/60 px-4 pt-24 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="w-full max-w-xl overflow-hidden rounded-[32px] border border-white/10 bg-[#0d1117]/95 shadow-[0_20px_80px_rgba(0,0,0,0.45)]"
              initial={{ y: 30, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <div className="flex items-center gap-3 border-b border-white/10 px-5 py-4">
                <Search className="h-4 w-4 text-white/60" />
                <input
                  autoFocus
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search sections..."
                  className="w-full bg-transparent text-base text-white outline-none placeholder:text-white/40"
                />
              </div>

              <div className="max-h-[320px] overflow-y-auto p-3">
                {filteredSections.map((section) => (
                  <button
                    key={section.to}
                    type="button"
                    onClick={() => navigateToSection(section.to)}
                    className="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-white/85 transition-colors hover:bg-white/6 hover:text-white"
                  >
                    <span>{section.name}</span>
                    <span className="text-xs uppercase tracking-[0.2em] text-white/35">Section</span>
                  </button>
                ))}
                {filteredSections.length === 0 && (
                  <div className="px-4 py-8 text-sm text-white/55">No matching section.</div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
