import React, { useState, useContext, useCallback } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import { ProgressSpinner } from "primereact/progressspinner";

import { FaEye, FaEyeSlash } from "react-icons/fa";

import { AuthContext } from "../Configs/ContextProvider";

import { signIn } from "../Controllers/ControllerLogin";

import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

import { FaUserCircle, FaKey, FaHome } from "react-icons/fa";

import "../Styles/Login.css";

function Login(history) {
  const { currentUser } = useContext(AuthContext);

  const [pending, setPending] = useState(false);
  const [seePass, setSeePass] = useState(false);

  const handleLogin = useCallback(
    async (event) => {
      setPending(true);
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        setTimeout(() => {
          signIn(email.value, password.value);
          setPending(false);
          setSeePass(false);
        }, 2000);
        history.push("/entrar");
      } catch (error) {
        console.log(error);
      }
    },
    [history],
  );

  function handleEditView() {
    setSeePass(!seePass);
  }

  if (currentUser) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="login-background">
      <div className="p-d-flex p-ai-center p-jc-between login-header">
        <span className="p-mt-3 p-ml-4">OpinionC</span>
        <span className="p-mt-3 p-d-flex p-ai-center">
          <span className="p-mr-4">
            <Link to="/" className="login-header-link">
              <FaHome className="p-m-2" />
              Inicio
            </Link>
          </span>

          <span className="p-mr-4">
            <Link to="/entrar" className="login-header-link">
              <FaUserCircle className="p-m-2" />
              Entrar
            </Link>
          </span>

          <span className="p-mr-4">
            <Link to="/cadastrar" className="login-header-link">
              <FaKey className="p-m-2" />
              Cadastrar
            </Link>
          </span>
        </span>
      </div>
      <form onSubmit={handleLogin}>
        <div className="p-d-flex p-ai-center p-jc-center login-container">
          <div className="p-d-flex p-flex-column login-container-white">
            {pending ? (
              <div
                className="p-d-flex p-as-center p-jc-center"
                style={{ height: "350px" }}
              >
                <div className="spinner-form">
                  <ProgressSpinner />
                </div>
              </div>
            ) : (
              <>
                <div className="p-d-flex p-ai-center p-jc-center">
                  <span className="p-my-4 login-opinionc">Entrar</span>
                </div>
                <div className="p-d-flex p-flex-column p-ai-center p-jc-center">
                  <span className="p-my-2 p-input-icon-left">
                    <i className="pi pi-envelope" />
                    <InputText
                      placeholder="E-mail"
                      className="login-input"
                      name="email"
                      type="email"
                    />
                  </span>
                  <span className="p-d-flex p-mt-1 p-input-icon-left p-input-icon-right">
                    <i className="pi pi-lock" />
                    <InputText
                      placeholder="Senha"
                      className="login-input-pass"
                      name="password"
                      type={!seePass ? "password" : "text"}
                    />
                    <Button
                      className="p-p-0 settings-input-on-button"
                      type="button"
                      onClick={() => {
                        handleEditView();
                      }}
                    >
                      {!seePass ? (
                        <FaEyeSlash className="p-mx-auto settings-button-icon" />
                      ) : (
                        <FaEye className="p-mx-auto settings-button-icon" />
                      )}
                    </Button>
                  </span>
                  <Button
                    type="submit"
                    className="p-d-flex p-mx-auto p-mt-5 p-px-6 p-py-2 login-button"
                    label="Entrar"
                    icon="pi pi-sign-in"
                    iconPos="right"
                  />
                  <p className="p-text-center p-mb-0 p-mt-5 login-link">
                    <small
                      onClick={() => {
                        window.open(
                          "http://localhost:3000/esqueci_minha_senha",
                        );
                      }}
                    >
                      Esqueci minha Senha
                    </small>
                  </p>
                  <p className="p-text-center p-my-0 login-link">
                    <small
                      onClick={() => {
                        window.open(
                          "http://localhost:3000/politicas_de_privacidade",
                        );
                      }}
                    >
                      Termos e Políticas de Uso
                    </small>
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </form>
      <div className="p-d-flex p-ai-center p-jc-between login-footer">
        <span className=" p-ml-4">
          Copyright © 2021 - Todos os direitos Reservados
        </span>
      </div>
    </div>
  );
}

export default Login;
