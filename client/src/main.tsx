/* eslint-disable node/no-unpublished-import */
/* eslint-disable no-use-before-define */
/* eslint-disable node/no-missing-import */
import React from "react";
import ReactDOM from "react-dom";
import "tailwindcss/tailwind.css";
import "tw-elements";
import { App } from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
