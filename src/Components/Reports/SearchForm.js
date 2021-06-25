import React from "react";

import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";

function SearchForm(props) {
  const {
    endDate,
    setEndDate,
    handleEditDropdown,
    reportOptions,
    reportType,
    startDate,
    setStartDate,
    searchReport,
  } = props;

  return (
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
          dateFormat="dd/mm/yy"
          value={startDate}
          onChange={(e) => setStartDate(new Date(e.target.value))}
          touchUI
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
          showIcon
          dateFormat="dd/mm/yy"
          value={endDate}
          onChange={(e) => setEndDate(new Date(e.target.value))}
          touchUI
        />
      </div>
      <div className="p-field p-col-12 p-md-2 p-as-center p-m-0 p-justify-center p-d-flex">
        <Button className="login-button" onClick={() => searchReport()}>
          Consultar
        </Button>
      </div>
      <div className="p-my-5 p-d-flex p-jc-center p-as-center width100">
        <Dropdown
          filter
          filterby="name"
          optionLabel="name"
          value={reportType}
          options={reportOptions}
          className="p-col-6 p-justify-center p-p-0 p-m-0 report-select"
          onChange={(e) => handleEditDropdown(e.value.code, e.value)}
          placeholder="Selecione um Formulário"
        />
      </div>
    </div>
  );
}

export default SearchForm;
