import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Avatar, Hidden } from "@material-ui/core";
import { ReactComponent as Grid } from "../../assets/icons/grid.svg";
import { GetUserData } from "../../store/actions/users";
import ProfilePost from "../../components/profilePost/ProfilePost";
import Style from "./Style";

const DashBoard = (props) => {
  const classes = Style();
  const dispatch = useDispatch();
  const { url, path } = props.match;
  const params = new URLSearchParams(props.location.search);
  const queryUID = params.get("id");

  const posts = useSelector((state) => state.posts);
  const following = useSelector((state) => state.following);
  const followers = useSelector((state) => state.followers);
  const currentUser = useSelector((state) => state.currentUser);
  const users = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(GetUserData(queryUID));
  }, [queryUID]);

  const UserMedia = () => {
    return (
      <div className={classes.usermedia}>
        <div className={classes.usermedia__header}>
          <Grid />
          <p>Posts</p>
        </div>
        <div className={classes.usermedia__body}>
          <div>
            {posts.map((post) => (
              <ProfilePost post={post} />
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={classes.dashboard}>
      <div className={classes.dashboard__header}>
        <div className={classes.header__userinfo}>
          {/* col-1 */}
          <div className={classes.userinfo__profilePic}>
            <Avatar src={users.profilePic} />
          </div>

          {/* col-2 */}
          <div className={classes.userinfo__details}>
            <h4>{users.fullName}</h4>

            <div className={classes.details__stats}>
              <a>
                <p>{posts.length}</p>
                <p>posts</p>
              </a>

              <Link to={`/${users.fullName}/followers`}>
                <p>{followers.length}</p>
                <p>followers</p>
              </Link>

              <Link to={`/${users.fullName}/following`}>
                <p>{following.length}</p>
                <p>following</p>
              </Link>
            </div>

            <Hidden xsDown>
              <div className={classes.details__bio}>
                <p key={"username"}>{users.username}</p>
                {String(users.bio)
                  .split(",")
                  .map((b, i) => (
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
          <p key={"username"}>{users.username}</p>
          {String(users.bio)
            .split(",")
            .map((b, i) => (
              <p key={`bio-data-${i}`}>{b.trim()}</p>
            ))}
        </div>
        <div className={classes.header__button}>
          {currentUser.uid === queryUID ? (
            <Link to={`/${currentUser.fullName}/edit`}>Edit</Link>
          ) : (
            <button>follow</button>
          )}
        </div>
      </div>
      <div className={classes.usermedia}>
        <UserMedia />
      </div>
    </div>
  );
};

const Posts = () => <h1>Posts</h1>;
const Create = () => <h1>Photos of you</h1>;

export default DashBoard;
