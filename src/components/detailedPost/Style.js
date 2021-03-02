import { makeStyles } from "@material-ui/core/styles";
import { secondary, primaryLight } from "../../assets/Colors";

export default makeStyles((theme) => ({
  container: {
    position: "relative",
    width: "100%",
    height: "calc(100vh - 54px)",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      alignItems: "flex-start",
    },
  },

  goBackBtn: {
    position: "absolute",
    top: 10,
    left: 10,
    width: "100%",
    display: "flex",
    alignItems: "center",
    padding: 10,
  },

  post: {
    width: "100%",
    height: 500,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      height: "auto",
      justifyContent: "center",
    },
    boxShadow: "0px 0px 2px 2px rgba(0,0,0,0.1)",
  },

  post__media: {
    flex: 2,
    display: "flex",
    alignItems: "center",
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      width: "80%",
      //height: 400,
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    backgroundColor: "black",
  },

  media__image: {
    objectFit: "cover",
    height: "100%",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      height: "auto",
      width: "100%",
    },
  },

  media__video: {},

  post__details: {
    flex: 1,
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      width: "80%",
      height: 400,
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fafafa",
  },

  post__details__header: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    padding: "15px 10px",
    borderBottom: `1px solid ${secondary}`,

    "& > .MuiAvatar-root": {
      width: 30,
      height: 30,
    },

    "& > h4": {
      flex: 1,
      padding: "0 10px",
    },

    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },

  post__details__description: {
    width: "100%",
    display: "flex",
    alignItems: "flex-start",
    padding: "5px 10px",

    "& > .MuiAvatar-root": {
      width: 25,
      height: 25,
    },

    "& > main": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      padding: "0 10px",

      "& > header": {
        fontSize: 15,
        textAlign: "justify",

        "& > a": {
          textDecoration: "none",
          color: "black",
          fontSize: 16,
          fontWeight: 600,
          marginRight: 5,
        },
      },

      "& > footer": {
        color: "grey",
        fontSize: 12,
        padding: "5px 0",
      },
    },
  },

  post__details__comments: {
    flex: 1,
    overflowY: "scroll",
  },

  details__reactions: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    padding: 10,
    paddingBottom: 5,
    borderTop: `1px solid ${secondary}`,
    "& > div": {
      paddingRight: 5,
    },
    "& > div:nth-child(4)": {
      flex: 1,
      display: "flex",
      justifyContent: "flex-end",
      paddingRight: 0,
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },

  details__reactions_2: {
    display: "flex",
    flexDirection: "column",
    padding: "0 5px",
    borderBottom: `1px solid ${secondary}`,
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },

    "& > div": {
      display: "flex",
      alignItems: "center",
      "& > p": {
        marginLeft: 10,
        fontSize: 14,
        fontWeight: 600,
      },
    },
    "& > p": {
      textTransform: "uppercase",
      fontSize: 10,
      color: "grey",
      padding: "5px 0",
    },
  },

  details__stats: {
    width: "100%",
    padding: "0 10px",
    paddingBottom: 10,
    "& > p:nth-child(1)": {
      fontSize: 14,
      fontWeight: 600,
    },
    "& > p:nth-child(2)": {
      color: "grey",
      fontSize: 12,
      paddingTop: 5,
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },

  details__comment_box: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    padding: 10,
    borderTop: `1px solid ${secondary}`,

    "& > input": {
      flex: 1,
      height: "80%",
      margin: "0 10px",
      border: 0,
      outlineWidth: 0,
      backgroundColor: "transparent",
      "&::placeholder": {
        color: "grey",
      },
    },

    "& > button": {
      border: 0,
      backgroundColor: "transparent",
      padding: 2,
      outlineWidth: 0,
      fontWeight: 600,
      color: primaryLight,
    },
  },
}));
