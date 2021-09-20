import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { StateProvider } from "./StateProvider";
import reducer, { initialState } from "./reducer";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return error;
  }
);
ReactDOM.render(
  <React.Fragment>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.Fragment>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
