import React from 'react'
import './about.css'
import ME from '../../assets/Vivek_After_5thSem.jpg'
import { FaAward } from "react-icons/fa"
import { FiUsers } from "react-icons/fi"
import { VscFolderLibrary } from "react-icons/vsc"

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
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
              <h5>Experience</h5>
              <small>3+ Years </small>
            </article>

            <article className='about__card'>
              <FiUsers className='aobut__icon'/>
              <h5>Clients</h5>
              <small>200+ WorldWide </small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='aobut__icon'/>
              <h5>Projects</h5>
              <small>80+ Completed </small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, ullam animi nobis itaque natus voluptatem consectetur vero, est rerum corrupti, deserunt sunt possimus eos reprehenderit provident nesciunt? Sapiente, vitae ea!
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
