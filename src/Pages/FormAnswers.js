import React, { useContext, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";

import moment from "moment";
import "moment/locale/pt-br";

import FormView from "../Components/FormAnswers/FormView";

import { ProgressSpinner } from "primereact/progressspinner";

import "../Styles/FormAnswers.css";
import { AuthContext } from "../Configs/ContextProvider";
import { getAllResearches } from "../Controllers/ControllerResearches";
import {
  addFormAnswers,
  getAllFormAnswers,
} from "../Controllers/ControllerFormAnswers";
import Error404 from "../Components/FormAnswers/Error404";
import Footer from "../Components/FormAnswers/Footer";
import Header from "../Components/FormAnswers/Header";
import Answered from "../Components/FormAnswers/Answered";

function FormAnswers() {
  const { ID } = useParams();
  const { EMAIL } = useParams();

  const {
    setResearchesList,
    setFormAnswersList,
    formAnswersList,
    setCurrentPage,
  } = useContext(AuthContext);

  const [formActual, setFormActual] = useState(1);

  const [createdForm, setCreatedForm] = useState([]);
  const [FormSelected, setFormSelected] = useState([]);

  const [pending, setPending] = useState(false);

  async function getDataResearches() {
    const dataResponse = await getAllResearches();
    if (dataResponse) {
      setResearchesList(dataResponse);
      return dataResponse;
    }
    return false;
  }

  async function handleGetForm() {
    const response = await getDataResearches();
    if (response) {
      const [newData] = response.filter((item) => item.id === ID);
      const [newData2] = response.filter((item) => item.id === ID);

      if (newData && newData.createdForm) {
        setCreatedForm(newData.createdForm);
      }
      if (newData2) {
        setFormSelected(newData2);
      }
    }
  }

  async function handleAddFormAnswersLink() {
    setPending(false);
    const data = {
      assessment_key: ID,
      date: moment().format("DD/MM/YYYY hh:mm:ss"),
      createdForm,
    };
    const response = await addFormAnswers(data);
    if (response) {
      setFormActual(3);
      setTimeout(() => {
        setPending(true);
      }, 2000);
    }
  }
  async function handleAddFormAnswersEmail() {
    setPending(false);
    const data = {
      assessment_key: ID,
      date: moment().format("DD/MM/YYYY hh:mm:ss"),
      email: EMAIL,
      createdForm,
    };
    const response = await addFormAnswers(data);
    if (response) {
      setFormActual(3);
      setTimeout(() => {
        setPending(true);
      }, 2000);
    }
  }

  function handleEditAnswer(index, value) {
    const newCreatedForm = createdForm.map((item) => {
      if (item.index === index) {
        return { ...item, answer: value };
      }
      return item;
    });
    setCreatedForm(newCreatedForm);
  }

  function handleEditAnswerQuantitativo(index, value) {
    const newCreatedForm = createdForm.map((item) => {
      if (item.index === index) {
        return { ...item, answer: value };
      }
      return item;
    });
    setCreatedForm(newCreatedForm);
  }

  function handleEditOptionMultipleChoice(index, disabled, indexOption) {
    const newCreatedForm = createdForm.map((item) => {
      if (item.index === index) {
        return {
          ...item,
          options: item.options.map((item, index) => {
            if (index === indexOption) {
              return { ...item, disabled: !disabled };
            }
            return item;
          }),
        };
      }
      return item;
    });
    setCreatedForm(newCreatedForm);
  }
  function handleEditOptionSelectBox(index, disabled, indexOption) {
    const newCreatedForm = createdForm.map((item) => {
      if (item.index === index) {
        return {
          ...item,
          options: item.options.map((item, index) => {
            if (index === indexOption) {
              return { ...item, disabled: !disabled };
            }
            return { ...item, disabled: false };
          }),
        };
      }
      return item;
    });
    setCreatedForm(newCreatedForm);
  }

  const checkEmailPermission = useMemo(() => {
    if (
      FormSelected.emailList &&
      FormSelected.emailList.filter((item) => item === EMAIL).length > 0
    ) {
      return 1;
    }
    return 0;
  }, [FormSelected, EMAIL]);

  const checkEmailResponse = useMemo(() => {
    if (
      formAnswersList &&
      formAnswersList.filter(
        (item) =>
          item.email === EMAIL && FormSelected.id === item.assessment_key,
      ).length > 0
    ) {
      return 1;
    }
    return 0;
  }, [formAnswersList, EMAIL, FormSelected]);

  async function getDataFormAnswers() {
    const dataResponse = await getAllFormAnswers();
    if (dataResponse) {
      setFormAnswersList(dataResponse);
    }
  }

  useEffect(() => {
    handleGetForm();
    getDataFormAnswers();
    setCurrentPage("Disabled");
    setTimeout(() => {
      setPending(true);
    }, 2000);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="formanswers-background">
      <Header
        FormSelected={FormSelected}
        setFormActual={setFormActual}
        EMAIL={EMAIL}
        checkEmailPermission={checkEmailPermission}
        ID={ID}
        checkEmailResponse={checkEmailResponse}
      />
      <div className="p-my-4 p-d-flex p-ai-center p-jc-center formanswers-container">
        <div
          className="p-d-flex p-flex-column formanswers-container-white "
          style={{
            background: `#${FormSelected.fundo}`,
            color: `#${FormSelected.text}`,
          }}
        >
          {!pending ? (
            <div className="spinner-form">
              <ProgressSpinner />
            </div>
          ) : (
            <>
              {FormSelected.id === ID ? (
                <>
                  {EMAIL ? (
                    <>
                      {checkEmailPermission === 0 ? (
                        <Error404 />
                      ) : (
                        <>
                          {checkEmailResponse === 0 ? (
                            <FormView
                              formActual={formActual}
                              FormSelected={FormSelected}
                              setFormActual={setFormActual}
                              createdForm={createdForm}
                              handleEditAnswer={handleEditAnswer}
                              EMAIL={EMAIL}
                              handleAddFormAnswersEmail={
                                handleAddFormAnswersEmail
                              }
                              handleAddFormAnswersLink={
                                handleAddFormAnswersLink
                              }
                              handleEditAnswerQuantitativo={
                                handleEditAnswerQuantitativo
                              }
                              handleEditOptionMultipleChoice={
                                handleEditOptionMultipleChoice
                              }
                              handleEditOptionSelectBox={
                                handleEditOptionSelectBox
                              }
                              pending={pending}
                              setPending={setPending}
                            />
                          ) : (
                            <Answered />
                          )}
                        </>
                      )}
                    </>
                  ) : (
                    <>
                      <FormView
                        formActual={formActual}
                        FormSelected={FormSelected}
                        setFormActual={setFormActual}
                        createdForm={createdForm}
                        handleEditAnswer={handleEditAnswer}
                        EMAIL={EMAIL}
                        handleAddFormAnswersEmail={handleAddFormAnswersEmail}
                        handleAddFormAnswersLink={handleAddFormAnswersLink}
                        handleEditAnswerQuantitativo={
                          handleEditAnswerQuantitativo
                        }
                        handleEditOptionMultipleChoice={
                          handleEditOptionMultipleChoice
                        }
                        handleEditOptionSelectBox={handleEditOptionSelectBox}
                        pending={pending}
                        setPending={setPending}
                      />
                    </>
                  )}
                </>
              ) : (
                <Error404 />
              )}
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default FormAnswers;
