import React from "react";
import Login from "../../components/login/Login";
import Footer from "../../components/footer/Footer";
import * as images from "../../assets/images";
import Style from "./Style";

const MobileHolder = () => {
  const classes = Style();

  return (
    <div className={classes.mobile}>
      <img src={images.InstaMobileCase} alt="insta-mobile-holder" />
      <div className={classes.mobile__slider}>
        <img src={images.InstaMobileImage1} alt="" style={{ zIndex: 101 }} />
        <img src={images.InstaMobileImage2} alt="" style={{ zIndex: 102 }} />
        <img src={images.InstaMobileImage3} alt="" style={{ zIndex: 103 }} />
        <img src={images.InstaMobileImage4} alt="" style={{ zIndex: 104 }} />
        <img src={images.InstaMobileImage5} alt="" style={{ zIndex: 105 }} />
      </div>
    </div>
  );
};

const HomePage = (props) => {
  const classes = Style();
  return (
    <div className={classes.home}>
      <div className={classes.home__body}>
        <div className={classes.body__left}>
          <MobileHolder />
        </div>
        <div className={classes.body__right}>
          <Login />
        </div>
      </div>
      <div className={classes.home__footer}>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
