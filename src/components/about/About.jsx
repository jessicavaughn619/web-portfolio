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
        <p>I am a Certified Salesforce Developer with Revolent Group, where I build custom Salesforce solutions for clients. Prior to joining Revolent Group, I worked as a full-stack web developer
          designing and building solutions for small businesses and non-profit organizations.</p>
        <p>My professional career began in the Education industry, where I taught high school band for 8 years. Teaching honed my identity as a lifelong learner, taught me how to collaborate effectively with a dynamic team, to analyze and make data-driven decisions, 
          and strengthened my resilience and problem solving skills in the face of challenges. Each of these skills transferred beautifully into my career as a Software Engineer.</p>
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