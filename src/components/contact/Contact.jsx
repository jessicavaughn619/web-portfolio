import "./contact.css"
import {HiOutlineMail} from "react-icons/hi"
import {AiOutlineLinkedin} from "react-icons/ai"

export default function Contact() {
  return (
    <section id="contact">
    <h2>Let's Connect</h2>
    <h5>Contact Me</h5>

    <div className="container contact__container">
      
      <div className="contact__options">
        <article className="contact__option">
        <div className="contact__option-icon-wrapper">
          <HiOutlineMail className="contact__option-icon" />
          </div>
          <h4>Email</h4>
          <h6>jessica.vaughn619@gmail.com</h6>
          <div className="btn-wrapper">
          <a href="mailto:jessica.vaughn619@gmail.com" target="_blank" rel="noreferrer" className="btn btn-primary">Send a message</a>
          </div>
        </article>

        <article className="contact__option">
          <div className="contact__option-icon-wrapper">
          <AiOutlineLinkedin className="contact__option-icon" />
          </div>
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