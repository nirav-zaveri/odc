import { Star, Quote } from 'lucide-react'

// Deterministic monogram tint so each card looks distinct without needing a
// photo. These are real, named Google reviewers — we deliberately do NOT
// attach stock-photo avatars to them, which would misrepresent real people.
const tints = [
  'bg-primary-100 text-primary-800',
  'bg-secondary-100 text-secondary-800',
  'bg-primary-700 text-white',
  'bg-secondary-500 text-white',
]

function initials(name) {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()
}

export default function TestimonialCard({ testimonial, index = 0 }) {
  const tint = tints[index % tints.length]

  return (
    <div className="card flex h-full flex-col gap-4 p-7">
      <Quote className="h-8 w-8 shrink-0 text-secondary-200" fill="currentColor" />
      <p className="flex-1 text-ink-600">{testimonial.quote}</p>
      <div className="flex items-center gap-1 text-secondary-500">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4" fill="currentColor" strokeWidth={0} />
        ))}
      </div>
      <div className="flex items-center gap-3 border-t border-ink-100 pt-4">
        <span
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-display text-sm font-bold ${tint}`}
          aria-hidden="true"
        >
          {initials(testimonial.name)}
        </span>
        <div>
          <p className="font-display text-sm font-bold text-ink-900">{testimonial.name}</p>
          <p className="text-xs text-ink-400">{testimonial.role}</p>
        </div>
      </div>
    </div>
  )
}
