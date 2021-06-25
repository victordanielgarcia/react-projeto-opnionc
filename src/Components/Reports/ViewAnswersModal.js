import React, { useContext, useEffect } from "react";

import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";

import { FaEye } from "react-icons/fa";
import { getAllFormAnswers } from "../../Controllers/ControllerFormAnswers";
import { AuthContext } from "../../Configs/ContextProvider";

function ViewAnswersModal(props) {
  const { setFormAnswersList, formAnswersList } = useContext(AuthContext);

  const { showViewAnswersModal, setShowViewAnswersModal } = props;

  async function getDataFormAnswers() {
    const dataResponse = await getAllFormAnswers();
    if (dataResponse) {
      setFormAnswersList(dataResponse);
    }
  }

  useEffect(() => {
    getDataFormAnswers();
    // eslint-disable-next-line
  }, []);

  return (
    <Dialog
      header={() => {
        return (
          <div className="p-d-flex p-as-center p-jc-center">
            <div className="p-p-0 p-mr-2 p-d-flex">
              <FaEye className="p-mt-1 researches-addnew-icon" />
            </div>
            <span className="users-button-text">
              Lista com Todas as Respostas
            </span>
          </div>
        );
      }}
      visible={showViewAnswersModal.show}
      breakpoints={{ "960px": "75vw" }}
      style={{ width: "80vw" }}
      onHide={() => setShowViewAnswersModal({ show: false })}
      baseZIndex={0}
    >
      <>
        <div className="p-mx-5 p-my-3 p-d-flex p-as-center">
          <div className="p-mx-5 p-d-flex p-as-center">
            <div className="p-mx-5 p-d-flex p-as-center">
              <h3>Titulo: {showViewAnswersModal.title}</h3>
            </div>
          </div>
        </div>

        {formAnswersList.map((item) => {
          if (item.assessment_key === showViewAnswersModal.id) {
            return (
              <div>
                {item.createdForm.map((item) => {
                  if (
                    item.type === showViewAnswersModal.type &&
                    item.type === "shortAnswer"
                  ) {
                    return (
                      <div className="p-p-2 formAnswers-item">
                        <InputText
                          placeholder="Digite a sua resposta"
                          className="formanswers-input-short"
                          type="text"
                          value={item.answer}
                        />
                      </div>
                    );
                  }
                  if (
                    item.type === showViewAnswersModal.type &&
                    item.type === "paragraph"
                  ) {
                    return (
                      <div className="p-p-2 formAnswers-item">
                        <InputTextarea
                          placeholder="Digite a sua resposta"
                          autoResize={false}
                          rows={4}
                          cols={30}
                          className="formanswers-input-textarea"
                          value={item.answer}
                        />
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            );
          }
          return null;
        })}
      </>
    </Dialog>
  );
}

export default ViewAnswersModal;
