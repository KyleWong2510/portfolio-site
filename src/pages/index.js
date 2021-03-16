import React from "react"
import Header from '../components/Header'
import Home from '../components/Home'
import About from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import '../index.css'

const IndexPage = () => {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

export default IndexPage