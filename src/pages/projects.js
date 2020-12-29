import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Project from '../components/project'
import SEO from "../components/seo"

const Projects = ({ data }) => {
  const { allContentfulProject: { nodes: projects }} = data 

  // const allProjects = projects.map(project => {
  //   return <Project data={project} key={project.id} />
  // })

  const allProjects = [...projects, ...projects, ...projects].map(project => (
    <Link to={`/projects/${project.slug}`} className='project-preview'>
      <h4>{project.title}</h4>
      <img src={project.image.fluid.src} alt={`${project.title} Screenshot`} />
    </Link>
  ))

  return (
    <Layout>
      <SEO title="Projects" />
      <h1>Projects</h1>
      <section className='project-previews'>
        { allProjects }
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulProject {
      nodes {
        title
        abstract {
          abstract
        }
        techStack
        image {
          fluid {
            src
          }
        }
        slug
        id
      }
    }
  }
`

export default Projects
