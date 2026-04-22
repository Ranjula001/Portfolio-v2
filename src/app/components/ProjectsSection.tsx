'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '../data/projects'

export default function ProjectsSection() {
  return (
    <section id="works" className="relative z-10 px-4 py-20 text-white sm:py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="reveal-up mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.24em] text-[#f3dbc7]">Selected Work</p>
            <h2 className="font-drukXXCondTrial text-4xl uppercase leading-none sm:text-5xl md:text-7xl">
              Product Cases
            </h2>
          </div>
          <p className="max-w-xl text-sm text-white/70 md:text-base">
            Each project is framed as a product story: the interface challenge, the system thinking behind it,
            and the frontend decisions that made it useful.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {projects.map((project, index) => {
            const wideCard = index === 0
            return (
              <motion.a
                key={project.title}
                href={project.url || '#'}
                target={project.url ? '_blank' : undefined}
                rel={project.url ? 'noopener noreferrer' : undefined}
                onClick={(event) => {
                  if (!project.url) event.preventDefault()
                }}
                className={`group reveal-up relative overflow-hidden rounded-[28px] border border-white/10 bg-black/30 backdrop-blur-md sm:rounded-[32px] ${
                  wideCard ? 'lg:col-span-7 lg:min-h-[520px]' : 'lg:col-span-5 lg:min-h-[520px]'
                }`}
                whileHover={{ y: -8 }}
              >
                <div className="absolute inset-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,8,13,0.08)_0%,rgba(5,8,13,0.68)_48%,rgba(5,8,13,0.94)_100%)]" />
                </div>

                <div className="relative flex h-full min-h-[360px] flex-col justify-between p-5 sm:min-h-[420px] sm:p-6 md:p-8">
                  <div className="flex items-start justify-between gap-3 sm:gap-4">
                    <div className="max-w-[80%] rounded-full border border-white/10 bg-black/25 px-3 py-2 text-[10px] uppercase tracking-[0.18em] text-[#f3dbc7] sm:px-4 sm:text-[11px] sm:tracking-[0.22em]">
                      {project.category}
                    </div>
                    <div className="rounded-full border border-white/10 bg-black/25 p-2.5 text-white/80 sm:p-3">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold sm:text-2xl md:text-4xl">{project.title}</h3>
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/80 md:mt-4 md:text-base">
                      {project.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2 md:mt-6">
                      {project.stack.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/12 bg-white/6 px-3 py-1.5 text-[10px] uppercase tracking-[0.14em] text-white/75 sm:py-2 sm:text-xs sm:tracking-[0.16em]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                    {!project.url && (
                      <p className="mt-4 text-xs uppercase tracking-[0.16em] text-[#f3dbc7]">
                        Private case study available on request
                      </p>
                    )}
                  </div>
                </div>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
