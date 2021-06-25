import React, { useContext, useState } from "react";

import firebaseConfig from "../Configs/FirebaseConnection";
import { AuthContext } from "../Configs/ContextProvider";

import { CgChevronDoubleLeft } from "react-icons/cg";
import { IoMdExit } from "react-icons/io";
import { BsFillBellFill } from "react-icons/bs";
import { FaUserCircle, FaRegTimesCircle } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

import "../Styles/Header.css";

function Header() {
  const { currentPage, navegationStatus, setNavegationStatus } =
    useContext(AuthContext);
  const { currentUser } = useContext(AuthContext);

  const [alertPopout, setAlertPopout] = useState(false);

  return (
    <>
      {currentUser &&
      (currentPage === "Dashboard") |
        (currentPage === "Configurações") |
        (currentPage === "Pesquisas") |
        (currentPage === "Relatórios") |
        (currentPage === "Planos") |
        (currentPage === "Ajuda") |
        (currentPage === "Créditos") ? (
        <div className="p-d-flex p-ai-center p-jc-between header-background">
          <span
            className="p-d-flex p-ai-center "
            onClick={() => setNavegationStatus(!navegationStatus)}
          >
            <CgChevronDoubleLeft
              className="p-ml-2 header-button-closed"
              onClick={() => setNavegationStatus(!navegationStatus)}
            />
            <span className="p-ml-2 header-text-page">{currentPage}</span>
          </span>
          <span className="p-d-flex p-ai-center ">
            <BsFillBellFill
              className="p-mr-3 header-button-bell"
              onClick={() => setAlertPopout(!alertPopout)}
            />
            <FaUserCircle className="p-mr-3 header-button-user" />
            <IoMdExit
              onClick={() => firebaseConfig.auth().signOut()}
              className="p-mr-3 header-button-exit"
            />
          </span>
        </div>
      ) : (
        <></>
      )}
      {alertPopout === true && (
        <div className="background-popout">
          <div className="background-popout-header">
            <div className="popout-titulo">
              <div className="popout-text">NOTIFICAÇÕES</div>
            </div>
            <div className="background-popout-icon">
              <AiOutlineClose
                className="icon-closed"
                onClick={() => setAlertPopout(false)}
              />
            </div>
          </div>
          <div className="background-holder">
            <div className="p-d-flex p-grid p-dir-col p-m-0">
              <div className="p-col" style={{ color: "white" }}>
                <h1 className="p-text-center p-mb-0">
                  <FaRegTimesCircle />
                </h1>
                <h3 className="p-text-center p-mt-0">Sem Notificações</h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
