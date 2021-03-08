import React from "react"
import Image from 'gatsby-image'
import SEO from "../components/Seo"
import { StaticQuery, graphql } from 'gatsby'

const Home = () => {
  return <StaticQuery 
    query={
      graphql`
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
    }
    render={data => (
      <section id='home'>
        <SEO title="Home" />
        <div className='home'>
          <section className='home-info'>
            <Image fluid={data.contentfulHome.headshot.fluid} alt={`${data.contentfulHome.name} headshot`} className='home-img' />
            <h1>{data.contentfulHome.name}</h1>
            <p>{data.contentfulHome.title}</p>
          </section>
          <section className='home-about'>
            <p>{data.contentfulHome.welcomeMessage.welcomeMessage}</p>
          </section>
        </div>
      </section>
    )}
  />
}

export default Home