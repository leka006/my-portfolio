import React from 'react';
import './Experience.css'; 

function Experience() {
  return (
    <section className="experience-section" id="experience">
      <h2>EXPERIENCE</h2>
      <div className="experience-cards">
        <div className="experience-card">
          <h3>AI developer Intern</h3>
          <p>
            <strong>
              <a href="https://www.zettaone.com/" target="_blank" rel="noopener noreferrer" className="company-link">
                Zettaone technologies
              </a>
            </strong> · July-2025
          </p>
          <p>Worked on responsive React dashboards, reusable components, and UX improvements.</p>
        </div>
        
      </div>
    </section>
  );
}

export default Experience;
