import React from "react";

const Contact = () => (
  <section id="contact" className="contact-bg">
    <div className="contact container">
      <div className="contact-card">
        <button className="contact-chip">Reach Out To Me</button>

        <h2 className="contact-title">We&apos;d Love to Hear From You.</h2>
        <p className="contact-sub">
          Or just reach out manually at{" "}
          <a href="mailto:pritezh966797753@gmail.com">
            pritezh966797753@gmail.com
          </a>
          .
        </p>

        <div className="contact-grid">
          {/* Email */}
          <div className="contact-item-modern">
            <div className="contact-icon-modern">✉️</div>
            <h3>Email Support</h3>
            <p>Always open for project ideas and collaboration.</p>
            <span className="contact-meta">
              pritezh966797753@gmail.com
            </span>
          </div>

          {/* Location */}
          <div className="contact-item-modern">
            <div className="contact-icon-modern">📍</div>
            <h3>Visit My City</h3>
            <p>Based in Delhi, happy to connect remotely or in person.</p>
            <span className="contact-meta">Delhi, India</span>
          </div>

          {/* Call */}
          <div className="contact-item-modern">
            <div className="contact-icon-modern">📞</div>
            <h3>Call Directly</h3>
            <p>Available during working hours for quick discussions.</p>
            <span className="contact-meta">+91 96679 77535</span>
          </div>

          {/* LinkedIn */}
          <div className="contact-item-modern">
            <div className="contact-icon-modern">in</div>
            <h3>LinkedIn</h3>
            <p>Connect professionally and see more about my journey.</p>
            <a
              href="https://linkedin.com/in/pritesth-kumar-254838250"
              target="_blank"
              rel="noreferrer"
              className="contact-meta contact-link"
            >
              linkedin.com/in/pritesth-kumar-254838250
            </a>
          </div>

          {/* GitHub */}
          <div className="contact-item-modern">
            <div className="contact-icon-modern">🐙</div>
            <h3>GitHub</h3>
            <p>Explore code, projects and experiments in detail.</p>
            <a
              href="https://github.com/pritesth41"
              target="_blank"
              rel="noreferrer"
              className="contact-meta contact-link"
            >
              github.com/pritesth41
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
