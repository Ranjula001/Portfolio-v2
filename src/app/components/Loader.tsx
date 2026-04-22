'use client'

import { useProgress } from '@react-three/drei'
import { AnimatePresence, motion } from 'framer-motion'

export default function Loader() {
  const { active, progress } = useProgress()

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top,rgba(123,97,255,0.18),transparent_28%),linear-gradient(180deg,#05070d_0%,#090d16_45%,#040507_100%)] px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8 } }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.03)_0%,transparent_22%,transparent_74%,rgba(255,255,255,0.02)_100%)]" />

          <motion.div
            initial={{ y: 24, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="relative w-full max-w-xl overflow-hidden rounded-[28px] border border-white/10 bg-black/45 p-5 text-white shadow-[0_24px_90px_rgba(0,0,0,0.38)] backdrop-blur-xl sm:p-7"
          >
            <div className="mb-5 flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff6b6b]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#ffd166]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#06d6a0]" />
              <span className="ml-3 text-[11px] uppercase tracking-[0.24em] text-white/45">Dev Boot Sequence</span>
            </div>

            <div className="rounded-[22px] border border-white/8 bg-[#0b1018] p-4 sm:p-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#f3dbc7] sm:text-xs">
                Initializing portfolio runtime
              </p>
              <div className="mt-4 space-y-2 font-mono text-[11px] text-white/70 sm:text-xs">
                <div>{'>'} compiling interactive scene</div>
                <div>{'>'} syncing motion systems</div>
                <div>{'>'} loading developer assets</div>
              </div>

              <div className="mt-5">
                <div className="mb-2 flex items-center justify-between text-[11px] uppercase tracking-[0.22em] text-white/45 sm:text-xs">
                  <span>Progress</span>
                  <span>{progress.toFixed(0)}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-white/8">
                  <motion.div
                    className="h-full rounded-full bg-[linear-gradient(90deg,#7B61FF_0%,#93c5fd_55%,#f3dbc7_100%)]"
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.max(progress, 6)}%` }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                  />
                </div>
              </div>
            </div>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-drukXXCondTrial text-3xl uppercase leading-none text-white sm:text-4xl">
                  Building Experience
                </p>
                <p className="mt-2 text-sm text-white/62">
                  Preparing a responsive frontend playground with motion, 3D, and product-focused UI.
                </p>
              </div>

              <motion.div
                className="h-12 w-12 self-start rounded-2xl border border-white/12 bg-white/6"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 2.8, ease: 'linear' }}
              >
                <div className="flex h-full items-center justify-center font-mono text-xs text-[#f3dbc7]">{'</>'}</div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
