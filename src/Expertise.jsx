import React from 'react';
import './Expertise.css';

function Expertise() {
  const categories = {
    LANGUAGES: ['Python', 'Java', 'JavaScript', 'C'],
    FRAMEWORKS: ['React', 'Flask', 'TensorFlow', 'PyTorch'],
    'AI / ML': ['Machine Learning', 'Computer Vision', 'NLP', 'Generative AI'],
    DATABASES: ['MySQL', 'MongoDB', 'PostgreSQL'],
    TOOLS: ['Git', 'GitHub', 'VS Code', 'Streamlit']
  };

  return (
    <section className="expertise-section" id="expertise">
      <h2>Expertise</h2>

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