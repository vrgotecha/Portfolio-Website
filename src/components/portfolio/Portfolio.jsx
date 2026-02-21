import React from 'react'
import './portfolio.css'

// DO NOT USE THE IMAGES IN PRODUCTION
const data = [
  {
    id: 1,
    image: 'https://placehold.co/900x550/0b1120/7dd3fc?text=Disney+Hotstar+Clone',
    title: 'Disney-Hotstar Clone',
    github: "https://github.com/vrgotecha/Disney-Hotstar-Clone",
    demo: 'https://vivekgotecha-disney-hotstar-project.netlify.app/'
  },
  {
    id: 2,
    image: 'https://placehold.co/900x550/111a31/a78bfa?text=Task+Management+System',
    title: 'Task Management System',
    github: "https://github.com/vrgotecha/Task-Manager/tree/master",
    demo: 'https://task-management-system-without-json.netlify.app/'
  },
  {
    id: 3,
    image: 'https://placehold.co/900x550/0f172a/67e8f9?text=AI+Projects',
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
