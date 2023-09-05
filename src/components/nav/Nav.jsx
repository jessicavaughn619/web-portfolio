import "./nav.css"
import {BiHome} from "react-icons/bi"
import {AiOutlineUser} from "react-icons/ai"
import {BsCodeSlash} from "react-icons/bs"
import {HiOutlineMail} from "react-icons/hi"
import {LiaToolsSolid} from "react-icons/lia"
import {useState, useEffect} from "react"

export default function Nav() {
  const [activeNav, setActiveNav] = useState("#")
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrolling) {
        const sections = document.querySelectorAll("section");
        const scrollPosition = window.scrollY;
        const bottomOffset = document.documentElement.scrollHeight - window.innerHeight;

        sections.forEach((section) => {
          const sectionId = `#${section.getAttribute("id")}`;

          if (
            section.offsetTop <= scrollPosition + 100 &&
            section.offsetTop + section.offsetHeight > scrollPosition + 100
          ) {
            setActiveNav(sectionId);
          }
        });

        if (scrollPosition < 100) {
          setActiveNav("#");
        }

        if (scrollPosition >= bottomOffset) {
          setActiveNav("#contact");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolling]);

  const handleClick = (sectionId) => {
    setScrolling(true);
    setActiveNav(sectionId);
    setTimeout(() => {
      setScrolling(false);
    }, 1000);
  };

  return (
    <nav>
      <a href="/#" onClick={() => handleClick("#")} className={activeNav === "#" ? "active" : ""}><BiHome /></a>
      <a href="/#about" onClick={() => handleClick("#about")} className={activeNav === "#about" ? "active" : ""}><AiOutlineUser /></a>
      <a href="/#portfolio" onClick={() => handleClick("#portfolio")} className={activeNav === "#portfolio" ? "active" : ""}><BsCodeSlash /></a>
      <a href="/#experience" onClick={() => handleClick("#experience")} className={activeNav === "#experience" ? "active" : ""}><LiaToolsSolid /></a>
      <a href="/#contact" onClick={() => handleClick("#contact")} className={activeNav === "#contact" ? "active" : ""}><HiOutlineMail /></a>
    </nav>
  )
}