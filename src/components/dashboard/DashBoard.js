import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, Switch } from "react-router-dom";
import { Avatar, Hidden } from "@material-ui/core";
import ProtectedRoute from "../../components/protectedRoute/ProtectedRoute";
import { ReactComponent as Grid } from "../../assets/icons/grid.svg";
import { ReactComponent as IGTV } from "../../assets/icons/igtv.svg";
import Style from "./Style";

const DashBoard = (props) => {
  const classes = Style();

  const [data, setData] = useState({
    displayName: "",
    username: "",
    photoURL: "",
    posts: "",
    followers: "",
    following: "",
  });

  const { url, path } = props.match;

  const params = new URLSearchParams(props.location.search);

  const queryUID = params.get("id");

  const currentUser = useSelector((state) => state.user);

  const people = useSelector((state) => state.people);

  useEffect(() => {
    if (queryUID === currentUser.uid) {
      setData({
        displayName: currentUser.displayName,
        username: currentUser.username,
        photoURL: currentUser.photoURL,
        posts: currentUser.posts,
        followers: currentUser.followers,
        following: currentUser.following,
      });
    } else {
      const [queryUser] = people.filter((user) => user.uid === queryUID);
      setData({
        displayName: queryUser.displayName,
        username: queryUser.username,
        photoURL: queryUser.photoURL,
        posts: queryUser.posts,
        followers: queryUser.followers,
        following: queryUser.following,
      });
    }
  }, [queryUID]);

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

  return (
    <div className={classes.dashboard}>
      <div className={classes.dashboard__header}>
        <div className={classes.header__userinfo}>
          {/* col-1 */}
          <div className={classes.userinfo__profilePic}>
            <Avatar src={data.photoURL} />
          </div>

          {/* col-2 */}
          <div className={classes.userinfo__details}>
            <h4>{data.displayName}</h4>

            <div className={classes.details__stats}>
              <Link to={`${url}`}>
                <p>{data.posts}</p>
                <p>posts</p>
              </Link>

              <Link to={`/${data.displayName}/followers`}>
                <p>{data.followers}</p>
                <p>followers</p>
              </Link>

              <Link to={`/${data.displayName}/following`}>
                <p>{data.following}</p>
                <p>following</p>
              </Link>
            </div>

            <Hidden xsDown>
              <div className={classes.details__bio}>
                <p key={"username"}>{data.username}</p>
                {bio.map((b, i) => (
                  <p key={`bio-data-${i}`}>{b}</p>
                ))}
              </div>
            </Hidden>
          </div>
          {/* col-3 */}
          <Hidden xsDown>
            <div className={classes.userinfo__empty}></div>
          </Hidden>
        </div>
        <div className={classes.details__bio__xs}>
          <p key={"username"}>{data.username}</p>
          {bio.map((b, i) => (
            <p key={`bio-data-${i}`}>{b}</p>
          ))}
        </div>
        <div className={classes.header__button}>
          {currentUser.uid === queryUID ? (
            <Link to={`/${data.displayName}/edit`}>Edit</Link>
          ) : (
            <button>follow</button>
          )}
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
