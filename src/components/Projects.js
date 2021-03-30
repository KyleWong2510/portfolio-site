import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import ProjectCard from './ProjectCard'
import SEO from '../components/Seo'

const Projects = () => {
  return <StaticQuery 
    query={
      graphql`
        {
          allContentfulProject {
            nodes {
              abstract {
                abstract
              }
              image {
                fluid {
                  ...GatsbyContentfulFluid
                }
              }
              title
              techStack
              repoUrl
              briefDesc
              deployedUrl
            }
          }
        }
      `
    }
    render={data => (
      <section id='projects'>
        {/* <SEO title='Projects' /> */}
        <h1 className='projects-header'>SELECTED PROJECTS</h1>
        <section className='projects'>
          <div className='projects-container'>
            { data.allContentfulProject.nodes.map((project, i )=> (
              <ProjectCard 
                key={i}
                title={project.title}
                image={project.image.fluid}
                briefDesc={project.briefDesc}
                abstract={project.abstract.abstract}
                techStack={project.techStack}
                repoUrl={project.repoUrl}
                deployedUrl={project.deployedUrl}
              />
            ))}
          </div>
        </section>
      </section>
    )}
  />
}

export default Projects
