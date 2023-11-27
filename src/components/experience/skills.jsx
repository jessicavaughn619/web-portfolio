import {AiOutlineConsoleSql, AiFillHtml5} from "react-icons/ai"
import {DiPython, DiCss3, DiSass, DiReact, DiPostgresql, DiRuby} from "react-icons/di"
import {TbFlask, TbBrandOauth} from "react-icons/tb"
import {SiSqlite, SiMongodb, SiExpress, 
    SiSemanticuireact, SiNodedotjs, SiNextdotjs, SiTailwindcss, SiRender, 
    SiRubyonrails, SiTypescript, SiJavascript} from "react-icons/si"
import {FiTarget} from "react-icons/fi"
import {PiFileSqlFill} from 'react-icons/pi'
import {BsGit, BsFillBootstrapFill} from 'react-icons/bs'
import {BiMobile, BiLogoDrupal} from 'react-icons/bi'
import {FaDocker, FaGithub} from 'react-icons/fa'

const technicalSkills = [
    {
        id: 1,
        icon: <AiFillHtml5 />,
        skill: "HTML",
        topSkill: true,
        category: "frontEnd",
        order: 9
    },
    {
        id: 2,
        icon: <SiJavascript />,
        skill: "JavaScript",
        topSkill: true,
        category: "frontEnd",
        order: 1
    },
    {
        id: 3,
        icon: <DiPython />,
        skill: "Python",
        topSkill: true,
        category: "backEnd",
        order: 5
    },
    {
        id: 4,
        icon: <AiOutlineConsoleSql />,
        skill: "SQL",
        topSkill: true,
        category: "backEnd",
        order: 13
    },
    {
        id: 5,
        icon: <DiRuby />,
        skill: "Ruby",
        topSkill: true,
        category: "backEnd",
        order: 7
    },
    {
        id: 6,
        icon: <SiRubyonrails />,
        skill: "Rails",
        topSkill: true,
        category: "backEnd",
        order: 8
    },
    {
        id: 7,
        icon: <BiLogoDrupal />,
        skill: "Drupal",
        topSkill: true,
        category: "cms",
        order: 15
    },
    {
        id: 8,
        icon: <DiCss3 />,
        skill: "CSS",
        topSkill: true,
        category: "frontEnd",
        order: 10
    },
    {
        id: 9,
        icon: <DiReact />,
        skill: "React.js",
        topSkill: true,
        category: "frontEnd",
        order: 3
    },
    {
        id: 10,
        icon: <BsGit />,
        skill: "Git",
        topSkill: true,
        category: "devOps",
        order: 17
    },
    {
        id: 11,
        icon: <TbFlask />,
        skill: "Flask",
        topSkill: true,
        category: "backEnd",
        order: 6
    },
    {
        id: 12,
        icon: <SiTailwindcss />,
        skill: "Tailwind",
        topSkill: true,
        category: "frontEnd",
        order: 12,
    },
    {
        id: 13,
        icon: <FaDocker />,
        skill: "Docker",
        topSkill: true,
        category: "devOps",
        order: 16
    },
    {
        id: 14,
        icon: <DiPostgresql />,
        skill: "PostgreSQL",
        topSkill: false,
        category: "backEnd"
    },
    {
        id: 15,
        icon: <FiTarget />,
        skill: "SQLAlchemy",
        topSkill: false,
        category: "backEnd"
    },
    {
        id: 16,
        icon: <SiRender />,
        skill: "Render",
        topSkill: false,
        category: "devOps"
    },
    {
        id: 17,
        icon: <SiSemanticuireact />,
        skill: "Semantic UI",
        topSkill: false,
        category: "frontEnd"
    },
    {
        id: 18,
        icon: <SiSqlite />,
        skill: "SQLite",
        topSkill: false,
        category: "backEnd"
    },
    {
        id: 19,
        icon: <DiSass />,
        skill: "Sass",
        topSkill: true,
        category: "frontEnd",
        order: 11
    },
    {
        id: 20,
        icon: <PiFileSqlFill />,
        skill: "Alembic",
        topSkill: false,
        category: "backEnd"
    },
    {
        id: 21,
        icon: <BiMobile />,
        skill: "React Native",
        topSkill: false,
        category: "frontEnd"
    },
    {
        id: 22,
        icon: <SiNextdotjs />,
        skill: "Next.js",
        topSkill: false,
        category: "frontEnd"
    },
    {
        id: 23,
        icon: <SiNodedotjs />,
        skill: "Node.js",
        topSkill: true,
        category: "backEnd",
        order: 4
    },
    {
        id: 24,
        icon: <BsFillBootstrapFill />,
        skill: "Bootstrap",
        topSkill: false,
        category: "frontEnd"
    },
    {
        id: 25,
        icon: <SiExpress />,
        skill: "Express",
        topSkill: false,
        category: "backEnd"
    },
    {
        id: 26,
        icon: <SiMongodb />,
        skill: "MongoDB",
        topSkill: false,
        category: "backEnd"
    },
    {
        id: 27,
        icon: <TbBrandOauth />,
        skill: "OAuth",
        topSkill: false,
        category: "backEnd"
    },
    {
        id: 28,
        icon: <SiTypescript />,
        skill: "TypeScript",
        topSkill: true,
        category: "frontEnd",
        order: 2
    },
    {
        id: 29,
        icon: <FaGithub />,
        skill: "GitHub",
        topSkill: true,
        category: "devOps",
        order: 18
    }
]

export default technicalSkills;