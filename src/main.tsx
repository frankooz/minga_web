import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { HashRouter } from "react-router-dom";

ReactDOM.render(
  <HashRouter basename={import.meta.env.DEV ? "/" : "/minga_web/"}>
    <App />
  </HashRouter>,
  document.getElementById("root")
);
