import React, { useState, useContext } from "react";
import { Link, Redirect } from "react-router-dom";

import moment from "moment";
import "moment/locale/pt-br";

import { AuthContext } from "../Configs/ContextProvider";

import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { ConfirmDialog } from "primereact/confirmdialog";

import { FaUserCircle, FaKey, FaHome } from "react-icons/fa";

import "../Styles/Register.css";
import { Checkbox } from "primereact/checkbox";
import { addUser, getAllUsers } from "../Controllers/ControllerUser";

function Register() {
  const { currentUser } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userFunction, setUserFunction] = useState("client");

  const [acceptPrivacy, setAcceptPrivacy] = useState(false);
  const [visible, setVisible] = useState(false);

  function clearFields() {
    setName("");
    setEmail("");
    setPassword("");
    setUserFunction("administrator");
  }

  async function handleAddUser() {
    const data = {
      name,
      email,
      password,
      systems: {
        userRegistrationDate: moment().format("DD/MM/YYYY HH:mm:ss"),
        userFunction,
        acceptPrivacy,
      },
    };
    const response = await addUser(data);
    if (response) {
      clearFields();
      getAllUsers();
    }
  }

  if (currentUser) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="register-background">
      <ConfirmDialog
        visible={visible}
        onHide={() => setVisible(false)}
        message="Você será redirecionado para outro dominio."
        header="Confirmação"
        rejectLabel="Voltar"
        rejectClassName="register-dialog-reject"
        acceptLabel="Continuar"
        acceptClassName="register-dialog-confirm"
        accept={() => {
          window.open("http://localhost:3000/politicasdeprivacidade", "_blank");
        }}
        icon="pi pi-exclamation-triangle"
      />
      <div className="p-d-flex p-ai-center p-jc-between register-header">
        <span className="p-mt-3 p-ml-4">OpinionC</span>
        <span className="p-mt-3 p-d-flex p-ai-center">
          <FaHome className="p-m-2" />
          <span className="p-mr-4">
            <Link to="/" className="register-header-link">
              Inicio
            </Link>
          </span>
          <FaUserCircle className="p-m-2" />
          <span className="p-mr-4">
            <Link to="/entrar" className="register-header-link">
              Entrar
            </Link>
          </span>
          <FaKey className="p-m-2" />
          <span className="p-mr-4">
            <Link to="/cadastrar" className="register-header-link">
              Cadastrar
            </Link>
          </span>
        </span>
      </div>
      <div className="p-d-flex p-ai-center p-jc-center register-container">
        <div className="p-d-flex p-flex-column register-container-white">
          <div className="p-d-flex p-ai-center p-jc-center">
            <span className="p-my-1 register-opinionc">Cadastrar</span>
          </div>
          <div className="p-d-flex p-flex-column p-ai-center p-jc-center">
            <span className="p-my-2 p-input-icon-left">
              <i className="pi pi-user" />
              <InputText
                placeholder="Nome"
                className="register-input"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </span>
            <span className="p-my-2 p-input-icon-left">
              <i className="pi pi-envelope" />
              <InputText
                placeholder="Email"
                className="register-input"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </span>
            <span className="p-my-2 p-input-icon-left">
              <i className="pi pi-lock" />
              <InputText
                placeholder="Senha"
                className="register-input"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </span>

            <div className="register-privacy p-my-1 p-d-flex p-flex-md-row">
              <Checkbox
                checked={true}
                onChange={() => setAcceptPrivacy(!acceptPrivacy)}
                className={
                  acceptPrivacy
                    ? "p-mt-2 settings-checkbox-selected"
                    : "p-mt-2 settings-checkbox"
                }
              />
              <small className="p-pl-2 p-mt-2">
                Eu li e concordo com os termos de uso
              </small>
            </div>

            <Button
              className="p-d-flex p-mx-auto p-mt-3 p-px-6 p-py-2 register-button"
              label="Cadastrar"
              icon="pi pi-sign-in"
              iconPos="right"
              onClick={() => handleAddUser()}
            />
            <p className="p-text-center p-mb-0 p-mt-3 register-link">
              <small onClick={() => setVisible(true)}>
                Termos e Politicas de Uso
              </small>
            </p>
          </div>
        </div>
      </div>
      <div className="p-d-flex p-ai-center p-jc-between register-footer">
        <span className=" p-ml-4">
          Copyright © 2021 - Todos os direitos reservados
        </span>
      </div>
    </div>
  );
}

export default Register;
