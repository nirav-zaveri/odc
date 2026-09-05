import { useEffect, useRef } from 'react'
import { motion, useInView, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'

export default function StatCounter({ value, suffix = '', label }) {
  const ref = useRef(null)
  const spanRef = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.6 })
  const prefersReducedMotion = useReducedMotion()

  const motionValue = useMotionValue(0)
  // Settles in roughly a second. The previous, softer spring took ~5s to
  // converge, which was very visible on the four-digit patient count.
  const springValue = useSpring(motionValue, { damping: 30, stiffness: 140 })

  useEffect(() => {
    if (isInView) motionValue.set(value)
  }, [isInView, value, motionValue])

  useEffect(() => {
    // Someone who has asked for reduced motion gets the final figure outright
    // rather than a counting animation.
    if (prefersReducedMotion) {
      if (spanRef.current) spanRef.current.textContent = value.toLocaleString()
      return undefined
    }
    return springValue.on('change', (latest) => {
      if (spanRef.current) spanRef.current.textContent = Math.round(latest).toLocaleString()
    })
  }, [springValue, prefersReducedMotion, value])

  return (
    <motion.div ref={ref} className="text-center">
      <p className="font-display text-4xl font-extrabold text-white sm:text-5xl">
        <span ref={spanRef}>{prefersReducedMotion ? value.toLocaleString() : 0}</span>
        {suffix}
      </p>
      <p className="mt-2 text-sm font-medium text-primary-200 sm:text-base">{label}</p>
    </motion.div>
  )
}
