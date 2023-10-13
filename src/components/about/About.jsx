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
        <p>I am a full stack software engineer experienced in designing and building customer solutions.
        I have a unique journey that began in music education, where I directed high school bands for eight years.
        During my teaching tenure, I developed an invaluable skill set that helped me transition to software engineering.</p>
        <p>Teaching honed my identity as a lifelong learner, taught me how to collaborate effectively with a dynamic team, to analyze and make data-driven decisions, and strengthened my resilience and problem solving skills in the face of challenges.</p>
        <p>Since transitioning to engineering, I have developed a strong technical skill set to complement these assets.</p>
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