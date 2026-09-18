import { Star, Quote } from 'lucide-react'
import { useReveal } from '../../hooks/useReveal.js'
import './Testimonials.css'

const testimonials = [
  { name: 'Karthik Subramanian', location: 'Medavakkam, Chennai', rating: 5, review: 'The entire process from site visit to registration was transparent and smooth. Our plot in Crossway Springs has already appreciated well within a year.' },
  { name: 'Deepa Rajendran', location: 'Padappai, Chennai', rating: 5, review: "Varam's clubhouse and amenities are exactly what our family needed. The team was patient with every question we had before booking." },
  { name: 'Arun Prakash', location: 'OMR, Chennai', rating: 4, review: 'Great connectivity and a genuinely peaceful layout. Chain & Links made the paperwork side of things far easier than I expected.' },
]

export default function Testimonials() {
  const ref = useReveal()
  return (
    <section className="section section--soft testimonials-section" ref={ref}>
      <div className="container">
        <span className="eyebrow reveal" style={{ textAlign: 'center', display: 'block' }}>What Our Customers Say</span>
        <h2 className="section-title section-title--center reveal">Trusted by Families Across Chennai</h2>
        <div className="grid grid-3 mt-48">
          {testimonials.map((t, i) => (
            <div key={t.name} className={`testimonial-card reveal reveal-delay-${i + 1}`}>
              <Quote className="testimonial-card__quote" size={26} />
              <div className="testimonial-card__stars">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={16} fill={s < t.rating ? 'currentColor' : 'none'} />
                ))}
              </div>
              <p>{t.review}</p>
              <div className="testimonial-card__author">
                <strong>{t.name}</strong>
                <span>{t.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
