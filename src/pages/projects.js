import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Projects = ({ data }) => {
  const { allContentfulProject: { nodes: projects }} = data 

  const allProjects = projects.map(project => {
    return project.title
  })

  return (
    <Layout>
      <SEO title="Projects" />
      <h1>Projects</h1>
      { allProjects }
      <Link to="/">Go back to the homepage!</Link>
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
      }
    }
  }
`

export default Projects
