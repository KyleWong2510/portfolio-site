import React from 'react'
import Image from 'gatsby-image'
import TechBadge from '../components/TechBadge'
import LinkButton from '../components/LinkButton'

const ProjectCard = ({ 
  key, 
  title, 
  image, 
  briefDesc, 
  abstract, 
  techStack, 
  repoUrl, 
  deployedUrl 
}) => {
  const formattedTech = techStack.map(tech => <TechBadge tech={tech} />)

  return (
    <div className='project-card' key={key}>
      <h1 className='project-title'>{title}</h1>
      <Image fluid={image} alt={`${title} Screenshot`} className='project-img' />
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