import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import store from "./store";
import App from "./App";
import "./style.css";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
