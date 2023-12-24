import React from "react";
import "./works.css";
import work1 from "../../assets/work1.jpg";
import work2 from "../../assets/work2.png";

const Works = () => {
    return(
        <section id="works">
            <h2 className="workstitle">MY PORTFOLIO</h2>
            <span className="worksDesc">I take a pride in paying attension to the smallest details and</span>

            <div className="worksBars">
        <div className="workBar">
          <img src={work1} alt="work1" className="workBarImg" />
          <div className="workBarText">
            <h2>HTML & CSS</h2>
            <p>"I create a web page of sports club by using techenical knowlage of html and css"</p>
          </div>
        </div>
        <div className="workBar">
          <img src={work2} alt="work2" className="workBarImg" />
          <div className="workBarText">
            <h2>Login&signp page</h2>
            <p>"I create a student or a general login and signup page using html and css , and also by using php create a data base that store the data from login and signup page  "</p>
          </div>
        </div>
        </div>
        </section>
    )
}

export default Works;