import React, { useContext, useEffect, useState } from 'react'
import { FaEye, FaEyeSlash, FaUserCog } from 'react-icons/fa'

import { Checkbox } from 'primereact/checkbox'
import { InputText } from 'primereact/inputtext'
import { ProgressSpinner } from 'primereact/progressspinner'

import { AuthContext } from '../Configs/ContextProvider'

import '../Styles/Settings.css'
import { Button } from 'primereact/button'
import { ConfirmDialog } from 'primereact/confirmdialog'
import { editUser, searchCurrentUser } from '../Controllers/ControllerUser'
import { toast } from 'react-toastify'

function Settings() {
  const { setCurrentPage, userData, setUserData } = useContext(AuthContext)

  const [seePass, setSeePass] = useState(false)
  const [changePassword, setChangePassword] = useState(false)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const [visible, setVisible] = useState(false)

  const [pending, setPending] = useState(false)

  async function handleEditUser() {
    setPending(true)
    const data = {
      name,
      email,
    }
    const response = await editUser(data, userData.id)
    if (response) {
      setTimeout(async () => {
        const response = await searchCurrentUser(userData.id)
        if (response) setUserData(response)
        setPending(false)
        setSeePass(false)
        toast.success('Sua conta foi Editada com Sucesso!')
      }, 2000)
    } else {
      setTimeout(() => {
        setPending(false)
        toast.error('Não foi possível ler os dados.')
      }, 2000)
    }
  }

  useEffect(() => {
    setCurrentPage('Configurações')
    if (userData) {
      setName(userData.name)
      setEmail(userData.email)
    }
    // eslint-disable-next-line
  }, [userData])

  return (
    <div className="p-p-3">
      <ConfirmDialog
        visible={visible}
        onHide={() => setVisible(false)}
        message={
          !changePassword ? (
            'Você tem certeza que deseja salvar as configurações?'
          ) : (
            <>
              <div className="p-m-0">
                Você tem certeza que deseja salvar as configurações?
              </div>
              <br />
              <div className="p-m-0 settings-alert-password">
                Você será Deslogado!
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
        accept={() => {
          handleEditUser()
        }}
      />
      <div className="p-p-3 p-text-justify default-container">
        {pending ? (
          <div
            className="p-d-flex p-as-center p-jc-center"
            style={{ height: '350px' }}
          >
            <div className="spinner-form">
              <ProgressSpinner />
            </div>
          </div>
        ) : (
          <>
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
                  value={name}
                  className="settings-input"
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                />
              </span>
            </div>
            <div className="p-field">
              <label className="p-my-0 p-mt-4">E-mail do Usuário</label>
              <span className="p-d-flex p-mt-1 p-input-icon-left">
                <i className="pi pi-envelope" />
                <InputText
                  value={email}
                  className="settings-input"
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </span>
            </div>
            <div className=" p-mb-1 p-mt-3 p-d-flex p-flex-md-row">
              <Checkbox
                checked={true}
                onChange={() => setChangePassword(!changePassword)}
                className={
                  changePassword
                    ? 'p-mt-2 settings-checkbox-selected'
                    : 'p-mt-2 settings-checkbox'
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
                        setSeePass(!seePass)
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
                        setSeePass(!seePass)
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
          </>
        )}
      </div>
    </div>
  )
}

export default Settings
