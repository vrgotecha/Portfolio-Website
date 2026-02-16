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
            <h6>Fresher</h6>
            <small>Entry-level fullstack developer</small>
          </article>
          <article>
            <h6>Strong Foundation</h6>
            <small>React, Node.js, and modern web basics</small>
          </article>
          <article>
            <h6>Open To Work</h6>
            <small>Ready to learn, contribute, and grow fast</small>
          </article>
        </div>

        <a href="#contact" className='scroll__down'>Scroll down</a>
      </div>
    </header>
  )
}

export default Header
