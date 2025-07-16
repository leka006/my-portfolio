import React from 'react';
import './Expertise.css';

function Expertise() {
  const categories = {
    Languages: ['HTML', 'CSS', 'JavaScript', 'Python'],
    Frameworks: ['React', 'OpenCV', 'scikit-learn'],
    Tools: ['Figma'],
    Databases: ['MySQL', 'MongoDB']
  };

  return (
    <section className="expertise-section" id="expertise">
      <h2>EXPERTISE</h2>
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
