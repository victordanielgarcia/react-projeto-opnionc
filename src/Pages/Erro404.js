import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import { Button } from "primereact/button";

import { AuthContext } from "../Configs/ContextProvider";

import "../Styles/Erro404.css";
import Header from "../Components/Error404/Header";
import Footer from "../Components/Error404/Footer";

function Erro404() {
  const { setCurrentPage } = useContext(AuthContext);

  useEffect(() => {
    setCurrentPage("Disabled");

    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="formanswers-background">
        <Header />
        <div className="p-my-4 p-d-flex p-ai-center p-jc-center formanswers-container">
          <div className="p-d-flex p-flex-column formanswers-container-white">
            <div className="p-text-center erro404-display-login">
              <p className="p-my-0 erro404-title">404</p>
              <p className="p-my-0 erro404-divisor" />
              <p className="p-my-0 erro404-subTitle">A Página </p>
              <p className="p-mt-0 erro404-underSubTitle">Não Foi Encontrada</p>
              <Link className="erro404-link" to="/">
                <Button
                  label="Voltar"
                  icon="pi pi-arrow-left"
                  className="erro404-btn"
                />
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Erro404;
