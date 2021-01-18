import React from 'react'
import Layout from  '../components/Layout'
import SEO from '../components/seo'

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <form action="https://formspree.io/f/xnqooelr" method="POST">
        <h1>Contact Me</h1>
        <div>
          <input 
            type='text' 
            placeholder='Name...' 
            name='name'
          />
          <input 
            type='email' 
            placeholder='Email...' 
            name='email'
          />
          <textarea 
            rows='5' 
            placeholder='Message...' 
            name='message'
          />
        </div>
        <input type='submit' value='Send Message' className='submit-btn' />
      </form>
    </Layout>
  )
}

export default Contact
