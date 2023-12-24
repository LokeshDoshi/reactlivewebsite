import React from "react";
import "./skills.css";
import c from "../../assets/c++.png";
import pythone from "../../assets/pythone.png";
import web from "../../assets/web.jpg";
import { Link } from "react-scroll";
import resume from "../../assets/resume.png";
import mysql from "../../assets/mysql.png";
import gitu from "../../assets/gitu.png";

const Skills = () => {
  return (
    <section id='skills'>
  <div className="skillTitle">
    What I Do
  </div>
  <div className="skillDescription">
    Hello, I'm Lokesh Doshi, a dedicated third-year computer science engineering student with a fervent interest in crafting innovative and visually captivating web experiences. I am driven by a profound enthusiasm for combining technical prowess with creative design to bring ideas to life on the digital canvas.
  </div>
 


      <div className="skillsBars">
        <div className="skillBar">
          <img src={c} alt="c++" className="skillBarImg" />
          <div className="SkillBarText">
            <h2>C & C++</h2>
            <p>"Skilled in C++, adept at leveraging its object-oriented programming and algorithmic capabilities to engineer efficient and robust solutions in web design and beyond."</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={pythone} alt="pythone" className="skillBarImg" />
          <div className="SkillBarText">
            <h2>Python</h2>
            <p>Skilled in Python with a strong grasp of foundational concepts. Capable of utilizing its versatility for developing solutions, albeit with a focus on mastering its advanced applications in web design and beyond.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={web} alt="web" className="skillBarImg" />
          <div className="SkillBarText">
            <h2>Web Design</h2>
            <p>Skilled in web design, adeptly utilizing HTML, CSS, JS and reactJS to create visually appealing and user-friendly interfaces, while continually exploring new techniques for enhanced and innovative web solutions.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={mysql} alt="mysql" className="skillBarImg" />
          <div className="SkillBarText">
            <h2>Mysql</h2>
            <p>I possess strong proficiency in MySQL, including database design, querying, optimization, and management</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={gitu} alt="gitu" className="skillBarImg" />
          <div className="SkillBarText">
            <h2>Github</h2>
            <p>I am proficient in Git, utilizing commands for version control, such as branching, committing, merging, and resolving conflicts</p>
          </div>
        </div>
        <Link><button className="btn"><img src={resume} alt="resume" className="btnImg"/>RESUME</button></Link> 
      </div>
    </section>
  );
};

export default Skills;
