import { useState } from 'react'
import { ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react'
import PlaceholderImage from '../Common/PlaceholderImage.jsx'
import './Gallery.css'

export default function Gallery({ images = [], projectName }) {
  const [active, setActive] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  if (!images || images.length === 0) {
    return null
  }

  const next = () => {
    setActive((current) => (current + 1) % images.length)
  }

  const prev = () => {
    setActive((current) => (current - 1 + images.length) % images.length)
  }

  const goToSlide = (index) => {
    setActive(index)
  }

  return (
    <section className="section gallery-section">
      <div className="container">

        {/* Header */}
        <div className="gallery-header">
          <span className="eyebrow">Explore The Project</span>

          <h2 className="section-title section-title--center">
            Gallery
          </h2>

          <p>
            Take a closer look at {projectName} and discover the spaces,
            surroundings and lifestyle.
          </p>
        </div>


        {/* Carousel */}
        <div className="gallery-carousel">

          {/* Previous */}
          <button
            className="gallery-control gallery-control--prev"
            onClick={prev}
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>


          {/* Main Image */}
          <div className="gallery-stage">

            <div className="gallery-image">
              <PlaceholderImage
                name={images[active]}
                label={`${projectName} Gallery Image ${active + 1}`}
                ratio="16/9"
              />

              <button
                className="gallery-expand"
                onClick={() => setLightboxOpen(true)}
                aria-label="Open gallery"
              >
                <Maximize2 size={18} />
              </button>


              {/* Image info */}
              <div className="gallery-info">
                <span>
                  {String(active + 1).padStart(2, '0')}
                </span>

                <span className="gallery-info__divider" />

                <span>
                  {String(images.length).padStart(2, '0')}
                </span>
              </div>
            </div>

          </div>


          {/* Next */}
          <button
            className="gallery-control gallery-control--next"
            onClick={next}
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>

        </div>


        {/* Preview Carousel */}
        <div className="gallery-preview">

          {images.map((image, index) => (
            <button
              key={`${image}-${index}`}
              className={`gallery-preview__item ${
                index === active ? 'is-active' : ''
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`View image ${index + 1}`}
            >
              <PlaceholderImage
                name={image}
                label={`${index + 1}`}
                ratio="16/9"
              />

              <span className="gallery-preview__number">
                {String(index + 1).padStart(2, '0')}
              </span>
            </button>
          ))}

        </div>


        {/* Progress */}
        <div className="gallery-progress">
          <span
            style={{
              width: `${((active + 1) / images.length) * 100}%`,
            }}
          />
        </div>

      </div>


      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          onClick={() => setLightboxOpen(false)}
        >

          <button
            className="gallery-lightbox__close"
            onClick={() => setLightboxOpen(false)}
            aria-label="Close gallery"
          >
            <X size={25} />
          </button>


          <button
            className="gallery-lightbox__arrow gallery-lightbox__arrow--prev"
            onClick={(event) => {
              event.stopPropagation()
              prev()
            }}
            aria-label="Previous image"
          >
            <ChevronLeft size={30} />
          </button>


          <div
            className="gallery-lightbox__inner"
            onClick={(event) => event.stopPropagation()}
          >
            <PlaceholderImage
              name={images[active]}
              label={`${projectName} Gallery — ${active + 1} of ${images.length}`}
              ratio="16/9"
            />
          </div>


          <button
            className="gallery-lightbox__arrow gallery-lightbox__arrow--next"
            onClick={(event) => {
              event.stopPropagation()
              next()
            }}
            aria-label="Next image"
          >
            <ChevronRight size={30} />
          </button>

        </div>
      )}

    </section>
  )
}