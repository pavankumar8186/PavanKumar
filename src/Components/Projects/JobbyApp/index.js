import React from "react";
import "./index.css";
import { FiExternalLink } from "react-icons/fi";

const JobbyApp = () => {
  return (
    <div className="project-j-bg-container">
      <div className="project-j-details-container">
        <div className="j-content-container1">
          <h1 className="j-description1">02</h1>
          <div className="j-color-container"></div>
        </div>
        <div className="j-content-container2">
          <a href="https://pavanbookhub.ccbp.tech/" target="_blank">
            <h1 className="j-description2">
              JobbyApp
              <span>
                <FiExternalLink className="j-link" />
              </span>
            </h1>
          </a>
          <div className="j-color-container"></div>
        </div>
        <div className="j-content-container3">
          <h1 className="j-description3">
            Implemented JobbyApp where users can log in and can see a list of
            jobs with search by Job title, filters based on Salary range and
            Employment type, etc
          </h1>
          <div className="j-color-container"></div>
        </div>
      </div>
      <div className="j-project-images-container">
        <img
          src="https://res.cloudinary.com/dn6ibrmrq/image/upload/v1662201784/port%20folio/jobby/iPhone_13_Pro_Max_-_2jobby1_uoh3tr.png"
          alt="image"
          className="j-parallax1"
        />
        <img
          src="https://res.cloudinary.com/dn6ibrmrq/image/upload/v1662201782/port%20folio/jobby/iPhone_13_Pro_Max_-_4ipl3_g2w9zh.png"
          alt="image"
          className="j-parallax2"
        />
        <img
          src="https://res.cloudinary.com/dn6ibrmrq/image/upload/v1662201782/port%20folio/jobby/iPhone_13_Pro_Max_-_3jobby2_tidtjv.png"
          alt="image"
          className="j-parallax3"
        />
      </div>
    </div>
  );
};

export default JobbyApp;
