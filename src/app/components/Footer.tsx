'use client'

import { Instagram, Linkedin, Github } from 'lucide-react'
import { personalInfo } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="mt-20 w-full border-t border-white/10 px-4 py-8 text-[#f5eee6] sm:px-6 md:mt-24">
      <div className="flex flex-col items-center gap-6">
        <div className="text-center space-y-2">
          <p className="font-migraExtrabold text-xl">{personalInfo.name}</p>
          <p className="text-sm text-[#f3dbc7]">{personalInfo.role} based in {personalInfo.location}</p>
          <div className="flex flex-col text-sm text-white/80 md:flex-row md:items-center md:gap-4">
            <a href={`mailto:${personalInfo.email}`} className="break-all hover:text-audi-purple transition-colors">
              {personalInfo.email}
            </a>
            <span className="hidden md:inline">/</span>
            <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="hover:text-audi-purple transition-colors">
              {personalInfo.phone}
            </a>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex flex-wrap justify-center gap-6">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-audi-purple transition-colors hover-trigger"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-audi-purple transition-colors hover-trigger"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://www.instagram.com/ranjula_i/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-audi-purple transition-colors hover-trigger"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
