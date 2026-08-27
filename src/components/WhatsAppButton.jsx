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
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-soft-lg sm:bottom-7 sm:right-7"
    >
      <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-[#25D366]" />
      <MessageCircle className="relative h-7 w-7" strokeWidth={2} fill="white" />
    </motion.a>
  )
}
