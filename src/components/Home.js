import React from "react"
import SEO from "../components/Seo"
import { StaticQuery, graphql } from 'gatsby'
import ghGold from '../images/ghGold.svg'
import linkedinGold from '../images/linkedinGold.svg'

const Home = () => {
  return <StaticQuery 
    query={
      graphql`
        {
          contentfulHome {
            title
            name
          }
        }
      `
    }
    render={data => (
      <section id='home'>
        <SEO title="Home" />
        <div className='home'>
          <h1>{data.contentfulHome.name}</h1>
          <p>{data.contentfulHome.title}</p>
          <div className='home-links'>
            <a href='https://github.com/KyleWong2510'>
              <img src={ghGold} alt='Link to GitHub' className='gh-icon' />
            </a>
            <a href='https://www.linkedin.com/in/kyle-shigetomi-wong/'>
              <img src={linkedinGold} alt='Link to LinkedIn' className='linkedin-icon' />
            </a>
          </div>
        </div>
      </section>
    )}
  />
}

export default Home