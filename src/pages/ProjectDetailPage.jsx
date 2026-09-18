import { useParams, Navigate } from 'react-router-dom'
import ProjectDetails from '../components/ProjectDetails/ProjectDetails.jsx'
import { getProject } from '../data/projects.js'

export default function ProjectDetailPage() {
  const { slug } = useParams()
  const project = getProject(slug)

  if (!project) return <Navigate to="/projects" replace />

  return <ProjectDetails project={project} />
}
