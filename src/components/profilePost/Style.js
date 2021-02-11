import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  post: {
    position: "relative",
    width: 300,
    height: 300,
    display: "flex",
    backgroundColor: "lightgrey",
    cursor: "pointer",

    "&:hover > span": {
      opacity: 0.5,
    },

    "&:hover > div": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  img: {
    objectFit: "contain",
    width: "100%",
    height: "100%",
    zIndex: 1,
  },

  overlay: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "black",
    opacity: 0,
    zIndex: 2,
    transition: "opacity 0.5s ease",
  },
  stats: {
    position: "absolute",
    top: 0,
    display: "none",
    width: "100%",
    height: "100%",
    zIndex: 3,

    "& > svg": {
      margin: 2,
    },

    "& > p": {
      color: "white",
      fontSize: 18,
      fontWeight: 600,
      margin: 2,
    },
  },
}));
