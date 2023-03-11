import React from 'react'
import "./contact.css"
import {HiOutlineMail} from "react-icons/hi"
import {AiOutlineLinkedin} from "react-icons/ai"
import { useRef } from 'react';
import emailjs from "emailjs-com"

const Contact = () => {

  return (
    <section id="contact">
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>

    <div className="container contact__container">
      
      <div className="contact__options">
        <article className="contact__option">
          <HiOutlineMail className="contact__option-icon" />
          <h4>Email</h4>
          <h6>jessica.vaughn619@gmail.com</h6>
          <a href="mailto:jessica.vaughn619@gmail.com" target="_blank">Send a message</a>
        </article>

        <article className="contact__option">
          <AiOutlineLinkedin className="contact__option-icon" />
          <h4>LinkedIn</h4>
          <h6>Jessica Vaughn</h6>
          <a href="https://www.linkedin.com/in/jessicavaughn619/">View profile</a>
        </article>
      </div>
    </div>

    </section>
  )
}

export default Contact