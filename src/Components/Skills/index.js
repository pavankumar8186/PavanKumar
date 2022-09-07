import React from "react";
import "./index.css";

const Skills = () => {
  return (
    <div id="skills" className="skills-container">
      <div className="skills-heading-container">
        <h1 className="skills-heading">SKILLS</h1>
      </div>
      <ul className="skills-list-container">
        <li>
          <ul>
            <li className="skills-list-item item1">
              <img
                src="https://res.cloudinary.com/dn6ibrmrq/image/upload/v1661410647/port%20folio/html-icon_c41stz.png"
                alt="logo"
                className="skills-logo"
              />
              <p className="skill-description">HTML 5</p>
            </li>
          </ul>
        </li>
        <li>
          <ul>
            <li className="skills-list-item item2">
              <img
                src="https://res.cloudinary.com/dn6ibrmrq/image/upload/v1661410559/port%20folio/css-icon_ogfp7z.png"
                alt="logo"
                className="skills-logo"
              />
              <p className="skill-description">CSS 3</p>
            </li>
            <li className="skills-list-item item3">
              <img
                src="https://res.cloudinary.com/dn6ibrmrq/image/upload/v1661411138/port%20folio/logo-javascript-png-node-js-logo-javascript-vector-png-266_o9mfb2.png"
                alt="javascript"
                className="skills-logo"
              />
              <p className="skill-description">JAVA SCRIPT</p>
            </li>
          </ul>
        </li>

        <li>
          <ul>
            <li className="skills-list-item item4">
              <img
                src="https://res.cloudinary.com/dn6ibrmrq/image/upload/v1661410592/port%20folio/react-js-icon_lmdlkk.png"
                alt="reactjs"
                className="skills-logo"
              />
              <p className="skill-description">REACT JS</p>
            </li>
            <li className="skills-list-item item5">
              <img
                src="https://res.cloudinary.com/dn6ibrmrq/image/upload/v1661410612/port%20folio/python_original_logo_icon_146381_vrlxh4.png"
                alt="python"
                className="skills-logo"
              />
              <p className="skill-description">PYTHON</p>
            </li>
            <li className="skills-list-item item6">
              <img
                src="https://res.cloudinary.com/dn6ibrmrq/image/upload/v1661410570/port%20folio/Node_logo_NodeJS_ytbzjy.png"
                alt="nodejs"
                className="skills-logo"
              />
              <p className="skill-description">NODE JS</p>
            </li>
          </ul>
        </li>

        <li>
          <ul>
            <li className="skills-list-item item7">
              <img
                src="https://res.cloudinary.com/dn6ibrmrq/image/upload/v1661410511/port%20folio/bootstrap-5-logo-icon_ao2wow.png"
                alt="nodejs"
                className="skills-logo"
              />
              <p className="skill-description">BOOTSTRAP</p>
            </li>
            <li className="skills-list-item item8">
              <img
                src="https://res.cloudinary.com/dn6ibrmrq/image/upload/v1661411043/port%20folio/542233_pjyk2j.png"
                alt="nodejs"
                className="skills-logo"
              />
              <p className="skill-description">SQL</p>
            </li>
          </ul>
        </li>

        <li>
          <ul>
            <li className="skills-list-item item9">
              <img
                src="https://res.cloudinary.com/dn6ibrmrq/image/upload/v1661412071/port%20folio/icons8-express-js-64_zov726.png"
                alt="logo"
                className="skills-logo"
              />
              <p className="skill-description">EXPRESS JS</p>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Skills;
