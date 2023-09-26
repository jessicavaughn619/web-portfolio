import "./experience.css"
import technicalSkills from "./skills"
import ExperienceCard from "./ExperienceCard"

export default function Experience() {

  const topSkills = technicalSkills.filter(skill => (skill.topSkill === true))
  .sort((a, b) => {
    const skillA = a.order;
    const skillB = b.order;
    if (skillA < skillB) {
        return -1;
    }
    if (skillA > skillB) {
        return 1;
    }
    return 0;
  });

  // const frontEndSkills = technicalSkills.filter(skill => (skill.category === "frontEnd"))
  // .sort((a, b) => {
  //   const skillA = a.skill.toLowerCase();
  //   const skillB = b.skill.toLowerCase();
  //   if (skillA < skillB) {
  //       return -1;
  //   }
  //   if (skillA > skillB) {
  //       return 1;
  //   }
  //   return 0;
  // });

  // const backEndSkills = technicalSkills.filter(skill => (skill.category === "backEnd"))
  // .sort((a, b) => {
  //   const skillA = a.skill.toLowerCase();
  //   const skillB = b.skill.toLowerCase();
  //   if (skillA < skillB) {
  //       return -1;
  //   }
  //   if (skillA > skillB) {
  //       return 1;
  //   }
  //   return 0;
  // });

  // const devOpsSkills = technicalSkills.filter(skill => (skill.category === "devOps"))
  // .sort((a, b) => {
  //   const skillA = a.skill.toLowerCase();
  //   const skillB = b.skill.toLowerCase();
  //   if (skillA < skillB) {
  //       return -1;
  //   }
  //   if (skillA > skillB) {
  //       return 1;
  //   }
  //   return 0;
  // });

  
  const sortedTopSkills = topSkills.map((technicalSkill) => (
    <ExperienceCard
      key={technicalSkill.id} 
      technicalSkill={technicalSkill}
    />
  ))

  // const sortedFrontEndSkills = frontEndSkills.map((technicalSkill) => (
  //   <ExperienceCard
  //     key={technicalSkill.id} 
  //     technicalSkill={technicalSkill}
  //   />
  // ))

  // const sortedBackEndSkills = backEndSkills.map((technicalSkill) => (
  //   <ExperienceCard
  //     key={technicalSkill.id} 
  //     technicalSkill={technicalSkill}
  //   />
  // ))

  // const sortedDevOpsSkills = devOpsSkills.map((technicalSkill) => (
  //   <ExperienceCard
  //     key={technicalSkill.id} 
  //     technicalSkill={technicalSkill}
  //   />
  // ))

  return (
    <>
    <section id="experience">
    <h2>Technical Skills</h2>
    <h5>Languages, Frameworks, & Tools</h5>
    
    <div className="container experience__container">
      <div className="experience__skills">
      {sortedTopSkills}
      </div>
    </div>

    {/* <div className="container experience__container_trio">
    <div>
    <h5 className="heading">Front End Skills</h5>
    <div className="experience__container">
      <div className="experience__skills">
      {sortedFrontEndSkills}
      </div>
      </div>
    </div> 

    <div>
    <h5 className="heading">Back End Skills</h5>
    <div className="experience__container">
      <div className="experience__skills">
      {sortedBackEndSkills}
      </div>
    </div>
    </div>

    <div>
    <h5 className="heading">Tools & DevOps</h5>
    <div className="experience__container">
      <div className="experience__skills">
      {sortedDevOpsSkills}
      </div>
    </div>
    </div>
    
    </div> */}

    </section>
    </>
  )
}