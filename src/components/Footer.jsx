import React from "react";

const Footer = () => (
  <footer id="footer" className="footer-section">
    {/* Call‑to‑action top banner */}
    <div className="footer-cta">
      <h2>Start Building Your Next Project!</h2>
      <a href="#contact" className="footer-cta-btn">
        Let&apos;s Work Together
      </a>
    </div>

    {/* Main footer content */}
    <div className="footer-main container">
      {/* left brand block */}
      <div className="footer-brand">
        <h3 className="footer-logo">
          <span>P</span>ritesh
        </h3>
        <p className="footer-tagline">
          This portfolio is crafted with React and modern web technologies,
          focused on clean UI and great user experience.
        </p>
        <div className="footer-status-badges">
          <span className="badge badge-primary">Frontend Developer</span>
          <span className="badge badge-success">Available for work</span>
        </div>
      </div>

      {/* link columns */}
      <div className="footer-columns">
        <div className="footer-col">
          <h4>General</h4>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#services">Skills</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-col">
          <h4>Resources</h4>
          <a href="#projects">Case Studies</a>
          <a
            href="https://github.com/pritesth41"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a href="./Priitesh-Resume.pdf" target="_blank" rel="noreferrer">
            Resume (PDF)
          </a>
        </div>

        <div className="footer-col">
          <h4>Follow</h4>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            Twitter
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            Instagram
          </a>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <span>Delhi, India</span>
          <span>pritezh966797753@gmail.com</span>
          <span>+91 96679 77535</span>
        </div>
      </div>
    </div>

    {/* bottom strip */}
    <div className="footer-bottom">
      <p>© {new Date().getFullYear()} Pritesh Kumar. All rights reserved.</p>
      <div className="footer-bottom-links">
        <a href="#">Terms &amp; Conditions</a>
        <a href="#">Privacy Policy</a>
      </div>
    </div>
  </footer>
);

export default Footer;
