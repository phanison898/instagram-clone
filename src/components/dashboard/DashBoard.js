import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Avatar, Hidden } from "@material-ui/core";
import { ReactComponent as Grid } from "../../assets/icons/grid.svg";
import { GetQueryUserData, CleanQueryUserData } from "../../store/actions/queryUser";
import ProfilePost from "../../components/profilePost/ProfilePost";
import Style from "./Style";

const DashBoard = (props) => {
  const classes = Style();
  const dispatch = useDispatch();
  const queryUID = new URLSearchParams(props.location.search).get("id");

  const { currentUser, queryUser, users, posts, following, followers } = useSelector(
    (state) => state
  );

  useEffect(() => {
    dispatch(GetQueryUserData(queryUID));
  }, [queryUID]);

  return (
    <div className={classes.dashboard}>
      <div className={classes.dashboard__header}>
        <div className={classes.header__userinfo}>
          {/* col-1 */}
          <div className={classes.userinfo__profilePic}>
            <Avatar src={queryUser.profilePic} />
          </div>

          {/* col-2 */}
          <div className={classes.userinfo__details}>
            <h4>{queryUser.fullName}</h4>

            <div className={classes.details__stats}>
              <a>
                <p>{posts.length}</p>
                <p>posts</p>
              </a>

              <Link to={`/${currentUser.fullName}/followers`}>
                <p>{followers.length}</p>
                <p>followers</p>
              </Link>

              <Link to={`/${currentUser.fullName}/following`}>
                <p>{following.length}</p>
                <p>following</p>
              </Link>
            </div>

            <Hidden xsDown>
              <div className={classes.details__bio}>
                <p key={"username"}>{queryUser.username}</p>
                {String(queryUser.bio)
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
          <p key={"username"}>{queryUser.username}</p>
          {String(queryUser.bio)
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
        <UserPosts posts={posts} />
      </div>
    </div>
  );
};

export default DashBoard;

// mini components

const UserPosts = ({ posts }) => {
  const classes = Style();
  return (
    <div className={classes.usermedia}>
      <div className={classes.usermedia__header}>
        <Grid />
        <p>Posts</p>
      </div>

      <div className={classes.usermedia__body}>
        <div>
          {Array.from(posts).map((post, i) => (
            <ProfilePost key={`user-post-${i}`} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};
