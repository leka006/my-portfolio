import './App.css';
import Projects from './Projects';
import Navbar from './Navbar';
import Experience from './Experience';
import Expertise from './Expertise';
import Education from './Education';

import { useEffect, useRef } from 'react'; // ✅ Import Hooks

function App() {
  const nameRef = useRef(null); // ✅ Ref for the zoom text

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('zoomed');
        } else {
          entry.target.classList.remove('zoomed');
        }
      },
      {
        root: null,
        rootMargin: '0px', // 👈 Zooms in before center
        threshold: 0.5,
      }
    );

    const current = nameRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <div className="main-container">
      <div className="floating-rockets">
        {[...Array(5)].map((_, i) => (
          <img
            key={i}
            src="https://static.vecteezy.com/system/resources/thumbnails/020/951/520/small_2x/realistic-transparent-3d-bubbles-underwater-soap-bubbles-vector-illustration-png.png"
            className={`rocket rocket-${i}`}
            alt="rocket"
          />
        ))}
      </div>

      <Navbar />

      <div className="hero" id="home">
        <h1><span ref={nameRef} className="zoom-name">LEKASREE</span></h1>
      </div>

      <section className="about-section" id="about">
        <h2>Hello!</h2>
        <p>
          Hey, I'm Leka Sree — a passionate front-end developer and designer. I love building beautiful and functional websites that tell a story and give users a smooth experience.I love building smooth, interactive user experiences using React, and I enjoy turning ideas into intuitive, functional web apps.</p><br />
          <p>But that’s not all — I’ve also explored the world of AI & Machine Learning, especially in the medical/dental field, where I’ve worked on real-time disease detection and imaging projects using Python, OpenCV, and scikit-learn.</p><br />
          <p>Apart from coding, I enjoy learning design tools like Figma, exploring new tech, and just improving a little every day.</p><br />
          <p>Right now, I’m focused on growing as a Fullstack developer and building things that feel good to use.
        </p>
      </section>

      <Projects />
      <Experience />
      <Education />
      <Expertise />

      <footer className="footer" id="contact">
        <h3>LETS CONNECT</h3>
        <div className="footer-icons">
          <a href="tel:+918072631310" title="Call">
            <img src="https://i.pinimg.com/736x/02/e3/ff/02e3ff0fc1f900d99c72ebc7e2751d29.jpg" alt="Phone" />
          </a>
          <span className="separator">|</span>
          <a href="mailto:lekasreek@gmail.com" title="Gmail">
            <img src="https://static.vecteezy.com/system/resources/previews/016/716/465/non_2x/gmail-icon-free-png.png" alt="Gmail" />
          </a>
          <span className="separator">|</span>
          <a href="https://github.com/leka006" target="_blank" rel="noopener noreferrer" title="GitHub">
            <img src="https://images.icon-icons.com/3685/PNG/512/github_logo_icon_229278.png" alt="GitHub" />
          </a>
          <span className="separator">|</span>
          <a href="https://linkedin.com/in/leka-sree-k-9335b233b" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <img src="https://cdn-icons-png.flaticon.com/256/2496/2496097.png" alt="LinkedIn" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
