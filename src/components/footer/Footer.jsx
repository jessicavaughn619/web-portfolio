import React from 'react'
import "./footer.css"
import {AiOutlineFacebook} from "react-icons/ai"
import {AiOutlineInstagram} from "react-icons/ai"
import {AiOutlineLinkedin} from "react-icons/ai"
import {AiOutlineGithub} from "react-icons/ai"
import {SlNotebook} from "react-icons/sl"

const Footer = () => {
  const today = new Date().getFullYear();

  return (
    <footer>
      <a href="#" className="footer__logo">Jessica Vaughn</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        {/* <li><a href="#services">Services</a></li> */}
        <li><a href="#portfolio">Portfolio</a></li>
        {/* <li><a href="#testimonials">Testimonials</a></li> */}
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/jessicavaughn619/" target="_blank"><AiOutlineLinkedin /></a>
        <a href="https://github.com/jessicavaughn619" target="_blank"><AiOutlineGithub /></a>
        <a href="https://dev.to/jvaughn619" target="_blank"><SlNotebook /></a>
        <a href="https://www.facebook.com/jessica.vaughn619/" target="_blank"><AiOutlineFacebook /></a>
        <a href="https://www.instagram.com/jessicavaughn619/" target="_blank"><AiOutlineInstagram /></a>
      </div>

      <div className="footer__copyright">
        © Jessica Vaughn {today}
      </div>
    </footer>
  )
}

export default Footer