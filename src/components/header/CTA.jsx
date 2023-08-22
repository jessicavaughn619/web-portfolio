import Resume from "../../assets/Resume.pdf"

export default function CTA() {
  return (
    <div className="cta">
        <div className="btn-wrapper">
        <a href={Resume} target="_blank" rel="noreferrer" className="btn">View Resume</a>
        </div>
        <div className="btn-wrapper">
        <a href="/#contact" className="btn">Let's Connect</a>
        </div>
    </div>
  )
}