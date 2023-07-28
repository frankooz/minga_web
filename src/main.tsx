import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter basename={import.meta.env.DEV ? "/" : "/minga_web/"}>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
