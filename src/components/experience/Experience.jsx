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
              <p>JavaScript</p>
              {/* <small className="text-light">Intermediate</small> */}
            </div>
          </article>
          <article className="experience__details">
            <DiPython className="experience__details-icon" />
            <div>
              <p>Python</p>
              {/* <small className="text-light">Novice</small> */}
            </div>
          </article>
          <article className="experience__details">
            <AiOutlineConsoleSql className="experience__details-icon" />
            <div>
              <p>SQL</p>
              {/* <small className="text-light">Intermediate</small> */}
            </div>
          </article>
          <article className="experience__details">
            <DiCss3 className="experience__details-icon" />
            <div>
              <p>CSS</p>
              {/* <small className="text-light">Novice</small> */}
            </div>
          </article>
          <article className="experience__details">
            <AiFillHtml5 className="experience__details-icon" />
            <div>
              <p>HTML</p>
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
              <p>React.js</p>
              {/* <small className="text-light">Novice</small> */}
            </div>
          </article>
          <article className="experience__details">
            <TbFlask className="experience__details-icon" />
            <div>
              <p>Flask</p>
              {/* <small className="text-light">Novice</small> */}
            </div>
          </article>
          <article className="experience__details">
            <DiPostgresql className="experience__details-icon" />
            <div>
              <p>PostgreSQL</p>
              {/* <small className="text-light">Novice</small> */}
            </div>
          </article>
          <article className="experience__details">
            <SiSqlite className="experience__details-icon" />
            <div>
              <p>SQLite3</p>
              {/* <small className="text-light">Novice</small> */}
            </div>
          </article>
          <article className="experience__details">
            <FiTarget className="experience__details-icon" />
            <div>
              <p>SQLAlchemy</p>
              {/* <small className="text-light">Novice</small> */}
            </div>
          </article>
          <article className="experience__details">
            <SiTailwindcss className="experience__details-icon" />
            <div>
              <p>Tailwind</p>
              {/* <small className="text-light">Novice</small> */}
            </div>
          </article>
          <article className="experience__details">
            <DiSass className="experience__details-icon" />
            <div>
              <p>Sass</p>
              {/* <small className="text-light">Novice</small> */}
            </div>
          </article>
          <article className="experience__details">
            <SiSemanticuireact className="experience__details-icon" />
            <div>
              <p>Semantic-UI</p>
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