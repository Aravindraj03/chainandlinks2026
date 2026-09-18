import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import SEO from '../components/SEO/SEO.jsx'
import EnquiryForm from '../components/Forms/EnquiryForm.jsx'
import '../styles/pages.css'

export default function Contact() {
  return (
    <div>
      <SEO page="contact" breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Contact Us', path: '/contact' }]} />

      <section className="page-hero">
        <div className="container page-hero__inner">
          <span
            className="eyebrow"
            style={{
              justifyContent: 'center',
              display: 'flex',
            }}
          >
            Get in Touch
          </span>

          <h1>Contact Us</h1>

          {/* <p className="lead">
            Have a question about Varam, Amber or Crossway Springs?
            Our team is happy to help.
          </p> */}
        </div>
      </section>

      <div className="breadcrumb">
        <div className="container">
          <ol>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <span aria-current="page">/ Contact Us</span>
            </li>
          </ol>
        </div>
      </div>

      <section className="section">
        <div className="container contact-grid">

          <EnquiryForm id="contact-page" />

          <div className="contact-info-card">
            <h3>Our Address</h3>

            <div className="contact-info-card__row">
              <MapPin size={18} />
              <span>
                No.78/2 (138/2), L.B Road, Thiruvanmiyur,
                Chennai - 600 041, Tamil Nadu
              </span>
            </div>

            <div className="contact-info-card__row">
              <Phone size={18} />
              <a href="tel:+918438598947">
                +91 8438 598947
              </a>
            </div>

            <div className="contact-info-card__row">
              <Mail size={18} />
              <a href="mailto:Contact@chainandlinks.com">
                Contact@chainandlinks.com
              </a>
            </div>

            <div className="contact-info-card__row">
              <Clock size={18} />
              <span>
                Mon – Sat, 9:30 AM – 6:30 PM
              </span>
            </div>

            {/* Google Map */}
            <div className="contact-info-card__map">
              <iframe
                title="Chain & Links Office Location"
                src="https://www.google.com/maps?q=78%2F2%20%28138%2F2%29%2C%20L.B%20Road%2C%20Thiruvanmiyur%2C%20Chennai%20600041&output=embed"
                width="100%"
                height="320"
                style={{
                  border: 0,
                  borderRadius: '12px',
                  display: 'block',
                }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}