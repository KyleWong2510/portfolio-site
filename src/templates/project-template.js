import React from "react"
import { graphql, Link } from "gatsby"
import Layout from '../components/Layout'
import Image from 'gatsby-image'

const ComponentName = ({ data: {project: {title, abstract: {abstract}, image: {fixed}, techStack}}}) => {
  return (
    <Layout>
      <div>
        <Link to='/projects'>Back to Projects</Link>
        <h1>{title}</h1>
      </div>
      <section>
        <article>
          <Image fixed={fixed} alt={title}/>
        </article>
        <article>
          <h1>Abstract:</h1>
          <p>{abstract}</p>
          <p>{techStack}</p>
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
        fixed(width: 300) {
          ...GatsbyContentfulFixed
        }
      }
      techStack
      slug
    }
  }`


export default ComponentName