import { useState } from 'react'
import "./about.css"
// import {FiAward} from "react-icons/fi"
// import {FiUsers} from "react-icons/fi"
// import {AiFillFolderOpen} from "react-icons/ai"

export default function About() {
  const [readMore, setReadMore] = useState(false)

  function handleClick() {
    setReadMore(readMore => !readMore)
  }

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
        <p>As a Freelance Software Engineer, I design, build, deploy, and maintain software solutions for various clients, using my skills in Python, JavaScript, React, Flask, and SQL. 
        I enjoy working on challenging projects that require creativity, problem-solving, and collaboration. 
        With a background in education, I also have strong communication, leadership, and organizational skills that enable me to work effectively with diverse teams and stakeholders.
        I am passionate about learning and developing new technologies, which led me to pursue a career in web development. 
        </p>
        <div className="see-more">
        <button className="see-more-btn" onClick={handleClick}>{readMore? "Read less..." : "Read more..."}</button>
        </div>
        {readMore ?
        <div>
          <p>I graduated from the Flatiron School software engineering bootcamp and completed a Web Development Bootcamp and a DevOps Bootcamp from Udemy in 2023, 
        where I learned the latest tools and frameworks for creating dynamic and responsive web applications. 
        I also hold a Master of Education in Music Education from Ithaca College, 
        and a Bachelor of Education in Music Education from University of Colorado Boulder. 
        I taught instrumental music at two high schools for eight years, 
        where my colleagues and I achieved the highest state marching band ranking in Cherry Creek High School history, 
        and grew the instrumental music program enrollment at Gateway High School by 44%. 
        I am looking for opportunities to apply my web development and education skills in front-end, back-end, 
        or full-stack roles.</p>
          <p>When I'm not coding, you'll find me spending time with my husband, Steve, and our two dogs, Molly and Olivia. 
          We built a home in Denver in 2017 and are passionate about renovating, gardening, 
          and home brewing beer! I also love to travel and am looking forward to taking my first international trip - 
          to England! - this winter.
          </p>
          </div> : null}
        <div className="btn-wrapper">
        <a href="#contact" className="btn btn-primary">Let's Connect</a>
        </div>
        </div>
      </div>
    </section>
  )
}