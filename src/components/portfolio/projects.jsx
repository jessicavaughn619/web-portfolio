import ljcrafts from "../../assets/ljcrafts.png"
import stitchfix from '../../assets/stitch-fix.png'

const projects = [

{
    id: 1,
    image: ljcrafts,
    title: "",
    technical: ["React", "Flask", "PostgreSQL", "Tailwind"],
    description: "E-commerce site built for a local small business in Colorado. Browse, purchase, and review products.",
    github: "https://github.com/jessicavaughn619/phase-5-craftsy",
    demo: "",
    live: "https://lajuntacrafts.com/",
    order: 1
},
    {
        id: 2,
        image: stitchfix,
        title: "",
        technical: ["React"],
        description: "UI clone of Stitch Fix personal styling website home page. Support Stitch Fix by visiting <a href='https://www.stitchfix.com/' class='project-link'>their website</a>.",
        github: "https://github.com/jessicavaughn619/stitch-fix-clone",
        demo: "",
        live: "https://stitch-fix-clone.onrender.com/",
        order: 2

    }
]

export default projects;