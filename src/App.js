import Navbar from "./components/NavBar/navbar";
import Intro from "./components/intro/intro";
import Skills from "./components/Skills/skills";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import Education from "./components/Education/education";
import Works from "./components/Works/works";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Education/>
      <Works/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
