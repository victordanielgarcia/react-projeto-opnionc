import React, { useState } from "react";

import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

import { FaTrashAlt } from "react-icons/fa";
import { deleteResearches } from "../../Controllers/ControllerResearches";
import { toast } from "react-toastify";

import { ProgressSpinner } from "primereact/progressspinner";

function DeleteResearches(props) {
  const [pending, setPending] = useState(false);

  const {
    showDeleteResearchesModal,
    setShowDeleteResearchesModal,
    getDataResearches,
  } = props;

  async function handleDeleteResearches() {
    setPending(true);
    const response = await deleteResearches(showDeleteResearchesModal.id);
    if (response) {
      setPending(false);
      getDataResearches();
      setShowDeleteResearchesModal({ show: false });
      toast.success("Sua Pesquisa foi Apagada com Sucesso!");
    } else {
      setPending(false);
      toast.error("Algo deu Errado!");
    }
  }

  return (
    <Dialog
      header={() => {
        return (
          <div className="p-d-flex">
            <div className="p-p-0 p-mr-2 p-d-flex">
              <FaTrashAlt className="researches-addnew-icon" />
            </div>
            <span className="p-my-auto users-button-text">Menu de Remoção</span>
          </div>
        );
      }}
      visible={showDeleteResearchesModal.show}
      breakpoints={{ "960px": "75vw" }}
      style={{ width: "40vw" }}
      footer={() => {
        return (
          <div>
            {!pending && (
              <Button
                className="researches-button-modal-delete"
                label="Deletar"
                iconPos="right"
                autoFocus={false}
                onClick={() => handleDeleteResearches()}
              />
            )}
          </div>
        );
      }}
      onHide={() => setShowDeleteResearchesModal(false)}
      baseZIndex={0}
    >
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
          Voce tem certeza que deseja deletar essa pesquisa?
          <br />
          <br />
          ESSA AÇÃO É IRREVERSíVEL
        </>
      )}
    </Dialog>
  );
}

export default DeleteResearches;
