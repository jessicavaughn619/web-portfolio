import "./portfolio.css"

export default function ProjectCard({ project }) {
    const {image, title, technical, description, github, demo, live} = project;
    const techSkills = technical.map(skill => (
        <div className="skills">{skill}</div>
    ))

    return (
        <div className="project_card">
            <div className="portfolio__item-image">
                <img id="portfolio-image" src={image} alt={title} />
            </div>
            <div className="portfolio__item-title">
                <h3>{title}</h3>
                <div className="skills__container">
                {techSkills}
                </div>
            </div>
            <div className="portfolio__item-description">
                <p dangerouslySetInnerHTML={{ __html: description}} />
            </div>
            <div className="portfolio__item-cta">
                {demo && <a href={demo} className="btn btn-primary" target="_blank" rel="noreferrer">Demo</a>}
                {live && <a href={live} className="btn btn-primary" target="_blank" rel="noreferrer">Live Site</a>}
                <a href={github} className="btn btn-primary" target="_blank" rel="noreferrer">Github</a>
            </div>
        </div>
    )
}