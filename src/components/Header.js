import PropTypes from 'prop-types'
import React from 'react'
import kwLogo from '../images/kwLogo.png'

const Header = () => (
  <header>
    <a href='#home'>
      <img src={kwLogo} alt='Logo' className='header-logo' />
    </a>
    <nav>        
      <a href='#about' activeClassName='active-nav'>About</a>
      <a href='#projects' activeClassName='active-nav'>Projects</a>
      <a href='#contact' activeClassName='active-nav'>Contact</a>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
