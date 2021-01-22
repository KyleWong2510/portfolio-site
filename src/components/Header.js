import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = () => (
  <header>
    <Link to="/">Kyle Wong</Link>
    <nav>        
      <Link to="/about/" activeClassName='active-nav'>About</Link>
      <Link to="/projects/" activeClassName='active-nav'>Projects</Link>
      <Link to="/contact/" activeClassName='active-nav'>Contact</Link>
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
