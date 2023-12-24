import React from "react";
import "./intro.css";
import bg from "../../assets/profile.jpeg";
import btnImg from "../../assets/hire.png"
import { Link } from "react-scroll";

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hellow,</span>
                <span className="introText">I'm <span className="introName">Lokesh</span> <br />Student of BE , <br /> computer science</span>  
                <p className="introPara"> I am a skilled web designer with ideas for creating visually appealying and <br />user friendly websites.</p> 
                <Link><button className="btn"><img src={btnImg} alt="hire" className="btnImg"/>HIRE ME</button></Link>           
            </div>
            <img src={bg} alt="profile" className="bg" />
        </section>
    )
}
export default Intro;