import React, { useState, useEffect } from "react";

import { toast } from "react-toastify";

import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";

import { AiFillEdit } from "react-icons/ai";
import { editResearches } from "../../Controllers/ControllerResearches";

import { ProgressSpinner } from "primereact/progressspinner";

function EditResearches(props) {
  const {
    showEditResearchesModal,
    setShowEditResearchesModal,
    getDataResearches,
  } = props;

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [pending, setPending] = useState(false);

  function clearFields() {
    setTitle("");
    setDescription("");
    setShowEditResearchesModal({ show: false });
    setPending(false);
    getDataResearches();
  }

  async function handleEditResearches() {
    setPending(true);
    const data = {
      title,
      description,
    };
    const response = await editResearches(data, showEditResearchesModal.id);
    if (response) {
      clearFields();
      toast.success("Sua Pesquisa foi Editada com Sucesso!");
    } else {
      setPending(false);
      toast.error("Algo deu Errado!");
    }
  }

  useEffect(() => {
    setDescription(showEditResearchesModal.description);
    setTitle(showEditResearchesModal.title);
  }, [showEditResearchesModal]);

  return (
    <Dialog
      header={() => {
        return (
          <div className="p-d-flex">
            <div className="p-p-0 p-mr-2 p-d-flex">
              <AiFillEdit className="researches-addnew-icon" />
            </div>
            <span className="p-my-auto users-button-text">Menu de Edição</span>
          </div>
        );
      }}
      visible={showEditResearchesModal.show}
      breakpoints={{ "960px": "75vw" }}
      style={{ width: "40vw" }}
      footer={() => {
        return (
          <div>
            {!pending && (
              <Button
                className="researches-button-modal-edit"
                label="Editar"
                iconPos="right"
                autoFocus={false}
                onClick={() => handleEditResearches()}
              />
            )}
          </div>
        );
      }}
      onHide={() => setShowEditResearchesModal(false)}
      baseZIndex={0}
    >
      {pending ? (
        <>
          <div
            className="p-d-flex p-as-center p-jc-center"
            style={{ height: "350px" }}
          >
            <div className="spinner-form">
              <ProgressSpinner />
            </div>
          </div>
        </>
      ) : (
        <>
          <label>Titulo da Pesquisa</label>
          <InputText
            placeholder="Digite o titulo da pesquisa.."
            className="p-my-2 settings-input"
            value={title}
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />
          <label className="p-mt-2">Descrição da Pesquisa</label>
          <InputTextarea
            placeholder="Digite uma descrição para a sua pesquisa.."
            autoResize={false}
            rows={4}
            cols={30}
            className=" p-my-2 settings-input"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </>
      )}
    </Dialog>
  );
}

export default EditResearches;
