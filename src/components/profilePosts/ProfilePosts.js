import { GridList, GridListTile } from "@material-ui/core";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Style from "./Style";

const ProfilePosts = ({ posts }) => {
  const classes = Style();
  const history = useHistory();

  const { fullName } = useSelector((state) => state.currentUser);

  return (
    <div className={classes.usermedia}>
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

export default ProfilePosts;
