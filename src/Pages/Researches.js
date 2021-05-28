import React, { useContext, useEffect, useState } from "react";

import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

import { getAllFormAnswers } from "../Controllers/ControllerFormAnswers";

import { GoDiffAdded } from "react-icons/go";
import { RiArrowGoBackFill } from "react-icons/ri";
import { BsStar, BsStarFill } from "react-icons/bs";
import { AiOutlineCopy } from "react-icons/ai";

import { AuthContext } from "../Configs/ContextProvider";
import { getAllResearches } from "../Controllers/ControllerResearches";

import "../Styles/Researches.css";
import AddResearches from "../Components/Researches/AddResearches";

function Researches() {
  const {
    setCurrentPage,
    researchesList,
    setResearchesList,
    formAnswersList,
    setFormAnswersList,
    userData,
    userCode,
  } = useContext(AuthContext);

  const [selectedResearches, setSelectedResearches] = useState("");

  const [showAddResearchesModal, setShowAddResearchesModal] = useState(false);

  async function getDataResearches() {
    const dataResponse = await getAllResearches();
    if (dataResponse) {
      setResearchesList(dataResponse);
    }
  }

  async function getDataFormAnswers() {
    const dataResponse = await getAllFormAnswers();
    if (dataResponse) {
      setFormAnswersList(dataResponse);
    }
  }

  function copyResearchesLink() {
    const textArea = document.createElement("textarea");
    textArea.value = `http://localhost:3000/a/${selectedResearches}`;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    textArea.remove();
  }

  useEffect(() => {
    getDataResearches();
    getDataFormAnswers();
    setCurrentPage("Pesquisas");
    userCode("Pesquisas");
    // eslint-disable-next-line
  }, []);

  return (
    <div className="p-p-3 ">
      <AddResearches
        showAddResearchesModal={showAddResearchesModal}
        setShowAddResearchesModal={setShowAddResearchesModal}
        getDataResearches={getDataResearches}
      />
      {selectedResearches !== "" && (
        <div className="p-p-3 default-container">
          <div className="p-d-flex p-jc-between">
            <div>
              <span className="p-mt-2 p-d-flex">
                <RiArrowGoBackFill
                  onClick={() => {
                    setSelectedResearches("");
                  }}
                  className="p-mx-2 researches-addnew-icon"
                />
                <AiOutlineCopy
                  onClick={() => copyResearchesLink()}
                  className="p-mx-2 researches-addnew-icon"
                />
              </span>
            </div>
            <div className="p-col-12 p-md-4">
              <div className="p-inputgroup">
                <InputText placeholder="Buscar respostas..." />
                <Button
                  icon="pi pi-search"
                  className="researches-button-search"
                />
              </div>
            </div>
          </div>
          <div className="p-mt-3">
            <table>
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Nome</th>
                  <th scope="col">Data</th>
                  <th scope="col">Status</th>
                  <th scope="col">Ação</th>
                </tr>
              </thead>
              <tbody>
                {formAnswersList.map((item, index) => {
                  if (item.assessment_key === selectedResearches) {
                    return (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.date}</td>
                        {item.stars === 1 && (
                          <td className="formanswers-stars">
                            <BsStarFill />
                            <BsStar />
                            <BsStar />
                            <BsStar />
                            <BsStar />
                          </td>
                        )}
                        {item.stars === 2 && (
                          <td className="formanswers-stars">
                            <BsStarFill />
                            <BsStarFill />
                            <BsStar />
                            <BsStar />
                            <BsStar />
                          </td>
                        )}
                        {item.stars === 3 && (
                          <td className="formanswers-stars">
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStar />
                            <BsStar />
                          </td>
                        )}
                        {item.stars === 4 && (
                          <td className="formanswers-stars">
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStar />
                          </td>
                        )}
                        {item.stars === 5 && (
                          <td className="formanswers-stars">
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                          </td>
                        )}
                        <td data-label="Ação">
                          <Button
                            type="submit"
                            className="researches-button"
                            label="Ver mais"
                            iconPos="right"
                          />
                        </td>
                      </tr>
                    );
                  }
                  return null;
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
      {researchesList.filter((item) => item.key_user === userData.id).length >
        0 &&
        selectedResearches === "" && (
          <div className="p-p-3 default-container">
            <div className="p-d-flex p-jc-between">
              <div>
                <span
                  className="p-mt-2 p-d-flex"
                  onClick={() => {
                    setShowAddResearchesModal(!showAddResearchesModal);
                  }}
                >
                  <GoDiffAdded className="p-mx-2 researches-addnew-icon" />
                  <span className="p-d-flex p-as-center researches-addnew-text">
                    Nova Pesquisa
                  </span>
                </span>
              </div>
              <div className="p-col-12 p-md-4">
                <div className="p-inputgroup">
                  <InputText placeholder="Buscar pesquisas..." />
                  <Button
                    icon="pi pi-search"
                    className="researches-button-search"
                  />
                </div>
              </div>
            </div>
            <div className="p-mt-3">
              <table>
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Ação</th>
                  </tr>
                </thead>
                <tbody>
                  {researchesList.map(
                    (item, index) =>
                      item.key_user === userData.id && (
                        <tr>
                          <td data-label="#">{index + 1}</td>
                          <td data-label="Titulo">{item.title}</td>
                          <td data-label="Ação">
                            <Button
                              type="submit"
                              className="researches-button"
                              label="Selecionar"
                              iconPos="right"
                              onClick={() => {
                                setSelectedResearches(item.id);
                              }}
                            />
                          </td>
                        </tr>
                      ),
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      {researchesList.filter((item) => item.key_user === userData.id).length ===
        0 && (
        <div className="p-p-3 p-d-flex p-ai-center p-jc-center p-flex-column  default-container">
          <p className="article-assessment-text">
            Voce ainda não tem nenhuma Pequisa! Crie uma!
          </p>
          <Button
            type="submit"
            className="p-d-flex p-mx-auto p-mt-5 p-px-6 p-py-2 login-button"
            label="Criar Pesquisa"
            iconPos="right"
            onClick={() => {
              setShowAddResearchesModal(!showAddResearchesModal);
            }}
          />
        </div>
      )}
    </div>
  );
}

export default Researches;
