import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Vivek Gotecha</h1>
        <h5 className="text-light">Fullstack developer crafting clean, scalable digital products</h5>
        <CTA />
        <HeaderSocials/>
        <div className="header__highlights">
          <article>
            <h6>3+ Years</h6>
            <small>Experience</small>
          </article>
          <article>
            <h6>20+ Projects</h6>
            <small>Built and shipped</small>
          </article>
          <article>
            <h6>Fullstack</h6>
            <small>React, Node, and cloud</small>
          </article>
        </div>

        <a href="#contact" className='scroll__down'>Scroll down</a>
      </div>
    </header>
  )
}

export default Header
