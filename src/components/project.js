import React from 'react'

const Project = ({ data }) => {
  const tech = data.techStack.map(tech => (
    <p key={tech}>{tech}</p>
  ))
  return (
    <div className='project' key={data.id}>
      <h1>HELLO</h1>
      <h1>{data.title}</h1>
      <p>{data.abstract.abstract}</p>
      {tech}
      <img src={data.image.fluid.src} alt={data.image.title} />
    </div>
  )
}

export default Project
