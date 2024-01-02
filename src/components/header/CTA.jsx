import React from 'react'
import CV from '../../assets/VivekGotecha_Resume.pdf'
const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's talk</a>
    </div>
  )
}

export default CTA
