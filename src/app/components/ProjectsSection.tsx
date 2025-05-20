'use client'

import { projects } from '../data/projects'
import Image from 'next/image'
import { motion } from 'framer-motion'
import FadeInSection from './FadeInSection'

export default function ProjectsSection() {
  return (
    <FadeInSection id="works" className="snap-start flex flex-col items-center justify-center text-white px-6 py-72">

      <h2 className="text-4xl md:text-6xl font-drukXXCondTrial mb-8  uppercase">Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {projects.map((project) => (
          <motion.a
            key={project.title}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-[#1e1e1e] rounded-xl overflow-hidden shadow-lg"
            whileHover={{ scale: 1.03 }}
          >
            <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={300}
              className="object-cover w-full h-auto"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black p-4">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-sm text-gray-300">{project.description}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </FadeInSection>
  )
}
