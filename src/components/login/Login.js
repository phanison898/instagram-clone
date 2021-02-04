import React, { useState } from "react";
import { useDispatch } from "react-redux";
import FacebookIcon from "@material-ui/icons/Facebook";
import { Link, useHistory } from "react-router-dom";
import db, { auth, facebookProvider, googleProvider } from "../../firebase";
import { LoginAction } from "../../store/actions/auth";
import * as images from "../../assets/images";
import Style from "./Style";

const Login = () => {
  const history = useHistory();
  const classes = Style();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFirstTimeUser, setIsFirstTimeUser] = useState(false);

  const submit = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((authUser) => dispatch(LoginAction(authUser.user)))
      .catch((error) => alert(error));
  };

  const storeUserDetails = async (user) => {};

  const facebookLogin = () => {
    auth
      .signInWithPopup(facebookProvider)
      .then((result) => {
        storeUserDetails(result.user);
        dispatch(LoginAction(result.user));
        history.push(`/${result.user.displayName}`);
      })
      .catch((error) => alert(error));
  };

  const googleLogin = () => {
    auth
      .signInWithPopup(googleProvider)
      .then((result) => {
        // storeUserDetails(result.user);
        dispatch(LoginAction(result.user));
        history.push(`/${result.user.displayName}`);
      })
      .catch((error) => alert(error));
  };

  return (
    <div className={classes.login}>
      <div className={classes.login__top}>
        <Link to="/" className={classes.top__img}>
          <img src={images.InstaTextLogo} alt="logo" />
        </Link>
        <form className={classes.top__form} onSubmit={submit}>
          <input
            type="email"
            placeholder="Phone number, username, or email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            style={{
              backgroundColor:
                email.length > 6 && password > 6 ? "#0095f6" : "rgb(0 149 246 / 30%)",
            }}
          >
            Log In
          </button>
        </form>
        <div className={classes.top__signup}>
          <section className={classes.signup__linebreak}>
            <div></div>
            <h4>OR LOGIN WITH</h4>
            <div></div>
          </section>
          <div className={classes.signup__buttons}>
            <FacebookIcon onClick={facebookLogin} />
            <img src={images.GoogleLogo} onClick={googleLogin} alt="google-sign-in" />
          </div>
          <Link to="/forgot">Forgot password?</Link>
        </div>
      </div>

      <div className={classes.login__middle}>
        <p>Don't have an account? </p>
        <Link to="/signup">Sign up</Link>
      </div>

      <div className={classes.login__bottom}>
        <p>Get the app.</p>
        <div className={classes.bottom__links}>
          <img src={images.AppleStore} alt="apple-app-store" />
          <img src={images.GooglePlaystore} alt="google-play-store" />
        </div>
      </div>
    </div>
  );
};

export default Login;
