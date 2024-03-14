import React from 'react'
import './about.css'
import ME from '../../assets/VivekGotecha.jpg'
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
              <FaAward className='aobut__icon'/>
              <h5>Skills</h5>
              <small>Keen learner with a passion for web development</small>
            </article>

            <article className='about__card'>
              <FiUsers className='aobut__icon'/>
              <h5>Projects</h5>
              <small>Hands-on experience in building small web projects</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='aobut__icon'/>
              <h5>Education</h5>
              <small>Currently pursuing B.E from Pune Institute Of Computer Technology</small>
            </article>
          </div>
          <p>
            As a budding web developer, I am passionate about crafting engaging and user-friendly web experiences. My journey in web development has just begun, and I am eager to explore new technologies and expand my skill set. I believe in continuous learning and am excited about the opportunities ahead.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Connect</a>
        </div>
      </div>
    </section>
  )
}

export default About
