import React, { useState } from "react";
import { useSelector } from "react-redux";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import ReactPlayer from "react-player";
import { Avatar, LinearProgress } from "@material-ui/core";
import { primary as main, primaryLight as light } from "../../assets/Colors";
import firebase from "firebase";
import { v4 as uuid } from "uuid";
import db, { storage } from "../../firebase";
import { uploadMediaFile } from "../../util/file-handling";
import Style from "./Style";

const Form = () => {
  const classes = Style();

  const { uid, photoURL } = useSelector((state) => state.user);

  const [title, setTitle] = useState("");
  const [media, setMedia] = useState("");
  const [mediaType, setMediaType] = useState("");
  const [progress, setProgress] = useState("");

  const uploadToFirebaseDB = (mediaURL) => {
    db.collection("posts")
      .add({
        uid: uid,
        title: title,
        media: mediaURL,
        mediaType: mediaType,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(() => resetState());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uuid();

    const uploadTask = storage.ref(`posts/${id}`).putString(media, "data_url");

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const value = Math.floor((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        setProgress(value);
      },

      (error) => {
        alert(error);
      },

      () => {
        storage
          .ref("posts")
          .child(id)
          .getDownloadURL()
          .then((url) => uploadToFirebaseDB(url));
      }
    );
  };

  const resetState = () => {
    setTitle("");
    setMedia("");
    setMediaType("");
    setProgress("");
  };

  const isEntered = () => {
    if (media !== "") {
      if (title !== "") {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };

  return (
    <div className={classes.upload}>
      <div className={classes.upload__header}>
        <Avatar src={photoURL} />

        <h4>{progress ? "Creating ... " : "Create a post"}</h4>

        {progress ? (
          <div className={classes.upload__progress}>
            <LinearProgress
              variant="determinate"
              value={progress}
              className={classes.progress__bar}
            />

            <p>{progress} %</p>
          </div>
        ) : (
          ""
        )}
      </div>

      <div className={classes.upload__box}>
        {media === "" ? (
          <label className={classes.upload__label} htmlFor="upload-file">
            browse file
          </label>
        ) : (
          <div className={classes.upload__preview}>
            {mediaType === "image" ? (
              <img src={media} alt="uploaded-file" />
            ) : (
              <ReactPlayer url={media} controls={true} />
            )}
            <HighlightOffIcon onClick={() => setMedia("")} />
          </div>
        )}
      </div>

      <form className={classes.upload__form} onSubmit={handleSubmit}>
        <input
          id="upload-file"
          type="file"
          hidden
          accept="video/*,image/*"
          onChange={(e) => uploadMediaFile(e, setMedia, setMediaType)}
        />

        <textarea
          rows="5"
          placeholder={`write something...`}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button
          type="submit"
          disabled={!isEntered()}
          style={{ backgroundColor: isEntered() ? main : light }}
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default Form;
