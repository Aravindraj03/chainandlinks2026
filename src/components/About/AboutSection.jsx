import PlaceholderImage from '../Common/PlaceholderImage.jsx'
import { useReveal } from '../../hooks/useReveal.js'
import './AboutSection.css'

export default function AboutSection({
  title,
  description,
  images = [],
  projectName,
}) {
  const ref = useReveal()

  return (
    <section className="section about-section" ref={ref}>
      <div className="container about-section__grid">

        <div className="about-section__visual reveal">
          <div className="about-image about-image--main">
            <PlaceholderImage
              name={images[0]}
              label={`${projectName} Community Entrance`}
              ratio="4/3"
            />
          </div>

          <div className="about-image about-image--secondary">
            <PlaceholderImage
              name={images[1]}
              label={`${projectName} Gated Community`}
              ratio="4/3"
            />
          </div>

          {/* <div className="about-image__badge">
            <strong>Premium</strong>
            <span>Community</span>
          </div> */}
        </div>

        <div className="about-section__copy reveal reveal-delay-1">
          <span className="eyebrow">About the Project</span>

          <h2 className="section-title">
            {title}
          </h2>

          <p className="lead mt-16">
            {description}
          </p>
        </div>

      </div>
    </section>
  )
}