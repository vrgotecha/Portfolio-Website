import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination, Autoplay } from 'swiper/modules';


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'Aarushi Singh',
    review: "Working with Vivek Gotecha was an absolute pleasure! His attention to detail and creativity brought my project to life."
  },
  {
    avatar: AVTR2,
    name: 'Omkar Rajmane',
    review: "I'm impressed by Vivek Gotecha's professionalism and dedication. I look forward to collaborating with him again."
  },
  {
    avatar: AVTR3,
    name: 'Parthav Deshpande',
    review: "I can't thank Vivek Gotecha enough for his outstanding work on my project. I highly endorse him!"
  },
  {
    avatar: AVTR4,
    name: 'Mustafa Shaikh',
    review: 'He brought creativity, skill, and passion to the table, resulting in an exceptional outcome. I wholeheartedly recommend him!'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from peers</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      modules={[Pagination, Autoplay]}
      spaceBetween={40}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      speed={700}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt='' />
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>
                {review}
              </small>
            </SwiperSlide>
            )
          })
        }
        
      </Swiper>
    </section>
  )
}

export default Testimonials
