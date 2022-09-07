import React from "react";
import "./index.css";
import { FiExternalLink } from "react-icons/fi";

const BookHub = () => {
  return (
    <div id="projects" className="project-bg-container">
      <div className="project-details-container">
        <div className="content-container1">
          <h1 className="description1">01</h1>
          <div className="color-container"></div>
        </div>
        <div className="content-container2">
          <a href="https://pavanbookhub.ccbp.tech/" target="_blank">
            <h1 className="description2">
              BookHub
              <FiExternalLink className="link" />
            </h1>
          </a>
          <div className="color-container"></div>
        </div>
        <div className="content-container3">
          <h1 className="description3">
            Implemented responsive GoodReads Clone where users can log in and
            see a list of books, bookshelves like all shelves (books sorted by
            rating), completed reading shelf, currently reading shelf, want to
            read shelf , and user can also search books with author's name and
            book's name.
          </h1>
          <div className="color-container"></div>
        </div>
      </div>
      <div className="project-images-container">
        <img
          src="https://res.cloudinary.com/dn6ibrmrq/image/upload/v1662115264/port%20folio/bookhub/bookhub3_afpqci.png"
          alt="image"
          className="parallax1"
        />
        <img
          src="https://res.cloudinary.com/dn6ibrmrq/image/upload/v1662117255/port%20folio/bookhub/bookhub4_umzziy.png"
          alt="image"
          className="parallax2"
        />
        <img
          src="https://res.cloudinary.com/dn6ibrmrq/image/upload/v1662115263/port%20folio/bookhub/bookhub1_yxtjcu.png"
          alt="image"
          className="parallax3"
        />
      </div>
    </div>
  );
};

export default BookHub;
/*

      <div className="project-container1">
        <div className="project-description-container">
          <div className="project-description">
            <h1 className="name">pavan</h1>
          </div>
          <div className="animation"></div>
        </div>
      </div>
 */
