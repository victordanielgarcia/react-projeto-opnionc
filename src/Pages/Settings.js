import React, { useContext, useEffect, useState } from "react";
import { FaEye, FaEyeSlash, FaUserCog } from "react-icons/fa";

import { Checkbox } from "primereact/checkbox";
import { InputText } from "primereact/inputtext";

import { AuthContext } from "../Configs/ContextProvider";

import "../Styles/Settings.css";
import { Button } from "primereact/button";
import { ConfirmDialog } from "primereact/confirmdialog";

function Settings() {
  const { setCurrentPage } = useContext(AuthContext);

  const [seePass, setSeePass] = useState(false);
  const [changePassword, setChangePassword] = useState(false);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setCurrentPage("Configurações");
  }, [setCurrentPage]);

  return (
    <div className="p-p-3">
      <ConfirmDialog
        visible={visible}
        onHide={() => setVisible(false)}
        message={
          !changePassword ? (
            "Você tem certeza que deseja salvar as configurações?"
          ) : (
            <>
              <div className="p-m-0">
                Você tem certeza que deseja salvar as configurações?
              </div>
              <br />
              <div className="p-m-0 settings-alert-password">
                Voce será deslogado!
              </div>
            </>
          )
        }
        header="Confirmação"
        rejectLabel="Voltar"
        rejectClassName="default-dialog-reject"
        acceptLabel="Salvar"
        acceptClassName="default-dialog-confirm"
        icon="pi pi-save"
      />
      <div className="p-p-3 p-text-justify default-container">
        <div className="p-d-flex p-mt-0 p-mb-2">
          <div className="p-d-flex p-my-0 p-mr-2 settings-icon-background">
            <FaUserCog className="p-my-auto p-mx-auto settings-icon " />
          </div>
          <span className="p-my-auto settings-title">
            Informações de usuário
          </span>
        </div>
        <div className="p-field p-mt-4">
          <label className="p-my-0 p-mt-4">Nome do Usuário</label>
          <span className="p-d-flex p-mt-1 p-input-icon-left">
            <i className="pi pi-user" />
            <InputText
              value="Victor Daniel"
              className="settings-input"
              type="text"
            />
          </span>
        </div>
        <div className="p-field">
          <label className="p-my-0 p-mt-4">E-mail do Usuário</label>
          <span className="p-d-flex p-mt-1 p-input-icon-left">
            <i className="pi pi-envelope" />
            <InputText
              value="victordanigarcia20@gmail.com"
              className="settings-input"
              type="text"
            />
          </span>
        </div>
        <div className=" p-mb-1 p-mt-3 p-d-flex p-flex-md-row">
          <Checkbox
            checked={true}
            onChange={() => setChangePassword(!changePassword)}
            className={
              changePassword
                ? "p-mt-2 settings-checkbox-selected"
                : "p-mt-2 settings-checkbox"
            }
          />
          <p className="p-pl-2 p-mt-2">Alterar Minha Senha</p>
        </div>

        {changePassword && (
          <>
            <div className="p-field">
              <label className="p-my-0 p-mt-4">Nova senha</label>
              <span className="p-d-flex p-mt-1 p-input-icon-left p-input-icon-right">
                <i className="pi pi-lock" />
                <InputText
                  placeholder="Digite sua nova senha..."
                  type="password"
                  className="settings-input"
                />
                <Button
                  className="p-p-0 settings-input-on-button"
                  onClick={() => {
                    setSeePass(!seePass);
                  }}
                >
                  {seePass ? (
                    <FaEyeSlash className="p-mx-auto settings-button-icon" />
                  ) : (
                    <FaEye className="p-mx-auto settings-button-icon" />
                  )}
                </Button>
              </span>
            </div>
            <div className="p-field">
              <label className="p-my-0 p-mt-4">Confirmar nova senha</label>
              <span className="p-d-flex p-mt-1 p-input-icon-left p-input-icon-right">
                <i className="pi pi-lock" />
                <InputText
                  placeholder="Confirme sua nova senha..."
                  type="password"
                  className="settings-input"
                />
                <Button
                  className="p-p-0 settings-input-on-button"
                  onClick={() => {
                    setSeePass(!seePass);
                  }}
                >
                  {seePass ? (
                    <FaEyeSlash className="p-mx-auto settings-button-icon" />
                  ) : (
                    <FaEye className="p-mx-auto settings-button-icon" />
                  )}
                </Button>
              </span>
            </div>
          </>
        )}

        <div className="p-d-flex p-jc-end">
          <Button
            className="p-mt-3 settings-save-button"
            label="Salvar"
            aria-hidden="true"
            onClick={() => setVisible(true)}
          />
        </div>
      </div>
    </div>
  );
}

export default Settings;
