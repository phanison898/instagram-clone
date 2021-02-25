import { GridList, GridListTile } from "@material-ui/core";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Style from "./Style";

const ProfilePosts = ({ posts }) => {
  const classes = Style();
  const history = useHistory();

  const { fullName } = useSelector((state) => state.currentUser);

  return (
    <div className={classes.root}>
      {posts?.map((post, i) => (
        <div key={`post-${i}`} className={classes.usermedia}>
          {post.media.type === "image" ? (
            <img
              src={post.media.url}
              key={post.id}
              onClick={() => history.push(`/${fullName}/post?id=${post.id}`)}
            />
          ) : (
            <video onClick={() => history.push(`/${fullName}/post?id=${post.id}`)}>
              <source src={`${post.media.url}#t=0.1`} />
            </video>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProfilePosts;
