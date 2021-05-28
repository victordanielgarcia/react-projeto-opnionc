import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { addFormAnswers } from "../Controllers/ControllerFormAnswers";

import moment from "moment";
import "moment/locale/pt-br";

import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";

import { BiReset } from "react-icons/bi";

import "../Styles/FormAnswers.css";

function FormAnswers() {
  const [formActual, setFormActual] = useState(1);

  const { ID } = useParams();

  const [stars, setStars] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [opinion, setOpinion] = useState("");

  const [ratingStatus, setRatingStatus] = useState({ ratio: 0, active: false });
  const [rating, setRating] = useState([
    { S: false },
    { S: false },
    { S: false },
    { S: false },
    { S: false },
  ]);

  function handleRating(over, ratio) {
    if (over) {
      setRating(
        rating.map((star, index) => {
          if (index <= ratio - 1) {
            return { S: true };
          }
          return star;
        }),
      );
    } else {
      setRating(
        rating.map((star, index) => {
          if (index <= ratio - 1) {
            return { S: false };
          }
          return star;
        }),
      );
    }
  }

  function clearFields() {
    setName("");
    setStars("1");
    setEmail("");
    setOpinion("");
    setRatingStatus({ ratio: 0, active: false });
  }

  async function handleAddFormAnswers() {
    const data = {
      assessment_key: ID,
      name,
      email,
      date: moment().format("DD/MM/YYYY hh:mm:ss"),
      stars,
      opinion,
    };
    const response = await addFormAnswers(data);
    if (response) {
      clearFields();
      setFormActual(5);
    }
  }

  useEffect(() => {
    setStars(ratingStatus.ratio);
  }, [ratingStatus]);
  return (
    <div className="formanswers-background">
      <div className="p-d-flex p-ai-center p-jc-between formanswers-header">
        <span className="p-mt-3 p-ml-4">OpinionC</span>
        <span className="p-mt-3 p-d-flex p-ai-center">
          <BiReset className="p-m-2" />
          <span className="p-mr-4">
            <Link
              className="formanswers-header-link"
              onClick={() => {
                setFormActual(1);
              }}
            >
              Resetar Formulario
            </Link>
          </span>
        </span>
      </div>

      <div className="p-d-flex p-ai-center p-jc-center formanswers-container">
        <div className="p-d-flex p-flex-column formanswers-container-white">
          {formActual === 1 && (
            <div className="formanswers-margin">
              <h2>Questionário Sobre Comportamentos Sociais - QSCS</h2>
              <h4>Prezado colaborador, </h4>
              <p>
                Estamos realizando uma pesquisa com o propósito de conhecer
                possíveis fatores contribuintes para a explicação de
                comportamentos sociais. Por isso gostaríamos de contar com sua
                colaboração respondendo a este questionário. Contudo, antes de
                prosseguir, de acordo com o disposto na resolução 510/16 do
                Conselho Nacional de Saúde, referente aos procedimentos éticos
                em pesquisa com seres humanos.
              </p>
              <div>
                Ao clicar em "PRÓXIMO" você estará concordando em participar
                deste estudo.
              </div>
              <div className="p-d-flex p-jc-end">
                <Button
                  className="p-mt-3 settings-save-button"
                  label="Proximo"
                  aria-hidden="true"
                  onClick={() => {
                    setFormActual(2);
                  }}
                />
              </div>
            </div>
          )}
          {formActual === 2 && (
            <>
              <div className="formanswers-margin">
                <div>
                  <p>1) Digite o Seu Nome</p>
                  <InputText
                    placeholder="Seu nome"
                    className="formanswers-input"
                    value={name}
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                  />

                  <p className="p-mt-5">2) Digite o Seu E-mail</p>
                  <InputText
                    placeholder="Seu e-mail"
                    className="formanswers-input"
                    value={email}
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <div className="p-d-flex p-jc-end">
                    <Button
                      className="p-mt-5 p-mr-3 settings-save-button"
                      label="Voltar"
                      aria-hidden="true"
                      onClick={() => {
                        setFormActual(1);
                      }}
                    />
                    <Button
                      className="p-mt-5 settings-save-button"
                      label="Proximo"
                      aria-hidden="true"
                      onClick={() => {
                        setFormActual(3);
                      }}
                    />
                  </div>
                </div>
              </div>
            </>
          )}
          {formActual === 3 && (
            <>
              <div className="formanswers-margin">
                <h3>Qual a sua opinião sobre o nosso site?</h3>
                <InputTextarea
                  autoResize={false}
                  rows={6}
                  cols={30}
                  className="formanswers-input-textarea"
                  value={opinion}
                  onChange={(e) => setOpinion(e.target.value)}
                />
                <div className="p-d-flex p-jc-end">
                  <Button
                    className="p-mt-5 p-mr-3 settings-save-button"
                    label="Voltar"
                    aria-hidden="true"
                    onClick={() => {
                      setFormActual(2);
                    }}
                  />
                  <Button
                    className="p-mt-5 settings-save-button"
                    label="Proximo"
                    aria-hidden="true"
                    onClick={() => {
                      setFormActual(4);
                    }}
                  />
                </div>
              </div>
            </>
          )}
          {formActual === 4 && (
            <>
              <div className="formanswers-margin">
                <h2 className="p-my-5">Qual a sua avaliação do nosso site?</h2>
                <span className="p-my-5 p-d-flex p-jc-center formanswers-stars">
                  <div id="rating">
                    <span
                      className={`${
                        ratingStatus.active && ratingStatus.ratio >= 1
                          ? "rating-in"
                          : rating[0].S && "rating-in"
                      }`}
                      onMouseOver={() => {
                        handleRating(true, 1);
                      }}
                      onClick={() => {
                        setRatingStatus({
                          ratio: 1,
                          active: !ratingStatus.active
                            ? true
                            : ratingStatus.ratio !== 1,
                        });
                      }}
                      onMouseOut={() => {
                        handleRating(false, 1);
                      }}
                    >
                      ★
                    </span>
                    <span
                      className={`${
                        ratingStatus.active && ratingStatus.ratio >= 2
                          ? "rating-in"
                          : rating[1].S && "rating-in"
                      }`}
                      onMouseOver={() => {
                        handleRating(true, 2);
                      }}
                      onClick={() => {
                        setRatingStatus({
                          ratio: 2,
                          active: !ratingStatus.active
                            ? true
                            : ratingStatus.ratio !== 2,
                        });
                      }}
                      onMouseOut={() => {
                        handleRating(false, 2);
                      }}
                    >
                      ★
                    </span>
                    <span
                      className={`${
                        ratingStatus.active && ratingStatus.ratio >= 3
                          ? "rating-in"
                          : rating[2].S && "rating-in"
                      }`}
                      onMouseOver={() => {
                        handleRating(true, 3);
                      }}
                      onClick={() => {
                        setRatingStatus({
                          ratio: 3,
                          active: !ratingStatus.active
                            ? true
                            : ratingStatus.ratio !== 3,
                        });
                      }}
                      onMouseOut={() => {
                        handleRating(false, 3);
                      }}
                    >
                      ★
                    </span>
                    <span
                      className={`${
                        ratingStatus.active && ratingStatus.ratio >= 4
                          ? "rating-in"
                          : rating[3].S && "rating-in"
                      }`}
                      onMouseOver={() => {
                        handleRating(true, 4);
                      }}
                      onClick={() => {
                        setRatingStatus({
                          ratio: 4,
                          active: !ratingStatus.active
                            ? true
                            : ratingStatus.ratio !== 4,
                        });
                      }}
                      onMouseOut={() => {
                        handleRating(false, 4);
                      }}
                    >
                      ★
                    </span>
                    <span
                      className={`${
                        ratingStatus.active && ratingStatus.ratio >= 5
                          ? "rating-in"
                          : rating[4].S && "rating-in"
                      }`}
                      onMouseOver={() => {
                        handleRating(true, 5);
                      }}
                      onClick={() => {
                        setRatingStatus({
                          ratio: 5,
                          active: !ratingStatus.active
                            ? true
                            : ratingStatus.ratio !== 5,
                        });
                      }}
                      onMouseOut={() => {
                        handleRating(false, 5);
                      }}
                    >
                      ★
                    </span>
                  </div>
                </span>
                <div className="p-d-flex p-jc-end">
                  <Button
                    className="p-mt-5 p-mr-3 settings-save-button"
                    label="Voltar"
                    aria-hidden="true"
                    onClick={() => {
                      setFormActual(3);
                    }}
                  />
                  <Button
                    className="p-mt-5 settings-save-button"
                    label="Salvar"
                    aria-hidden="true"
                    onClick={() => handleAddFormAnswers()}
                  />
                </div>
              </div>
            </>
          )}
          {formActual === 5 && (
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
      </div>

      <div className="p-d-flex p-ai-center p-jc-between formanswers-footer">
        <span className=" p-ml-4">
          Copyright © 2021 - Todos os direitos Reservados
        </span>
      </div>
    </div>
  );
}

export default FormAnswers;
