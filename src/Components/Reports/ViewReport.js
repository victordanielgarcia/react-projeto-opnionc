import React, { useContext, useEffect } from "react";

import { Button } from "primereact/button";

import { TiArrowSortedDown } from "react-icons/ti";

import MapChart from "./MapChart1";
import ChartBar from "./ChartBar";

import ChartPieSelectBox from "./ChartPieSelectBox";
import ChartPieMultipleChoice from "./ChartPieMultipleChoice";
import ChartPieStars from "./ChartPieStars";
import ChartPieSmiles from "./ChartPieSmiles";
import ChartPieNumber from "./ChartPieNumber";

import { AuthContext } from "../../Configs/ContextProvider";
import { getAllFormAnswers } from "../../Controllers/ControllerFormAnswers";

function ViewReport(props) {
  const { reportType, createdForm, setShowViewAnswersModal, searchActive } =
    props;

  const { setFormAnswersList, formAnswersList } = useContext(AuthContext);

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
    <div>
      {reportType.code !== "" && searchActive && createdForm && (
        <>
          <div className="p-py-4 p-ai-center p-jc-center default-container1">
            <div className="p-px-5">
              <div className="p-p-2 report-open-answers">
                <div className="p-d-flex p-jc-between p-as-center p-jc-center">
                  <div>
                    <h5 className="p-my-1 p-d-flex p-as-center p-jc-center">
                      <TiArrowSortedDown className="p-mr-2 p-ml-2 p-d-flex p-as-center p-jc-center report-icon-arrow" />
                      Formulário Geral
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-py-3 p-mx-5 background-researches">
              {createdForm.map((item, index) => {
                if (item.type === "shortAnswer") {
                  return (
                    <div className="p-mx-5 p-mb-4 p-mb-2">
                      <div className="p-p-2 report-open-answers">
                        <div className="p-d-flex p-jc-between p-as-center p-jc-center">
                          <div>
                            <h5 className="p-my-1 p-ml-3 p-d-flex p-as-center p-jc-center">
                              {index + 1}) Resposta Curta : {item.title}
                            </h5>
                          </div>

                          <Button
                            type="submit"
                            className="p-m-1 researches-button"
                            label="Todas as Respostas"
                            iconPos="right"
                            onClick={() =>
                              setShowViewAnswersModal({
                                show: true,
                                id: reportType.code,
                                type: "shortAnswer",
                                title: item.title,
                              })
                            }
                          />
                        </div>
                      </div>
                    </div>
                  );
                }
                if (item.type === "paragraph") {
                  return (
                    <div className="p-mx-5 p-mb-4 p-mb-2 ">
                      <div className="p-p-2 report-open-answers">
                        <div className="p-d-flex p-jc-between p-as-center p-jc-center">
                          <div>
                            <h5 className="p-my-1 p-ml-3 p-d-flex p-as-center p-jc-center">
                              {index + 1}) Paragrafo : {item.title}
                            </h5>
                          </div>

                          <Button
                            type="submit"
                            className="p-m-1 researches-button"
                            label="Todas as Respostas"
                            iconPos="right"
                            onClick={() =>
                              setShowViewAnswersModal({
                                show: true,
                                id: reportType.code,
                                type: "paragraph",
                                title: item.title,
                              })
                            }
                          />
                        </div>
                      </div>
                    </div>
                  );
                }
                if (item.type === "selectionBox") {
                  return (
                    <div className="p-mx-5 p-mb-4 p-mb-2">
                      <div className="p-p-2 report-open-answers">
                        <div className="p-d-flex p-jc-between p-as-center p-jc-center">
                          <div>
                            <h5 className="p-my-1 p-d-flex p-as-center p-jc-center">
                              <TiArrowSortedDown className="p-mr-2 p-ml-2 p-d-flex p-as-center p-jc-center report-icon-arrow" />
                              {index + 1}) Caixa de Seleção : {item.title}
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="p-p-2 background-researches-smile">
                        <ChartPieSelectBox />
                      </div>
                    </div>
                  );
                }
                if (item.type === "multipleChoice") {
                  return (
                    <div className="p-mx-5 p-mb-4 p-mb-2">
                      <div className="p-p-2 report-open-answers">
                        <div className="p-d-flex p-jc-between p-as-center p-jc-center">
                          <div>
                            <h5 className="p-my-1 p-d-flex p-as-center p-jc-center">
                              <TiArrowSortedDown className="p-mr-2 p-ml-2 p-d-flex p-as-center p-jc-center report-icon-arrow" />
                              {index + 1}) Múltipla Escolha : {item.title}
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="p-p-2 background-researches-smile">
                        <ChartPieMultipleChoice />
                      </div>
                    </div>
                  );
                }
                if (item.type === "avaliationStars") {
                  return (
                    <div className="p-mx-5 p-mb-4 p-mb-2">
                      <div className="p-p-2 report-open-answers">
                        <div className="p-d-flex p-jc-between p-as-center p-jc-center">
                          <div>
                            <h5 className="p-my-1 p-d-flex p-as-center p-jc-center">
                              <TiArrowSortedDown className="p-mr-2 p-ml-2 p-d-flex p-as-center p-jc-center report-icon-arrow" />
                              {index + 1}) Estrelas: {item.title}
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="p-p-2 background-researches-smile">
                        <ChartPieStars />
                      </div>
                    </div>
                  );
                }
                if (item.type === "avaliationNumber") {
                  return (
                    <div className="p-mx-5 p-mb-4 p-mb-2">
                      <div className="p-p-2 report-open-answers">
                        <div className="p-d-flex p-jc-between p-as-center p-jc-center">
                          <div>
                            <h5 className="p-my-1 p-d-flex p-as-center p-jc-center">
                              <TiArrowSortedDown className="p-mr-2 p-ml-2 p-d-flex p-as-center p-jc-center report-icon-arrow" />
                              {index + 1}) Número : {item.title}
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="p-p-2 background-researches-smile">
                        <ChartPieNumber />
                      </div>
                    </div>
                  );
                }
                if (item.type === "avaliationSmiles") {
                  return (
                    <div className="p-mx-5 p-mb-4 p-mb-2">
                      <div className="p-p-2 report-open-answers">
                        <div className="p-d-flex p-jc-between p-as-center p-jc-center">
                          <div>
                            <h5 className="p-my-1 p-d-flex p-as-center p-jc-center">
                              <TiArrowSortedDown className="p-mr-2 p-ml-2 p-d-flex p-as-center p-jc-center report-icon-arrow" />
                              {index + 1}) Smiles : {item.title}
                            </h5>
                          </div>
                        </div>
                      </div>
                      <ChartPieSmiles />
                    </div>
                  );
                }
                return null;
              })}
            </div>
            <div className="p-mx-5 p-my-5 p-mb-2">
              <div className="p-p-2 report-open-answers">
                <div className="p-d-flex p-jc-between p-as-center p-jc-center">
                  <div>
                    <h5 className="p-my-1 p-d-flex p-as-center p-jc-center">
                      <TiArrowSortedDown className="p-mr-2 p-ml-2 p-d-flex p-as-center p-jc-center report-icon-arrow" />
                      Formulário Geral
                    </h5>
                  </div>
                </div>
              </div>

              <div className="p-p-2 p-text-center background-researches-grap">
                <h5 className="p-py-3">Quantidade de Respostas por Dia</h5>
                <ChartBar />
              </div>

              <div className="p-p-2 background-researches-grap2 p-text-center">
                <h5 className="p-py-5">
                  Quantidade de Respostas por Cidade Brasileira
                </h5>
                <MapChart
                  reportType={reportType}
                  formAnswersList={formAnswersList}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ViewReport;
