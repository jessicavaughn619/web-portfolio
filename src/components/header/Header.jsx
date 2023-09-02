import "./header.css"
import CTA from "./CTA"
import HeaderSocials from "./HeaderSocials"
import About from '../about/About'

export default function Header() {

  return (
    <header>
      <div className="container header__container">
        <h3>Hi, I'm</h3>
        <h1 className="profile-name">Jessica Vaughn</h1>
        <h3 className="text-light">a Software Engineer</h3>
        <CTA />
        <section id="about">
        <h2>Get To Know</h2>
        <h5>About Me</h5>
        <div id="get-to-know-container" className="grid__container">
        <HeaderSocials />
        <About />
        <a href="/#contact" className="scroll__down">Scroll Down</a>
      </div>
      </section>
      </div>
    </header>
  )
}