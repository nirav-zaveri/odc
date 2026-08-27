/**
 * Simple decorative tooth silhouette (not the brand logo — see Logo.jsx for
 * that). Used for background watermarks, loading states, and small brand
 * accents where a full raster logo would be overkill. Inherits color via
 * currentColor so it can be tinted/animated freely.
 */
export default function ToothMark({ className = 'h-6 w-6' }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M50 12c-7 0-11 4-16 4-9 0-16 7-16 18 0 9 3 14 5 22 3 11 6 24 12 30 3 3 6 1 7-3 2-8 3-17 8-17s6 9 8 17c1 4 4 6 7 3 6-6 9-19 12-30 2-8 5-13 5-22 0-11-7-18-16-18-5 0-9-4-16-4z"
        fill="currentColor"
      />
    </svg>
  )
}
