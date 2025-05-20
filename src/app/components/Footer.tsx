'use client'

import { Instagram, Linkedin, Github } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 text-[#f5eee6] px-6 py-8 mt-24">
      <div className="flex flex-col items-center gap-6">
        {/* Social Icons */}
        <div className="flex gap-6">
          <Link
            href="https://github.com/Ranjula001"
            target="_blank"
            aria-label="GitHub"
            className="hover:text-audi-purple transition-colors hover-trigger"
          >
            <Github className="w-5 h-5" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/ranjula-ilukpitiya-95b407226/"
            target="_blank"
            aria-label="LinkedIn"
            className="hover:text-audi-purple transition-colors hover-trigger"
          >
            <Linkedin className="w-5 h-5" />
          </Link>
          <Link
            href="https://www.instagram.com/ranjula_i/"
            target="_blank"
            aria-label="Instagram"
            className="hover:text-audi-purple transition-colors hover-trigger"
          >
            <Instagram className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </footer>
  )
}
