import React from 'react'
import {AiOutlineLinkedin} from "react-icons/ai"
import {AiOutlineGithub} from "react-icons/ai"
import {AiOutlineDribbbleSquare} from "react-icons/ai"

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/jessicavaughn619/" target="_blank"><AiOutlineLinkedin /></a>
        <a href="https://github.com/leopards4life" target="_blank"><AiOutlineGithub /></a>
        <a href="https://dribbble.com/jessicavaughn619" target="_blank"><AiOutlineDribbbleSquare /></a>
    </div>
  )
}

export default HeaderSocials