import React from 'react'
import './services.css'
import { BiCheck } from "react-icons/bi";

const Services = () => {
  // Define an array of objects for each service section
  const servicesData = [
    {
      heading: "UI/UX Design",
      items: [
        "User-friendly interface design",
        "Responsive web design",
        "Wireframing and prototyping",
        "Graphic design",
        "Typography",
        "Color theory",
        "User research and testing"
      ]
    },
    {
      heading: "Web Development",
      items: [
        "Frontend development",
        "Backend development",
        "Database management",
        "API integration",
        "Responsive web design",
        "Security implementation",
        "Cross-browser compatibility",
        "Version control (Git)"
      ]
    },
    {
      heading: "Data Science",
      items: [
        "Data analysis",
        "Machine learning algorithms",
        "Predictive modeling",
        "Data visualization",
        "Statistical analysis",
        "Big data processing",
        "Natural language processing"
      ]
    }
  ];

  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        {/* Map over the servicesData array to render each section */}
        {servicesData.map((service, index) => (
          <article className="service" key={index}>
            <div className="service__head">
              <h3>{service.heading}</h3>
            </div>

            <ul className='service__list'>
              {/* Map over the items array of each service */}
              {service.items.map((item, i) => (
                <li key={i}>
                  <BiCheck className='service__list-icon'/>
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Services
