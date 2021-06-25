import React, { useContext, useEffect, useState } from "react";

import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

import { getAllFormAnswers } from "../Controllers/ControllerFormAnswers";

import { ProgressSpinner } from "primereact/progressspinner";

import { GoDiffAdded } from "react-icons/go";

import { FiAlertTriangle, FiCheck } from "react-icons/fi";
import { IoReloadOutline } from "react-icons/io5";

import { AuthContext } from "../Configs/ContextProvider";
import { getAllResearches } from "../Controllers/ControllerResearches";

import "../Styles/Researches.css";
import AddResearches from "../Components/Researches/AddResearches";
import SelectedResearches from "../Components/Researches/SelectedResearches";
import { toast } from "react-toastify";
import DeleteResearches from "../Components/Researches/DeleteResearches";
import EditResearches from "../Components/Researches/EditResearches";

function Researches() {
  const {
    setCurrentPage,
    researchesList,
    setResearchesList,
    setFormAnswersList,
    userData,
  } = useContext(AuthContext);

  const [selectedResearches, setSelectedResearches] = useState("");

  const [inputSearch, setInputSearch] = useState("");

  const [showAddResearchesModal, setShowAddResearchesModal] = useState(false);
  const [showDeleteResearchesModal, setShowDeleteResearchesModal] = useState({
    show: false,
    id: "",
  });
  const [showEditResearchesModal, setShowEditResearchesModal] = useState({
    show: false,
    id: "",
    title: "",
    description: "",
  });

  const [pending, setPending] = useState(false);

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

  const FormSum = researchesList.filter(
    (item) => item.key_user === userData.id,
  ).length;

  function reloadItens() {
    getDataResearches();
    setPending(false);
    setTimeout(() => {
      setPending(true);
    }, 1500);
  }

  useEffect(() => {
    getDataResearches();
    getDataFormAnswers();
    setCurrentPage("Pesquisas");
    setTimeout(() => {
      setPending(true);
    }, 2000);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="p-p-3 ">
      <AddResearches
        showAddResearchesModal={showAddResearchesModal}
        setShowAddResearchesModal={setShowAddResearchesModal}
        getDataResearches={getDataResearches}
      />
      <DeleteResearches
        showDeleteResearchesModal={showDeleteResearchesModal}
        setShowDeleteResearchesModal={setShowDeleteResearchesModal}
        getDataResearches={getDataResearches}
      />
      <EditResearches
        showEditResearchesModal={showEditResearchesModal}
        setShowEditResearchesModal={setShowEditResearchesModal}
        getDataResearches={getDataResearches}
      />

      {!pending ? (
        <div className="p-p-3 p-d-flex p-ai-center p-jc-center p-flex-column  default-container">
          <div className="spinner-form">
            <ProgressSpinner />
          </div>
        </div>
      ) : (
        <>
          {selectedResearches !== "" ? (
            <SelectedResearches
              setSelectedResearches={setSelectedResearches}
              selectedResearches={selectedResearches}
              researchesList={researchesList}
              getDataFormAnswers={getDataFormAnswers}
              getDataResearches={getDataResearches}
            />
          ) : researchesList.filter((item) => item.key_user === userData.id)
              .length > 0 && selectedResearches === "" ? (
            <div className="p-p-3 default-container">
              <div className="p-d-flex p-jc-between">
                <div>
                  <span
                    className="p-mt-2 p-d-flex"
                    onClick={() => {
                      FormSum >= 3 && userData.plan === "free"
                        ? toast.error(
                            "Voce atingiu o Limite de Formulários do seu plano, para criar mais, faça um upgrade na sua conta! ",
                          )
                        : setShowAddResearchesModal(!showAddResearchesModal);
                    }}
                  >
                    <GoDiffAdded className="p-mx-2 researches-addnew-icon" />
                    <span className="p-d-flex p-as-center researches-addnew-text">
                      Nova Pesquisa
                    </span>
                  </span>
                </div>
                <div>
                  <div className="p-inputgroup">
                    <IoReloadOutline
                      onClick={() => reloadItens()}
                      className="p-mx-3 p-d-flex p-as-center realod-button"
                    />
                    <InputText
                      className="search-input"
                      placeholder="Buscar pesquisas..."
                      value={inputSearch}
                      onChange={(e) => setInputSearch(e.target.value)}
                    />
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
                      <th scope="col" style={{ width: "10%" }}>
                        #
                      </th>
                      <th scope="col" style={{ width: "35%" }}>
                        Titulo
                      </th>
                      <th scope="col" style={{ width: "20%" }}>
                        Status
                      </th>
                      <th scope="col" style={{ width: "25%" }}>
                        Ação
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {researchesList
                      .filter(
                        (item) =>
                          item.title
                            .toUpperCase()
                            .indexOf(inputSearch.toUpperCase()) !== -1,
                      )
                      .map(
                        (item, index) =>
                          item.key_user === userData.id && (
                            <tr>
                              <td data-label="#">{index + 1}</td>
                              <td data-label="Titulo">{item.title}</td>
                              <td data-label="Status">
                                {!item.published ? (
                                  <FiAlertTriangle className="icon-alert" />
                                ) : (
                                  <FiCheck className="icon-check" />
                                )}
                              </td>
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
                                <Button
                                  type="submit"
                                  className="p-ml-2 researches-button-editar"
                                  label="Editar"
                                  iconPos="right"
                                  onClick={() =>
                                    setShowEditResearchesModal({
                                      show: true,
                                      id: item.id,
                                      title: item.title,
                                      description: item.description,
                                    })
                                  }
                                />
                                <Button
                                  type="submit"
                                  className="p-ml-2 researches-button-delete"
                                  label="Excluir"
                                  iconPos="right"
                                  onClick={() =>
                                    setShowDeleteResearchesModal({
                                      show: true,
                                      id: item.id,
                                    })
                                  }
                                />
                              </td>
                            </tr>
                          ),
                      )}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div className="p-p-3 p-d-flex p-ai-center p-jc-center p-flex-column  default-container">
              <p className="article-assessment-text">
                Você ainda não tem nenhuma pesquisa! Crie uma!
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
        </>
      )}
    </div>
  );
}

export default Researches;
