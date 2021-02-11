import React from "react";
import { Switch } from "react-router-dom";
import { Paper } from "@material-ui/core";
import ProtectedRoute from "../../components/protectedRoute/ProtectedRoute";
import Header from "../../components/header/Header";
import Feed from "../../components/feed/Feed";
import DashBoard from "../../components/dashboard/DashBoard";
import Form from "../../components/form/Form";
import Edit from "../../components/edit/Edit";
import Users from "../../components/users/Users";
import DetailedPost from "../../components/detailedPost/DetailedPost";
import Style from "./Style";

const HomePage = (props) => {
  const classes = Style();
  const { url } = props.match;

  return (
    <Paper className={classes.home}>
      <Header path={url} />
      <div className={classes.body}>
        <Switch>
          <ProtectedRoute exact path={`${url}`} component={Feed} />
          <ProtectedRoute path={`${url}/profile`} component={DashBoard} />
          <ProtectedRoute path={`${url}/post`} component={DetailedPost} />
          <ProtectedRoute path={`${url}/edit`} component={Edit} />
          <ProtectedRoute path={`${url}/users`} component={Users} />
          <ProtectedRoute path={`${url}/following`} component={Users} />
          <ProtectedRoute path={`${url}/followers`} component={Users} />
          <ProtectedRoute path={`${url}/create`} component={Form} />
        </Switch>
      </div>
    </Paper>
  );
};

export default HomePage;
