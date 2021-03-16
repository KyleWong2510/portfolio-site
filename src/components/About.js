import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
// import SEO from '../components/Seo'
import TechBadge from './TechBadge'
import Img from 'gatsby-image'

const About = () => {
  return <StaticQuery 
    query={
      graphql`
        {
          contentfulAbout {
            bio {
              bio
            }
            image {
              fluid {
                ...GatsbyContentfulFluid
              }
            }
            languages
            libraries
            otherSkills
          }
        }
      `
    }
    render={data => (
      <section id='about'>
        {/* <SEO title='About' /> */}
        <section className='about'>
          <h1>ABOUT</h1>
          <div className='personal-bio'>
            <Img fluid={data.contentfulAbout.image.fluid} alt='headshot' className='about-image' />
            <p>
              { data.contentfulAbout.bio.bio }
            </p>
          </div>
          <section className='skills-container'>
            <div className='skill-type'>
              <h4>Languages</h4> 
              <div className='badge-container'>
                { data.contentfulAbout.languages.map(lang => <TechBadge tech={lang} />) }
              </div>
            </div>
            <div className='skill-type'>
              <h4>Libraries / Frameworks</h4>
              <div className='badge-container'>
                { data.contentfulAbout.libraries.map(lib => <TechBadge tech={lib} />) }
              </div>
            </div>
            <div className='skill-type'>
              <h4>Other Skills</h4>
              <div className='badge-container'>
                { data.contentfulAbout.otherSkills.map(skill => <TechBadge tech={skill} />) }
              </div>
            </div>
          </section>
        </section>
      </section>
    )}
  />
}

export default About
