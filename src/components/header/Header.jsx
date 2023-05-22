import React from 'react'
import "./header.css"
import CTA from "./CTA"
import ME from "../../assets/avatar.png"
import HeaderSocials from "./HeaderSocials"

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h3>Hello I'm</h3>
        <h1 className="profile-name">Jessica Vaughn</h1>
        <h3 className="text-light">a Software Engineer</h3>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="Jessica Vaughn" />
        </div>
        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header