import "./footer.css"
import {AiOutlineFacebook} from "react-icons/ai"
import {AiOutlineInstagram} from "react-icons/ai"
import {AiOutlineLinkedin} from "react-icons/ai"
import {AiOutlineGithub} from "react-icons/ai"
import {SlNotebook} from "react-icons/sl"

export default function Footer() {
  const today = new Date().getFullYear();

  return (
    <footer>
      <a href="/#" className="footer__logo">Jessica Vaughn</a>

      <ul className="permalinks">
        <li><a href="/#">Home</a></li>
        <li><a href="/#about">About</a></li>
        <li><a href="/#experience">Skills</a></li>
        <li><a href="/#portfolio">Portfolio</a></li>
        <li><a href="/#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/jessicavaughn619/" target="_blank" rel="noreferrer"><AiOutlineLinkedin /></a>
        <a href="https://github.com/jessicavaughn619" target="_blank" rel="noreferrer"><AiOutlineGithub /></a>
        <a href="https://dev.to/jvaughn619" target="_blank" rel="noreferrer"><SlNotebook /></a>
        <a href="https://www.facebook.com/jessica.vaughn619/" target="_blank" rel="noreferrer"><AiOutlineFacebook /></a>
        <a href="https://www.instagram.com/jessicavaughn619/" target="_blank" rel="noreferrer"><AiOutlineInstagram /></a>
      </div>

      <div className="footer__copyright">
        © Jessica Vaughn {today}
      </div>
    </footer>
  )
}