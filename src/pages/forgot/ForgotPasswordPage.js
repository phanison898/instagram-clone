import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const ForgotPasswordPage = () => {
  const { displayName } = useSelector((state) => state.user);
  return displayName ? <Redirect to={`/${displayName}`} /> : <div>Forgot Password Page</div>;
};

export default ForgotPasswordPage;
