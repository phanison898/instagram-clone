import React from "react";
import { useSelector } from "react-redux";
import { Link, Switch } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import ProtectedRoute from "../../components/protectedRoute/ProtectedRoute";
import { ReactComponent as Settings } from "../../assets/icons/settings.svg";
import { ReactComponent as Grid } from "../../assets/icons/grid.svg";
import { ReactComponent as IGTV } from "../../assets/icons/igtv.svg";
import Form from "../../components/form/Form";
import Style from "./Style";

const DashBoard = (props) => {
  const { url, path } = props.match;
  const classes = Style();
  const { displayName, photoURL } = useSelector((state) => state.user);

  return (
    <div className={classes.dashboard}>
      <div className={classes.userinfo}>
        <div className={classes.profilePic}>
          <Avatar src={photoURL} />
        </div>
        <div className={classes.statastics}>
          <div className={classes.statastics__top}>
            <h4>{displayName}</h4>
            <Link to={`/${displayName}/edit`}>Edit Profile</Link>
            <Settings />
          </div>
          <div className={classes.statastics__center}>
            <p>
              <span>6</span> posts
            </p>
            <p>
              <span>130</span> followers
            </p>
            <p>
              <span>134</span> following
            </p>
          </div>
          <div className={classes.statastics__bottom}>
            <p>Phani_The_Dev</p>
            <p>💻 Tech Geek</p>
            <p>🏆 Crick lover</p>
          </div>
        </div>
      </div>
      <div className={classes.usermedia}>
        <nav>
          <Link to={`${path}`}>
            <Grid /> POSTS
          </Link>
          <Link to={`${path}/create`}>
            <IGTV /> CREATE
          </Link>
        </nav>
        <div className={classes.usermedia__body}>
          <Switch>
            <ProtectedRoute exact path={`${url}`} component={Posts} />
            <ProtectedRoute path={`${url}/create`} component={Form} />
          </Switch>
        </div>
      </div>
    </div>
  );
};

const Posts = () => <h1>Posts</h1>;
const Create = () => <h1>Create post</h1>;

export default DashBoard;
