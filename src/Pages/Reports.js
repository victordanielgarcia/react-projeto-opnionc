import React, { useContext, useEffect, useState } from "react";
import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import { addLocale } from "primereact/api";
import { Dropdown } from "primereact/dropdown";
import moment from "moment";
import "moment/locale/pt-br";

import { AuthContext } from "../Configs/ContextProvider";

import "../Styles/Report.css";
import BarChart from "../Components/Reports/barChart";
import LineChart from "../Components/Reports/lineChart";

function Reports() {
  const { setCurrentPage } = useContext(AuthContext);

  const [startDate, setStartDate] = useState(
    new Date(moment().subtract(7, "d").format()),
  );
  const [endDate, setEndDate] = useState(new Date(moment().format()));

  const [searchStartDate, setSearchStartDate] = useState(
    new Date(moment().subtract(7, "d").format()),
  );
  const [searchEndDate, setSearchEndDate] = useState(
    new Date(moment().format()),
  );

  const [votesTotal, setVotesTotal] = useState(0);
  const [searchActive, setSearchActive] = useState(false);

  const [reportType, setReportType] = useState({ name: "", code: "" });
  const reportOptions = [
    { name: "Todos", code: "all" },
    { name: "Teste 1", code: "teste1" },
    { name: "Teste 2", code: "teste2" },
  ];

  function searchReport() {
    setSearchStartDate(startDate);
    setSearchEndDate(endDate);
    if (reportType.code !== "") {
      setSearchActive(true);
    }
  }

  addLocale("pt", {
    closeText: "Fechar",
    prevText: "Anterior",
    nextText: "Próximo",
    currentText: "Começo",
    monthNames: [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ],
    monthNamesShort: [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez",
    ],
    dayNames: [
      "Domingo",
      "Segunda",
      "Terça",
      "Quarta",
      "Quinta",
      "Sexta",
      "Sábado",
    ],
    dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
    dayNamesMin: ["D", "S", "T", "Q", "Q", "S", "S"],
    weekHeader: "Semana",
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: "",
    timeOnlyTitle: "Só Horas",
    timeText: "Tempo",
    hourText: "Hora",
    minuteText: "Minuto",
    secondText: "Segundo",
    ampm: false,
    month: "Mês",
    week: "Semana",
    day: "Dia",
    allDayText: "Todo Dia",
    today: "Hoje",
    clear: "Limpar",
  });

  useEffect(() => {
    setCurrentPage("Relatórios");
  }, [setCurrentPage]);

  return (
    <div className="p-p-3 ">
      <div className="p-p-3 p-ai-center p-jc-center default-container">
        <div className="p-d-flex p-grid p-mb-3 calendar-select">
          <div className="p-field p-col-12 p-md-2 p-as-center p-m-0 p-justify-center p-d-flex">
            <label className="p-as-center p-text-center p-mb-0">
              Período Inicial&emsp;
            </label>
          </div>
          <div className="p-field p-col-12 p-md-3 p-as-center p-m-0 p-justify-center p-d-flex">
            <Calendar
              className="calendar-button"
              showIcon
              locale="pt"
              dateFormat="dd/mm/yy"
              value={startDate}
              onChange={(e) => setStartDate(new Date(e.target.value))}
            />
          </div>
          <div className="p-field p-col-12 p-md-2 p-as-center p-m-0 p-justify-center p-d-flex">
            <label className="p-as-center p-text-center p-mb-0">
              Período Final&emsp;
            </label>
          </div>
          <div className="p-field p-col-12 p-md-3 p-as-center p-m-0 p-justify-center p-d-flex">
            <Calendar
              className="calendar-button"
              locale="pt"
              showIcon
              dateFormat="dd/mm/yy"
              value={endDate}
              onChange={(e) => setEndDate(new Date(e.target.value))}
            />
          </div>
          <div className="p-field p-col-12 p-md-2 p-as-center p-m-0 p-justify-center p-d-flex">
            <Button className="login-button" onClick={() => searchReport()}>
              Consultar
            </Button>
          </div>
        </div>

        <div className="p-d-flex p-jc-center">
          <Dropdown
            optionLabel="name"
            value={reportType}
            options={reportOptions}
            className="p-col-6 p-justify-center p-p-0 p-m-0"
            onChange={(e) => setReportType(e.value)}
            placeholder="Selecione um Tipo"
          />
        </div>
        {reportType.code !== "" && searchActive && (
          <div className="p-grid">
            <div className="graphics-reports p-col-12 p-md-12">
              <p className="p-p-0 p-m-0">
                <b>Quantidade de Votos por Avaliação</b>
                <br />
                {votesTotal}
                <small>
                  <br />
                  {`No Período: ${moment(searchStartDate).format(
                    "DD/MM/YYYY",
                  )} até ${moment(searchEndDate).format("DD/MM/YYYY")}`}
                </small>
              </p>
              <BarChart votesTotal={votesTotal} />
            </div>
            <div className="graphics-reports p-col-12 p-md-12">
              <p className="p-p-0 p-m-0">
                <b>Votos por Dia</b>
                <br />
                {votesTotal}
                <small>
                  <br />
                  {`No Período: ${moment(searchStartDate).format(
                    "DD/MM/YYYY",
                  )} até ${moment(searchEndDate).format("DD/MM/YYYY")}`}
                </small>
              </p>
              <LineChart
                searchStartDate={searchStartDate}
                searchEndDate={searchEndDate}
                setVotesTotal={setVotesTotal}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Reports;
