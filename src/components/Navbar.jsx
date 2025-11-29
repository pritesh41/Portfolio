import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [bg, setBg] = useState("transparent");

  useEffect(() => {
    const onScroll = () => {
      setBg(window.scrollY > 250 ? "#29323c" : "transparent");
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => setOpen(!open);

  const handleNavItem = () => setOpen(false);

  return (
    <header id="header" style={{ backgroundColor: bg }}>
      <div className="header container">
        <div className="nav-bar">
          <div className="brand">
            <a href="#hero">
              <h1>
                <span>P</span>rites<span>h</span>
              </h1>
            </a>
          </div>
          <div className="nav-list">
            <div
              className={open ? "hamburger active" : "hamburger"}
              onClick={handleClick}
            >
              <div className="bar" />
            </div>
            <ul className={open ? "active" : ""}>
              <li>
                <a href="#hero" data-after="Home" onClick={handleNavItem}>
                  Home
                </a>
              </li>
              <li>
                <a href="#services" data-after="Service" onClick={handleNavItem}>
                  Skill
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  data-after="Projects"
                  onClick={handleNavItem}
                >
                  Projects
                </a>
              </li>
              <li>
                <a href="#about" data-after="About" onClick={handleNavItem}>
                  About
                </a>
              </li>
              <li>
                <a href="#contact" data-after="Contact" onClick={handleNavItem}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
