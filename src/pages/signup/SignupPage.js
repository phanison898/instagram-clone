import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Signup from "../../components/signup/Signup";
import Style from "./Style";

const SignupPage = () => {
  const classes = Style();
  const { fullName } = useSelector((state) => state.currentUser);

  return fullName ? (
    <Redirect to={`/${fullName}`} />
  ) : (
    <div className={classes.signup}>
      <Signup />
    </div>
  );
};

export default SignupPage;
