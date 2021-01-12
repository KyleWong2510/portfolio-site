import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Projects = ({ data }) => {
  const { allContentfulProject: { nodes: projects }} = data 

  const allProjects = projects.map((project, i )=> (
    <div className='project-preview' key={i}>
      <Link to={`/projects/${project.slug}`} >
        <h4>{project.title}</h4>
        <p>{project.briefDesc}</p>
      </Link>
    </div>
  ))

  return (
    <Layout>
      <SEO title="Projects" />
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
        briefDesc
        slug
        id
      }
    }
  }
`

export default Projects
