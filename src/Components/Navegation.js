import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../Configs/ContextProvider";

import { Avatar } from "primereact/avatar";

import { GoGraph } from "react-icons/go";
import { FaCog, FaFileAlt } from "react-icons/fa";
import { FiHelpCircle } from "react-icons/fi";
import { AiOutlineFileSearch } from "react-icons/ai";

import "../Styles/Navegation.css";

function Navegation() {
  const { currentUser, currentPage, userData } = useContext(AuthContext);
  return (
    <>
      {currentUser && (
        <div className="p-d-flex p-jc-center navegation-background">
          <div className="p-flex-column p-ai-center p-d-flex">
            <div className="p-mt-4">
              <Avatar label={userData.name[0]} className="navegation-avatar" />
            </div>
            <div className="p-mt-4">
              <span className="navegation-username">{userData.name}</span>
            </div>
            <Link
              to="/dashboard"
              className={
                currentPage === "Dashboard"
                  ? "p-mt-4 p-ai-center p-d-flex navegation-background-item-selected"
                  : "p-mt-4 p-ai-center p-d-flex navegation-background-item"
              }
            >
              <span
                className={
                  currentPage === "Dashboard" ? "navegation-item-line" : ""
                }
              />
              <GoGraph className="p-ml-3 navegation-icon-item" />
              <span className="p-ml-3 navegation-icon-text">Dashboard</span>
            </Link>

            <Link
              to="/pesquisas"
              className={
                currentPage === "Pesquisas"
                  ? "p-mt-1 p-ai-center p-d-flex navegation-background-item-selected"
                  : "p-mt-1 p-ai-center p-d-flex navegation-background-item"
              }
            >
              <span
                className={
                  currentPage === "Pesquisas" ? "navegation-item-line" : ""
                }
              />
              <AiOutlineFileSearch className="p-ml-3 navegation-icon-item" />
              <span className="p-ml-3 navegation-icon-text">Pesquisas</span>
            </Link>

            <Link
              to="/relatorios"
              className={
                currentPage === "Relatórios"
                  ? "p-mt-1 p-ai-center p-d-flex navegation-background-item-selected"
                  : "p-mt-1 p-ai-center p-d-flex navegation-background-item"
              }
            >
              <span
                className={
                  currentPage === "Relatórios" ? "navegation-item-line" : ""
                }
              />
              <FaFileAlt className="p-ml-3 navegation-icon-item" />
              <span className="p-ml-3 navegation-icon-text">Relatórios</span>
            </Link>

            <Link
              to="/configurações"
              className={
                currentPage === "Configurações"
                  ? "p-mt-1 p-ai-center p-d-flex navegation-background-item-selected"
                  : "p-mt-1 p-ai-center p-d-flex navegation-background-item"
              }
            >
              <span
                className={
                  currentPage === "Configurações" ? "navegation-item-line" : ""
                }
              />
              <FaCog className="p-ml-3 navegation-icon-item" />
              <span className="p-ml-3 navegation-icon-text">Configurações</span>
            </Link>

            <Link
              to="/ajuda"
              className={
                currentPage === "Ajuda"
                  ? "p-mt-1 p-ai-center p-d-flex navegation-background-item-selected"
                  : "p-mt-1 p-ai-center p-d-flex navegation-background-item"
              }
            >
              <span
                className={
                  currentPage === "Ajuda" ? "navegation-item-line" : ""
                }
              />
              <FiHelpCircle className="p-ml-3 navegation-icon-item" />
              <span className="p-ml-3 navegation-icon-text">Ajuda</span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default Navegation;
