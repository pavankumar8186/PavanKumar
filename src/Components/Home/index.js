import { useState, useEffect } from "react";

import "./index.css";
import Planet from "../Animations/Planet";

const fullName = "Devarakonda Pavan kumar";

const Home = () => {
  return (
    <div id="home" className="home-bg-container">
      <div className="home-content-container">
        <p className="home-welcome-content">Hi I'm </p>
        <h1 className="home-name">{fullName}</h1>
        <p className="home-specialization">
          Full-Stack Developer With MERN specialization
        </p>
        <p className="home-description">
          I love to Design and Develop beautiful websites that works across all
          Platforms and devices
        </p>
      </div>
      <Planet />
    </div>
  );
};

export default Home;
