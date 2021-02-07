import React, { useState } from "react";
import { Link } from "react-router-dom";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import * as images from "../../assets/images";
import Style from "./Style";
import { auth } from "../../firebase";

const ForgotPassword = () => {
  const classes = Style();

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const isEntered = () => {
    if (email !== "") {
      return true;
    } else {
      return false;
    }
  };

  const submit = (e) => {
    e.preventDefault();

    auth
      .sendPasswordResetEmail(email)
      .then(
        () => setMessage("Check your inbox"),
        setTimeout(() => {
          setMessage("");
        }, 3000)
      )
      .catch((error) => alert(error));
  };

  return (
    <div className={classes.forgot}>
      <LockOutlinedIcon className={classes.lock} />

      <h4>Trouble Logging In?</h4>
      <p>Enter your email and we'll send you a link to get back into your account.</p>

      <form className={classes.form} onSubmit={submit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          disabled={!isEntered()}
          style={{
            backgroundColor: email.length > 6 ? "#0095f6" : "rgb(0 149 246 / 30%)",
            cursor: isEntered() ? "pointer" : "auto",
          }}
        >
          Send Login Link
        </button>
      </form>

      <div className={classes.create_account}>
        <section className={classes.create_account__linebreak}>
          <div></div>
          <h4>OR</h4>
          <div></div>
        </section>
        <Link to="/signup">Create New Account</Link>
        <p>{message && message}</p>
      </div>

      <Link className={classes.back_to_login} to="/login">
        Back To Login
      </Link>
    </div>
  );
};

export default ForgotPassword;
