import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import ForgotPassword from "../../components/forgot/ForgotPassword";
import Style from "./Style";

const ForgotPasswordPage = () => {
  const classes = Style();
  const { fullName } = useSelector((state) => state.currentUser);
  return fullName ? (
    <Redirect to={`/${fullName}`} />
  ) : (
    <div className={classes.forgot}>
      <ForgotPassword />
    </div>
  );
};

export default ForgotPasswordPage;
