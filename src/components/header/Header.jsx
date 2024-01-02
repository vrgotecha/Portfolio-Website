import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/Vivek_After_5thSem.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Vivek Gotecha</h1>
        <h5 className="text-light">Fullstack developer</h5>
        <CTA />
        <HeaderSocials />
     

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll down</a>
      </div>
    </header>
  )
}

export default Header
