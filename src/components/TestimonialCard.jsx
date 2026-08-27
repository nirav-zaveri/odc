import { Star, Quote } from 'lucide-react'

export default function TestimonialCard({ testimonial, avatar }) {
  return (
    <div className="card flex h-full flex-col gap-4 p-7">
      <Quote className="h-8 w-8 text-secondary-200" fill="currentColor" />
      <p className="flex-1 text-ink-600">"{testimonial.quote}"</p>
      <div className="flex items-center gap-1 text-secondary-500">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4" fill="currentColor" strokeWidth={0} />
        ))}
      </div>
      <div className="flex items-center gap-3 border-t border-ink-100 pt-4">
        {avatar && (
          <img
            src={avatar}
            alt={testimonial.name}
            className="h-11 w-11 rounded-full object-cover"
            loading="lazy"
          />
        )}
        <div>
          <p className="font-display text-sm font-bold text-ink-900">{testimonial.name}</p>
          <p className="text-xs text-ink-400">{testimonial.role}</p>
        </div>
      </div>
    </div>
  )
}
