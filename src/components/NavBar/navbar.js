import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";
import Contact from "../../assets/contact.png";
const Navbar = () => {
    return(
        <nav className="navbar">
            <img src={logo} alt="Logo" className="logo"/>
            <div className="desktopmenu">
                <Link  activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500}  className="desktopmenuListItem">HOME</Link>
                <Link  activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} className="desktopmenuListItem">ABOUT</Link>
                <Link  activeClass="active" to="education" spy={true} smooth={true} offset={-50} duration={500} className="desktopmenuListItem">EDUCATION</Link>
                <Link  activeClass="active" to="works" spy={true} smooth={true} offset={-50} duration={500} className="desktopmenuListItem">PORTFOLIO</Link>
                <Link  activeClass="active" to="contact" spy={true} smooth={true} offset={-50} duration={500} className="desktopmenuListItem">CONTACT</Link>

            </div>
            <button className="desktopmenuBtn" onClick={() => {
                document.getElementById("contact").scrollIntoView({behavior:"smooth"});
            }
            }>
                <img src={Contact} alt="contact" className="destopmenuImg"/>Contact Me
            </button>
        </nav>
    )
}

export default Navbar;