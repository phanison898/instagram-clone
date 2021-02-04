import { makeStyles } from "@material-ui/core/styles";
import { primary as main, primaryLight as light } from "../../assets/Colors";

export default makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    paddingTop: 20,
  },

  form: {
    width: 300,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));
