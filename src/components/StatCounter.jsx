import { useEffect, useRef } from 'react'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'

export default function StatCounter({ value, suffix = '', label }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.6 })
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { damping: 24, stiffness: 60 })

  useEffect(() => {
    if (isInView) motionValue.set(value)
  }, [isInView, value, motionValue])

  const spanRef = useRef(null)
  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      if (spanRef.current) spanRef.current.textContent = Math.round(latest).toLocaleString()
    })
    return unsubscribe
  }, [springValue])

  return (
    <motion.div ref={ref} className="text-center">
      <p className="font-display text-4xl font-extrabold text-white sm:text-5xl">
        <span ref={spanRef}>0</span>
        {suffix}
      </p>
      <p className="mt-2 text-sm font-medium text-primary-200 sm:text-base">{label}</p>
    </motion.div>
  )
}
