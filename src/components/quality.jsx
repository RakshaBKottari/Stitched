import React from "react";
import banner1 from "../assets/Qualitypic1.png";
import banner2 from "../assets/Qualitypic2.png";
import banner3 from "../assets/Qualitypic3.png";
import banner4 from "../assets/Qualitypic4.png";
import Qualitycss from "../css/quality.module.css";

const quality = () => {
  const productarr = [
    {
      image: banner1,
      text: "90% MADE IN INDIA",
      smalltext: "Committed partners",
    },
    {
      image: banner2,
      text: "MODE ENGAGEE",
      smalltext: "99% natural or recycled materials",
    },
    {
      image: banner3,
      text: "DECLARE LOVE",
      smalltext: "BFFs, lovers, ♡ family",
    },
    {
      image: banner4,
      text: "+ 7000 VERIFIED REVIEWS LOVE",
      smalltext: "so much love!",
    },
  ];

  return (
    <div className={Qualitycss.mainContainer}>
      {productarr.map((product) => {
        return (
          <div className={Qualitycss.imgContainer}>
            <img src={product.image} alt="banner" className={Qualitycss.logo} />
            <h4 className={Qualitycss.content1}>{product.text}</h4>
            <p className={Qualitycss.content2}>{product.smalltext}</p>
          </div>
        );
      })}
    </div>
  );
};

export default quality;
