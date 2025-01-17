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
        <p>I am a 14x Certified Salesforce Developer & Consultant with Hike2, where I design and build custom cloud-solutions for clients. Prior to joining Hike2, I worked as a full-stack web developer designing and building solutions for small businesses and non-profit organizations.</p>
        <p>My professional career began in the Education industry, where I taught high school band for 8 years. I am a lifelong learner adept in mastering new skills and technologies, a dynamic team leader and contributor, and a problem-solver and solution-builder at my core.</p>
        <p>I live in Denver with my husband Steve and two dogs and a cat - Molly, Olivia, and Bruce. I enjoy hiking and camping, listening to and performing music, reading, and exploring the many breweries in and around our city.</p>
        <div className="btn-wrapper">
        <a href="#contact" className="btn btn-primary">Let's Connect</a>
        </div>
        </div>
        </div>
      </div>
    </div>
  )
}