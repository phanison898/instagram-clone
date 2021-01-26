import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const LoginPage = () => {
  const { displayName } = useSelector((state) => state.user);

  return displayName ? <Redirect to={`/${displayName}`} /> : <div>LoginPage</div>;
};

export default LoginPage;
