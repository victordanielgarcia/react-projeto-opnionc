import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PrivateRoute from "../Routes/PrivateRoutes";

import SinglePage from "../Pages/SinglePage";
import Dashboard from "../Pages/Dashboard";
import Login from "../Pages/Login";
import Help from "../Pages/Help";
import ForgotPassword from "../Pages/ForgotPassword";
import ChargePassword from "../Pages/ChargePassword";
import FormAnswers from "../Pages/FormAnswers";
import Settings from "../Pages/Settings";
import Reports from "../Pages/Reports";
import Privacy from "../Pages/Privacy";
import Register from "../Pages/Register";
import Navegation from "../Components/Navegation";
import Header from "../Components/Header";
import Researches from "../Pages/Researches";
import Footer from "../Components/Footer";
import Plans from "../Pages/Plans";
import Erro404 from "../Pages/Erro404";

import { AuthProvider } from "../Configs/ContextProvider";
import Credits from "../Pages/Credits";

export default function Routes() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Navegation />
          <Header />
          <div className="p-grid p-dir-col p-m-0">
            <Switch>
              <Route exact path="/" component={SinglePage} />
              <Route exact path="/a/:ID" children={<FormAnswers />} />
              <Route exact path="/b/:ID/:EMAIL" children={<FormAnswers />} />
              <Route exact path="/entrar" component={Login} />
              <Route exact path="/cadastrar" component={Register} />
              <Route
                exact
                path="/politicas_de_privacidade"
                component={Privacy}
              />
              <Route
                exact
                path="/esqueci_minha_senha"
                component={ForgotPassword}
              />
              <Route
                exact
                path="/mudar_senha/:ID"
                children={<ChargePassword />}
              />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute exact path="/planos" component={Plans} />
              <PrivateRoute exact path="/ajuda" component={Help} />
              <PrivateRoute exact path="/configurações" component={Settings} />
              <PrivateRoute exact path="/relatorios" component={Reports} />
              <PrivateRoute exact path="/Pesquisas" component={Researches} />
              <PrivateRoute exact path="/créditos" component={Credits} />
              <Route component={Erro404} />
            </Switch>
            <Footer />
          </div>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}
