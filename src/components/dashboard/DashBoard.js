import React, { useEffect, useState } from "react";
import { GridList, GridListTile } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Avatar, Hidden } from "@material-ui/core";
import { ReactComponent as Grid } from "../../assets/icons/grid.svg";
import { GetQueryUserData } from "../../store/actions/queryUser";
import { Follow, UnFollow } from "../../store/actions/following";
import Style from "./Style";

const DashBoard = (props) => {
  const classes = Style();
  const dispatch = useDispatch();
  const queryUID = new URLSearchParams(props.location.search).get("id");

  const { queryUser, currentUser } = useSelector((state) => state);

  const [following, setFollowing] = useState(queryUser.isFollowing);
  const [follower, setFollower] = useState(queryUser.isFollower);

  const toggleFollow = () => {
    if (following) {
      dispatch(UnFollow(queryUser.uid));
      setFollowing(false);
    } else {
      dispatch(Follow(queryUser.uid));
      setFollowing(true);
    }
  };

  useEffect(() => {
    setFollowing(queryUser.isFollowing);
    setFollower(queryUser.isFollower);
  }, [queryUser.isFollowing, queryUser.isFollower]);

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
                <p>{queryUser?.posts?.length}</p>
                <p>posts</p>
              </a>

              <Link to={`/${currentUser.fullName}/followers`}>
                <p>{queryUser?.followers?.length}</p>
                <p>followers</p>
              </Link>

              <Link to={`/${currentUser.fullName}/following`}>
                <p>{queryUser?.following?.length}</p>
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
          ) : following ? (
            <button
              style={{
                backgroundColor: "transparent",
                color: "grey",
                border: "1px solid lightgrey",
              }}
              onClick={toggleFollow}
            >
              Following
            </button>
          ) : (
            <button onClick={toggleFollow}>
              {follower && !following ? "Follow Back" : "Follow"}
            </button>
          )}
        </div>
      </div>
      <div className={classes.usermedia}>
        <UserPosts posts={queryUser.posts} />
      </div>
    </div>
  );
};

export default DashBoard;

// mini components

const UserPosts = ({ posts }) => {
  const classes = Style();
  const history = useHistory();
  const { fullName } = useSelector((state) => state.currentUser);
  return (
    <div className={classes.usermedia}>
      <div className={classes.usermedia__header}>
        <Grid />
        <p>Posts</p>
      </div>

      <div className={classes.usermedia__body}>
        <GridList cellHeight="auto" cols="3" spacing={1} className={classes.media__row}>
          {posts?.map((post, i) => (
            <GridListTile key={`post-${i}`} className={classes.media__col}>
              {post.media.type === "image" ? (
                <img
                  src={post.media.url}
                  key={post.id}
                  className={classes.media__post}
                  onClick={() => history.push(`/${fullName}/post?id=${post.id}`)}
                />
              ) : (
                <video
                  className={classes.media__post}
                  onClick={() => history.push(`/${fullName}/post?id=${post.id}`)}
                >
                  <source src={`${post.media.url}#t=0.1`} />
                </video>
              )}
            </GridListTile>
          ))}
        </GridList>
      </div>
    </div>
  );
};
