import { useState } from 'react'

// Image with graceful fallback: if the primary (Unsplash) source fails to
// load — offline, hotlink blocked, photo removed — it swaps to the backup
// source instead of showing a broken image icon.
export default function SmartImage({ photo, className = '', loading = 'lazy', ...rest }) {
  const [src, setSrc] = useState(photo.src)

  return (
    <img
      src={src}
      alt={photo.alt}
      loading={loading}
      className={className}
      onError={() => {
        if (src !== photo.fallback) setSrc(photo.fallback)
      }}
      {...rest}
    />
  )
}
