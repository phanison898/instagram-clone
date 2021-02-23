import { makeStyles } from "@material-ui/core/styles";
import { primary } from "../../assets/Colors";

export default makeStyles((theme) => ({
  dashboard: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },

  dashboard__header: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    paddingBottom: 10,
    borderBottom: "1px solid rgba(219,219,219,1)",
  },

  header__userinfo: {
    width: "100%",
    height: "auto",
    display: "flex",
    alignItems: "center",
    padding: "20px 0",

    [theme.breakpoints.down("xs")]: {
      padding: 0,
      paddingTop: 10,
    },

    "& > div": {
      [theme.breakpoints.up("sm")]: {
        flex: 1,
      },
      display: "flex",
      flexDirection: "column",
    },
  },

  userinfo__profilePic: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",

    [theme.breakpoints.down("xs")]: {
      flex: 3,
      justifyContent: "flex-start",
    },

    "& > .MuiAvatar-root": {
      width: 150,
      height: 150,

      [theme.breakpoints.down("xs")]: {
        width: 75,
        height: 75,
      },
    },
  },

  userinfo__details: {
    [theme.breakpoints.down("xs")]: {
      flex: 7,
      marginLeft: 10,
    },

    "& > h4": {
      fontSize: 24,
    },
  },

  details__stats: {
    display: "flex",
    alignItems: "center",
    margin: "10px 0",
    justifyContent: "space-between",

    "& > a": {
      display: "flex",
      alignItems: "center",
      textDecoration: "none",
      color: "black",
      marginRight: 10,

      [theme.breakpoints.down("xs")]: {
        flexDirection: "column",
        justifyContent: "center",

        "& > p:nth-child(1)": {
          paddingRight: 5,
          fontSize: 12,
        },

        "& > p:nth-child(2)": {
          color: "grey",
          fontSize: 10,
        },
      },

      "& > p:nth-child(1)": {
        paddingRight: 5,
        fontSize: 14,
      },

      "& > p:nth-child(2)": {
        color: "grey",
        fontSize: 14,
      },
    },
  },

  details__bio: {
    display: "flex",
    flexDirection: "column",

    "& > p:nth-child(1)": {
      fontSize: 14,
      fontWeight: 600,
      textTransform: "lowercase",
    },

    "& > p": {
      fontSize: 12,
      padding: "2px 0",
      textTransform: "capitalize",
    },
  },

  details__bio__xs: {
    display: "flex",
    flexDirection: "column",
    padding: 10,
    paddingLeft: 20,
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },

    "& > p": {
      fontSize: 12,
      padding: "2px 0",
      textTransform: "capitalize",
    },

    "& > p:nth-child(1)": {
      fontSize: 14,
      fontWeight: 600,
      textTransform: "lowercase",
    },
  },

  header__button: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    "& > a": {
      width: 300,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "5px 0",
      textDecoration: "none",
      color: "black",
      borderRadius: 5,
      border: "1px solid rgba(219,219,219,1)",
    },

    "& > button": {
      width: 300,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "6px 0",
      textDecoration: "none",
      color: "white",
      fontSize: 16,
      fontWeight: 600,
      borderRadius: 5,
      border: 0,
      outlineWidth: 0,
      backgroundColor: primary,
      cursor: "pointer",
    },
  },

  usermedia: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 10,
  },

  usermedia__header: {
    display: "flex",
    alignItems: "center",
    "& > *": {
      margin: 2,
    },
  },

  usermedia__body: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

    "& > div": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "& > *": {
        margin: 15,
      },
    },
  },

  media__row: {
    width: "100%",
    height: "auto",
  },

  media__post: {
    objectFit: "cover",
    width: "100%",
    height: "100%",
  },
}));
