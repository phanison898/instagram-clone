import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  login: {
    width: 350,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px 0",
  },

  login__top: {
    width: "100%",
    flex: 7,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 15,
    padding: 10,
    paddingBottom: 0,
    border: "1px solid",
    borderColor: "rgba(0,0,0,0.15)",
    borderRadius: 2,
    backgroundColor: "white",
    "& > *": {
      flex: 1,
    },
  },

  color: {
    backgroundColor: "green",
  },

  top__img: {
    objectFit: "contain",
    width: 180,
  },

  top__form: {
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

  top__signup: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "10px 0",
    "& > a": {
      color: "#00376b",
      fontSize: 12,
      textDecoration: "none",
      marginTop: 10,
    },
    "& > h4": {
      color: "#00376b",
      fontSize: 14,
      fontWeight: 600,
      marginBottom: 10,
    },
  },

  signup__linebreak: {
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

  signup__buttons: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    margin: "7.5px 0",
    "& > .MuiSvgIcon-root": {
      color: "#00376b",
      fontSize: 19,
      margin: "0 5px",
    },
    "& > img": {
      objectFit: "contain",
      height: 15,
      margin: "0 5px",
    },
  },

  login__middle: {
    width: "100%",
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "10px 0",
    padding: 10,
    border: "1px solid",
    borderColor: "rgba(0,0,0,0.15)",
    borderRadius: 2,
    backgroundColor: "white",
    "& > p": {
      color: "black",
      fontSize: 14,
    },
    "& > a": {
      marginLeft: 5,
      textDecoration: "none",
      color: "#0095f6",
      fontWeight: 400,
    },
  },

  login__bottom: {
    width: "100%",
    flex: 2,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 10,
    "& > p": {
      color: "black",
      fontSize: 14,
    },
  },

  bottom__links: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginTop: 20,
    "& > img": {
      margin: "0 5px",
      objectFit: "contain",
      width: 135,
      cursor: "pointer",
    },
  },
}));
