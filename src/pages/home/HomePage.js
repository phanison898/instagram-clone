import React from "react";
import { Switch, Route } from "react-router-dom";
import ProtectedRoute from "../../components/protectedRoute/ProtectedRoute";
import Header from "../../components/header/Header";
import Feed from "../../components/feed/Feed";
import DashBoard from "../../components/dashboard/DashBoard";
import Style from "./Style";

const HomePage = (props) => {
  const classes = Style();
  const { url } = props.match;

  return (
    <div className={classes.home}>
      <Header path={url} />
      <div className={classes.body}>
        <Switch>
          <ProtectedRoute exact path={`${url}`} component={Feed} />
          <ProtectedRoute path={`${url}/profile`} component={DashBoard} />
        </Switch>
      </div>
    </div>
  );
};

export default HomePage;
