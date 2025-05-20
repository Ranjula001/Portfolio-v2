'use client'

import { useState } from 'react'
import { Link } from 'react-scroll'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { name: 'About', to: 'about' },
    { name: 'Projects', to: 'works' },
    { name: 'Experience', to: 'experience' },
    { name: 'Contact', to: 'contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-4 backdrop-blur-sm bg-black/10 text-white font-semibold text-sm md:text-base">
      <div className="flex items-center justify-between">
        {/* Branding */}
        <div className="flex flex-col">
          <span className="font-bold">Ranjula Ilukpitiya</span>
          <span className="text-xs text-gray-300">UI/UX Designer / Developer</span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 uppercase">
          {links.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth={true}
                duration={800}
                offset={-80}
                className="cursor-pointer hover:text-audi-purple transition-colors hover-trigger"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <button className="md:hidden z-50" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className="absolute top-full left-0 w-full bg-black/80 backdrop-blur-md py-6 px-6 flex flex-col space-y-4 uppercase text-white md:hidden"
            initial={{ y: -20, opacity: 0, rotateX: -90 }}
            animate={{ y: 0, opacity: 1, rotateX: 0 }}
            exit={{ y: -20, opacity: 0, rotateX: -90 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          >
            {links.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  smooth={true}
                  duration={800}
                  offset={-80}
                  className="cursor-pointer hover:text-audi-purple transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  )
}
