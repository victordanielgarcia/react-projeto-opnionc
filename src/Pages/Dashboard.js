import React, { useContext, useEffect } from "react";

import { AuthContext } from "../Configs/ContextProvider";

import "../Styles/Dashboard.css";

function Dashboard() {
  const { setCurrentPage } = useContext(AuthContext);

  useEffect(() => {
    setCurrentPage("Dashboard");
  }, [setCurrentPage]);

  return (
    <div className="p-p-3 ">
      <div className="p-p-3 p-d-flex p-ai-center p-jc-center default-container">
        <span>NÃO HÁ VAGAS</span>
      </div>
    </div>
  );
}

export default Dashboard;
