import React from "react";
import "./contact.css";
import Instagram from "../../assets/instagram.png";
import Linkedin from "../../assets/linkedin.png";
import Github from "../../assets/github.png";
import emailjs from "emailjs-com";



function sendEmail(e) {
     e.preventDefault();

    emailjs.sendForm('gmail', 'template_65uvj6r', e.target, 'iF2YoY_ytx4N9D_6VY2uB')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
}

function redirectToInstagram() {
    
    const instagramUrl = 'https://www.instagram.com/lokesh_doshi_02?igsh=NGVhN2U2NjQ0Yg==';
    
    
    window.open(instagramUrl, '_blank');
}

function redirectToLinkedin() {
    
    const linkedinUrl = 'https://www.linkedin.com/in/lokesh-doshi-93b406282?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app';
    
    
    window.open(linkedinUrl, '_blank');
}

function redirectToGithub() {
    
    const githubUrl = 'https://github.com/LokeshDoshi';
    
    
    window.open(githubUrl, '_blank');
}



const Contact = () => {
    return(
        <section id="contactPage">
            <div id="clients">
                <h1 className="contactPageTitle">My Interships</h1>
                <p className="ClientDesc">
                    I have had the opportunity to work with a diverse group of companies some of the notable companies I have worked with include.
                </p>
                <div className="clientImgs">
                    <img src="" alt="" className="clientImg" />
                </div>
                <div id="contact">
                    <h1 className="contactPageTitle">Contact ME</h1>
                    <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
                    <div className="contactForm">
                    <form onSubmit={sendEmail}>
                        <input type="text " className="name" placeholder="Your Name"></input>
                        <input type="email " className="email" placeholder="Your Email"></input>
                        <textarea name="message" className="message" rows="5" placeholder="Message"></textarea>
                        <button type="submit" value="send" className="submitBtn">Submit</button>
                        </form>
                        <div className="links">
                            <img src={Instagram} alt="Instagram" className="link" onClick={() => redirectToInstagram()} />
                            <img src={Linkedin} alt="Linkedin" className="link" onClick={() => redirectToLinkedin()} />
                            <img src={Github} alt="Github" className="link" onClick={() => redirectToGithub()} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;