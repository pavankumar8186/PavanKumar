import { useState, useEffect } from "react";
import { IoMdAdd } from "react-icons/io";
import { AiFillHome } from "react-icons/ai";
import { MdPermContactCalendar } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { FaTools } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import {} from "react-icons";
import {} from "react-icons";
import "./index.css";

const FloatingMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const [hideFloatingMenu, setHideFloatingMenu] = useState(true);

  const floatingMenuAnimation = () => {
    if (window.scrollY > 400) {
      setHideFloatingMenu(false);
    } else {
      setHideFloatingMenu(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", floatingMenuAnimation);
    return () => {
      window.removeEventListener("scroll", floatingMenuAnimation);
    };
  }, [hideFloatingMenu]);

  return (
    <div
      className={
        hideFloatingMenu === true ? "hide-navigation" : "navigation-container"
      }
    >
      <div
        className={showMenu === true ? "navigation active" : "navigation"}
        onClick={() => setShowMenu((prev) => !prev)}
      >
        <div className="floating-menu">
          <IoMdAdd color="#37c3d7" size="35" />
        </div>
        <ul className="menu">
          <li className="menu-option">
            <a href="#home">
              <AiFillHome className="menu-option-icon" />
            </a>
          </li>
          <li className="menu-option">
            <a href="#about">
              <IoMdContact className="menu-option-icon" />
            </a>
          </li>
          <li className="menu-option">
            <a href="#skills">
              <FaTools className="menu-option-icon" />
            </a>
          </li>
          <li className="menu-option">
            <a href="#projects">
              <MdWork className="menu-option-icon" />
            </a>
          </li>
          <li className="menu-option">
            <a href="#contact">
              <MdPermContactCalendar className="menu-option-icon" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FloatingMenu;
