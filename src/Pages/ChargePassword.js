import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";

import { FaHome, FaKey, FaUserCircle } from "react-icons/fa";

function Pages() {
  const [sended, setSended] = useState(true);
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
      {sended ? (
        <>
          <form onSubmit={""}>
            <div className="p-d-flex p-ai-center p-jc-center login-container">
              <div className="p-d-flex p-flex-column login-container-white">
                <div className="p-mt-3 p-mb-4 p-d-flex p-ai-center p-jc-center">
                  <span className="forgot-header">Redefinir Senha</span>
                </div>
                <div className="p-mb-4 p-d-flex p-ai-center p-jc-center p-mx-5">
                  <span className="p-text-center">
                    Olá Victor, Digite uma nova senha para voltar a ter acesso a
                    sua conta!
                  </span>
                </div>
                <div className="p-d-flex p-flex-column p-ai-center p-jc-center">
                  <span className="p-my-2 p-input-icon-left">
                    <i className="pi pi-lock" />
                    <InputText
                      placeholder="Nova Senha"
                      className="login-input"
                      name="email"
                      type="email"
                    />
                  </span>
                  <span className="p-my-3 p-input-icon-left">
                    <i className="pi pi-lock" />
                    <InputText
                      placeholder="Confirmar nova senha"
                      className="login-input"
                      name="email"
                      type="email"
                    />
                  </span>
                  <Button
                    type="submit"
                    className="p-d-flex p-mx-auto p-mt-3 p-px-6 p-py-2 login-button"
                    label="Salvar"
                    icon="pi pi-sign-in"
                    iconPos="right"
                    onClick={() => {
                      setSended(false);
                    }}
                  />
                </div>
              </div>
            </div>
          </form>
        </>
      ) : (
        <>
          <form onSubmit={""}>
            <div className="p-d-flex p-ai-center p-jc-center login-container">
              <div className="p-d-flex p-flex-column login-container-white-password">
                <div className="p-mb-2 p-d-flex p-ai-center p-jc-center">
                  <span className="p-my-2 forgot-header">
                    Senha Alterada com Sucesso!
                  </span>
                </div>
                <div className="p-mb-4 p-d-flex p-ai-center p-jc-center p-mx-5">
                  <span className="p-text-center">
                    Agora você pode voltar a tela de login e entrar com a sua
                    nova senha!
                  </span>
                </div>
                <div className="p-d-flex p-flex-column p-ai-center p-jc-center">
                  <Link to="/entrar" className="login-header-link">
                    <Button
                      className="p-d-flex p-mx-auto p-mt-3 p-px-6 p-py-2 login-button"
                      label="Voltar ao Login"
                      iconPos="right"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </>
      )}
    </div>
  );
}

export default Pages;
