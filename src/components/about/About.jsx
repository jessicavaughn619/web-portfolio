import { useState } from 'react'
import "./about.css"

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
        <p>Full stack Software Engineer with extensive background in education and web-development. 
        Dedicated to crafting solutions and driven by an appreciation for details. 
        I thrive in collaborative environments and actively engage with peers to develop innovative ideas. 
        I embrace new technologies in the pursuit of lifelong learning. 
        Seeking opportunities in frontend, backend, or full stack web development.
        </p>
        <div className="see-more">
        <button className="see-more-btn" onClick={handleClick}>{readMore? "Read less..." : "Read more..."}</button>
        </div>
        {readMore ?
        <div>
          <p>I worked in education for the past eight years, where I dedicated myself to teaching music, mentoring students, and fostering lifelong learning. 
          My transition to software engineering was fueled by my love of learning, interest in figuring out how things work, 
          and desire to contribute to my community and the larger world. Exceptional music teachers and software engineers share a multitude of common skills, 
          including relentless attention to detail and pursuit of quality, intrinsic motivation to solve challenging problems, 
          and outstanding collaboration and communication skills. I am excited to apply all of these skills to a new role in tech and to find a 
          company and team I thrive within.</p>
          <p>I live in Denver with my husband Steve and two dogs and a cat - Molly, Olivia, and Bruce. 
          We built a house in 2017 and love renovating, gardening, and listening to music. 
          I also enjoy hiking and camping, reading, and exploring the many breweries in and around our city.
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