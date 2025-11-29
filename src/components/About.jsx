// src/components/About.jsx
import React from "react";
import resumePdf from "../Resume-Pritesh.pdf"; // agar src ke andar hai
// agar public folder mein hai to upar import hata ke href="/Priitesh-Resume.pdf" use karo

const About = () => (
  <section id="about">
    <div className="about container">
      <div className="col-left">
        <div className="about-img">{/* optional photo here */}</div>
      </div>

      <div className="col-right">
        <h1 className="section-title">
          About <span>me</span>
        </h1>
        <h2>Frontend Developer (React)</h2>
        <p>
          Passionate frontend developer focused on building smooth, responsive
          and accessible user interfaces. Comfortable with JavaScript and modern
          web technologies, always exploring how new tools and AI can improve
          user experience and performance.
        </p>
        <p>
          A quick learner with strong time management and collaboration skills,
          used to coordinating closely with teams to deliver clean, reliable
          solutions on time.
        </p>

        <h3>Education</h3>
        <p>
          Bachelor of Arts (B.A) – Computer Science, Delhi University / DSEU
          (Aug 2022 – Jun 2025).
        </p>

        <h3>Certifications</h3>
        <ul className="about-list">
          <li>
            PW Masterclass – Learning latest technologies in Artificial
            Intelligence and practical AI tools.
          </li>
          <li>
            Code Unnati (SAP) – 6‑month foundation program with Python
            programming certification.
          </li>
        </ul>

        <h3>Interests</h3>
        <ul className="about-list">
          <li>Problem Solving</li>
          <li>Music</li>
          <li>Communication &amp; Public Speaking</li>
          <li>Dressing / Personal Styling</li>
          <li>User Experience Design</li>
        </ul>

        {/* Download / View resume button */}
        <a
          href={resumePdf}          // public ho to: href="/Priitesh-Resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="cta about-resume-btn"
        >
          View Resume
        </a>
      </div>
    </div>
  </section>
);

export default About;
