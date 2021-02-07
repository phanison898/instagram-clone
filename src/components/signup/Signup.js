import React, { useState } from "react";
import { useDispatch } from "react-redux";
import FacebookIcon from "@material-ui/icons/Facebook";
import { Link } from "react-router-dom";
import { SignupAction, LoginWithGoogle, LoginWithFacebook } from "../../store/actions/auth";
import * as images from "../../assets/images";
import Style from "./Style";

const Signup = () => {
  const classes = Style();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isEntered = () => {
    if (email !== "" && name !== "" && username !== "" && password !== "") {
      return true;
    } else {
      return false;
    }
  };

  const submit = (e) => {
    e.preventDefault();
    dispatch(
      SignupAction({
        email,
        password,
        name,
        username,
      })
    );
  };

  const LoginWith = () => {
    return (
      <div className={classes.login}>
        <h4>Sign up to see photos and videos</h4>
        <h4>from your friends.</h4>
        <div className={classes.login__buttons}>
          <FacebookIcon onClick={() => dispatch(LoginWithFacebook())} />
          <img
            src={images.GoogleLogo}
            onClick={() => dispatch(LoginWithGoogle())}
            alt="google-sign-in"
          />
        </div>
        <section className={classes.login__linebreak}>
          <div></div>
          <h4>OR</h4>
          <div></div>
        </section>
      </div>
    );
  };

  return (
    <div className={classes.root}>
      <div className={classes.signup}>
        <Link to="/" className={classes.top__img}>
          <img src={images.InstaTextLogo} alt="logo" />
        </Link>
        <LoginWith />

        <form className={classes.signup__form} onSubmit={submit}>
          <input
            type="email"
            placeholder="Mobile Number or email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
          <input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            disabled={!isEntered()}
            style={{
              backgroundColor:
                email.length > 6 && password.length > 6 ? "#0095f6" : "rgb(0 149 246 / 30%)",
              cursor: isEntered() ? "pointer" : "auto",
            }}
          >
            Sign Up
          </button>
          <p>By signing up, you agree to our Terms , Data Policy and Cookies Policy .</p>
        </form>
      </div>

      <div className={classes.login__container}>
        <p>Have an account? </p>
        <Link to="/login">Log In</Link>
      </div>

      <div className={classes.app_store}>
        <p>Get the app.</p>
        <div className={classes.app_store__links}>
          <img src={images.AppleStore} alt="apple-app-store" />
          <img src={images.GooglePlaystore} alt="google-play-store" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
