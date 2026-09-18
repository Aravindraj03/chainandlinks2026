import './Highlights.css'

export default function Highlights({ items = [], projectName = '' }) {
  const highlights = Array.isArray(items) ? items : []

  return (
    <section className="section highlights-section">
      <div className="container">

        <div className="highlights-header">
          <span className="eyebrow">Project Overview</span>

          <h2 className="section-title">
            Highlights
          </h2>

          <p>
            Key details that make {projectName} a distinctive investment
            opportunity.
          </p>
        </div>

        {highlights.length > 0 ? (
          <div className="highlights-grid">
            {highlights.map((item, index) => (
              <article
                className="highlight-card"
                key={`${projectName}-${index}-${item.label}`}
              >
                <div className="highlight-card__top">
                  <span className="highlight-card__number">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <span className="highlight-card__line" />
                </div>

                <div className="highlight-card__content">
                  <strong className="highlight-card__value">
                    {item.value}
                  </strong>

                  <p className="highlight-card__label">
                    {item.label}
                  </p>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="highlights-empty">
            No highlights available.
          </div>
        )}

      </div>
    </section>
  )
}