import React from "react";
import { Link } from "react-router-dom";
import * as images from "../../assets/images";
import Style from "./Style";

const Login = () => {
  const classes = Style();
  const submit = (e) => {
    e.preventDefault();
  };
  return (
    <div className={classes.login}>
      <div className={classes.login__top}>
        <img className={classes.top__img} src={images.InstaTextLogo} alt="logo" />
        <form className={classes.top__form} onSubmit={submit}>
          <input type="email" placeholder="Phone number, username, or email" value="" />
          <input type="password" placeholder="Password" value="" />
          <button type="submit">Log In</button>
        </form>
        <div className={classes.top__signup}>
          <h5>OR</h5>
          <h4>Log in with Facebook</h4>
          <Link to="/forgot">Forgot password?</Link>
        </div>
      </div>

      <div className={classes.login__middle}>
        <h4>Don't have an account? </h4>
        <Link to="/signup">Sign up</Link>
      </div>

      <div className={classes.login__bottom}>
        <h4>Get the app.</h4>
        <div className={classes.bottom__links}>
          <img src={images.AppleStore} alt="apple-app-store" />
          <img src={images.GooglePlaystore} alt="google-play-store" />
        </div>
      </div>
    </div>
  );
};

export default Login;
