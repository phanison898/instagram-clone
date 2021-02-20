import { storage } from "../firebase/config";

const UploadProfilePic = async (uid, profilePic) => {
  const uploadTask = storage.ref(`user_profile_pictures/${uid}`).putString(profilePic, "data_url");

  let _url;

  uploadTask.on(
    "state_changed",
    (snapshot) => {
      // const value = Math.floor((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      // setProgress(value);
    },

    (error) => {
      alert(error);
    },

    async () => {
      return await storage
        .ref("user_profile_pictures")
        .child(uid)
        .getDownloadURL()
        .then((url) => url);
    }
  );
};

export { UploadProfilePic };
