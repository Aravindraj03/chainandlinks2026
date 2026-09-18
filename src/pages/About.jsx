import { Link } from 'react-router-dom'
import SEO from '../components/SEO/SEO.jsx'
import { useReveal } from '../hooks/useReveal.js'
import '../styles/pages.css'

const pillars = [
  { title: 'Transparent Documentation', copy: 'DTCP-approved layouts with clear title deeds and straightforward registration support at every step.' },
  { title: 'Planned Infrastructure', copy: 'Underground utilities, wide roads and landscaped common areas designed before the first plot is sold.' },
  { title: 'Genuine Amenities', copy: 'Clubhouses, sports courts and lifestyle spaces that are actually built — not just rendered in a brochure.' },
]

export default function About() {
  const ref = useReveal()
  const pillarRef = useReveal()

  return (
    <div>
      <SEO page="about" breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'About Us', path: '/about' }]} />

      <section className="page-hero">
        <div className="container page-hero__inner">
          <span className="eyebrow" style={{ justifyContent: 'center', display: 'flex' }}>About Chain &amp; Links</span>
          <h1>Land Investments Built on Trust</h1>
          {/* <p className="lead">
            For over a decade, Chain &amp; Links has helped Chennai families and investors find plotted
            developments that combine location, connectivity and long-term value.
          </p> */}
        </div>
      </section>

      <div className="breadcrumb">
        <div className="container">
          <ol>
            <li><Link to="/">Home</Link></li>
            <li><span aria-current="page">/ About Us</span></li>
          </ol>
        </div>
      </div>

      <section className="section" ref={ref}>
        <div className="container about-us-grid">
          <div className="about-us-media reveal">
            <div className="about-us-media__img">
              <img
                src="/images/page-images/about-img1.png"
                alt="Chain & Links Real Estate Developer in Chennai"
              />
            </div>
          </div>

          <div className="reveal reveal-delay-1">
            <span className="eyebrow">About Chain & Links</span>

            <h2 className="section-title">
              Trusted Real Estate Developer in Chennai
            </h2>

            <p className="lead mt-16">
              Chain &amp; Links is a Chennai-based real estate developer
              specializing in DTCP-approved plots and premium gated villa
              communities. We focus on transparent documentation, quality
              infrastructure, and thoughtfully planned communities that offer
              lasting value for families and investors.
            </p>

            <p className="lead mt-16">
              From selecting the right location to registration, we ensure a
              transparent and hassle-free property buying experience.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--gradient">
        <div className="container">
          <div className="value-strip">
            <div className="value-strip__item"><strong>3</strong><span>Active Communities</span></div>
            <div className="value-strip__item"><strong>250+</strong><span>Acres Under Development</span></div>
            <div className="value-strip__item"><strong>1,200+</strong><span>Families Served</span></div>
            <div className="value-strip__item"><strong>10+</strong><span>Years in Chennai Real Estate</span></div>
          </div>
        </div>
      </section>

      <section className="section" ref={pillarRef}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 620, marginInline: 'auto' }}>
            <span className="eyebrow">What Sets Us Apart</span>
            <h2 className="section-title">Built on Three Simple Commitments</h2>
          </div>
          <div className="pillar-grid mt-48">
            {pillars.map((p, i) => (
              <div key={p.title} className={`pillar-card reveal reveal-delay-${i + 1}`}>
                <h3>{p.title}</h3>
                <p>{p.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 className="section-title">Ready to Explore Our Projects?</h2>
          <p className="lead mt-16" style={{ maxWidth: 520, marginInline: 'auto' }}>
            Take a closer look at Varam, Amber and Crossway Springs — three communities, each built around comfort,
            connectivity and long-term value.
          </p>
          <Link to="/projects" className="btn btn-gold mt-32">View Our Projects</Link>
        </div>
      </section>
    </div>
  )
}
