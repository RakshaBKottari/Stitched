import React from "react";
import img3 from "../assets/section3.webp";
import section3css from "../css/section3.module.css";

const section3 = () => {
  return (
    <div className={section3css.container}>
      <img src={img3} alt="Image" className={section3css.divimg} />
      <div className={section3css.text}>
        <p>Crafted with care, stitched with love. Wear your story.</p>
        <button>jj</button>
      </div>
    </div>
  );
};

export default section3;
