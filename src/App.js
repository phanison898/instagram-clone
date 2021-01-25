import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { useSelector } from "react-redux";
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/login/LoginPage";
import SignupPage from "./pages/signup/SignupPage";
import ForgotPasswordPage from "./pages/forgot/ForgotPasswordPage";
import PageNotFound from "./pages/pageNotFount/PageNotFound";

const App = () => {
  const { theme } = useSelector((state) => state.util);

  const muiTheme = createMuiTheme({
    palette: {
      type: theme ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={muiTheme}>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/forgot" component={ForgotPasswordPage} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
