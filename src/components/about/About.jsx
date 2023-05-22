import React from 'react'
import "./about.css"
// import {FiAward} from "react-icons/fi"
// import {FiUsers} from "react-icons/fi"
// import {AiFillFolderOpen} from "react-icons/ai"

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
          <p>I am a software engineer trained through the Flatiron School. I am well-versed in JavaScript, Python3, SQL, and CSS. The frameworks I have experience working with include React.js, Next.js, Flask, PostgreSQL, SQLite3, SQLAlchemy, Sass, and Semantic-UI. I'm always excited for a new challenge and the opportunity to learn new languages and frameworks.
          </p>
          <p>I became interested in web development after completing a tutorial course and seeing how many languages and frameworks there were to master. As a former educator, I am passionate about learning and describe myself as a lifelong learner. I value working in a dynamic industry where continually developing skill sets is essential and where there is always something to learn.
I spent the past eight years working in public education as a high school band teacher. Through this experience, I developed strong communication skills, learned to collaborate and problem-solve with a variety of stakeholders, and constantly modeled leadership. 
I am incredibly detail-oriented thanks to years of honing my craft as a flute player and helping students refine their musical skills. Being an educator also taught me to balance my detail-oriented nature with time constraints and to be extremely efficient.
          </p>
          <p>I would love to apply my passion for learning, soft skills developed through teaching, and software engineering skill set to build innovative and enriching web applications and user experiences.
          </p>
          <p>When I'm not coding, I love to spend time with my husband Steve and our two dogs, Molly and Olivia. We built a home in Denver and are passionate about renovating, gardening, and home brewing beer! I also love to travel and am looking forward to taking my first international trip - to England! - this winter.
          </p>

          <a href="#contact" className="btn btn-primary">Let's Connect</a>
        </div>
      </div>
    </section>
  )
}

export default About