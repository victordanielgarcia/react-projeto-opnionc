import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import { AuthProvider } from "./Configs/ContextProvider";

import Routes from "./Routes/Routes";

import "primereact/resources/themes/fluent-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

import "./Styles/index.css";

ReactDOM.render(
  <AuthProvider>
    <BrowserRouter>
      <Routes />
      <ToastContainer autoClose={3000} />
    </BrowserRouter>
  </AuthProvider>,
  document.getElementById("root"),
);
