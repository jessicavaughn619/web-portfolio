import Resume from "../../assets/Resume.pdf"

export default function CTA() {
  return (
    <div className="cta">
        <a href={Resume} download className="btn">Download Resume</a>
        <a href="/#contact" className="btn">Let's Connect</a>
    </div>
  )
}