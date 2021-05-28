import React, { useState, useContext, useCallback } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";

import { AuthContext } from "../Configs/ContextProvider";

import { signIn } from "../Controllers/ControllerLogin";

import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { ConfirmDialog } from "primereact/confirmdialog";

import { FaUserCircle, FaKey, FaHome } from "react-icons/fa";

import "../Styles/Login.css";

function Login(history) {
  const { currentUser } = useContext(AuthContext);

  const [visible, setVisible] = useState({ show: false, url: "" });

  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        signIn(email.value, password.value);
        history.push("/entrar");
      } catch (error) {
        console.log(error);
      }
    },
    [history],
  );

  if (currentUser) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="login-background">
      <ConfirmDialog
        visible={visible.show}
        onHide={() => setVisible({ show: false })}
        message="Você será redirecionado para outro dominio."
        header="Confirmação"
        rejectLabel="Voltar"
        rejectClassName="default-dialog-reject"
        acceptLabel="Continuar"
        acceptClassName="default-dialog-confirm"
        accept={() => {
          window.open(visible.url, "_blank");
        }}
        icon="pi pi-exclamation-triangle"
      />
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
      <form onSubmit={handleLogin}>
        <div className="p-d-flex p-ai-center p-jc-center login-container">
          <div className="p-d-flex p-flex-column login-container-white">
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
              <span className="p-my-2 p-input-icon-left">
                <i className="pi pi-lock" />
                <InputText
                  placeholder="Senha"
                  className="login-input"
                  name="password"
                  type="password"
                />
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
                  onClick={() =>
                    setVisible({
                      show: true,
                      url: "http://localhost:3000/esqueci_minha_senha",
                    })
                  }
                >
                  Esqueci minha Senha
                </small>
              </p>
              <p className="p-text-center p-my-0 login-link">
                <small
                  onClick={() =>
                    setVisible({
                      show: true,
                      url: "http://localhost:3000/politicas_de_privacidade",
                    })
                  }
                >
                  Termos e Politicas de Uso
                </small>
              </p>
            </div>
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
