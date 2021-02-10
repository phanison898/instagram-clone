import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import InstaMobile from "../../components/instaMobile/InstaMobile";
import Login from "../../components/login/Login";
import Footer from "../../components/footer/Footer";
import Style from "./Style";

const LandingPage = () => {
  const classes = Style();
  const { fullName } = useSelector((state) => state.currentUser);

  return fullName ? (
    <Redirect to={`/${fullName}`} />
  ) : (
    <div className={classes.landing}>
      <div className={classes.landing__body}>
        <div className={classes.body__left}>
          <InstaMobile />
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

export default LandingPage;
