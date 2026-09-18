import { Link } from 'react-router-dom'
import SEO from '../components/SEO/SEO.jsx'

export default function NotFound() {
  return (
    <div className="section" style={{ minHeight: '55vh', display: 'flex', alignItems: 'center' }}>
      <SEO page="notFound" />
      <div className="container" style={{ textAlign: 'center' }}>
        <span className="eyebrow" style={{ justifyContent: 'center', display: 'flex' }}>404 Error</span>
        <h1>This page has moved plots</h1>
        <p className="lead mt-16" style={{ maxWidth: 460, marginInline: 'auto' }}>
          The page you're looking for doesn't exist. Let's get you back to solid ground.
        </p>
        <Link to="/" className="btn btn-gold mt-32" style={{ display: 'inline-flex' }}>Back to Home</Link>
      </div>
    </div>
  )
}
