import React from 'react'
import Layout from  '../components/layout'
import SEO from '../components/seo'

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <form>
        <input type='text' placeholder='Name...' />
        <input type='email' placeholder='Email...' />
        <textarea rows='5' placeholder='Message...' />
        <input type='submit' value='Submit' />
      </form>
    </Layout>
  )
}

export default Contact
