import React from "react";
import * as images from "../../assets/images";
import Style from "./Style";

const InstaMobile = () => {
  const classes = Style();

  return (
    <div className={classes.mobile}>
      {/* Insta mobile-case*/}
      <img src={images.InstaMobileCase} alt="insta-mobile-holder" />
      {/* Fade-In-Fade-Out images */}
      <div className={classes.mobile__slider}>
        <img src={images.InstaMobileImage1} alt="slide-1" />
        <img src={images.InstaMobileImage4} alt="slide-2" />
        <img src={images.Github} alt="slide-3" />
        <img src={images.Youtube} alt="slide-4" />
        <img src={images.Instagram} alt="slide-5" />
      </div>
    </div>
  );
};

export default InstaMobile;
