import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Restores scroll position on navigation so each page starts at the top, like a
 * traditional multi-page site — and honours an #anchor when one is present
 * (e.g. the footer's /services#dental-implants links).
 *
 * Two things to know about the implementation:
 *  - `html { scroll-behavior: smooth }` in index.css beats `behavior: 'instant'`
 *    passed to scrollTo, which left navigation stranded mid-animation. The rule
 *    is therefore suspended for the jump and restored immediately after.
 *  - useLayoutEffect (not useEffect) runs before the browser paints, so the new
 *    page never flashes at the old scroll offset.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useLayoutEffect(() => {
    const html = document.documentElement
    const previous = html.style.scrollBehavior
    html.style.scrollBehavior = 'auto'

    if (hash) {
      // The target may not exist yet on first paint; fall back to the top.
      const target = document.getElementById(hash.slice(1))
      if (target) target.scrollIntoView()
      else window.scrollTo(0, 0)
    } else {
      window.scrollTo(0, 0)
    }

    html.style.scrollBehavior = previous
  }, [pathname, hash])

  return null
}
