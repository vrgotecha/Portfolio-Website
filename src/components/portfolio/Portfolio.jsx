import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/DisnyHotstarClone.png'
import IMG2 from '../../assets/TaskManagement.png'
import IMG3 from '../../assets/AI_LinearRegressionProject.png'

// DO NOT USE THE IMAGES IN PRODUCTION
const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Disney-Hotstar Clone',
    github: "https://github.com/vrgotecha/Disney-Hotstar-Clone",
    demo: 'https://vivekgotecha-disney-hotstar-project.netlify.app/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Task Management System',
    github: "https://github.com/vrgotecha/Task-Manager/tree/master",
    demo: 'https://vivekgotecha-disney-hotstar-project.netlify.app/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Artifical Intelligence Projects',
    github: "https://github.com/vrgotecha/Aritifical_Intelligence_Projects",
    demo: 'https://drive.google.com/drive/folders/1Y7V5ZoxJzkERWbX_cyu4C0LrOkBwz8mP'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
                <article key= {id} className='portfolio__item'>
                  <div className="portfolio__item-image">
                    <img src={image} alt={title} />
                  </div>
                  <h3>{title}</h3>
                  <div className="portfolio__item-cta">
                    <a href={github} className='btn' target="_blank" rel="noreferrer">Github</a>
                    <a href={demo} className='btn btn-primary' target="_blank" rel="noreferrer">Live Demo</a>
                  </div>
                </article>
            )
          })
        }
        
      </div>
    </section>
  )
}

export default Portfolio
