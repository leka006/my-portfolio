import React from 'react';
import './Expertise.css';

function Expertise() {
  const categories = {
    LANGUAGES: ['Python', 'Java', 'JavaScript', 'C'],
    FRAMEWORKS: ['React', 'Flask', 'TensorFlow', 'PyTorch'],
    AI / ML: ['Machine Learning', 'Computer Vision', 'NLP', 'Generative AI'],
    DATABASES: ['MySQL', 'MongoDB', 'PostgreSQL'],
    TOOLS: ['Git', 'GitHub', 'VS Code', 'Streamlit']
  };

  return (
    <section className="expertise-section" id="expertise">
      <h2>EXPERTISE</h2>

      <div className="expertise-list">
        {Object.entries(categories).map(([category, skills], index) => (
          <div className="expertise-row" key={category}>
            <div className="expertise-number">
              {String(index + 1).padStart(2, '0')}
            </div>

            <div className="expertise-category">
              {category}
            </div>

            <div className="expertise-skills">
              {skills.join(' · ')}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Expertise;