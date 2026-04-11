import './App.css';
import Navbar from './Navbar';
import About from './About';
import Projects from './Projects';
import Experience from './Experience';
import Expertise from './Expertise';
import Education from './Education';
import Footer from './Footer';
import HeroLetters from './HeroLetters'; // ✅ import component

function App() {
  
  return (
    <>
      <div className="pink-smudge-bg"></div>
<div className="stars"></div>
<div className="stars2"></div>
<div className="shooting-stars"></div>
      <Navbar />

      {/* Hero section */}
      <HeroLetters text="LEKASREE" />

      <About />
      <Projects />
      <Experience />
      <Education />
      <Expertise />
      <Footer />
    </>
  );
}

export default App;