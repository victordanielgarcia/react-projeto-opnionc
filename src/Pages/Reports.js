import React, { useContext, useEffect, useMemo, useState } from "react";

import { toast } from "react-toastify";

import moment from "moment";
import "moment/locale/pt-br";

import { AuthContext } from "../Configs/ContextProvider";
import { getAllResearches } from "../Controllers/ControllerResearches";

import Header from "../Components/Reports/Header";
import SearchForm from "../Components/Reports/SearchForm";

import "../Styles/Report.css";
import ViewReport from "../Components/Reports/ViewReport";
import ViewAnswersModal from "../Components/Reports/ViewAnswersModal";

function Reports() {
  const { setCurrentPage, researchesList, setResearchesList, userData } =
    useContext(AuthContext);

  const [startDate, setStartDate] = useState(
    new Date(moment().subtract(7, "d").format()),
  );
  // eslint-disable-next-line
  const [searchStartDate, setSearchStartDate] = useState(
    new Date(moment().subtract(7, "d").format()),
  );
  // eslint-disable-next-line
  const [searchEndDate, setSearchEndDate] = useState(
    new Date(moment().format()),
  );

  const [searchActive, setSearchActive] = useState(false);

  const [endDate, setEndDate] = useState(new Date(moment().format()));
  const [createdForm, setCreatedForm] = useState([]);

  const [reportOptions, setReportOption] = useState([{ name: "", code: "" }]);

  const [reportType, setReportType] = useState({
    name: "",
    code: "",
  });

  const [showViewAnswersModal, setShowViewAnswersModal] = useState({
    show: false,
    id: "",
    type: "",
  });

  const handleForm = useMemo(() => {
    const formList = researchesList.map((item) => {
      if (item.key_user === userData.id && item.createdForm) {
        return { name: item.title, code: item.id };
      }
      return null;
    });
    return formList.filter((userList) => userList !== null);
  }, [researchesList, userData.id]);

  async function getDataResearches() {
    const dataResponse = await getAllResearches();
    if (dataResponse) {
      setResearchesList(dataResponse);
      return dataResponse;
    }
    return false;
  }

  async function handleGetForm(value) {
    const response = await getDataResearches();
    if (response) {
      const [newData] = response.filter((item) => item.id === value);

      if (newData && newData.createdForm) {
        setCreatedForm(newData.createdForm);
      }
    }
  }

  function handleEditDropdown(code, value) {
    setReportType(value);
    handleGetForm(code);
  }

  function searchReport() {
    setSearchStartDate(startDate);
    setSearchEndDate(endDate);
    if (reportType.code === "") {
      toast.error("Voce deve selecionar um formulário antes de consultar!");
    }
    if (reportType.code !== "") {
      setSearchActive(true);
    }
  }

  useEffect(() => {
    setCurrentPage("Relatórios");
    setReportOption([...handleForm]);
    // eslint-disable-next-line
  }, [handleForm]);

  useEffect(() => {
    handleGetForm();
    //eslint-disable-next-line
  }, []);

  return (
    <div className="p-p-3">
      <ViewAnswersModal
        showViewAnswersModal={showViewAnswersModal}
        setShowViewAnswersModal={setShowViewAnswersModal}
      />
      <div className="p-p-3 default-container-dashboard ">
        <Header userData={userData} />
        <SearchForm
          endDate={endDate}
          setEndDate={setEndDate}
          handleEditDropdown={handleEditDropdown}
          reportOptions={reportOptions}
          reportType={reportType}
          startDate={startDate}
          setStartDate={setStartDate}
          searchReport={searchReport}
        />
        <ViewReport
          searchActive={searchActive}
          reportType={reportType}
          createdForm={createdForm}
          setShowViewAnswersModal={setShowViewAnswersModal}
        />
      </div>
    </div>
  );
}

export default Reports;
