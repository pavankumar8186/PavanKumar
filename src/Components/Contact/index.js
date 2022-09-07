import { useState } from "react";

import "./index.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [suggestion, setSuggestion] = useState("");

  const changeName = (event) => {
    setName(event.target.value);
  };

  const changeSuggestion = (event) => {
    setSuggestion(event.target.value);
  };
  console.log(name + "\n" + suggestion);

  return (
    <div id="contact" className="contact-bg-container">
      <h1 className="contact-heading">Get in touch</h1>
      <div className="contact-container">
        <div></div>
        <div className="contact-form-container">
          <img
            src="https://res.cloudinary.com/dn6ibrmrq/image/upload/v1661438949/port%20folio/contact-us-1769323_1280_c7fnuh.png"
            alt="contact"
            className="contact-image"
          />
          <div className="contact-name-container1">
            <input
              onChange={changeName}
              type="text"
              className="contact-name-input"
            />
          </div>
          <div className="contact-name-container2">
            <input type="text" className="contact-name-input" />
          </div>
          <div className="contact-name-container3">
            <textarea
              onChange={changeSuggestion}
              type="text"
              className="contact-name-input3"
            />
          </div>
          <a
            href={
              "mailto:dpavankumar8186@gmail.com?&subject=" +
              name +
              "&body=" +
              suggestion
            }
          >
            <button className="contact-submit-button">Submit</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
