import React from 'react'
import "./about.css"
import ME from "../../assets/me-about.jpeg"
import {FiAward} from "react-icons/fi"
import {FiUsers} from "react-icons/fi"
import {AiFillFolderOpen} from "react-icons/ai"

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Jessica profile" />
          </div>
        </div>

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

          <p>My transition to web development comes after eight years of teaching high school music.
          I am extremely detailed-oriented and love working with clients to design their perfect product. 
          I love to learn and am excited for new skills I can hone as a web developer.
          My husband and I live in Denver - we love homebrewing and spending time with our dogs!
          </p>

          <a href="#contact" className="btn btn-primary">Let's Connect</a>
        </div>
      </div>
    </section>
  )
}

export default About