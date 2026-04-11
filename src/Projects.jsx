import React from "react";
import './Projects.css';
import {SiPython,SiOpencv, SiScikitlearn,SiReact} from "react-icons/si";

function Projects() {
  const projects = [
    {
      title: "Oncology Prediction",
      desc: "Breast cancer detection using ML",
      techIcon: <SiPython size={60} color="#FFD43B" />,
      link: "https://github.com/leka006/Breast-Cancer-Detection-System-"
    },
    {
      title: "Climora",
      desc: "Weather-based disease prediction",
      techIcon: <SiReact size={60} color="#61DAFB" />,
      link: "https://github.com/leka006/Breast-Cancer-Detection-System-"
    },
    {
      title: "Periodontal Disease",
      desc: "AI-based dental disease detection",
      techIcon: <SiPython size={60} color="#FFD43B" />,
      link: "https://github.com/leka006/Periodontal-Disease-Prediction"
    },
    {
      title: "Color Detection",
      desc: "Detect colors using OpenCV",
techIcon: <SiOpencv size={60} color="#5C3EE8" />,
      link: "https://github.com/leka006/Color-Detection"
    },
    {
      title: "Disease Detector",
      desc: "ML model for disease prediction",
techIcon: <SiScikitlearn size={60} color="#F7931E" />,      link: "https://github.com/leka006/AI-Disease-Detector"
    },
    {
      title: "Fraud Email Detection",
      desc: "Spam detection using ML",
techIcon: <SiScikitlearn size={60} color="#F7931E" />,      link: "https://github.com/leka006/Fraud-Email-Detection"
    }
  ];

  return (
    <section className="projects-section" id="projects">
      <h2>PROJECTS</h2>

      <div className="project-list">
        {projects.map((project, index) => (
          <a 
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
            key={index}
          >
            <div className="card-inner">
              {/* FRONT */}
              <div className="card-front">
                <div className="tech-icon">{project.techIcon}</div>
              </div>

              {/* BACK */}
              <div className="card-back">
                <h4>{project.title}</h4>
                <p>{project.desc}</p>
              </div>

            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;