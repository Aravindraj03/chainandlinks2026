import ProjectDetails from '../components/ProjectDetails/ProjectDetails.jsx'
import { getProject } from '../data/projects.js'

export default function ProjectDetailPage({ slug }) {
  const project = getProject(slug)

  if (!project) {
    return <div>Project not found</div>
  }

  return <ProjectDetails project={project} />
}