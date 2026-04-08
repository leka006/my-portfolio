import React from "react";
import './Projects.css';
import {SiPython,SiOpencv, SiScikitlearn,SiReact} from "react-icons/si";

function Projects() {
  const projects = [
    {
      title: "Oncology Prediction",
      techIcon: <SiPython size={40} color="#FFD43B" />,
      link: "https://github.com/leka006/Breast-Cancer-Detection-System-"
    },
    {
      title: "Climora",
      techIcon: <SiReact size={40} color="#61DAFB" />,
      link: "https://github.com/leka006/Breast-Cancer-Detection-System-"
    },
    {
      title: "Periodontal Disease Prediction",
      techIcon: <SiPython size={40} color="#FFD43B" />,
      link: "https://github.com/leka006/Periodontal-Disease-Prediction"
    },
    {
      title: "Color Detection",
      techIcon: <SiOpencv size={40} color="#5C3EE8" />,
      link: "https://github.com/leka006/Color-Detection"
    },
    {
      title: "Disease Detector",
      techIcon: <SiScikitlearn size={40} color="#F7931E" />,
      link: "https://github.com/leka006/AI-Disease-Detector"
    },
    {
      title: "Fraud Email Detection",
      techIcon: <SiScikitlearn size={40} color="#F7931E" />,
      link: "https://github.com/leka006/Fraud-Email-Detection"
    }
  ];

  return (
    <section className="projects-section" id="projects">
      <h2>MY WORK</h2>
      <br></br>
      <h3>RECENT PROJECTS</h3>
      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="tech-icon">{project.techIcon}</div>
            <div className="card-footer">
              <h4>{project.title}</h4>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="arrow-btn"
                title="View on GitHub"
              >
                ➜
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
