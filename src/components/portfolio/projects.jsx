import IMG1 from "../../assets/wufr.jpeg"
import IMG2 from "../../assets/brewery-taplist.jpeg"
import IMG3 from "../../assets/band-locker-cli.png"
import IMG4 from "../../assets/myTunes.png"
import IMG5 from "../../assets/craftsy.png"

const projects = [
    
{
    id: 1,
    image: IMG1,
    title: "Wufr",
    technical: "JavaScript",
    description: "Swipe right to save your favorite dog images",
    github: "https://github.com/jessicavaughn619/phase-1-project-wufr",
    demo: "https://youtu.be/WAt56Ji8z8I",
    order: 5
},

{
    id: 2,
    image: IMG2,
    title: "Brewery Taplist",
    technical: "React, UI Semantic",
    description: "Track inventory and manage current beer list for breweries of all sizes",
    github: "https://github.com/jessicavaughn619/phase-2-project-brewery-taplist",
    demo: "https://youtu.be/KThVwCYGJ3Q",
    order: 3
},
{
    id: 3,
    image: IMG3,
    title: "Locker CLI",
    technical: "Python3, SQLAlchemy, Alembic",
    description: "Command Line Interface to manage student locker assignments",
    github: "https://github.com/jessicavaughn619/band-lockers",
    demo: "https://www.youtube.com/watch?v=jzYhgUnqOOo",
    order: 4
},
{
    id: 4,
    image: IMG4,
    title: "MyTunes",
    technical: "Flask, React, PostgreSQL, Sass",
    description: "Create unique playlists and listen to songs through Spotify",
    github: "https://github.com/jessicavaughn619/phase-4-project-mytunes",
    demo: "https://youtu.be/DFA_5AwnnIw",
    order: 2
},
{
    id: 5,
    image: IMG5,
    title: "Craftsy",
    technical: "Flask, React, PostgreSQL, Tailwind",
    description: "Purchase and review products through small-business e-commerce site",
    github: "https://github.com/jessicavaughn619/phase-5-craftsy",
    demo: "https://youtu.be/jWwT2GTx5rs",
    order: 1
}
]

export default projects;