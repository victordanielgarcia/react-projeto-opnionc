import React, { useContext, useEffect, useState } from "react";
import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import moment from "moment";
import "moment/locale/pt-br";

import { AuthContext } from "../Configs/ContextProvider";

import "../Styles/Report.css";

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

  function searchReport() {
    setSearchStartDate(startDate);
    setSearchEndDate(endDate);
  }

  useEffect(() => {
    setCurrentPage("Relatórios");
  }, [setCurrentPage]);

  return (
    <div className="p-p-3 ">
      <div className="p-p-3 p-d-flex p-ai-center p-jc-center default-container">
        <div className="p-d-flex p-grid nav-reports p-mb-3">
          <div className="p-field p-col-12 p-md-2 p-as-center p-m-0 p-justify-center p-d-flex">
            <label className="p-as-center p-text-center p-mb-0">
              Período Inicial&emsp;
            </label>
          </div>
          <div className="p-field p-col-12 p-md-3 p-as-center p-m-0 p-justify-center p-d-flex">
            <Calendar
              className="visits-button"
              showIcon
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
              className="visits-button"
              showIcon
              dateFormat="dd/mm/yy"
              value={endDate}
              onChange={(e) => setEndDate(new Date(e.target.value))}
            />
          </div>
          <div className="p-field p-col-12 p-md-2 p-as-center p-m-0 p-justify-center p-d-flex">
            <Button className="button-primary" onClick={() => searchReport()}>
              Consultar
            </Button>
          </div>
        </div>
        <div className="graphics-reports"></div>
      </div>
    </div>
  );
}

export default Reports;
