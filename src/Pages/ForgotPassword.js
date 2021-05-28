import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import React from "react";
import { FaHome, FaKey, FaUserCircle } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";

import "../Styles/ForgotPassword.css";

function Pages() {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_qo63alm",
        "template_5awy3lu",
        e.target,
        "user_bynkexbAzxrwLiNoexCMm",
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
  }

  return (
    <div className="login-background">
      <div className="p-d-flex p-ai-center p-jc-between login-header">
        <span className="p-mt-3 p-ml-4">OpinionC</span>
        <span className="p-mt-3 p-d-flex p-ai-center">
          <FaHome className="p-m-2" />
          <span className="p-mr-4">
            <Link to="/" className="login-header-link">
              Inicio
            </Link>
          </span>
          <FaUserCircle className="p-m-2" />
          <span className="p-mr-4">
            <Link to="/entrar" className="login-header-link">
              Entrar
            </Link>
          </span>
          <FaKey className="p-m-2" />
          <span className="p-mr-4">
            <Link to="/cadastrar" className="login-header-link">
              Cadastrar
            </Link>
          </span>
        </span>
      </div>
      <form onSubmit={sendEmail}>
        <div className="p-d-flex p-ai-center p-jc-center login-container">
          <div className="p-d-flex p-flex-column login-container-white">
            <div>
              <VscAccount className="forgot-icon" />
            </div>
            <div className="p-mb-2 p-d-flex p-ai-center p-jc-center">
              <span className="p-my-2 forgot-header">
                Problemas para entrar?
              </span>
            </div>
            <div className="p-mb-4 p-d-flex p-ai-center p-jc-center p-mx-5">
              <span className="p-text-center">
                Insira o seu e-mail e enviaremos um link para voce voltar a ter
                acesso a sua conta.
              </span>
            </div>
            <div className="p-d-flex p-flex-column p-ai-center p-jc-center">
              <span className="p-my-2 p-input-icon-left">
                <i className="pi pi-envelope" />
                <InputText
                  placeholder="E-mail"
                  className="login-input"
                  type="email"
                  name="user_email"
                />
              </span>
              <Button
                type="submit"
                className="p-d-flex p-mx-auto p-mt-3 p-px-6 p-py-2 login-button"
                label="Enviar"
                icon="pi pi-sign-in"
                iconPos="right"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Pages;
