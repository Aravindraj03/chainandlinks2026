import { Check } from 'lucide-react'
import { useReveal } from '../../hooks/useReveal.js'
import './Configuration.css'

export default function Configuration({ items = [] }) {
  const ref = useReveal()
  return (
    <section className="section configuration-section" ref={ref}>
      <div className="container">
        <h2 className="section-title section-title--center reveal">Configuration</h2>
        <div className="configuration-list mt-48">
          {items.map((c, i) => (
            <div key={c.name} className={`configuration-card reveal reveal-delay-${(i % 3) + 1}`}>
              <div className="configuration-card__head">
                <h3>{c.name}</h3>
                <div className="configuration-card__stats">
                  <div><span>Land Extent</span><strong>{c.landExtent}</strong></div>
                  {c.builtUpArea && c.builtUpArea !== '\u2014' && <div><span>Built-Up Area</span><strong>{c.builtUpArea}</strong></div>}
                </div>
              </div>
              <ul className="configuration-card__features">
                {c.features.map((f) => (
                  <li key={f}><Check size={16} />{f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
