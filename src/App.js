import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import LandingPage from "./pages/landing/LandingPage";
import LoginPage from "./pages/login/LoginPage";
import SignupPage from "./pages/signup/SignupPage";
import ForgotPasswordPage from "./pages/forgot/ForgotPasswordPage";
import HomePage from "./pages/home/HomePage";
import PageNotFound from "./pages/pageNotFount/PageNotFound";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";
import { useEffect } from "react";
import { auth } from "./firebase/config";
import { SignInAction, LogoutAction } from "./store/actions/auth";

const App = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.util);

  const muiTheme = createMuiTheme({
    palette: {
      type: theme ? "dark" : "light",
      primary: {
        light: "rgb(0 149 246 / 30%)",
        main: theme ? "#0095f6" : "rgb(0 149 246 / 30%)",
        dark: "#0000ff",
      },
    },
  });

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(SignInAction());
      } else {
        dispatch(LogoutAction());
      }
    });
  }, []);

  return (
    <ThemeProvider theme={muiTheme}>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/forgot" component={ForgotPasswordPage} />
          <ProtectedRoute path="/:username" component={HomePage} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
