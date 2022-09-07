import { useState, useEffect } from "react";
import { FaGithubSquare } from "react-icons/fa";
import "./index.css";

const SideBar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const navBarAnimation = () => {
    if (window.scrollY > 400) {
      setShowSidebar(true);
    } else {
      setShowSidebar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", navBarAnimation);
    return () => {
      window.removeEventListener("scroll", navBarAnimation);
    };
  }, [setShowSidebar]);

  return (
    <div className="side-bar-container">
      <a
        href="mailto:dpavankumar8186@gmail.com"
        target="_blank"
        className="media-link"
      >
        <img
          src="https://res.cloudinary.com/dn6ibrmrq/image/upload/v1661854529/port%20folio/gmail_amtjvf.png"
          alt="gmail"
          className={
            showSidebar === true ? "sidebar-icon1" : "hide-sidebar-icon1"
          }
        />
      </a>
      <a
        href="http://www.linkedin.com/in/pavan-kumar-devarakonda-954378233"
        target="_blank"
        className="media-link"
      >
        <img
          src="https://res.cloudinary.com/dn6ibrmrq/image/upload/v1662492300/linkedin-logo-png-2024_pa5ds5.png"
          alt="linkedin"
          className={
            showSidebar === true ? "sidebar-icon2" : "hide-sidebar-icon2"
          }
        />
      </a>
      <a
        href="https://github.com/pavankumar8186"
        target="_blank"
        className="media-link"
      >
        <img
          src="https://res.cloudinary.com/dn6ibrmrq/image/upload/v1662477084/port%20folio/github-154769_640_pmraci.png"
          alt="github"
          className={
            showSidebar === true ? "sidebar-icon3" : "hide-sidebar-icon3"
          }
        />
      </a>
      <a
        className="media-link"
        href="https://www.instagram.com/dpavankumar8186/"
        target="_blank"
      >
        <img
          src="https://res.cloudinary.com/dn6ibrmrq/image/upload/v1661854530/port%20folio/instagram_1_rotpbp.png"
          alt="instagram"
          className={
            showSidebar === true ? "sidebar-icon4" : "hide-sidebar-icon4"
          }
        />
      </a>
      <a
        href="https://www.facebook.com/dpavankumar8186"
        target="_blank"
        className="media-link"
      >
        <img
          src="https://res.cloudinary.com/dn6ibrmrq/image/upload/v1661854530/port%20folio/facebook_imekox.png"
          alt="facebook"
          className={
            showSidebar === true ? "sidebar-icon5" : "hide-sidebar-icon5"
          }
        />
      </a>
    </div>
  );
};

export default SideBar;
