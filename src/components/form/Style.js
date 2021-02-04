import { makeStyles } from "@material-ui/core/styles";
import { primary as main, primaryLight as light } from "../../assets/Colors";

export default makeStyles((theme) => ({
  upload: {
    width: 250,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 20,
  },

  upload__header: {
    position: "relative",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 10,
    // borderBottom: "1px solid rgba(219,219,219,1)",

    "& > .MuiAvatar-root": {
      width: 75,
      height: 75,
    },

    "& > h4": {
      fontSize: 16,
      margin: "10px 0",
      paddingBottom: 10,
    },
  },

  upload__box: {
    position: "relative",
    width: "100%",
    height: 200,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  upload__progress: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    display: "flex",
    alignItems: "center",
    marginTop: 10,
    "& > p": {
      fontSize: 12,
      fontWeight: 600,
    },
  },

  progress__bar: {
    flex: 1,
    height: 8,
    marginRight: 5,
    borderRadius: 10,
    backgroundColor: main,
    "& > *": {
      backgroundColor: light,
    },
  },

  upload__label: {
    width: "100%",
    height: "100%",
    padding: 5,
    color: "grey",
    fontSize: 13,
    background: `linear-gradient(${light},${light}),linear-gradient(${light},${light})`,
    backgroundPosition: "center",
    backgroundSize: "40% 2px,2px 40%",
    backgroundRepeat: "no-repeat",
    border: "1px dashed grey",
    borderRadius: 4,
    transition: "all 0.4s ease",
    cursor: "pointer",
    "&:hover": {
      backgroundSize: "50% 2px,2px 50%",
    },
  },

  upload__preview: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px dashed grey",
    overflow: "hidden",
    "& > img": {
      ObjectFit: "contain",
      height: "100%",
    },
    "& > .MuiSvgIcon-root": {
      position: "absolute",
      top: 5,
      right: 5,
    },
  },

  upload__form: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    marginTop: 20,
    "& > textarea": {
      outlineColor: "black",
      border: "1px solid rgba(0,0,0,0.1)",
      backgroundColor: "transparent",
      padding: 5,
      transition: "all 0.4s ease",
    },

    "& > button": {
      height: 30,
      outlineWidth: 0,
      marginTop: 20,
      backgroundColor: main,
      color: "white",
      border: 0,
      borderRadius: 4,
    },
  },
}));
