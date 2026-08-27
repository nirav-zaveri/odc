import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Phone, MessageCircle } from 'lucide-react'
import Logo from './Logo'
import { clinic, nav } from '../data/site'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const linkClass = ({ isActive }) =>
    `relative px-1 py-2 text-sm font-semibold transition-colors duration-200 ${
      isActive ? 'text-primary-700' : 'text-ink-600 hover:text-primary-700'
    }`

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 shadow-soft backdrop-blur-md' : 'bg-white/40 backdrop-blur-sm'
      }`}
    >
      <nav className="container-page flex h-20 items-center justify-between">
        <NavLink to="/" className="flex items-center h-10 sm:h-12" onClick={() => setOpen(false)}>
          <Logo variant="full" className="h-full" />
        </NavLink>

        <div className="hidden lg:flex items-center gap-8">
          {nav.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass} end={item.to === '/'}>
              {({ isActive }) => (
                <span className="relative">
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-secondary"
                    />
                  )}
                </span>
              )}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${clinic.phoneDial}`}
            className="flex items-center gap-2 text-sm font-semibold text-ink-600 hover:text-primary-700 transition-colors"
          >
            <Phone className="h-4 w-4" />
            {clinic.phone}
          </a>
          <a
            href={`https://wa.me/${clinic.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent !px-5 !py-2.5 text-sm"
          >
            <MessageCircle className="h-4 w-4" />
            Book Now
          </a>
        </div>

        <button
          className="lg:hidden flex h-11 w-11 items-center justify-center rounded-full text-primary-800 hover:bg-primary-50"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden bg-white border-t border-ink-100 shadow-soft-lg"
          >
            <div className="container-page flex flex-col gap-1 py-4">
              {nav.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `rounded-lg px-4 py-3 text-base font-semibold ${
                      isActive ? 'bg-primary-50 text-primary-700' : 'text-ink-700 hover:bg-ink-50'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <div className="mt-2 flex flex-col gap-3 px-4">
                <a href={`tel:${clinic.phoneDial}`} className="btn-outline w-full">
                  <Phone className="h-4 w-4" /> {clinic.phone}
                </a>
                <a
                  href={`https://wa.me/${clinic.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-accent w-full"
                >
                  <MessageCircle className="h-4 w-4" /> Book on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
