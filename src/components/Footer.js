import React from 'react'
import ghGold from '../images/ghGold.svg'
import linkedinGold from '../images/linkedinGold.svg'

const Footer = () => {
  return (
    <footer>
      <h2>© {new Date().getFullYear()} Kyle Wong</h2>
      <div className='footer-links'>
        <a href='https://github.com/KyleWong2510'>
          <img src={ghGold} alt='Link to GitHub' className='gh-icon-footer' />
        </a>
        <a href='https://www.linkedin.com/in/kyle-shigetomi-wong/'>
          <img src={linkedinGold} alt='Link to LinkedIn' className='linkedin-icon-footer' />
        </a>
      </div>
    </footer>
  )
}

export default Footer
