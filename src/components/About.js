import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import SEO from '../components/Seo'
import TechBadge from '../components/TechBadge'
import Image from 'gatsby-image'

const About = () => {
  return <StaticQuery 
    query={
      graphql`
        {
          contentfulAbout {
            personalBio {
              personalBio
            }
            devBio {
              devBio
            }
            image {
              fluid {
                ...GatsbyContentfulFluid
              }
            }
            languages
            libraries
            familiarWith
            otherSkills
          }
        }
      `
    }
    render={data => (
      <section id='about'>
        <SEO title="About" />
        <section className='about'>
          <div className='personal-bio'>
            <Image fluid={data.contentfulAbout.image.fluid} alt='headshot' className='about-image' />
            <p>
              { data.contentfulAbout.personalBio.personalBio }
            </p>
          </div>
          <div className='dev-bio'>
            <p>
              { data.contentfulAbout.devBio.devBio }
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
              <h4>Familiar With</h4>
              <div className='badge-container'>
                { data.contentfulAbout.familiarWith.map(tech => <TechBadge tech={tech} />) }
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
