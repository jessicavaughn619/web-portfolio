import "./experience.css"
import technicalSkills from "./skills"
import ExperienceCard from "./ExperienceCard"

export default function Experience() {

  const topSkills = technicalSkills.filter(skill => (skill.topSkill === true))
  .sort((a, b) => {
    const skillA = a.skill.toLowerCase();
    const skillB = b.skill.toLowerCase();
    if (skillA < skillB) {
        return -1;
    }
    if (skillA > skillB) {
        return 1;
    }
    return 0;
  });

  const allSkills = technicalSkills.filter(skill => (skill.topSkill === false))
  .sort((a, b) => {
    const skillA = a.skill.toLowerCase();
    const skillB = b.skill.toLowerCase();
    if (skillA < skillB) {
        return -1;
    }
    if (skillA > skillB) {
        return 1;
    }
    return 0;
  });

  
  const sortedTopSkills = topSkills.map((technicalSkill) => (
    <ExperienceCard
      key={technicalSkill.id} 
      technicalSkill={technicalSkill}
    />
  ))

  const sortedAllSkills = allSkills.map((technicalSkill) => (
    <ExperienceCard
      key={technicalSkill.id} 
      technicalSkill={technicalSkill}
    />
  ))

  return (
    <>
    <section id="experience">
    <h5>Technical Skills</h5>
    <h2>Top Languages & Frameworks</h2>
    
    <div className="container experience__container">
      <div className="experience__skills">
      {sortedTopSkills}
      </div>
    </div>
    
    </section>
    <section id="experience">
        <h2>All Skills & Tools</h2>
    <div className="container experience__container">
      <div className="experience__skills">
      {sortedAllSkills}
      </div>
    </div>
    </section>
    </>
  )
}