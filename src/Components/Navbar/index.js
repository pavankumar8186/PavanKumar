import { useState, useEffect } from "react";
import { CgMenuGridO } from "react-icons/cg";
import { AiFillCloseCircle } from "react-icons/ai";

import "./index.css";

const NavBar = () => {
  const [hideNavbar, setHideNavbar] = useState(true);
  const [showPupUp, setShowPopUp] = useState(false);
  const [showImage, setShowImage] = useState(false);

  const navBarAnimation = () => {
    if (window.scrollY > 400) {
      setHideNavbar(false);
    } else {
      setHideNavbar(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", navBarAnimation);
    return () => {
      window.removeEventListener("scroll", navBarAnimation);
    };
  }, [hideNavbar]);

  const buttons = () => {
    return (
      <>
        <a href="#home" className="anchor">
          <button className="button">Home</button>
        </a>
        <a href="#about" className="anchor">
          <button className="button">About</button>
        </a>
        <a href="#skills" className="anchor">
          <button className="button">Skills</button>
        </a>
        <a href="#projects" className="anchor">
          <button className="button">Projects</button>
        </a>
        <a href="#contact" className="anchor">
          <button className="button">Contact</button>
        </a>
        <a
          target="_blank"
          href="https://docs.google.com/document/d/1_Fzz2svwHrPLhpUm1teqhbq_EfUmvryd_PBNLvpCizc/edit?usp=sharing"
          className="anchor"
        >
          <button className="resume-button">Resume</button>
        </a>
      </>
    );
  };

  return (
    <nav className={hideNavbar ? "nav-container" : "nav-container navbar-hide"}>
      <img
        src="https://res.cloudinary.com/dn6ibrmrq/image/upload/v1659007347/port%20folio/p_logo-removebg-preview_cs6ocw.png"
        alt="logo"
        className="navbar-logo"
      />
      <ul className="navbar-list-container">
        <li className="navbar-menu-icon-container">
          {showPupUp === false && (
            <CgMenuGridO
              onClick={() => setShowPopUp((prev) => !prev)}
              className="navbar-menu-icon"
            />
          )}
        </li>
      </ul>
      <div
        className={
          showPupUp === true ? "popup-container" : "hide-popup-container"
        }
      >
        <div className="icon-container">
          <button
            className="image-button"
            onClick={() => setShowImage((prev) => !prev)}
          >
            <img
              src="https://res.cloudinary.com/dn6ibrmrq/image/upload/v1661764168/port%20folio/IMG_20210127_135624_mavhlo_ifgyin.png"
              alt="my-pic"
              className={
                showImage === true ? "show-popup-image" : "popup-image"
              }
            />
          </button>
          <button
            type="button"
            onClick={() => setShowPopUp(false)}
            className="close-button"
          >
            <AiFillCloseCircle className="close-icon" />
          </button>
        </div>
        <div className="popup-buttons-container">{buttons()}</div>
      </div>
    </nav>
  );
};

export default NavBar;
