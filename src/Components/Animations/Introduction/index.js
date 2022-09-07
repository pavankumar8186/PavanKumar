import React from "react";
import { useState, useEffect, settimeout } from "react";

import "./index.css";

const Index = () => {
  const [showIntroduction, setShowIntroduction] = useState(true);
  useEffect(() => {
    const timerId = setTimeout(() => {
      setShowIntroduction(false);
    }, 10000);
    return () => {
      clearTimeout(timerId);
    };
  }, []);
  return (
    <section
      className={
        showIntroduction === true
          ? "introduction-container"
          : "hide-introduction"
      }
    >
      <div className="video-container">
        <video
          src="https://res.cloudinary.com/dn6ibrmrq/video/upload/v1662302179/port%20folio/introvideo_vvgcjy.mp4"
          autoPlay
          muted
          className="video"
        />
      </div>
      <h1 className="introduction-name">Pavan Kumar</h1>
    </section>
  );
};

export default Index;
/*

      */
