import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  forgot: {
    position: "relative",
    width: 350,
    maxHeight: 450,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px 0",
    border: "1px solid",
    borderColor: "rgba(0,0,0,0.15)",
    borderRadius: 2,
    backgroundColor: "white",
    "& > .MuiSvgIcon-root": {
      fontSize: 100,
      color: "grey",
    },
    "& > p": {
      width: "80%",
      margin: "10px 0",
      fontSize: 14,
      color: "lightgrey",
      textAlign: "center",
    },
  },

  form: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    "& > input": {
      width: "85%",
      height: 38,
      margin: "5px 0",
      padding: "0 10px",
      outlineWidth: 0,
      border: "1px solid rgba(0,0,0,0.1)",
      borderRadius: 2,
      backgroundColor: "#fafafa",
      "&::placeholder": {
        fontSize: 12,
        color: "grey",
      },
    },

    "& > button": {
      width: "85%",
      height: 30,
      margin: "5px 0",
      outlineWidth: 0,
      border: 0,
      borderRadius: 4,
      fontWeight: 600,
      color: "white",
      cursor: "pointer",
    },
  },

  create_account: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "10px 0",
    "& > a": {
      color: "#00376b",
      fontSize: 15,
      textDecoration: "none",
      marginTop: 10,
    },
  },

  create_account__linebreak: {
    width: "85%",
    display: "flex",
    alignItems: "center",
    margin: "10px 0",
    "& > div": {
      flex: 1,
      height: 1.25,
      backgroundColor: "grey",
      opacity: 0.25,
    },
    "& > h4": {
      fontSize: 11,
      fontWeight: 600,
      color: "#8f8f8f",
      margin: "0 10px",
    },
  },

  back_to_login: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    border: "1px solid",
    borderColor: "rgba(0,0,0,0.15)",
    backgroundColor: "white",
    textDecoration: "none",
    color: "#0095f6",
    fontWeight: 400,
  },
}));
