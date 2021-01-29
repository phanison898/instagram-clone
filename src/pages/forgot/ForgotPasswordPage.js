import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import ForgotPassword from "../../components/forgot/ForgotPassword";
import Style from "./Style";

const ForgotPasswordPage = () => {
  const classes = Style();
  const { displayName } = useSelector((state) => state.user);
  return displayName ? (
    <Redirect to={`/${displayName}`} />
  ) : (
    <div className={classes.forgot}>
      <ForgotPassword />
    </div>
  );
};

export default ForgotPasswordPage;
