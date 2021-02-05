import React from "react";
import { useSelector } from "react-redux";
import { Link, Switch } from "react-router-dom";
import { Avatar, Hidden } from "@material-ui/core";
import ProtectedRoute from "../../components/protectedRoute/ProtectedRoute";
import { ReactComponent as Grid } from "../../assets/icons/grid.svg";
import { ReactComponent as IGTV } from "../../assets/icons/igtv.svg";
import Style from "./Style";

const DashBoard = (props) => {
  const { url, path } = props.match;
  const classes = Style();
  const { displayName, photoURL } = useSelector((state) => state.user);

  const UserMedia = () => {
    return (
      <>
        <nav>
          <Link to={`${path}`}>
            <Grid /> POSTS
          </Link>
          <Link to={`${path}/tagged`}>
            <IGTV /> TAGGED
          </Link>
        </nav>
        <div className={classes.usermedia__body}>
          <Switch>
            <ProtectedRoute exact path={`${url}`} component={Posts} />
            <ProtectedRoute path={`${url}/tagged`} component={Create} />
          </Switch>
        </div>
      </>
    );
  };

  const text = "hello\n hai\n how r u\n what?";

  console.log(text);

  return (
    <div className={classes.dashboard}>
      <div className={classes.dashboard__header}>
        <div className={classes.header__userinfo}>
          {/* col-1 */}
          <div className={classes.userinfo__profilePic}>
            <Avatar src={photoURL} />
          </div>

          {/* col-2 */}
          <div className={classes.userinfo__details}>
            <h4>{displayName}</h4>

            <div className={classes.details__stats}>
              <Link to={`${url}`}>
                <p>6</p>
                <p>posts</p>
              </Link>

              <Link to={`/${displayName}/followers`}>
                <p>130</p>
                <p>followers</p>
              </Link>

              <Link to={`/${displayName}/following`}>
                <p>134</p>
                <p>following</p>
              </Link>
            </div>

            <div className={classes.details__bio}>
              {bio.map((data, i) => (
                <p key={`bio-data-${i}`}>{data}</p>
              ))}
            </div>
          </div>
          {/* col-3 */}
          <Hidden xsDown>
            <div className={classes.userinfo__empty}></div>
          </Hidden>
        </div>
        <div className={classes.header__button}>
          <Link to={`/${displayName}/edit`}>Edit</Link>
          {/* <button>follow</button> */}
        </div>
      </div>
      <div className={classes.usermedia}></div>
    </div>
  );
};

const Posts = () => <h1>Posts</h1>;
const Create = () => <h1>Photos of you</h1>;

export default DashBoard;

// sample bio data ...

const bio = ["💻 Tech Geek", "🏆 Cric Lover", "💻 Introvart"];
