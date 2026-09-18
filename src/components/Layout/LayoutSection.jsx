import { useState } from 'react'
import { X, ZoomIn } from 'lucide-react'
import PlaceholderImage from '../Common/PlaceholderImage.jsx'
import { useReveal } from '../../hooks/useReveal.js'
import './LayoutSection.css'

export default function LayoutSection({ image, projectName }) {
  const [open, setOpen] = useState(false)
  const ref = useReveal()

  return (
    <section className="section layout-section" ref={ref}>
      <div className="container">
        <h2 className="section-title section-title--center reveal">Layout</h2>
        <button className="layout-section__frame mt-48 reveal reveal-delay-1" onClick={() => setOpen(true)} aria-label="Zoom master plan layout">
          <PlaceholderImage name={image} label={`${projectName} Master Plan Layout`} ratio="16/9" />
          <span className="layout-section__zoom-hint"><ZoomIn size={18} /> Click to zoom</span>
        </button>
      </div>

      {open && (
        <div className="layout-lightbox" role="dialog" aria-modal="true" onClick={() => setOpen(false)}>
          <button className="layout-lightbox__close" aria-label="Close" onClick={() => setOpen(false)}><X size={26} /></button>
          <div className="layout-lightbox__inner" onClick={(e) => e.stopPropagation()}>
            <PlaceholderImage name={image} label={`${projectName} Master Plan Layout \u2014 Full Size`} ratio="16/9" />
          </div>
        </div>
      )}
    </section>
  )
}
