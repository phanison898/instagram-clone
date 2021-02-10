import imageCompression from "browser-image-compression";

export const uploadMediaFile = async (e, setMedia, setMediaType) => {
  const inputFile = e.target.files[0];
  const inputFileType = inputFile.type.split("/")[0];
  const fileSize = inputFile.size / (1024 * 1024);

  // file size validation ...
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

  // image compression ...
  let compressedInputFile = inputFile;
  if (inputFileType === "image") {
    try {
      compressedInputFile = await imageCompression(inputFile, {
        maxSizeMB: 1,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
      });
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
      if (setMediaType) {
        setMediaType(inputFileType);
      }
    };
    file.readAsDataURL(compressedInputFile);
  }

  // clear the file input event value
  e.target.value = "";
};

// let _users = users;
// let indexes = [];
// for (let i = 0; i < users.length; i++) {
//   for (let j = 0; j < following.length; j++) {
//     if (users[i].uid === following[j]) {
//       // console.log("user uid : " + users[i].uid + " || following_uid : " + following[j]);
//       indexes.push(i);
//       break;
//     }
//   }
// }

// for (let i = indexes.length - 1; i >= 0; i--) _users.splice(indexes[i], 1);
