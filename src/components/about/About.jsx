import "./about.css"
import ME from "../../assets/headshot.png"

export default function About() {

  return (
    <div id="about">

      <div className="about__container">

        <div className="about__content">
        <div className="me">
          <img src={ME} alt="Jessica Vaughn"/>
        </div>
        <div className="about_text_button">
        <p>I am a freelance software engineer open to new opportunities in front end, back end, or full stack web development.</p>
        <p>Prior to software engineering, I worked in education for eight years, where I taught music, mentored students, and fostered lifelong learners. 
          My love for learning, interest in understanding how things work,
          and desire to positively impact my community initiated my transition to software engineering.</p>
          <p>I live in Denver with my husband Steve and two dogs and a cat - Molly, Olivia, and Bruce. 
          I enjoy hiking and camping, reading, and exploring the many breweries in and around our city.
          </p>
        <div className="btn-wrapper">
        <a href="#contact" className="btn btn-primary">Let's Connect</a>
        </div>
        </div>
        </div>
      </div>
    </div>
  )
}