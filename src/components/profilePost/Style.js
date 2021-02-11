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

    "&:hover > p": {
      display: "flex",
    },
  },
  img: {
    objectFit: "cover",
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
  description_overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: 40,
    backgroundColor: "black",
    opacity: 0,
    zIndex: 4,
    transition: "opacity 0.5s ease",
  },
  description: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    padding: 5,
    color: "white",
    zIndex: 5,
    display: "none",
  },
}));
