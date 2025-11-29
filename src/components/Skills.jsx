// src/components/Skills.jsx
import React from "react";

const skills = [
  "JavaScript",
  "React",
  "Node.js",
  "Express",
  "Firebase",
  "Python",
  "Web Dev"
];
const softSkills = [
  "Presentation Skills",
  "Time Management",
  "Teamwork & Collaboration",
  "Problem Solving",
  "Effective Communication",
  "Adaptability"
];

const Skills = () => (
  <section id="services" className="skills-section">
    <div className="services container">
      <div className="service-top">
        <h1 className="section-title">
          Sk<span>i</span>lls
        </h1>
        <p>Technologies used to build modern full‑stack web applications.</p>
      </div>

      <div className="skills-hex-wrapper">
        {skills.map((s) => (
          <div className="skill-hex" key={s}>
            <span className="skill-hex-label">{s}</span>
          </div>
        ))}
      </div>
      
        {/* soft skills list */}
        <div className="soft-skills">
          <h2>Soft Skills</h2>
          <ul>
            {softSkills.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
        
    </div>
  </section>
);

export default Skills;
