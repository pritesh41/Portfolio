import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "../src/styles/index.css";
import "./styles/skills.css";// src/index.js or main.jsx
import "./styles/index.css";
import "./styles/navbar.css";
import "./styles/hero.css";
import "./styles/skills.css";
import "./styles/footer.css";
import "./styles/contact.css";
import "./styles/about.css";


const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
