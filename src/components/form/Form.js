import React, { useState } from "react";
import { useSelector } from "react-redux";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import ReactPlayer from "react-player";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { Avatar, LinearProgress, Backdrop } from "@material-ui/core";
import { primary as main, primaryLight as light } from "../../assets/Colors";
import firebase from "firebase";
import { v4 as uuid } from "uuid";
import db, { storage } from "../../firebase/config";
import { useHistory, Redirect } from "react-router-dom";
import { UploadMediaFile } from "../../util/file-handling";
import Style from "./Style";
import Animation from "../../util/animations/Animation";
import Loading from "../../assets/lottie/wave-loading.json";

const Form = () => {
  const classes = Style();
  const history = useHistory();

  const { uid, profilePic, fullName } = useSelector((state) => state.currentUser);

  const [description, setDescription] = useState("");
  const [media, setMedia] = useState({
    type: "",
    data: "",
  });
  const [progress, setProgress] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const uploadToFirestore = (mediaURL) => {
    db.collection("users")
      .doc(uid)
      .collection("posts")
      .add({
        uid,
        description,
        media: {
          type: media.type,
          url: mediaURL,
        },
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        resetState();
        setIsLoading(false);
        history.push(`/${fullName}/profile?id=${uid}`);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uuid();

    setIsLoading(true);

    const uploadTask = storage.ref(`users/${uid}/posts/${id}`).putString(media.data, "data_url");

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
          .ref(`users/${uid}/posts`)
          .child(id)
          .getDownloadURL()
          .then((url) => uploadToFirestore(url));
      }
    );
  };

  const resetState = () => {
    setDescription("");
    setMedia({
      type: "",
      data: "",
    });
    setProgress("");
  };

  const isEntered = () => {
    if (media.data !== "" && description !== "") {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.goBack__button}>
        <KeyboardBackspaceIcon onClick={() => history.goBack()} />
      </div>
      <div className={classes.upload}>
        <div className={classes.upload__header}>
          <Avatar src={profilePic} />

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
          {media.data === "" ? (
            <label className={classes.upload__label} htmlFor="upload-file">
              browse file
            </label>
          ) : (
            <div className={classes.upload__preview}>
              {media.type === "image" ? (
                <img src={media.data} alt="uploaded-file" />
              ) : (
                <ReactPlayer url={media.data} controls={true} />
              )}
              <HighlightOffIcon onClick={() => setMedia({ type: "", data: "" })} />
            </div>
          )}
        </div>

        <form className={classes.upload__form} onSubmit={handleSubmit}>
          <input
            id="upload-file"
            type="file"
            hidden
            accept="video/*,image/*"
            onChange={(e) => UploadMediaFile(e, setMedia)}
          />

          <textarea
            rows="5"
            placeholder={`write something...`}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
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
      <LoadingAnimation isLoading={isLoading} />
    </div>
  );
};

export default Form;

const LoadingAnimation = ({ isLoading }) => (
  <Backdrop open={isLoading} style={{ zIndex: 10000 }}>
    <div style={{ width: "500px", height: "250px" }}>
      <Animation src={Loading} />
    </div>
  </Backdrop>
);
