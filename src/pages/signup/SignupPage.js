import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Signup from "../../components/signup/Signup";
import Style from "./Style";

const SignupPage = () => {
  const classes = Style();
  const { displayName } = useSelector((state) => state.user);

  return displayName ? (
    <Redirect to={`/${displayName}`} />
  ) : (
    <div className={classes.signup}>
      <Signup />
    </div>
  );
};

export default SignupPage;
