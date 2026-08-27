import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Resets scroll position on route change so navigating between pages
// always starts at the top, like a traditional multi-page site.
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])

  return null
}
