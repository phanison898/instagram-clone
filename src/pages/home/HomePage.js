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
import Suggested from "../../components/users/Suggested";
import Feed from "../../components/feed/Feed";
import Form from "../../components/form/Form";
import Edit from "../../components/edit/Edit";
import Following from "../../components/users/Following";
import Followers from "../../components/users/Followers";
import Style from "./Style";

const HomePage = (props) => {
  const classes = Style();
  const dispatch = useDispatch();
  const { url } = props.match;

  useEffect(() => {
    /* Gets ALl users from firebase firestore...,
     * When user successfully logged-in
     */
    dispatch(GetAllUsers(auth.currentUser.uid));
  }, []);

  return (
    <Paper className={classes.home}>
      {/* Page Header */}
      <Header path={url} />

      {/* Page Body */}
      <div className={classes.body}>
        <Switch>
          <ProtectedRoute path={`${url}`} exact component={Feed} />
          <ProtectedRoute path={`${url}/profile`} component={DashBoard} />
          <ProtectedRoute path={`${url}/post`} component={DetailedPost} />
          <ProtectedRoute path={`${url}/edit`} component={Edit} />
          <ProtectedRoute path={`${url}/suggested-users`} component={Suggested} />
          <ProtectedRoute path={`${url}/following`} component={Following} />
          <ProtectedRoute path={`${url}/followers`} component={Followers} />
          <ProtectedRoute path={`${url}/create`} component={Form} />
        </Switch>
      </div>
    </Paper>
  );
};

export default HomePage;
