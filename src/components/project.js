import React from 'react'

const Project = ({ data }) => {
  const tech = data.techStack.map(tech => (
    <p key={tech}>{tech}</p>
  ))
  return (
    <article className='project' key={data.id}>
      <h2>{data.title}</h2>
      <p>{data.abstract.abstract}</p>
      <img src={data.image.fluid.src} alt={data.image.title} />
      <div>
        {tech}
      </div>
    </article>
  )
}

export default Project
