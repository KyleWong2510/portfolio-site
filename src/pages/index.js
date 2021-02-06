import React from "react"
import { graphql } from 'gatsby'
import Image from 'gatsby-image'

import Layout from "../components/Layout"
import SEO from "../components/Seo"

const IndexPage = ({ data }) => {
  const { contentfulHome: { welcomeMessage: { welcomeMessage }, title, name, headshot: {fluid} }} = data;

  return (
    <Layout>
      <SEO title="Home" />
      <div className='home'>
        <section className='home-info'>
          <Image fluid={fluid} alt={`${name} headshot`} className='home-img' />
          <h1>{name}</h1>
          <p>{title}</p>
        </section>
        <section className='home-about'>
          <p>{welcomeMessage}</p>
        </section>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    contentfulHome {
      welcomeMessage {
        welcomeMessage
      }
      title
      name
      headshot {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`
export default IndexPage