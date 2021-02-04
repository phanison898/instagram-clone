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
    marginBottom: 10,
    "& > .MuiAvatar-root": {
      width: 60,
      height: 60,
      marginLeft: 10,
    },
    "& > section": {
      marginLeft: 15,
      "& > h4": {
        fontSize: 14,
        fontWeight: 500,
      },
      "& > p": {
        fontSize: 13,
        color: "grey",
      },
    },
  },

  follow: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },

  follow__heading: {
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
  },

  followers: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },

  follower: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    padding: "8px 0",
    "& > .MuiAvatar-root": {
      width: 32,
      height: 32,
    },
    "& > div": {
      marginLeft: 10,
      "& > h4": {
        fontSize: 14,
        fontWeight: 500,
      },
      "& > p": {
        fontSize: 12,
        color: "grey",
      },
    },
    "& > h4": {
      flex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      color: "#0095f6",
      fontSize: 12,
    },
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
