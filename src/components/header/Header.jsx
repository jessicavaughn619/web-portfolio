import React from 'react'
import "./header.css"
import CTA from "./CTA"
import ME from "../../assets/avatar.png"
import FAM from "../../assets/family.jpeg"
import HeaderSocials from "./HeaderSocials"

const Header = () => {

  function handleMouseOver(event) {
    event.target.src = FAM
  }

  function handleMouseOut(event) {
    event.target.src = ME
  }

  return (
    <header>
      <div className="container header__container">
        <h3>Hello I'm</h3>
        <h1 className="profile-name">Jessica Vaughn</h1>
        <h3 className="text-light">a Software Engineer</h3>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="Jessica Vaughn" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}/>
        </div>
        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header