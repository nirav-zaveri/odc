import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import DynamicIcon from './DynamicIcon'

export default function ServiceCard({ service, index = 0 }) {
  return (
    <motion.a
      href={`/services#${service.slug}`}
      id={service.slug}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      whileHover={{ y: -6 }}
      className="group card relative flex flex-col gap-4 overflow-hidden p-7 transition-shadow hover:shadow-soft-lg"
    >
      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-secondary-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-50 text-primary-700 transition-colors duration-300 group-hover:bg-primary-700 group-hover:text-white">
        <DynamicIcon name={service.icon} className="h-7 w-7" />
      </div>
      <div className="relative">
        <h3 className="font-display text-lg font-bold text-ink-900">{service.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-500">{service.short}</p>
      </div>
      <span className="relative mt-auto inline-flex items-center gap-1 text-sm font-semibold text-primary-700">
        Learn more
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
      </span>
    </motion.a>
  )
}
