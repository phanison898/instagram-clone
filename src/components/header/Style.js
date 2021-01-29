import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  header: {
    position: "sticky",
    top: 0,
    width: "100%",
    height: 54,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderBottom: "1px solid rgba(219,219,219,1)",
  },
  nav: {
    minWidth: 960,
    [theme.breakpoints.down("md")]: {
      minWidth: 850,
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      minWidth: "auto",
      padding: "0 10px",
    },
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    "& > *": {
      height: "100%",
      display: "flex",
      alignItems: "center",
    },
  },
  logo: {
    objectFit: "contain",
    height: 40,
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  search: {
    height: "50%",
    border: "1px solid rgba(219,219,219,1)",
    borderRadius: 2,
    backgroundColor: "#fafafa",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
    "& > input": {
      height: "100%",
      border: 0,
      outlineWidth: 0,
      backgroundColor: "transparent",
      "&::placeholder": {
        fontWeight: 500,
        color: "lightgrey",
      },
    },
    "& > .MuiSvgIcon-root": {
      fontSize: 18,
      color: "lightgrey",
      margin: "0px 5px",
    },
  },
  links: {
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      justifyContent: "space-between",
    },
  },
  link: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    margin: "0 12px",
    cursor: "pointer",
    "& > svg": {},
    "& > .MuiAvatar-root": {
      width: 24,
      height: 24,
    },
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
    backgroundColor: "white",
    borderRadius: 4,
    boxShadow: "0px 0px 3px rgba(0,0,0,0.25)",
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
}));
