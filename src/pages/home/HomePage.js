import React from "react";
import { Switch, Route } from "react-router-dom";
import ProtectedRoute from "../../components/protectedRoute/ProtectedRoute";
import Header from "../../components/header/Header";
import DashBoard from "../../components/dashboard/DashBoard";
import Style from "./Style";

const HomePage = (props) => {
  const classes = Style();
  const { url } = props.match;

  return (
    <div className={classes.home}>
      <Switch>
        <ProtectedRoute path={`${url}`} component={Header} />
        <ProtectedRoute path={`${url}/profile`} component={() => <h2>Hello</h2>} />
        <Route path={`${url}/*`} component={() => <h2>404</h2>} />
      </Switch>
    </div>
  );
};

export default HomePage;
