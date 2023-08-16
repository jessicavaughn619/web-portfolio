import "./portfolio.css"

export default function ProjectCard({ project }) {
    const {image, title, technical, description, github, demo, live} = project;

    return (
        <div className="project_card">
            <div className="portfolio__item-image">
                <img id="portfolio-image" src={image} alt={title} />
            </div>
            <div className="portfolio__item-title">
                <h3>{title}</h3>
                <p>{technical}</p>
            </div>
            <div className="portfolio__item-description">
                <p>{description}</p>
            </div>
            <div className="portfolio__item-cta">
                <a href={github} className="btn btn-primary" target="_blank" rel="noreferrer">Github</a>
                {demo && <a href={demo} className="btn btn-primary" target="_blank" rel="noreferrer">Demo</a>}
                {live && <a href={live} className="btn btn-primary" target="_blank" rel="noreferrer">Live</a>}
            </div>
        </div>
    )
}