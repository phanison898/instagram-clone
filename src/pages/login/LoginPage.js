import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Login from "../../components/login/Login";
import Style from "./Style";

const LoginPage = () => {
  const classes = Style();
  const { fullName } = useSelector((state) => state.currentUser);

  return fullName ? (
    <Redirect to={`/${fullName}`} />
  ) : (
    <div className={classes.login}>
      <Login />
    </div>
  );
};

export default LoginPage;
