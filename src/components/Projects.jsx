// src/components/Projects.jsx
import React from "react";
import projectBg from "../img-1.jpg"; // ya img-1, jo bhi achha lage

const Projects = () => (
  <section
    id="projects"
    className="projects-bg"
    style={{ backgroundImage: `url(${projectBg})` }}
  >
    <div className="projects container">
      <div className="projects-header">
        <h1 className="section-title">
          Recent <span>Projects</span>
        </h1>
      </div>

      <div className="all-projects">
        <div className="project-item overlay-card">
          <div className="project-info">
            <h1>College Dashboard</h1>
            <h2>HTML5 · CSS3 · Responsive Web Design · PHP</h2>
            <p>
              Team dashboard for college data with reusable UI components and an
              integrated chatbot for quick information.
            </p>
          </div>
        </div>

        <div className="project-item overlay-card">
          <div className="project-info">
            <h1>Hospital Clinic Management System</h1>
            <h2>HTML5 · CSS3 · JavaScript · Firebase</h2>
            <p>
              Solo app to manage patients, medicines, appointments and lab
              reports with real‑time updates in Firebase.
            </p>
          </div>
        </div>

        <div className="project-item overlay-card">
          <div className="project-info">
            <h1>Finance Manager</h1>
            <h2>
              React · JavaScript · Firebase Auth &amp; Realtime Database
            </h2>
            <p>
              Personal budgeting tool to set monthly budgets, track expenses and
              see clear summary reports.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Projects;
