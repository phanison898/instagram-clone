import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const SignupPage = () => {
  const { displayName } = useSelector((state) => state.user);

  return displayName ? <Redirect to={`/${displayName}`} /> : <div>Signup page</div>;
};

export default SignupPage;
