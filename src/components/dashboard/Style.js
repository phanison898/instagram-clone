import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  dashboard: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "& > *": {
      margin: 10,
    },
  },
}));
