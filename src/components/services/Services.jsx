import "./services.css"
import {BsCheck2} from "react-icons/bs"

export default function Services() {
  return (
    <section id="services">
    <h5>What I Offer</h5>
    <h2>Services</h2>

    <div className="container services__container">
      <article className="service">
        <div className="service__head">
          <h3>UI/UX Design</h3>
        </div>

        <ul className="service__list">
          <li>
          <BsCheck2 className="service__list-icon" />
          <p>Custom designed HTML and CSS.</p>
          </li>
          <li>
          <BsCheck2 className="service__list-icon" />
          <p>Design and incoporate site wires.</p>
          </li>
          <li>
          <BsCheck2 className="service__list-icon" />
          <p>Build dynamic React components.</p>
          </li>
          <li>
          <BsCheck2 className="service__list-icon" />
          <p>Connect frontend with databases.</p>
          </li>
          <li>
          <BsCheck2 className="service__list-icon" />
          <p>Create responsive apps for desktop and mobile.</p>
          </li>
          <li>
          <BsCheck2 className="service__list-icon" />
          <p>Incorporate user authentication.</p>
          </li>
        </ul>
      </article>
{/* END OF UI/UX */}

<article className="service">
        <div className="service__head">
          <h3>Web Development</h3>
        </div>

        <ul className="service__list">
          <li>
          <BsCheck2 className="service__list-icon" />
          <p>Loren, ipsum dolor sit.</p>
          </li>
          <li>
          <BsCheck2 className="service__list-icon" />
          <p>Loren, ipsum dolor sit.</p>
          </li>
          <li>
          <BsCheck2 className="service__list-icon" />
          <p>Loren, ipsum dolor sit.</p>
          </li>
          <li>
          <BsCheck2 className="service__list-icon" />
          <p>Loren, ipsum dolor sit.</p>
          </li>
          <li>
          <BsCheck2 className="service__list-icon" />
          <p>Loren, ipsum dolor sit.</p>
          </li>
          <li>
          <BsCheck2 className="service__list-icon" />
          <p>Loren, ipsum dolor sit.</p>
          </li>
        </ul>
      </article>
{/* END OF WEB DEVELOPMENT */}

<article className="service">
        <div className="service__head">
          <h3>Content Creation</h3>
        </div>

        <ul className="service__list">
          <li>
          <BsCheck2 className="service__list-icon" />
          <p>Custom designed HTML and CSS.</p>
          </li>
          <li>
          <BsCheck2 className="service__list-icon" />
          <p>Designing and incoporating site wires.</p>
          </li>
          <li>
          <BsCheck2 className="service__list-icon" />
          <p>Dynamic React components.</p>
          </li>
          <li>
          <BsCheck2 className="service__list-icon" />
          <p>Loren, ipsum dolor sit.</p>
          </li>
          <li>
          <BsCheck2 className="service__list-icon" />
          <p>Loren, ipsum dolor sit.</p>
          </li>
          <li>
          <BsCheck2 className="service__list-icon" />
          <p>Loren, ipsum dolor sit.</p>
          </li>
        </ul>
      </article>
{/* END OF CONTENT CREATION */}

    </div>
    </section>
  )
}