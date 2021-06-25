import React, { useState, useContext } from "react";
import { Link, Redirect } from "react-router-dom";

import moment from "moment";
import "moment/locale/pt-br";

import { ProgressSpinner } from "primereact/progressspinner";

import { AuthContext } from "../Configs/ContextProvider";

import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

import { FaUserCircle, FaKey, FaHome } from "react-icons/fa";

import "../Styles/Register.css";
import { Checkbox } from "primereact/checkbox";
import { addUser } from "../Controllers/ControllerUser";
import { toast } from "react-toastify";

import { FaEye, FaEyeSlash } from "react-icons/fa";

function Register() {
  const { currentUser } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [seePass, setSeePass] = useState(false);

  const [acceptPrivacy, setAcceptPrivacy] = useState(false);

  const [pending, setPending] = useState(false);

  function clearFields() {
    setName("");
    setEmail("");
    setPassword("");
  }

  async function handleAddUser() {
    setPending(true);
    const data = {
      name,
      email,
      password,
      userRegistrationDate: moment().format("DD/MM/YYYY HH:mm:ss"),
      plan: "free",
    };
    const response = await addUser(data);
    if (response) {
      setTimeout(() => {
        setPending(false);
        clearFields();
        setSeePass(false);
        toast.success("Sua conta foi Criada com Sucesso!");
      }, 2000);
    } else {
      setTimeout(() => {
        setPending(false);
        toast.error("Não foi possível ler os dados.");
      }, 2000);
    }
  }

  function handleEditView() {
    setSeePass(!seePass);
  }

  if (currentUser) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="register-background">
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
      <div className="p-d-flex p-ai-center p-jc-center register-container">
        <div className="p-d-flex p-flex-column register-container-white">
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
                <span className="p-d-flex p-mt-1 p-input-icon-left p-input-icon-right">
                  <i className="pi pi-lock" />
                  <InputText
                    placeholder="Senha"
                    className="login-input-pass"
                    name="password"
                    type={!seePass ? "password" : "text"}
                    onChange={(e) => setPassword(e.target.value)}
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
      <div className="p-d-flex p-ai-center p-jc-between register-footer">
        <span className=" p-ml-4">
          Copyright © 2021 - Todos os direitos reservados
        </span>
      </div>
    </div>
  );
}

export default Register;
