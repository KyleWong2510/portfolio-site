import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
const About = ({ data }) => {
  const { contentfulAbout: { aboutMe: { aboutMe }, languages, libraries, familiarWith, otherSkills }} = data

  return (
    <Layout>
      <section className='about'>
        <h1>About</h1>
        <p>Hi I am Kyle and I am a software developer from denver co...</p>
        { aboutMe }
        <h3>Languages</h3>
        { languages }
        <h3>Libraries / Frameworks</h3>
        { libraries }
        <h3>Familiar With</h3>
        { familiarWith }
        <h3>Other Skills</h3>
        { otherSkills }
      </section>
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
