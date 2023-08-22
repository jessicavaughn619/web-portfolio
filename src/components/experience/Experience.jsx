import "./experience.css"
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