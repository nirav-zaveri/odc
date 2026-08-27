import { motion } from 'framer-motion'

const directions = {
  up: { y: 28, x: 0 },
  down: { y: -28, x: 0 },
  left: { x: 28, y: 0 },
  right: { x: -28, y: 0 },
  none: { x: 0, y: 0 },
}

/**
 * Scroll-triggered reveal wrapper. Wrap any block of content to have it
 * fade + slide into place once it enters the viewport.
 */
export default function Reveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  className = '',
  as: Component = motion.div,
  once = true,
  amount = 0.2,
}) {
  const offset = directions[direction] ?? directions.up

  return (
    <Component
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </Component>
  )
}
