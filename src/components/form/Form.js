import React, { useState } from "react";
import { useSelector } from "react-redux";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import imageCompression from "browser-image-compression";
import ReactPlayer from "react-player";
import { Avatar, LinearProgress } from "@material-ui/core";
import { primary as main, primaryLight as light } from "../../assets/Colors";
import firebase from "firebase";
import { v4 as uuid } from "uuid";
import db, { storage } from "../../firebase";
import Style from "./Style";

const Form = () => {
  const classes = Style();

  const { displayName, uid, photoURL } = useSelector((state) => state.user);

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

  const handleFile = async (e) => {
    const inputFile = e.target.files[0];
    const inputFileType = inputFile.type.split("/")[0];

    const fileSize = inputFile.size / (1024 * 1024);

    switch (inputFileType) {
      case "video":
        if (fileSize > 25) {
          e.target.value = "";
          return alert("Select a video less than 25MB size");
        }
        break;
      case "image":
        if (fileSize > 3) {
          e.target.value = "";
          return alert("select an image less than 3MB size");
        }
        break;
      default:
        break;
    }

    let compressedInputFile = inputFile;

    if (inputFileType === "image") {
      const compressionOptions = {
        maxSizeMB: 1,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
      };

      try {
        compressedInputFile = await imageCompression(inputFile, compressionOptions);
      } catch (error) {
        alert(error);
      }
    }

    let inputFileDataBase64;
    const file = new FileReader();
    if (compressedInputFile) {
      file.onloadend = (fileLoadedEvent) => {
        inputFileDataBase64 = fileLoadedEvent.target.result;
        setMedia(inputFileDataBase64);
        setMediaType(inputFileType);
      };
      file.readAsDataURL(compressedInputFile);
    }

    // clear the file input event value
    e.target.value = "";
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
        <input id="upload-file" type="file" hidden accept="video/*,image/*" onChange={handleFile} />
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
