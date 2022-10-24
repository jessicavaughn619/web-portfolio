import React from 'react'
import "./contact.css"
import {HiOutlineMail} from "react-icons/hi"
import {FaFacebookMessenger} from "react-icons/fa"
import {BsWhatsapp} from "react-icons/bs"
import { useRef } from 'react';
import emailjs from "emailjs-com"

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_c27cszn", 'service_c27cszn', form.current, 'B4ijyBs1IUKrWxGXg')
    
    e.target.reset()
  };

  return (
    <section id="contact">
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>

    <div className="container contact__container">
      
      <div className="contact__options">
        <article className="contact__option">
          <HiOutlineMail className="contact__option-icon" />
          <h4>Email</h4>
          <h5>hello@jessicavaughn.me</h5>
          <a href="mailto:hello@jessicavaughn.me" target="_blank">Send a message</a>
        </article>

        <article className="contact__option">
          <FaFacebookMessenger className="contact__option-icon" />
          <h4>Messenger</h4>
          <h5>Jessica Vaughn</h5>
          <a href="https://m.me/jessica.vaughn619" target="_blank">Send a message</a>
        </article>

      </div>
      
      {/*  END OF CONTACT OPTIONS   */}

      <form className="contact__form" ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Your Full Name" required></input>
        <input type="email" name="email" placeholder="Your Email" required></input>
        <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>
    </div>

    </section>
  )
}

export default Contact