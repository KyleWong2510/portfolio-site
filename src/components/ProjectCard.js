import React from 'react'
import Img from 'gatsby-image'
import TechBadge from './TechBadge'
import LinkButton from './LinkButton'

const ProjectCard = ({ 
  title, 
  image, 
  briefDesc, 
  abstract, 
  techStack, 
  repoUrl, 
  deployedUrl 
}) => {
  const formattedTech = techStack.map((tech, i) => <TechBadge key={i} tech={tech} />)

  return (
    <div className='project-card'>
      <h1 className='project-title'>{title}</h1>
      <Img fluid={image} alt={`${title} Screenshot`} className='project-img' />
      <p>{briefDesc}</p>
      <div className='badge-container' style={{height: '20%'}}>
        {formattedTech}
      </div>
      <div className='link-btn-container'>
        {deployedUrl && <LinkButton linkText='Site' url={deployedUrl}/>}
        <LinkButton linkText='Repo' url={repoUrl}/>
      </div>
    </div>
  )
}

export default ProjectCard;