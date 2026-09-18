import { useEffect, useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import './FAQAccordion.css'

export default function FAQAccordion({
  items = [],
  projectName = '',
}) {
  const [openIndex, setOpenIndex] = useState(0)

  // Reset FAQ when project changes
  useEffect(() => {
    setOpenIndex(items.length > 0 ? 0 : -1)
  }, [projectName, items])

  if (!items || items.length === 0) {
    return null
  }

  const toggleFAQ = (index) => {
    setOpenIndex((current) =>
      current === index ? -1 : index
    )
  }

  return (
    <section className="section faq-section">
      <div className="container">

        {/* Header */}
        <div className="faq-header">
          <span className="eyebrow">
            Frequently Asked Questions
          </span>

          <h2 className="section-title section-title--center">
            FAQ
          </h2>

          <p>
            Find answers to the most common questions about{' '}
            {projectName}.
          </p>
        </div>

        {/* FAQ List */}
        <div className="faq-list">

          {items.map((item, index) => {
            const isOpen = openIndex === index

            return (
              <div
                key={`${projectName}-${index}-${item.q}`}
                className={`faq-item ${isOpen ? 'is-open' : ''}`}
              >
                <button
                  type="button"
                  className="faq-item__button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-item__question">
                    <span className="faq-item__number">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <span>
                      {item.q}
                    </span>
                  </span>

                  <span className="faq-item__icon">
                    {isOpen ? (
                      <Minus size={18} />
                    ) : (
                      <Plus size={18} />
                    )}
                  </span>
                </button>

                <div
                  className="faq-item__panel"
                  style={{
                    maxHeight: isOpen ? '500px' : '0px',
                  }}
                >
                  <div className="faq-item__answer">
                    <p>{item.a}</p>
                  </div>
                </div>
              </div>
            )
          })}

        </div>

      </div>
    </section>
  )
}