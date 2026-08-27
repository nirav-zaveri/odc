import { motion } from 'framer-motion'
import ToothMark from './ToothMark'

export default function PageHero({ eyebrow, title, description }) {
  return (
    <section className="relative overflow-hidden bg-brand-gradient py-24 sm:py-28">
      <div className="absolute inset-0 bg-brand-radial" />
      <ToothMark className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 text-white/5 sm:h-80 sm:w-80" />
      <ToothMark className="pointer-events-none absolute -bottom-16 left-[-4rem] h-56 w-56 text-white/5 sm:h-72 sm:w-72" />

      <div className="container-page relative text-center">
        {eyebrow && (
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white ring-1 ring-inset ring-white/20 backdrop-blur-sm sm:text-sm"
          >
            {eyebrow}
          </motion.span>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-5 font-display text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mx-auto mt-5 max-w-2xl text-lg text-primary-100"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  )
}
