import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'

export default function FaqAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="divide-y divide-ink-100 rounded-xl2 border border-ink-100 bg-white">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <div key={item.question}>
            <button
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              aria-expanded={isOpen}
            >
              <span className="font-display font-semibold text-ink-900">{item.question}</span>
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.25 }}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-700"
              >
                <Plus className="h-4 w-4" />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-5 text-ink-500">{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
