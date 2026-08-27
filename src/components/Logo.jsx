import logoFull from '../assets/logo-full.png'
import logoFullWhite from '../assets/logo-full-white.png'
import logoMark from '../assets/logo-mark.png'
import logoMarkWhite from '../assets/logo-mark-white.png'

/**
 * Brand logo, rendered from the clinic's real logo artwork.
 * variant="full" -> icon + wordmark (navbar, footer)
 * variant="mark" -> icon only (compact / mobile / favic-esque use)
 * tone="dark" -> use when placed on a dark/brand-colored background
 */
export default function Logo({ variant = 'full', tone = 'light', className = '', imgClassName = '' }) {
  const src =
    variant === 'mark'
      ? tone === 'dark'
        ? logoMarkWhite
        : logoMark
      : tone === 'dark'
        ? logoFullWhite
        : logoFull

  const alt = 'Oracle Dental Care — Multi-Speciality Dental Clinic'

  return (
    <span className={`inline-flex items-center ${className}`}>
      <img src={src} alt={alt} className={`h-full w-auto object-contain ${imgClassName}`} draggable={false} />
    </span>
  )
}
