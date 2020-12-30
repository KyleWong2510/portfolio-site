import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import TechBadge from '../components/techBadge'

const About = ({ data }) => {
  const { contentfulAbout: { aboutMe: { aboutMe }, languages, libraries, familiarWith, otherSkills }} = data

  const formattedLang = languages.map(lang => <TechBadge tech={lang} />)
  const formattedLib = libraries.map(lib => <TechBadge tech={lib} />)
  const formattedFamiliar = familiarWith.map(tech => <TechBadge tech={tech} />)
  const formattedOther = otherSkills.map(skill => <TechBadge tech={skill} />)

  return (
    <Layout>
      <SEO title="About" />
      <div className='about'>
        <h1>About</h1>
        <p>Hi I am Kyle and I am a software developer from denver co...</p>
        { aboutMe }
        <section className='skills-container'>
          <h3>Languages</h3> 
          <div className='badge-container'>
            { formattedLang }
          </div>
            <h3>Libraries / Frameworks</h3>
          <div className='badge-container'>
            { formattedLib }
          </div>
            <h3>Familiar With</h3>
          <div className='badge-container'>
            { formattedFamiliar }
          </div>
            <h3>Other Skills</h3>
          <div className='badge-container'>
            { formattedOther }
          </div>
        </section>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    contentfulAbout {
      aboutMe {
        aboutMe
      }
      languages
      libraries
      familiarWith
      otherSkills
    }
  }
`

export default About
