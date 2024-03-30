import React from "react";
import img1 from "../assets/home1.webp";
import img2 from "../assets/home2.webp";
import img3 from "../assets/home3.webp";

import Herocss from "../css/Hero.module.css";

const home = () => {
  return (
    <div className={Herocss.container}>
      <div className={Herocss.main}>
        <img src={img1} alt="firstimg " className={Herocss.img1} />
      </div>
      <div className={Herocss.main2}>
        <img src={img2} alt="seconfimg " className={Herocss.img2} />
        <img src={img3} alt="threeimg " className={Herocss.img3} />
      </div>
    </div>
  );
};

export default home;
