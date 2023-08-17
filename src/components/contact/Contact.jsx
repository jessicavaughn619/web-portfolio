import "./contact.css"
import {HiOutlineMail} from "react-icons/hi"
import {AiOutlineLinkedin} from "react-icons/ai"

export default function Contact() {
  return (
    <section id="contact">
    <h5>Let's Connect</h5>
    <h2>Contact Me</h2>

    <div className="container contact__container">
      
      <div className="contact__options">
        <article className="contact__option">
          <HiOutlineMail className="contact__option-icon" />
          <h4>Email</h4>
          <h6>jessica.vaughn619@gmail.com</h6>
          <div className="btn-wrapper">
          <a href="mailto:jessica.vaughn619@gmail.com" target="_blank" rel="noreferrer" className="btn btn-primary">Send a message</a>
          </div>
        </article>

        <article className="contact__option">
          <AiOutlineLinkedin className="contact__option-icon" />
          <h4>LinkedIn</h4>
          <h6>Jessica Vaughn</h6>
          <div className="btn-wrapper">
          <a href="https://www.linkedin.com/in/jessicavaughn619/" target="_blank" rel="noreferrer" className="btn btn-primary">View profile</a>
          </div>
        </article>
      </div>
    </div>

    </section>
  )
}