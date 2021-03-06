import React from 'react'

const LinkButton = ({ linkText, url }) => {
  return (
    <a href={url} target='_blank' rel='noreferrer' className='link-btn'>
      {linkText}
    </a>
  )
}

export default LinkButton
