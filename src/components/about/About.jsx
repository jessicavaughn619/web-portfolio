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
        <p>I am a Full Stack Software Engineer transitioning to engineering from education. I worked in education for eight years, teaching music and honing my problem solving and leadership skills.</p>
        <p>My love for learning, interest in understanding how things work, and desire to positively impact my community initiated my transition to software engineering.</p>
        <p>I'm looking for a new opportunity in front end, back end, or full stack software development and am open to hybrid, in-person, or remote roles.</p>
        <p>I live in Denver with my husband Steve and two dogs and a cat - Molly, Olivia, and Bruce. I enjoy hiking and camping, reading, and exploring the many breweries in and around our city.</p>
        <div className="btn-wrapper">
        <a href="#contact" className="btn btn-primary">Let's Connect</a>
        </div>
        </div>
        </div>
      </div>
    </div>
  )
}