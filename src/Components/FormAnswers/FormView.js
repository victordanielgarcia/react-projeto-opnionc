import React from "react";

import { Button } from "primereact/button";

import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";

import { ProgressSpinner } from "primereact/progressspinner";

import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRadioButtonUnchecked,
  MdRadioButtonChecked,
} from "react-icons/md";

import Stars from "./avaliations/Stars";
import Number from "./avaliations/Number";
import Smiles from "./avaliations/Smiles";

function FormView(props) {
  const {
    formActual,
    FormSelected,
    setFormActual,
    createdForm,
    handleEditAnswer,
    EMAIL,
    handleAddFormAnswersEmail,
    handleAddFormAnswersLink,
    handleEditAnswerQuantitativo,
    handleEditOptionMultipleChoice,
    handleEditOptionSelectBox,
    pending,
    setPending,
  } = props;

  function handdleEditFormActual(item) {
    setFormActual(item);
    setPending(false);
    setTimeout(() => {
      setPending(true);
    }, 2000);
  }

  return (
    <>
      {!pending ? (
        <div className="spinner-form">
          <ProgressSpinner />
        </div>
      ) : (
        <>
          {formActual === 1 && (
            <div className="formanswers-margin">
              <h2>{FormSelected.title}</h2>
              <h4>Prezado colaborador, </h4>
              <p>{FormSelected.description}</p>
              <div>
                Ao clicar em "PRÓXIMO" você estará concordando em participar
                desta pesquisa.
              </div>
              <div className="p-d-flex p-jc-end">
                <Button
                  className="p-mt-3 settings-save-button"
                  label="Próximo"
                  aria-hidden="true"
                  onClick={() => {
                    handdleEditFormActual(2);
                  }}
                />
              </div>
            </div>
          )}
          <div className="p-my-5">
            {formActual === 2 && (
              <>
                {createdForm.map((item, index) => {
                  if (item.type === "shortAnswer") {
                    return (
                      <>
                        <div className="p-p-3 formAnswers-item">
                          <div className="p-d-flex p-as-center">
                            <div className="p-d-flex p-as-center">
                              <h3>
                                {index + 1})&nbsp;{item.title}
                              </h3>
                            </div>
                          </div>
                          <InputText
                            placeholder="Digite a sua resposta"
                            className="p-my-2 formAnswers-input"
                            type="text"
                            onChange={(e) =>
                              handleEditAnswer(item.index, e.target.value)
                            }
                          />
                        </div>
                      </>
                    );
                  }
                  if (item.type === "paragraph") {
                    return (
                      <div className="p-p-3 formAnswers-item">
                        <div className="p-d-flex p-as-center">
                          <div className="p-d-flex p-as-center">
                            <h3>
                              {index + 1})&nbsp;{item.title}
                            </h3>
                          </div>
                        </div>
                        <InputTextarea
                          placeholder="Digite a sua resposta"
                          autoResize={false}
                          rows={4}
                          cols={30}
                          className=" p-my-2 formAnswers-input"
                          onChange={(e) =>
                            handleEditAnswer(item.index, e.target.value)
                          }
                        />
                      </div>
                    );
                  }
                  if (item.type === "multipleChoice") {
                    return (
                      <div className="p-p-3 formAnswers-item">
                        <div className="p-d-flex p-as-center">
                          <div className="p-d-flex p-as-center">
                            <h3>
                              {index + 1})&nbsp;{item.title}
                            </h3>
                          </div>
                        </div>

                        {item.options.map((itemOption, index) => {
                          return (
                            <div className="p-field-checkbox">
                              {itemOption.disabled ? (
                                <MdRadioButtonChecked
                                  className="p-mx-3 p-p-0 researches-icon-select"
                                  onClick={() => {
                                    if (!itemOption.disabled) {
                                      handleEditOptionSelectBox(
                                        item.index,
                                        itemOption.disabled,
                                        index,
                                      );
                                    }
                                  }}
                                />
                              ) : (
                                <MdRadioButtonUnchecked
                                  className="p-mx-3 p-p-0 researches-icon-select"
                                  onClick={() => {
                                    if (!itemOption.disabled) {
                                      handleEditOptionSelectBox(
                                        item.index,
                                        itemOption.disabled,
                                        index,
                                      );
                                    }
                                  }}
                                />
                              )}

                              <span className="p-d-flex p-mt-1 p-input-icon-left p-input-icon-right width100">
                                <InputText
                                  className="formAnswers-input"
                                  type="text"
                                  value={itemOption.name}
                                />
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    );
                  }

                  if (item.type === "selectionBox") {
                    return (
                      <div className="p-p-3 formAnswers-item">
                        <div className="p-d-flex p-as-center">
                          <div className="p-d-flex p-as-center">
                            <h3>
                              {index + 1})&nbsp;{item.title}
                            </h3>
                          </div>
                        </div>

                        {item.options.map((itemOption, index) => {
                          return (
                            <div className="p-field-checkbox">
                              {itemOption.disabled ? (
                                <MdCheckBox
                                  className="p-mx-3 p-p-0 researches-icon-select"
                                  onClick={() => {
                                    handleEditOptionMultipleChoice(
                                      item.index,
                                      itemOption.disabled,
                                      index,
                                    );
                                  }}
                                />
                              ) : (
                                <MdCheckBoxOutlineBlank
                                  className="p-mx-3 p-p-0 researches-icon-select"
                                  onClick={() => {
                                    handleEditOptionMultipleChoice(
                                      item.index,
                                      itemOption.disabled,
                                      index,
                                    );
                                  }}
                                />
                              )}

                              <span className="p-d-flex p-mt-1 p-input-icon-left p-input-icon-right width100">
                                <InputText
                                  className="formAnswers-input"
                                  type="text"
                                  value={itemOption.name}
                                />
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    );
                  }
                  if (item.type === "avaliationStars") {
                    return (
                      <Stars
                        index={index}
                        indexItem={item.index}
                        title={item.title}
                        handleEditAnswerQuantitativo={
                          handleEditAnswerQuantitativo
                        }
                      />
                    );
                  }
                  if (item.type === "avaliationNumber") {
                    return (
                      <Number
                        index={index}
                        indexItem={item.index}
                        title={item.title}
                        handleEditAnswerQuantitativo={
                          handleEditAnswerQuantitativo
                        }
                      />
                    );
                  }
                  if (item.type === "avaliationSmiles") {
                    return (
                      <Smiles
                        index={index}
                        indexItem={item.index}
                        title={item.title}
                        handleEditAnswerQuantitativo={
                          handleEditAnswerQuantitativo
                        }
                      />
                    );
                  }
                  return null;
                })}
                <div className="p-d-flex p-jc-center">
                  <Button
                    className="p-mt-5 settings-save-button"
                    label="Enviar"
                    aria-hidden="true"
                    onClick={() =>
                      EMAIL
                        ? handleAddFormAnswersEmail()
                        : handleAddFormAnswersLink()
                    }
                  />
                </div>
              </>
            )}

            {formActual === 3 && (
              <>
                <div className="p-d-flex p-jc-center formanswers-margin">
                  <h1>Suas respostas foram computadas!</h1>
                </div>
                <div className="p-d-flex p-jc-center formanswers-margin">
                  <h3>Obrigado por ter Participado desta pesquisa!</h3>
                </div>
                <div className="p-d-flex p-jc-center formanswers-margin formanswers-like">
                  🖒
                </div>
              </>
            )}
          </div>
        </>
      )}
    </>
  );
}

export default FormView;
