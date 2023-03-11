import React from 'react'
import "./about.css"
import {FiAward} from "react-icons/fi"
import {FiUsers} from "react-icons/fi"
import {AiFillFolderOpen} from "react-icons/ai"

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

        <div className="about__content">
          {/* <div className="about__cards">
            <article className="about__card">
              <FiAward className="about__icon"/>
              <h5>Experience</h5>
              <small>Freelance Work</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon"/>
              <h5>Clients</h5>
              <small>UpWork Contracts</small>
            </article>
            <article className="about__card">
              <AiFillFolderOpen className="about__icon"/>
              <h5>Projects</h5>
              <small>Building Portfolio</small>
            </article>
          </div> */}
          <p>Hi, my name is Jessica Vaughn and I am a software engineer. I spent the past eight years working in public education.</p>
          <p>I became interested in web development after completing a tutorial course and seeing how many languages and frameworks there were to master. 
          I value working in a dynamic industry where continually developing new skill sets is essential and where there is always something new to learn.
          I'd love to apply my passion for learning and software engineering skill set to build innovative and enriching web applications and user experiences.</p>
          <p>My husband and I live in Denver - we love homebrewing and spending time with our dogs!</p>

          <a href="#contact" className="btn btn-primary">Let's Connect</a>
        </div>
      </div>
    </section>
  )
}

export default About