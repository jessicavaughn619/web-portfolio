import {AiOutlineLinkedin} from "react-icons/ai"
import {AiOutlineGithub} from "react-icons/ai"
import {AiOutlineFacebook} from "react-icons/ai"
import {AiOutlineInstagram} from "react-icons/ai"
import {SlNotebook} from "react-icons/sl"

export default function HeaderSocials() {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/jessicavaughn619/" target="_blank" rel="noreferrer"><AiOutlineLinkedin /></a>
        <a href="https://github.com/jessicavaughn619" target="_blank" rel="noreferrer"><AiOutlineGithub /></a>
        <a href="https://dev.to/jvaughn619" target="_blank" rel="noreferrer"><SlNotebook /></a>
        <a href="https://www.facebook.com/jessica.vaughn619/" target="_blank" rel="noreferrer"><AiOutlineFacebook /></a>
        <a href="https://www.instagram.com/jessicavaughn619/" target="_blank" rel="noreferrer"><AiOutlineInstagram /></a>
    </div>
  )
}