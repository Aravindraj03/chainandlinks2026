import { Link } from 'react-router-dom'
import { MapPin, ArrowRight } from 'lucide-react'
import { useReveal } from '../../hooks/useReveal.js'
import './ProjectCard.css'

export function ProjectCard({ project, index = 0 }) {
  return (
    <div className={`project-card reveal reveal-delay-${(index % 3) + 1}`}>
      <Link to={`/${project.slug}`} className="project-card__media">
        <img
          src={project.heroImage}
          alt={`${project.name} plots for sale in ${project.location}, Chennai`}
        />
        {/* <span className="project-card__price">&#8377;{project.ourPrice}{project.priceUnit}</span> */}
      </Link>
      <div className="project-card__body">
        <div className="project-card__location"><MapPin size={14} /> {project.location}</div>
        <h3>{project.name}</h3>
        <p>{project.description.slice(0, 110)}&hellip;</p>
        <Link to={`/${project.slug}`} className="project-card__cta">
          View Project <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  )
}

export function ProjectGrid({ projects }) {
  const ref = useReveal()
  return (
    <div className="grid grid-3" ref={ref}>
      {projects.map((p, i) => <ProjectCard project={p} index={i} key={p.slug} />)}
    </div>
  )
}
