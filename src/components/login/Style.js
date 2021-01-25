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
    margin: "10px 0",
    padding: 10,
    paddingBottom: 0,
    border: "1px solid",
    borderColor: "rgba(0,0,0,0.12)",
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
    width: 175,
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
      padding: "0 5px",
      outlineWidth: 0,
      border: "1px solid rgba(0,0,0,0.1)",
      borderRadius: 2,
      backgroundColor: "blue",
    },

    "& > button": {
      width: "85%",
      height: 30,
      margin: "5px 0",
      outlineWidth: 0,
      border: 0,
      borderRadius: 2,
      fontWeight: 600,
      color: "white",
      backgroundColor: "#0095f6",
      cursor: "pointer",
    },
  },

  top__signup: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "10px 0",
    "& > *": {
      margin: "5px 0",
    },
    "& > h4": {
      color: "#385185",
      marginTop: 15,
    },
    "& > h5": {
      color: "grey",
      fontWeight: 500,
    },
    "& > p": {
      color: "#00376b",
      fontSize: 14,
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
    borderColor: "rgba(0,0,0,0.12)",
    borderRadius: 2,
    backgroundColor: "white",
  },

  login__bottom: {
    width: "100%",
    flex: 2,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 10,
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
