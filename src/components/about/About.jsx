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
            <img src={ME} alt="Vivek Gotecha portrait" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>Fresher | Entry-Level </small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>Academic & Personal Projects </small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>8+ Built </small>
            </article>
          </div>
          <p>
            I am a passionate fresher focused on building responsive and user-friendly web applications using React, JavaScript, HTML, and CSS. I enjoy turning ideas into clean, functional interfaces and continuously improving my skills through hands-on projects.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Connect</a>
        </div>
      </div>
    </section>
  )
}

export default About
