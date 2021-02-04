import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  dashboard: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  userinfo: {
    width: "100%",
    height: "auto",
    display: "flex",
    alignItems: "center",
    paddingBottom: 20,
    borderBottom: "1px solid rgba(219,219,219,1)",
  },

  profilePic: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "25px 75px",
    "& > .MuiAvatar-root": {
      width: 150,
      height: 150,
    },
  },

  statastics: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    paddingTop: 40,
    paddingLeft: 30,
  },

  statastics__top: {
    display: "flex",
    alignItems: "center",
    "& > *": {
      marginRight: 30,
    },
    "& > h4": {
      fontSize: 24,
      fontWeight: 200,
    },
    "& > a": {
      color: "black",
      textDecoration: "none",
      padding: 5,
      border: "1px solid rgba(219,219,219,1)",
      borderRadius: 5,
    },
    "& > svg": {
      width: 24,
      height: 24,
    },
  },

  statastics__center: {
    display: "flex",
    alignItems: "center",
    margin: "10px 0",
    color: "grey",
    "& > *": {
      marginRight: 30,
    },
    "& > p > span": {
      color: "black",
      fontWeight: 500,
    },
  },

  statastics__bottom: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginTop: 10,
    marginRight: 30,
    "& > p:nth-child(1)": {
      fontWeight: 600,
    },
  },

  usermedia: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    "& > nav": {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",

      "& > a": {
        color: "grey",
        display: "flex",
        alignItems: "center",
        padding: 10,
        fontSize: 14,
        textDecoration: "none",
        "& > svg": {
          marginRight: 4,
        },
      },
    },
  },

  usermedia__body: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));
