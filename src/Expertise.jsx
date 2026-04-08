import React from 'react';
import './Expertise.css';

function Expertise() {
  const categories = {
    LANGUAGES: ['HTML', 'CSS', 'JavaScript', 'Python'],
    FRAMEWORKS: ['React', 'OpenCV', 'scikit-learn'],
    TOOLS: ['Figma'],
    DATABASES: ['MySQL', 'MongoDB']
  };

  return (
    <section className="expertise-section" id="expertise">
      <h2>EXPERTISE</h2>
      <br></br>
      <div className="skills-category-grid">
        {Object.entries(categories).map(([category, skills], idx) => (
          <div key={idx} className="skill-category">
            <h3>{category}</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-box">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Expertise;
