import React from 'react'
import "./experience.css"
import {AiOutlineConsoleSql, AiFillHtml5} from "react-icons/ai"
import {DiJavascript1, DiPython, DiCss3, DiSass, DiReact, DiPostgresql} from "react-icons/di"
import {TbFlask} from "react-icons/tb"
import {SiSqlite, SiSemanticuireact, SiTailwindcss} from "react-icons/si"
import {FiTarget} from "react-icons/fi"

const Experience = () => {
  return (
    <section id="experience">
    <h5>What Skills I Have</h5>
    <h2>Languages & Frameworks</h2>
    
    <div className="container experience__container">
      <div className="experience__languages">
        <h3>Languages</h3>
        <div className="experience__content">
          <article className="experience__details">
            <DiJavascript1 className="experience__details-icon" />
            <div>
              <h4>JavaScript</h4>
              {/* <small className="text-light">Intermediate</small> */}
            </div>
          </article>
          <article className="experience__details">
            <DiPython className="experience__details-icon" />
            <div>
              <h4>Python</h4>
              {/* <small className="text-light">Novice</small> */}
            </div>
          </article>
          <article className="experience__details">
            <AiOutlineConsoleSql className="experience__details-icon" />
            <div>
              <h4>SQL</h4>
              {/* <small className="text-light">Intermediate</small> */}
            </div>
          </article>
          <article className="experience__details">
            <DiCss3 className="experience__details-icon" />
            <div>
              <h4>CSS</h4>
              {/* <small className="text-light">Novice</small> */}
            </div>
          </article>
          <article className="experience__details">
            <AiFillHtml5 className="experience__details-icon" />
            <div>
              <h4>HTML</h4>
              {/* <small className="text-light">Novice</small> */}
            </div>
          </article>
        </div>
      </div>
      
      <div className="experience__frameworks">
      <h3>Frameworks & Tools</h3>
        <div className="experience__content">
          <article className="experience__details">
            <DiReact className="experience__details-icon" />
            <div>
              <h4>React.js</h4>
              {/* <small className="text-light">Novice</small> */}
            </div>
          </article>
          <article className="experience__details">
            <TbFlask className="experience__details-icon" />
            <div>
              <h4>Flask</h4>
              {/* <small className="text-light">Novice</small> */}
            </div>
          </article>
          <article className="experience__details">
            <DiPostgresql className="experience__details-icon" />
            <div>
              <h4>PostgreSQL</h4>
              {/* <small className="text-light">Novice</small> */}
            </div>
          </article>
          <article className="experience__details">
            <SiSqlite className="experience__details-icon" />
            <div>
              <h4>SQLite3</h4>
              {/* <small className="text-light">Novice</small> */}
            </div>
          </article>
          <article className="experience__details">
            <FiTarget className="experience__details-icon" />
            <div>
              <h4>SQLAlchemy</h4>
              {/* <small className="text-light">Novice</small> */}
            </div>
          </article>
          <article className="experience__details">
            <SiTailwindcss className="experience__details-icon" />
            <div>
              <h4>Tailwind</h4>
              {/* <small className="text-light">Novice</small> */}
            </div>
          </article>
          <article className="experience__details">
            <DiSass className="experience__details-icon" />
            <div>
              <h4>Sass</h4>
              {/* <small className="text-light">Novice</small> */}
            </div>
          </article>
          <article className="experience__details">
            <SiSemanticuireact className="experience__details-icon" />
            <div>
              <h4>Semantic-UI</h4>
              {/* <small className="text-light">Novice</small> */}
            </div>
          </article>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Experience