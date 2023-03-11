import React from 'react'
import {AiOutlineLinkedin} from "react-icons/ai"
import {AiOutlineGithub} from "react-icons/ai"
import {AiOutlineFacebook} from "react-icons/ai"
import {AiOutlineInstagram} from "react-icons/ai"
import {SlNotebook} from "react-icons/sl"

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/jessicavaughn619/" target="_blank"><AiOutlineLinkedin /></a>
        <a href="https://github.com/leopards4life" target="_blank"><AiOutlineGithub /></a>
        <a href="https://dev.to/jvaughn619" target="_blank"><SlNotebook /></a>
        <a href="https://www.facebook.com/jessica.vaughn619/" target="_blank"><AiOutlineFacebook /></a>
        <a href="https://www.instagram.com/jessicavaughn619/" target="_blank"><AiOutlineInstagram /></a>
    </div>
  )
}

export default HeaderSocials