export default function ExperienceCard({ technicalSkill }) {
    const {icon, skill} = technicalSkill
    return (
        <article className="experience__details">
                <span className="experience__details-icon">{icon}</span>
                <p className="experience__content">{skill}</p>
          </article>
    )
}