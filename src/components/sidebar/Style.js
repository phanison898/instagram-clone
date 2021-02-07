import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    position: "sticky",
    top: 94,
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },

  logged__user: {
    display: "flex",
    alignItems: "center",
    marginBottom: 10,
    "& > .MuiAvatar-root": {
      width: 60,
      height: 60,
      marginLeft: 10,
    },
    "& > a": {
      marginLeft: 15,
      textDecoration: "none",
      color: "black",

      "& > h4": {
        fontSize: 16,
        fontWeight: 600,
      },
      "& > p": {
        fontSize: 13,
        color: "grey",
      },
    },
  },

  followUsers: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },

  followUsers__heading: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    paddingRight: 0,
    "& > p": {
      color: "grey",
      fontSize: 15,
    },
    "& > p:nth-child(2)": {
      fontSize: 12,
      color: "black",
    },

    "& > a": {
      textDecoration: "none",
      color: "black",
      fontSize: 14,
      marginRight: 10,
    },
  },

  followUsers__users: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },

  about: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,

    "& > p": {
      fontSize: 10,
      fontWeight: 200,
      color: "grey",
      cursor: "pointer",
      marginTop: 10,
      padding: "0 10px",
    },

    "& > div": {
      width: "80%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      "& > a": {
        textDecoration: "none",
        fontSize: 10,
        fontWeight: 200,
        color: "grey",
        cursor: "pointer",
      },
    },
  },
}));
