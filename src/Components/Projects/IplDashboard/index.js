import React from "react";
import "./index.css";
import { FiExternalLink } from "react-icons/fi";

const IplDashboard = () => {
  return (
    <div className="project-i-bg-container">
      <div className="project-i-details-container">
        <div className="i-content-container1">
          <h1 className="i-description1">03</h1>
          <div className="i-color-container"></div>
        </div>
        <div className="i-content-container2">
          <a href="https://pavanbookhub.ccbp.tech/" target="_blank">
            <h1 className="i-description2">
              IplDashboard
              <FiExternalLink className="i-link" />
            </h1>
          </a>
          <div className="i-color-container"></div>
        </div>
        <div className="i-content-container3">
          <h1 className="i-description3">
            Implemented responsive GoodReads Clone where users can log in and
            see a list of books, bookshelves like all shelves (books sorted by
            rating), completed reading shelf, currently reading shelf, want to
            read shelf , and user can also search books with author's name and
            book's name.
          </h1>
          <div className="i-color-container"></div>
        </div>
      </div>
      <div className="i-project-images-container">
        <img
          src="https://res.cloudinary.com/dn6ibrmrq/image/upload/v1662115264/port%20folio/bookhub/bookhub3_afpqci.png"
          alt="image"
          className="i-parallax1"
        />
        <img
          src="https://res.cloudinary.com/dn6ibrmrq/image/upload/v1662115263/port%20folio/bookhub/bookhub1_yxtjcu.png"
          alt="image"
          className="i-parallax2"
        />
        <img
          src="https://res.cloudinary.com/dn6ibrmrq/image/upload/v1662117255/port%20folio/bookhub/bookhub4_umzziy.png"
          alt="image"
          className="i-parallax3"
        />
      </div>
    </div>
  );
};

export default IplDashboard;
