import React from 'react'
import './about.css'
import ME from '../../assets/Vivek_Gotecha.jpg'
import { FaAward } from "react-icons/fa"
import { FiUsers } from "react-icons/fi"
import { VscFolderLibrary } from "react-icons/vsc"

const About = () => {
  return (
    <section id='about'>
      <h5>Welcome!</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years </small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>200+ WorldWide </small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>80+ Completed </small>
            </article>
          </div>
          <p>
            I build user-focused web experiences with React, Node.js, and modern frontend tooling. My approach blends performance, accessibility, and thoughtful design to deliver products that not only look great, but also solve real business problems.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Connect</a>
        </div>
      </div>
    </section>
  )
}

export default About
