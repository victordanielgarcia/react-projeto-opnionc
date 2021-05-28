import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import React, { useState, useContext } from "react";
import { GoDiffAdded } from "react-icons/go";
import { AuthContext } from "../../Configs/ContextProvider";
import { addResearches } from "../../Controllers/ControllerResearches";

import moment from "moment";
import "moment/locale/pt-br";

function AddResearches(props) {
  const {
    showAddResearchesModal,
    setShowAddResearchesModal,
    getDataResearches,
  } = props;

  const { userData } = useContext(AuthContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function clearFields() {
    setTitle("");
    setDescription("");
    setShowAddResearchesModal(false);
    getDataResearches();
  }

  async function handleAddResearches() {
    const data = {
      title,
      description,
      creation_date: moment().format("DD/MM/YYYY hh:mm:ss"),
      key_user: userData.id,
      name_user: userData.name,
    };
    const response = await addResearches(data);
    if (response) {
      clearFields();
    }
  }

  return (
    <Dialog
      header={() => {
        return (
          <div className="p-d-flex">
            <div className="p-p-0 p-mr-2 p-d-flex">
              <GoDiffAdded className="researches-addnew-icon" />
            </div>
            <span className="p-my-auto users-button-text">Nova Pesquisa</span>
          </div>
        );
      }}
      visible={showAddResearchesModal}
      breakpoints={{ "960px": "75vw" }}
      style={{ width: "40vw" }}
      footer={() => {
        return (
          <div>
            <Button
              className="researches-button-modal"
              label="Salvar"
              iconPos="right"
              autoFocus={false}
              onClick={() => handleAddResearches()}
            />
          </div>
        );
      }}
      onHide={() => setShowAddResearchesModal(false)}
      baseZIndex={0}
    >
      <div className="p-mt-1">
        <label className="p-mt-4">Titulo da Pesquisa</label>
        <InputText
          placeholder="Digite o titulo da pesquisa.."
          className="p-my-2 settings-input"
          value={title}
          type="text"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="p-mt-3">
        <label className="p-my-4">Descrição da Pesquisa</label>
        <InputTextarea
          placeholder="Digite uma descrição para a sua pesquisa.."
          autoResize={false}
          rows={4}
          cols={30}
          className=" p-my-2 settings-input"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
    </Dialog>
  );
}

export default AddResearches;
