import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  sidebar: {
    position: "sticky",
    top: 94,
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },

  userinfo: {
    display: "flex",
    alignItems: "center",
    padding: 10,
    "& > .MuiAvatar-root": {
      width: 60,
      height: 60,
    },
    "& > section": {
      marginLeft: 10,
      "& > p": {
        color: "grey",
      },
    },
  },

  follow: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    padding: 10,
  },

  follow__heading: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 0",
    "& > p": {
      color: "grey",
    },
    "& > h4": {
      fontSize: 14,
    },
  },

  followers: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },

  follower: {
    width: "100%",
    display: "flex",
    padding: "5px 0",
    "& > div": {
      marginLeft: 10,
    },
    "& > h4": {
      flex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      color: "#0095f6",
      fontSize: 14,
    },
  },

  about: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",

    "& > p": {
      fontSize: 10,
      fontWeight: 200,
      color: "grey",
      cursor: "pointer",
      marginTop: 20,
      padding: "0 10px",
    },

    "& > div": {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: 20,
      "& > a": {
        textDecoration: "none",
        fontSize: 10,
        fontWeight: 200,
        margin: "0 10px",
        color: "grey",
        cursor: "pointer",
      },
    },
  },
}));
