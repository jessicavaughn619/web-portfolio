import "./experience.css"
// import {AiOutlineConsoleSql, AiFillHtml5} from "react-icons/ai"
// import {DiJavascript1, DiPython, DiCss3, DiSass, DiReact, DiPostgresql} from "react-icons/di"
// import {TbFlask} from "react-icons/tb"
// import {SiSqlite, SiSemanticuireact, SiTailwindcss, 
//   SiGithubactions, SiKubernetes, SiAnsible, SiTerraform, SiJenkins, SiRender} from "react-icons/si"
// import {FiTarget} from "react-icons/fi"
// import {FaDocker} from 'react-icons/fa'
// import {PiFileSqlFill} from 'react-icons/pi'
// import {BsGit} from 'react-icons/bs'
import technicalSkills from "./skills"
import ExperienceCard from "./ExperienceCard"

export default function Experience() {

  const allSkills = technicalSkills.map((technicalSkill) => (
    <ExperienceCard
      key={technicalSkill.id} 
      technicalSkill={technicalSkill}
    />
  ))

  return (
    <section id="experience">
    <h5>Technical Skills</h5>
    <h2>Skills</h2>
    
    <div className="container experience__container">
      <div className="experience__skills">
      {allSkills}
      </div>
    </div>
    </section>
  )
}