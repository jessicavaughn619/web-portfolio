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
        <p>Passionate full-stack Software Engineer with extensive background in education and web-development. 
        Dedicated to crafting impactful solutions and driven by an appreciation for intricate details. 
        I thrive within collaborative environments and actively engage with peers to develop innovative ideas. 
        I embrace new technologies in the pursuit of lifelong learning. 
        Seeking new opportunities in front-end, back-end, or full-stack web development.
        </p>
        <p>I became interested in web development after completing a tutorial course and seeing how many languages and frameworks 
        there were to master. As a former educator, I am passionate about learning and describe myself as a lifelong learner.
        </p>
        <div className="see-more">
        <button className="see-more-btn" onClick={handleClick}>{readMore? "Read less..." : "Read more..."}</button>
        </div>
        {readMore ?
        <div>
          <p>I value working in a dynamic industry where continually developing skill sets is essential and where there is always something to learn. 
          I spent the past eight years working in public education as a high school band teacher. Through this experience, 
          I developed strong communication skills, learned to collaborate and problem-solve with a variety of stakeholders, 
          and constantly modeled leadership. I am incredibly detail-oriented thanks to years of honing my craft as a flute player 
          and helping students refine their musical skills. Being an educator also taught me to balance my detail-oriented nature with time 
          constraints and to be extremely efficient.</p>
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