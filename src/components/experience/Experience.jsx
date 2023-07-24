import "./experience.css"
import {AiOutlineConsoleSql, AiFillHtml5} from "react-icons/ai"
import {DiJavascript1, DiPython, DiCss3, DiSass, DiReact, DiPostgresql} from "react-icons/di"
import {TbFlask} from "react-icons/tb"
import {SiSqlite, SiSemanticuireact, SiTailwindcss, SiYaml, SiHcl, 
  SiGithubactions, SiKubernetes, SiAnsible, SiTerraform, SiJenkins, SiRender} from "react-icons/si"
import {FiTarget} from "react-icons/fi"
import {FaDocker} from 'react-icons/fa'
import {PiFileSqlFill} from 'react-icons/pi'
import {BsGit} from 'react-icons/bs'

export default function Experience() {
  return (
    <section id="experience">
    <h5>What Skills I Have</h5>
    <h2>Languages, Frameworks, & Tools</h2>
    
    <div className="container experience__container">
      <div className="experience__languages">
        <h3>Languages</h3>
        <div className="experience__content">
        <article className="experience__details">
            <DiPython className="experience__details-icon" />
            <div>
              <p>Python</p>
            </div>
          </article>
          <article className="experience__details">
            <DiJavascript1 className="experience__details-icon" />
            <div>
              <p>JavaScript</p>
            </div>
          </article>
          <article className="experience__details">
            <AiOutlineConsoleSql className="experience__details-icon" />
            <div>
              <p>SQL</p>
            </div>
          </article>
          <article className="experience__details">
            <SiYaml className="experience__details-icon" />
            <div>
              <p>YAML</p>
            </div>
          </article>
          <article className="experience__details">
            <SiHcl className="experience__details-icon" />
            <div>
              <p>HCL</p>
            </div>
          </article>
          <article className="experience__details">
            <DiCss3 className="experience__details-icon" />
            <div>
              <p>CSS</p>
            </div>
          </article>
          <article className="experience__details">
            <AiFillHtml5 className="experience__details-icon" />
            <div>
              <p>HTML</p>
            </div>
          </article>
        </div>
      </div>
      
      <div className="experience__frameworks">
      <h3>Frameworks</h3>
        <div className="experience__content">
          <article className="experience__details">
            <DiReact className="experience__details-icon" />
            <div>
              <p>React</p>
            </div>
          </article>
          <article className="experience__details">
            <TbFlask className="experience__details-icon" />
            <div>
              <p>Flask</p>
            </div>
          </article>
          <article className="experience__details">
            <DiPostgresql className="experience__details-icon" />
            <div>
              <p>PostgreSQL</p>
            </div>
          </article>
          <article className="experience__details">
            <SiSqlite className="experience__details-icon" />
            <div>
              <p>SQLite</p>
            </div>
          </article>
          <article className="experience__details">
            <FiTarget className="experience__details-icon" />
            <div>
              <p>SQLAlchemy</p>
            </div>
          </article>
          <article className="experience__details">
            <SiTailwindcss className="experience__details-icon" />
            <div>
              <p>Tailwind</p>
            </div>
          </article>
          <article className="experience__details">
            <DiSass className="experience__details-icon" />
            <div>
              <p>Sass</p>
            </div>
          </article>
          <article className="experience__details">
            <SiSemanticuireact className="experience__details-icon" />
            <div>
              <p>Semantic-UI</p>
            </div>
          </article>
        </div>
      </div>

      <div className="experience__tools">
      <h3>Tools</h3>
        <div className="experience__content">
          <article className="experience__details">
            <PiFileSqlFill className="experience__details-icon" />
            <div>
              <p>Alembic</p>
            </div>
          </article>
          <article className="experience__details">
            <FaDocker className="experience__details-icon" />
            <div>
              <p>Docker</p>
            </div>
          </article>
          <article className="experience__details">
            <BsGit className="experience__details-icon" />
            <div>
              <p>Git</p>
            </div>
          </article>
          <article className="experience__details">
            <SiGithubactions className="experience__details-icon" />
            <div>
              <p>GitHub Actions</p>
            </div>
          </article>
          <article className="experience__details">
            <SiKubernetes className="experience__details-icon" />
            <div>
              <p>Kubernetes</p>
            </div>
          </article>
          <article className="experience__details">
            <SiAnsible className="experience__details-icon" />
            <div>
              <p>Ansible</p>
            </div>
          </article>
          <article className="experience__details">
            <SiTerraform className="experience__details-icon" />
            <div>
              <p>Terraform</p>
            </div>
          </article>
          <article className="experience__details">
            <SiJenkins className="experience__details-icon" />
            <div>
              <p>Jenkins</p>
            </div>
          </article>
          <article className="experience__details">
            <SiRender className="experience__details-icon" />
            <div>
              <p>Render</p>
            </div>
          </article>
        </div>
      </div>
    </div>
    </section>
  )
}