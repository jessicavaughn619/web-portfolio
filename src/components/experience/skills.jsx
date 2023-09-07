import {AiOutlineConsoleSql, AiFillHtml5} from "react-icons/ai"
import {DiJavascript1, DiPython, DiCss3, DiSass, DiReact, DiPostgresql, DiRuby} from "react-icons/di"
import {TbFlask, TbBrandOauth} from "react-icons/tb"
import {SiSqlite, SiMongodb, SiExpress, SiMongoose, 
    SiSemanticuireact, SiNodedotjs, SiNextdotjs, SiTailwindcss, SiRender, 
    SiCsharp, SiDotnet, SiLinux, SiKubernetes, SiJenkins, SiAnsible, SiTerraform,
    SiRubyonrails} from "react-icons/si"
import {FiTarget} from "react-icons/fi"
import {PiFileSqlFill} from 'react-icons/pi'
import {BsGit, BsFillBootstrapFill} from 'react-icons/bs'
import {BiMobile} from 'react-icons/bi'
import {FaDocker} from 'react-icons/fa'

const technicalSkills = [
    {
        id: 1,
        icon: <AiFillHtml5 />,
        skill: "HTML",
        topSkill: true,
        category: "frontEnd",
        order: 7
    },
    {
        id: 2,
        icon: <DiJavascript1 />,
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
        order: 3
    },
    {
        id: 4,
        icon: <AiOutlineConsoleSql />,
        skill: "SQL",
        topSkill: true,
        category: "backEnd",
        order: 5
    },
    {
        id: 5,
        icon: <DiCss3 />,
        skill: "CSS",
        topSkill: true,
        category: "frontEnd",
        order: 8
    },
    {
        id: 7,
        icon: <DiReact />,
        skill: "React.js",
        topSkill: true,
        category: "frontEnd",
        order: 2
    },
    {
        id: 9,
        icon: <TbFlask />,
        skill: "Flask",
        topSkill: true,
        category: "backEnd",
        order: 4
    },
    {
        id: 13,
        icon: <SiTailwindcss />,
        skill: "Tailwind",
        topSkill: true,
        category: "frontEnd",
        order: 6
    },
    {
        id: 8,
        icon: <DiPostgresql />,
        skill: "PostgreSQL",
        topSkill: false,
        category: "backEnd"
    },
    {
        id: 16,
        icon: <FiTarget />,
        skill: "SQLAlchemy",
        topSkill: false,
        category: "backEnd"
    },
    {
        id: 10,
        icon: <SiRender />,
        skill: "Render",
        topSkill: false,
        category: "devOps"
    },
    {
        id: 11,
        icon: <SiSemanticuireact />,
        skill: "Semantic UI",
        topSkill: false,
        category: "frontEnd"
    },
    {
        id: 12,
        icon: <SiSqlite />,
        skill: "SQLite",
        topSkill: false,
        category: "backEnd"
    },
    {
        id: 6,
        icon: <DiSass />,
        skill: "Sass",
        topSkill: false,
        category: "frontEnd"
    },
    {
        id: 14,
        icon: <BsGit />,
        skill: "Git",
        topSkill: false,
        category: "devOps"
    },
    {
        id: 15,
        icon: <PiFileSqlFill />,
        skill: "Alembic",
        topSkill: false,
        category: "backEnd"
    },
    {
        id: 17,
        icon: <BiMobile />,
        skill: "React Native",
        topSkill: false,
        category: "frontEnd"
    },
    {
        id: 18,
        icon: <SiNextdotjs />,
        skill: "Next.js",
        topSkill: false,
        category: "frontEnd"
    },
    {
        id: 19,
        icon: <SiNodedotjs />,
        skill: "Node.js",
        topSkill: false,
        category: "backEnd"
    },
    {
        id: 20,
        icon: <BsFillBootstrapFill />,
        skill: "Bootstrap",
        topSkill: false,
        category: "frontEnd"
    },
    {
        id: 21,
        icon: <SiExpress />,
        skill: "Express",
        topSkill: false,
        category: "backEnd"
    },
    {
        id: 23,
        icon: <SiMongodb />,
        skill: "MongoDB",
        topSkill: false,
        category: "backEnd"
    },
    {
        id: 24,
        icon: <SiMongoose />,
        skill: "Mongoose",
        topSkill: false,
        category: "backEnd"
    },
    {
        id: 25,
        icon: <TbBrandOauth />,
        skill: "OAuth",
        topSkill: false,
        category: "backEnd"
    },
    {
        id: 27,
        icon: <FaDocker />,
        skill: "Docker",
        topSkill: false,
        category: "devOps"
    },
    {
        id: 28,
        icon: <SiCsharp />,
        skill: "C#",
        topSkill: false,
        category: "backEnd"
    },
    {
        id: 29,
        icon: <SiDotnet />,
        skill: ".NET",
        topSkill: false,
        category: "backEnd"
    },
    {
        id: 30,
        icon: <SiLinux />,
        skill: "Linux",
        topSkill: false,
        category: "devOps"
    },
    {
        id: 31,
        icon: <SiKubernetes />,
        skill: "Kubernetes",
        topSkill: false,
        category: "devOps"
    },
    {
        id: 32,
        icon: <SiJenkins />,
        skill: "Jenkins",
        topSkill: false,
        category: "devOps"
    },
    {
        id: 33,
        icon: <SiAnsible />,
        skill: "Ansible",
        topSkill: false,
        category: "devOps"
    },
    {
        id: 34,
        icon: <SiTerraform />,
        skill: "Terraform",
        topSkill: false,
        category: "devOps"
    },
    {
        id: 35,
        icon: <DiRuby />,
        skill: "Ruby",
        topSkill: false,
        category: "backEnd"
    },
    {
        id: 36,
        icon: <SiRubyonrails />,
        skill: "Rails",
        topSkill: false,
        category: "backEnd"
    }
]

export default technicalSkills;