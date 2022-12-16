import { makeStyles } from "@material-ui/core/styles";
import { secondary, primary } from "../../assets/Colors";

export default makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up("sm")]: {
      position: "sticky",
      top: 0,
    },
    position: "fixed",
    bottom: 0,
    width: "100%",
    height: 54,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: 0,
    boxShadow: "none",
    borderRadius: 0,
    // borderBottom: `1px solid ${theme.palette.type === "light" ? "#c4c4c4" : "#a6a4a4"}`,
    boxShadow: `0px 0px 3px ${theme.palette.type === "dark" ? "pink" : "red"}`,
    zIndex: 10,

    [theme.breakpoints.down("xs")]: {
      position: "fixed",
      bottom: 0,
    },
  },

  header: {
    minWidth: 960,
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    [theme.breakpoints.down("md")]: {
      minWidth: 850,
    },

    [theme.breakpoints.down("sm")]: {
      width: "100%",
      minWidth: "auto",
      padding: "0 10px",
    },

    "& > *": {
      flex: 1,
      height: "100%",
      display: "flex",
      alignItems: "center",
    },
  },

  header__logo: {
    justifyContent: "flex-start",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },

    "& > img": {
      objectFit: "contain",
      height: 40,
    },
  },

  header__search: {
    flex: 0.6,
    height: "55%",
    justifyContent: "center",
    border: theme.palette.type === "light" && `1px solid ${secondary}`,
    borderRadius: 2,
    backgroundColor: theme.palette.type === "dark" && "grey",

    [theme.breakpoints.down("xs")]: {
      display: "none",
    },

    "& > input": {
      width: "100%",
      height: "100%",
      border: 0,
      outlineWidth: 0,
      backgroundColor: theme.palette.type === "dark" && "grey",
      color: theme.palette.type === "dark" && "white",
      "&::placeholder": {
        fontWeight: 500,
        color: theme.palette.type === "dark" && "white",
      },
    },

    "& > section": {
      width: "20%",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      margin: "0 10px",
      backgroundColor: theme.palette.type === "dark" && "grey",
      "& > .MuiSvgIcon-root": {
        fontSize: 18,
        color: "lightgrey",
      },
    },
  },

  header__nav: {
    position: "relative",
    justifyContent: "flex-end",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      justifyContent: "space-between",
    },
  },

  nav__link: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    margin: "0 12px",
    cursor: "pointer",
    // color: "#262626",

    "& > svg": {},

    "& > .MuiAvatar-root": {
      width: 24,
      height: 24,
      // color: theme.palette.type === "dark" && "#363636",
    },

    "& > .MuiSvgIcon-root": {
      fontSize: 26,
      // color: theme.palette.type === "dark" && "#363636",
    },
  },

  nav__link_active: {
    "& > svg": { fill: "red !important" },
  },

  dropdown: {
    position: "absolute",
    top: 50,
    right: 0,
    width: 220,
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    borderRadius: 4,
    // boxShadow: theme.palette.type === "light" ? "0px 0px 3px green" : "0px 0px 3px yellow",
    boxShadow: `0px 0px 3px ${theme.palette.type === "dark" ? "pink" : "red"}`,
  },

  arrow: {
    position: "absolute",
    top: -10,
    right: 10,
    width: 0,
    height: 0,
    borderLeft: "10px solid transparent",
    borderRight: "10px solid transparent",
    borderBottom: "10px solid rgba(0,0,0,0.1)",
  },

  option: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    padding: 10,
    color: "grey",
    cursor: "pointer",
    textDecoration: "none",
    transition: "background-color 0.2s ease-in-out",
    "&:hover": {
      backgroundColor: "rgba(0,0,0,0.05)",
    },
    "& > p": {
      marginLeft: 5,
    },
    "&:nth-child(6)": {
      borderTop: "1px solid rgba(0,0,0,0.25)",
    },
  },
}));
