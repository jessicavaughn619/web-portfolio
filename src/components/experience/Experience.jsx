import React from 'react'
import "./experience.css"
import {AiOutlineCheckCircle} from "react-icons/ai"

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
            <AiOutlineCheckCircle className="experience__details-icon" />
            <div>
              <h4>JavaScript</h4>
              {/* <small className="text-light">Intermediate</small> */}
            </div>
          </article>
          <article className="experience__details">
            <AiOutlineCheckCircle className="experience__details-icon" />
            <div>
              <h4>Python</h4>
              {/* <small className="text-light">Novice</small> */}
            </div>
          </article>
          <article className="experience__details">
            <AiOutlineCheckCircle className="experience__details-icon" />
            <div>
              <h4>HTML</h4>
              {/* <small className="text-light">Novice</small> */}
            </div>
          </article>
          <article className="experience__details">
            <AiOutlineCheckCircle className="experience__details-icon" />
            <div>
              <h4>CSS</h4>
              {/* <small className="text-light">Novice</small> */}
            </div>
          </article>
        </div>
      </div>
      
      <div className="experience__frameworks">
      <h3>Frameworks</h3>
        <div className="experience__content">
          <article className="experience__details">
            <AiOutlineCheckCircle className="experience__details-icon" />
            <div>
              <h4>React</h4>
              {/* <small className="text-light">Novice</small> */}
            </div>
          </article>
          <article className="experience__details">
            <AiOutlineCheckCircle className="experience__details-icon" />
            <div>
              <h4>UI Semantic</h4>
              {/* <small className="text-light">Novice</small> */}
            </div>
          </article>
          <article className="experience__details">
            <AiOutlineCheckCircle className="experience__details-icon" />
            <div>
              <h4>Node</h4>
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