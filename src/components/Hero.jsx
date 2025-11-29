// src/components/Hero.jsx
import React from "react";
import heroBg from "../hero-bg.jpg";

const Hero = () => (
  <section id="hero" style={{ backgroundImage: `url(${heroBg})` }}>
    <div className="hero container">
      <div>
        <h1>
          Hello, <span />
        </h1>
        <h1>
          My Name is <span />
        </h1>
        <h1>
          Pritesh Kumar <span />
        </h1>
        <p className="hero-subtitle">
          Frontend Developer (React) from Delhi, building smooth, responsive and
          user‑friendly web experiences.
        </p>
        <a href="#projects" type="button" className="cta">
          View Projects
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
