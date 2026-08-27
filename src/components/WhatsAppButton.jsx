import { MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { clinic } from '../data/site'

export default function WhatsAppButton() {
  const message = encodeURIComponent(
    `Hi Oracle Dental Care, I'd like to book an appointment.`,
  )
  const href = `https://wa.me/${clinic.whatsapp}?text=${message}`

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      /*
       * Sits clear of the bottom-right corner for two reasons: Netlify's
       * "Powered by Netlify" badge occupies that corner while it is enabled,
       * and on notched phones the home-bar area needs respecting — hence the
       * safe-area inset. If the badge is turned off in Netlify (Project
       * configuration > General) this can drop to bottom-6 safely.
       */
      className="fixed bottom-[calc(5rem+env(safe-area-inset-bottom))] right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-soft-lg sm:right-7"
    >
      <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-[#25D366]" />
      <MessageCircle className="relative h-7 w-7" strokeWidth={2} fill="white" />
    </motion.a>
  )
}
