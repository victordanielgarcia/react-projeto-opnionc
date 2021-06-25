import React, { useCallback, useContext, useEffect, useState } from "react";
import CountUp from "react-countup";

import { AuthContext } from "../Configs/ContextProvider";

import { Button } from "primereact/button";

import { AiOutlineFileSearch } from "react-icons/ai";
import { MdQuestionAnswer } from "react-icons/md";
import { BsFillBellFill } from "react-icons/bs";
import { MdMonetizationOn } from "react-icons/md";

import ChartBar from "../Components/Dashboard/ChartBar";

import "../Styles/Dashboard.css";
import { getAllResearches } from "../Controllers/ControllerResearches";
import { getAllFormAnswers } from "../Controllers/ControllerFormAnswers";
import ViewAnswers from "../Components/Researches/ViewAnswers";

function Dashboard() {
  const {
    setCurrentPage,
    userData,
    researchesList,
    formAnswersList,
    setResearchesList,
    setFormAnswersList,
  } = useContext(AuthContext);

  const [showViewAnswersModal, setShowViewAnswersModal] = useState({
    show: false,
    formAnswers: [],
  });

  const formSum = researchesList.filter(
    (item) => item.key_user === userData.id,
  ).length;

  const answersResponse = useCallback(() => {
    const formSum1 = researchesList.filter(
      (item) => item.key_user === userData.id,
    );

    let sum = [];
    for (let i = 0; i < formSum1.length; i++) {
      formAnswersList.map((item) => {
        if (item.assessment_key === formSum1[i].id) {
          sum.push(item);
        }
        return null;
      });
    }
    return sum;
  }, [researchesList, formAnswersList, userData]);

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

  useEffect(() => {
    setCurrentPage("Dashboard");
    getDataFormAnswers();
    getDataResearches();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="p-p-3 ">
      <ViewAnswers
        showViewAnswersModal={showViewAnswersModal}
        setShowViewAnswersModal={setShowViewAnswersModal}
        formAnswersList={formAnswersList}
      />

      <div className="p-p-3 default-container-dashboard ">
        <div className="p-col p-d-flex dashboard-box-welcome p-mb-3">
          <h1 className="p-mx-auto p-as-center p-text-center">
            Bem Vindo {userData ? userData.name : ""}
          </h1>
        </div>
        <div className="p-grid p-mb-3">
          <div className="p-col-12 p-md-6 p-lg-3">
            <div className="box dashboard-box-stats p-d-flex">
              <div className="p-mx-auto p-as-center p-d-flex dashboard-box-stats-icon">
                <div className="p-grid p-dir-col p-mx-auto p-my-auto">
                  <AiOutlineFileSearch
                    className="p-mx-auto p-as-center p-col p-my-auto p-p-0
                dashboard-box-stats-icon-width"
                  />
                  <small
                    className="p-text-center p-as-center p-mx-auto p-col p-p-0"
                    style={{ fontSize: ".75rem" }}
                  >
                    Pesquisas
                  </small>
                </div>
              </div>
              <div className="p-mx-auto p-as-center p-d-flex dashboard-box-stats-content">
                <span className="p-ml-auto p-as-center">
                  <CountUp end={formSum} duration={3} />
                </span>
                {userData.plan === "free" ? (
                  <span className="p-mr-auto p-as-center dashboard-box-stats-muted">
                    /
                    <CountUp end="3" duration={3} />
                  </span>
                ) : (
                  <span className="p-mr-auto p-as-center dashboard-box-stats-muted">
                    <CountUp end="∞" duration={3} />
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="p-col-12 p-md-6 p-lg-3">
            <div className="box dashboard-box-stats p-d-flex">
              <div className="p-mx-auto p-as-center p-d-flex dashboard-box-stats-icon">
                <div className="p-grid p-dir-col p-mx-auto p-my-auto">
                  <MdQuestionAnswer
                    className="p-mx-auto p-as-center p-col p-my-auto p-p-0
                dashboard-box-stats-icon-width"
                  />
                  <small
                    className="p-text-center p-as-center p-mx-auto p-col p-p-0"
                    style={{ fontSize: ".75rem" }}
                  >
                    Respostas
                  </small>
                </div>
              </div>
              <div className="p-mx-auto p-as-center p-d-flex dashboard-box-stats-content">
                <>
                  <span className="p-ml-auto p-as-center">
                    <CountUp end={answersResponse().length} duration={3} />
                  </span>
                  <span className="p-mr-auto p-as-center dashboard-box-stats-muted"></span>
                </>
              </div>
            </div>
          </div>
          <div className="p-col-12 p-md-6 p-lg-3">
            <div className="box dashboard-box-stats p-d-flex">
              <div className="p-mx-auto p-as-center p-d-flex dashboard-box-stats-icon">
                <div className="p-grid p-dir-col p-mx-auto p-my-auto">
                  <BsFillBellFill
                    className="p-mx-auto p-as-center p-col p-my-auto p-p-0
                 dashboard-box-stats-icon-width"
                  />
                  <small
                    className="p-text-center p-as-center p-mx-auto p-col p-p-0"
                    style={{ fontSize: ".75rem" }}
                  >
                    Notificações
                  </small>
                </div>
              </div>
              <div className="p-mx-auto p-as-center p-d-flex dashboard-box-stats-content">
                <span className="p-ml-auto p-as-center">
                  <CountUp end="0" duration={3} />
                </span>
                <span className="p-mr-auto p-as-center dashboard-box-stats-muted"></span>
              </div>
            </div>
          </div>
          <div className="p-col-12 p-md-6 p-lg-3">
            <div className="box dashboard-box-stats p-d-flex">
              <div className="p-mx-auto p-as-center p-d-flex dashboard-box-stats-icon">
                <div className="p-grid p-dir-col p-mx-auto p-my-auto">
                  <MdMonetizationOn
                    className="p-mx-auto p-as-center p-col p-my-auto p-p-0
                dashboard-box-stats-icon-width"
                  />
                  <small
                    className="p-text-center p-as-center p-mx-auto p-col p-p-0"
                    style={{ fontSize: ".75rem" }}
                  >
                    Plano de Uso
                  </small>
                </div>
              </div>
              <div className="p-mx-auto p-as-center p-d-flex dashboard-box-stats-content">
                <div className="p-grid p-dir-col p-mx-auto p-my-auto">
                  {userData.plan === "free" ? (
                    <small
                      className="p-text-center p-as-center p-mx-auto p-col p-p-0"
                      style={{ fontSize: "1.2rem" }}
                    >
                      Gratuito
                    </small>
                  ) : (
                    <small
                      className="p-text-center p-as-center p-mx-auto p-col p-p-0"
                      style={{ fontSize: "1.2rem" }}
                    >
                      Profissional
                    </small>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-grid">
          <div className="p-p-2 p-m-0 p-col-12 p-md-6 p-lg-4">
            <div className="p-p-0 p-m-0 dashboard-box-graphics">
              <div className="p-col-12 p-grid p-p-0 p-m-0 dashboard-box-order">
                <div className="p-py-2 p-d-flex p-as-center p-jc-center dashboard-background-answers">
                  ULTIMAS RESPOSTAS
                </div>
                {answersResponse().length === 0 ? (
                  <div
                    style={{ width: "100%", height: "20rem" }}
                    className="p-d-flex  p-justify-center p-text-center"
                  >
                    <h5 className="p-as-center p-text-center">SEM DADOS</h5>
                  </div>
                ) : (
                  <table>
                    <thead></thead>
                    <tbody>
                      {answersResponse().map((item, index) => {
                        if (index <= 5) {
                          return (
                            <tr>
                              <td data-label="Data">{item.date}</td>
                              <td data-label="Ação">
                                <Button
                                  type="submit"
                                  className="p-mx-2 researches-button"
                                  label="Visualizar"
                                  iconPos="right"
                                  onClick={() =>
                                    setShowViewAnswersModal({
                                      show: true,
                                      formAnswers: item,
                                    })
                                  }
                                />
                              </td>
                            </tr>
                          );
                        }
                        return null;
                      })}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
          <div className="p-p-2 p-m-0 p-col-12 p-md-6 p-lg-8">
            <div className="p-p-0 p-m-0 dashboard-box-graphics">
              <div className="p-p-0 p-m-0 dashboard-box-charts">
                <div className="p-py-2 p-d-flex p-as-center p-jc-center dashboard-background-answers">
                  RESPOSTAS NOS ÚLTIMOS 7 DIAS
                </div>
                {answersResponse().length === 0 ? (
                  <div
                    style={{ width: "100%", height: "20rem" }}
                    className="p-d-flex  p-justify-center p-text-center"
                  >
                    <h5 className="p-as-center p-text-center">SEM DADOS</h5>
                  </div>
                ) : (
                  <ChartBar />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
