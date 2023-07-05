import React from 'react'
import projects from "./projects"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Scrollbar, Mousewheel } from 'swiper';
import ProjectCard from './ProjectCard'
import 'swiper/css';
import 'swiper/css/scrollbar';
import "./portfolio.css"

const Portfolio = () => {

  const sortedProjects = projects.sort((a, b) => a.order - b.order);

  const allProjects = sortedProjects.map((project) => (
    <SwiperSlide>
      <ProjectCard
        key={project.id}
        project={project}
      />
    </SwiperSlide>
  ))


  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        modules={[Scrollbar, Mousewheel]}
        mousewheel={true}
        scrollbar={{draggable: true }}>
        {allProjects}
      </Swiper>
      </div>
    </section>
  )
}

export default Portfolio