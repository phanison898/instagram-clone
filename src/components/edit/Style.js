import { makeStyles } from "@material-ui/core/styles";
import { primary } from "../../assets/Colors";

export default makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    paddingTop: 20,
  },

  form: {
    width: 300,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  form__header: {
    position: "relative",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 20,

    "& > .MuiAvatar-root": {
      width: 100,
      height: 100,
    },

    "& > label": {
      color: primary,
      fontSize: 14,
      fontWeight: 600,
      cursor: "pointer",
      padding: "5px 0",
    },

    "& > .MuiSvgIcon-root": {
      position: "absolute",
      top: 4,
      right: "35%",
      padding: 2,
      fontSize: 24,
      color: "white",
      borderRadius: "50%",
      backgroundColor: primary,
      boxShadow: "0px 0px 3px 3px rgba(255,255,255,0.75)",
    },
  },

  form__input: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    margin: "10px 0",

    "& > p": {
      marginBottom: 2,
      fontSize: 12,
      color: "grey",
    },

    "& > input": {
      padding: "5px 0",
      border: 0,
      outlineWidth: 0,
      fontSize: 16,
      borderBottom: "1px solid rgba(0,0,0,0.45)",
      backgroundColor: "transparent",
    },
  },

  form__button: {
    width: "100%",
    height: 35,
    marginTop: 20,
    color: "white",
    fontWeight: 600,
    border: 0,
    borderRadius: 4,
    outlineWidth: 0,
    backgroundColor: primary,
  },
}));
