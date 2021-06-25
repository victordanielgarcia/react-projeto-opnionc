import React, { useMemo } from "react";

import { GoDiffAdded } from "react-icons/go";

import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";

import {
  MdCheckBoxOutlineBlank,
  MdRadioButtonUnchecked,
  MdRadioButtonChecked,
  MdCheckBox,
} from "react-icons/md";

import angry from "../../Assets/ANGRY.png";
import happy from "../../Assets/HAPPY.png";
import indiferent from "../../Assets/INDIFERENT.png";
import sad from "../../Assets/SAD.png";
import veryHappy from "../../Assets/VERY HAPPY.png";

function ViewAnswers(props) {
  const { showViewAnswersModal, setShowViewAnswersModal } = props;

  const formAnswers = useMemo(() => {
    if (showViewAnswersModal.show && showViewAnswersModal.formAnswers) {
      return showViewAnswersModal.formAnswers.createdForm;
    }
    return [];
  }, [showViewAnswersModal]);

  return (
    <Dialog
      header={() => {
        return (
          <div className="p-d-flex">
            <div className="p-p-0 p-mr-2 p-d-flex">
              <GoDiffAdded className="researches-addnew-icon" />
            </div>
            <span className="p-my-auto users-button-text">
              Visualizar Resposta
            </span>
          </div>
        );
      }}
      visible={showViewAnswersModal.show}
      breakpoints={{ "960px": "90vw" }}
      style={{ width: "80vw" }}
      footer={() => {
        return (
          <div>
            <Button
              className="researches-button-modal"
              label="Salvar"
              iconPos="right"
              autoFocus={false}
            />
          </div>
        );
      }}
      onHide={() => setShowViewAnswersModal({ show: false })}
      baseZIndex={0}
    >
      {formAnswers && (
        <div>
          {formAnswers.map((item, index) => {
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
                      value={item.answer}
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
                    value={item.answer}
                  />
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

                  {item.options.map((itemOption) => {
                    return (
                      <div className="p-field-checkbox">
                        {itemOption.disabled ? (
                          <MdRadioButtonChecked className="p-mx-3 p-p-0 researches-icon-select" />
                        ) : (
                          <MdRadioButtonUnchecked className="p-mx-3 p-p-0 researches-icon-select" />
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

                  {item.options.map((itemOption) => {
                    return (
                      <div className="p-field-checkbox">
                        {itemOption.disabled ? (
                          <MdCheckBox className="p-mx-3 p-p-0 researches-icon-select" />
                        ) : (
                          <MdCheckBoxOutlineBlank className="p-mx-3 p-p-0 researches-icon-select" />
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
                <div className="p-p-3 formAnswers-item">
                  <div className="p-d-flex p-as-center">
                    <div className="p-d-flex p-as-center">
                      <h3>
                        {index + 1})&nbsp;{item.title}
                      </h3>
                    </div>
                  </div>
                  <div id="rating">
                    {item.answer === 1 && <span className="rating-in">★</span>}
                    {item.answer === 2 && (
                      <>
                        <span className="rating-in">★</span>
                        <span className="rating-in">★</span>
                      </>
                    )}
                    {item.answer === 3 && (
                      <>
                        <span className="rating-in">★</span>
                        <span className="rating-in">★</span>
                        <span className="rating-in">★</span>
                      </>
                    )}
                    {item.answer === 4 && (
                      <>
                        <span className="rating-in">★</span>
                        <span className="rating-in">★</span>
                        <span className="rating-in">★</span>
                        <span className="rating-in">★</span>
                      </>
                    )}
                    {item.answer === 5 && (
                      <>
                        <span className="rating-in">★</span>
                        <span className="rating-in">★</span>
                        <span className="rating-in">★</span>
                        <span className="rating-in">★</span>
                        <span className="rating-in">★</span>
                      </>
                    )}
                  </div>
                </div>
              );
            }
            if (item.type === "avaliationNumber") {
              return (
                <div className="p-p-3 formAnswers-item">
                  <div className="p-d-flex p-as-center">
                    <div className="p-d-flex p-as-center">
                      <h3>
                        {index + 1})&nbsp;{item.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-my-5" id="rating">
                    {item.answer === 1 && (
                      <span className="p-mx-1 researches-rating-in">1</span>
                    )}
                    {item.answer === 2 && (
                      <span className="p-mx-1 researches-rating-in">2</span>
                    )}
                    {item.answer === 3 && (
                      <span className="p-mx-1 researches-rating-in">3</span>
                    )}
                    {item.answer === 4 && (
                      <span className="p-mx-1 researches-rating-in">4</span>
                    )}
                    {item.answer === 5 && (
                      <span className="p-mx-1 researches-rating-in">5</span>
                    )}
                  </div>
                </div>
              );
            }
            if (item.type === "avaliationSmiles") {
              return (
                <div className="p-p-3 formAnswers-item">
                  <div className="p-d-flex p-as-center">
                    <div className="p-d-flex p-as-center">
                      <h3>
                        {index + 1})&nbsp;{item.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-my-5" id="rating">
                    {item.answer === 1 && (
                      <img
                        className="p-mx-2 researches-smiles"
                        src={angry}
                        alt="Imagem"
                      />
                    )}
                    {item.answer === 2 && (
                      <img
                        className="p-mx-2 researches-smiles"
                        src={sad}
                        alt="Imagem"
                      />
                    )}
                    {item.answer === 3 && (
                      <img
                        className="p-mx-2 researches-smiles"
                        src={indiferent}
                        alt="Imagem"
                      />
                    )}
                    {item.answer === 4 && (
                      <img
                        className="p-mx-2 researches-smiles"
                        src={happy}
                        alt="Imagem"
                      />
                    )}
                    {item.answer === 5 && (
                      <img
                        className="p-mx-2 researches-smiles"
                        src={veryHappy}
                        alt="Imagem"
                      />
                    )}
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
      )}
    </Dialog>
  );
}

export default ViewAnswers;
