import { Link } from 'react-router-dom'
import SEO from '../components/SEO/SEO.jsx'
import { ProjectGrid } from '../components/Projects/ProjectCard.jsx'
import { projectList } from '../data/projects.js'
import '../styles/pages.css'

export default function Projects() {
  return (
    <div>
      <SEO page="projects" breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Our Projects', path: '/projects' }]} />

      <section className="page-hero">
        <div className="container page-hero__inner">
          <span className="eyebrow" style={{ justifyContent: 'center', display: 'flex' }}>Our Projects</span>
          <h1>Our Projects</h1>
          <p className="lead">Three distinct communities across Chennai — each planned for connectivity, comfort and lasting value.</p>
        </div>
      </section>

      <div className="breadcrumb">
        <div className="container">
          <ol>
            <li><Link to="/">Home</Link></li>
            <li><span aria-current="page">/ Our Projects</span></li>
          </ol>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <ProjectGrid projects={projectList} />
        </div>
      </section>
    </div>
  )
}
