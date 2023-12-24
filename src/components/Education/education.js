import React from "react";
import "./education.css";

const Education = () =>{
    return(
    <section className="education" id="educatin">
        <h2 className="headind">My Journey</h2>
        <div class="education-row">
            <div calss="education-coloumn">
                <h3 class="title">Education</h3>
                <div className="education-box">
                    <div className="education-content">
                        <div className="content">
                            <div class="year"><i class='bx bxs-calendar'></i>2018-2019</div>
                            <h3>SSC-Maharastra State board</h3>
                            <p> Toatl marks = 430  [86.00%]</p>
                            
                        </div>
                    </div>
                    <div className="education-content">
                        <div className="content">
                            <div class="year"><i class='bx bxs-calendar'></i>2020-2021</div>
                            <h3>HSC-Maharastra State board</h3>
                            <p> WALCHAND COLLAGE OF ARTS AND SCIENCE , SOLAPUR Toatl marks = 562  [93.67%]</p>
                            
                        </div>
                    </div>
                    <div className="education-content">
                        <div className="content">
                            <div class="year"><i class='bx bxs-calendar'></i>2022</div>
                            <h3>BE Degree </h3>
                            <p> From Savitribai Phule Pune Univercity currently persuing 3rd year of computer science
                                SITS , Narhe.
                            </p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Education;