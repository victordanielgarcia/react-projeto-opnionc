import React, { useContext } from "react";
import { Link, Redirect } from "react-router-dom";

import { AuthContext } from "../Configs/ContextProvider";

import "../Styles/SinglePage.css";

function SinglePage() {
  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <>
      <div className="p-d-flex p-ai-center p-jc-between single-header-background">
        <span className="p-ml-5 single-opinionc">OPINIONC</span>
        <div className="p-mr-5 p-d-flex p-ai-center p-jc-center single-acess-background">
          <span>
            <Link to="/entrar" className="single-header-link">
              Acesso do Cliente
            </Link>
          </span>
        </div>
      </div>
      <div>
        <div className="single-image" />
      </div>
    </>
  );
}

export default SinglePage;
