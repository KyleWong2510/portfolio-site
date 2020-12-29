import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = () => (
  <header>
    <Link to="/">Kyle Wong</Link>
    <nav>        
      <Link to="/about/">About</Link>
      <Link to="/projects/">Projects</Link>
      <Link to="/contact/">Contact</Link>
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
