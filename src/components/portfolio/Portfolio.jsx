import projects from "./projects"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper';
import ProjectCard from './ProjectCard'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./portfolio.css"

export default function Portfolio() {

  const sortedProjects = projects.sort((a, b) => a.order - b.order);

  const allProjects = sortedProjects.map((project) => (
    <SwiperSlide
      key={project.id}>
      <ProjectCard
        key={project.id}
        project={project}
      />
    </SwiperSlide>
  ))


  return (
    <section id="portfolio">
      <h2>My Recent Work</h2>
      <h5>Featured Projects</h5>
      <div className="container portfolio__container">
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        modules={[Navigation, Pagination]}
        navigation={{draggable: true}}>
        {allProjects}
      </Swiper>
      </div>
    </section>
  )
}