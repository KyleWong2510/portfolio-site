import React from "react"
import { graphql, Link } from "gatsby"
import Layout from '../components/Layout'
import Image from 'gatsby-image'
import TechBadge from '../components/techBadge'

const ComponentName = ({ data: {project: {title, abstract: {abstract}, image: {fixed}, techStack, repoUrl, deployedUrl}}}) => {
  const formattedTech = techStack.map(tech => <TechBadge tech={tech} />)

  return (
    <Layout>
      <div className='single-project-top'>
        <Link to='/projects'>Back to Projects</Link>
        <h1>{title}</h1>
      </div>
      <section className='project-info'>
        <article className='project-info-left'>
          <Image fixed={fixed} alt={title}/>
          <h3>Tech Stack</h3>
          <div className='badge-container'>
            {formattedTech}
          </div>
          <a href={deployedUrl} target='_blank'>Deployed Project</a>
          <a href={repoUrl} target='_blank'>Repo</a>
        </article>
        <article>
          <h1>Abstract</h1>
          <p>{abstract}</p>
        </article>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleProject($slug: String) {
    project: contentfulProject(slug: {eq: $slug}) {
      title
      abstract {
        abstract
      }
      image {
        fixed(width: 400) {
          ...GatsbyContentfulFixed
        }
      }
      techStack
      repoUrl
      deployedUrl
      slug
    }
  }`


export default ComponentName