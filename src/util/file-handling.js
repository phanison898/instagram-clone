import imageCompression from "browser-image-compression";

export const handleImage = async (e, setImageData) => {
  const inputFile = e.target.files[0];
  const fileSize = inputFile.size / (1024 * 1024);

  if (fileSize > 3) {
    e.target.value = "";
    return alert("select an image less than 3MB size");
  }

  // compresing the image ...
  let compressedInputFile = inputFile;
  try {
    compressedInputFile = await imageCompression(inputFile, {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    });
  } catch (error) {
    alert(error);
  }

  let inputFileDataBase64;
  const file = new FileReader();
  if (compressedInputFile) {
    file.onloadend = (fileLoadedEvent) => {
      inputFileDataBase64 = fileLoadedEvent.target.result;
      setImageData(inputFileDataBase64);
    };
    file.readAsDataURL(compressedInputFile);
  }

  e.target.value = "";
};
