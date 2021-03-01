import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/Seo'
import TechBadge from '../components/TechBadge'
import Image from 'gatsby-image'

const About = ({ data }) => {
  const { contentfulAbout: { personalBio: { personalBio }, devBio: { devBio }, image: { fluid }, languages, libraries, familiarWith, otherSkills }} = data

  const formattedLang = languages.map(lang => <TechBadge tech={lang} />)
  const formattedLib = libraries.map(lib => <TechBadge tech={lib} />)
  const formattedFamiliar = familiarWith.map(tech => <TechBadge tech={tech} />)
  const formattedOther = otherSkills.map(skill => <TechBadge tech={skill} />)

  return (
    <Layout>
      <SEO title="About" />
      <div className='about'>
          <div className='personal-bio'>
            <Image fluid={fluid} alt='headshot' className='about-image' />
            <p>
              { personalBio }
            </p>
          </div>
        <div className='dev-bio'>
          <p>
            { devBio }
          </p>
        </div>
        <section className='skills-container'>
          <div className='skill-type'>
            <h4>Languages</h4> 
            <div className='badge-container'>
              { formattedLang }
            </div>
          </div>
          <div className='skill-type'>
            <h4>Libraries / Frameworks</h4>
            <div className='badge-container'>
              { formattedLib }
            </div>
          </div>
          <div className='skill-type'>
            <h4>Familiar With</h4>
            <div className='badge-container'>
              { formattedFamiliar }
            </div>
          </div>
          <div className='skill-type'>
            <h4>Other Skills</h4>
            <div className='badge-container'>
              { formattedOther }
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export const query = graphql`
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

export default About
