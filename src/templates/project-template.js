import React from "react"
import { graphql, Link } from "gatsby"
import Layout from '../components/Layout'
import Image from 'gatsby-image'
import TechBadge from '../components/techBadge'
import LinkButton from '../components/linkButton'

const ComponentName = ({ data: {project: {title, abstract: {abstract}, image: {fluid}, techStack, repoUrl, deployedUrl}}}) => {
  const formattedTech = techStack.map(tech => <TechBadge tech={tech} />)

  return (
    <Layout>
      <div className='single-project-top'>
        <Link to='/projects' className='link-btn'>Back to Projects</Link>
        <h1>{title}</h1>
      </div>
      <section className='project-info'>
        <article className='project-info-left'>
          <Image fluid={fluid} alt={title} className='project-info-img' />
          <div className='badge-container'>
            {formattedTech}
          </div>
          <div className='link-btn-container'>
            {deployedUrl && <LinkButton linkText='Deployed Project' url={deployedUrl}/>}
            <LinkButton linkText='Repo' url={repoUrl}/>
          </div>
        </article>
        <article className='project-info-right'>
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
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      techStack
      repoUrl
      deployedUrl
      slug
    }
  }`


export default ComponentName