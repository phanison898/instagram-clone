import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import InstaMobile from "../../components/instaMobile/InstaMobile";
import Login from "../../components/login/Login";
import Footer from "../../components/footer/Footer";
import Style from "./Style";

const HomePage = () => {
  const classes = Style();
  const { displayName } = useSelector((state) => state.user);

  return displayName ? (
    <Redirect to={`/${displayName}`} />
  ) : (
    <div className={classes.home}>
      <div className={classes.home__body}>
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

export default HomePage;
