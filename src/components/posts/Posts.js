import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import FlipMove from "react-flip-move";
import Post from "./post/Post";
import db from "../../firebase";

const Posts = () => {
  const classes = Style();
  const { uid } = useSelector((state) => state.currentUser);

  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState();

  useEffect(() => {
    db.collection("users")
      .where("uid", "==", uid)
      .onSnapshot((snap) => {
        snap.docs.map((doc) => {
          console.log(doc.data().followers[1]);
        });
      });
    console.log(user);
    db.collection("posts")
      .where("uid", "==", uid)
      .onSnapshot((snap) => setPosts(snap.docs.map((doc) => ({ id: doc.id, data: doc.data() }))));
  }, []);

  return (
    <div className={classes.posts}>
      <FlipMove style={{ width: "100%" }}>
        {Array.from(posts).map((post) => (
          <Post
            key={post.id}
            profile={user?.photoURL}
            username={user?.displayName}
            timestamp={post.data.timestamp}
            description={post.data.title}
            fileType={post.data.mediaType}
            fileData={post.data.media}
          />
        ))}
      </FlipMove>
    </div>
  );
};

const Style = makeStyles((theme) => ({
  posts: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export default Posts;
