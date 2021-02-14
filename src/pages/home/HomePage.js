import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch } from "react-router-dom";
import { Paper } from "@material-ui/core";
import { auth } from "../../firebase";
import { GetAllUsers } from "../../store/actions/users";
import ProtectedRoute from "../../components/protectedRoute/ProtectedRoute";
import DetailedPost from "../../components/detailedPost/DetailedPost";
import DashBoard from "../../components/dashboard/DashBoard";
import Header from "../../components/header/Header";
import Users from "../../components/users/Users";
import Feed from "../../components/feed/Feed";
import Form from "../../components/form/Form";
import Edit from "../../components/edit/Edit";
import Style from "./Style";

const HomePage = (props) => {
  const classes = Style();
  const dispatch = useDispatch();
  const { url } = props.match;

  useEffect(() => {
    dispatch(GetAllUsers(auth.currentUser.uid));
  }, []);

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
