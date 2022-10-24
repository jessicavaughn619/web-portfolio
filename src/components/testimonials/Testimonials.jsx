import React from 'react'
import "./testimonials.css"
import clientReviews from "./clientReviews"

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Reviews from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
       // install Swiper modules
       modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}>
        
        {
          clientReviews.map(({id, avatar, clientName, clientReview}) => {
            return (
                <SwiperSlide key={id} className="testimonial">
                  <div className="client__avatar">
                    <img src={avatar} alt={clientName} />
                  </div>
                    <h5 className="client__name">{clientName}</h5>
                    <small className="client__review">{clientReview}</small>
                </SwiperSlide>
              )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials