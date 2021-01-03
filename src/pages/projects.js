import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from 'gatsby-image'

const Projects = ({ data }) => {
  const { allContentfulProject: { nodes: projects }} = data 

  const allProjects = [...projects, ...projects, ...projects, ...projects].map(project => (
    <Link to={`/projects/${project.slug}`} className='project-preview'>
      <Image fluid={project.image.fluid} alt={`${project.title} Screenshot`} />
      <h4>{project.title}</h4>
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
            ...GatsbyContentfulFluid
          }
        }
        slug
        id
      }
    }
  }
`

export default Projects
