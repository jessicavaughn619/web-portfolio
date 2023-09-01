import "./header.css"
import CTA from "./CTA"
import ME from "../../assets/headshot.png"
import HeaderSocials from "./HeaderSocials"
import About from '../about/About'

export default function Header() {

  return (
    <header>
      <div className="container header__container">
        <h3>Hello I'm</h3>
        <h1 className="profile-name">Jessica Vaughn</h1>
        <h3 className="text-light">a Software Engineer</h3>
        <CTA />
        <h5>Get To Know</h5>
        <h2>About Me</h2>
        <div id="get-to-know-container" className="grid__container">
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="Jessica Vaughn"/>
        </div>
        <About />
        <a href="/#contact" className="scroll__down">Scroll Down</a>
      </div>
      </div>
    </header>
  )
}