import React from "react";
import ReactDOM from "react-dom";

import { ToastContainer } from "react-toastify";

import Routes from "./Routes/Routes";

import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

import "primereact/resources/themes/fluent-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

import "./Styles/index.css";

ReactDOM.render(
  <>
    <Routes />
    <ToastContainer autoClose={4000} />
  </>,
  document.getElementById("root"),
);
