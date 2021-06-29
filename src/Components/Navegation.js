import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../Configs/ContextProvider";

import { Avatar } from "primereact/avatar";

import { GoGraph } from "react-icons/go";
import { FaCog, FaFileAlt } from "react-icons/fa";
import { FiHelpCircle } from "react-icons/fi";
import { AiOutlineFileSearch } from "react-icons/ai";
import { MdMonetizationOn } from "react-icons/md";
import { FaGrinHearts } from "react-icons/fa";

import "../Styles/Navegation.css";

function Navegation() {
  const { currentUser, currentPage, userData, navegationStatus } =
    useContext(AuthContext);
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
        <div
          className={
            navegationStatus
              ? "p-d-flex p-jc-center navegation-background"
              : "p-d-flex p-jc-center navegation-background-closed"
          }
        >
          <div className="p-flex-column p-ai-center p-d-flex">
            <div className="p-mt-4">
              {navegationStatus ? (
                <Avatar
                  label={userData ? userData.name[0] : ""}
                  className="navegation-avatar"
                />
              ) : (
                <Avatar
                  label={userData ? userData.name[0] : ""}
                  className="navegation-avatar-closed"
                />
              )}
            </div>
            {navegationStatus && (
              <div className="p-mt-4">
                <span className="navegation-username">
                  {userData ? userData.name : ""}
                </span>
              </div>
            )}

            {navegationStatus ? (
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
                {navegationStatus ? (
                  <span className="p-ml-3 navegation-icon-text">Dashboard</span>
                ) : (
                  <></>
                )}
              </Link>
            ) : (
              <Link
                to="/dashboard"
                className={
                  currentPage === "Dashboard"
                    ? "p-mt-4 p-ai-center p-d-flex navegation-background-item-selected-closed"
                    : "p-mt-4 p-ai-center p-d-flex navegation-background-item-closed"
                }
              >
                <span
                  className={
                    currentPage === "Dashboard" ? "navegation-item-line" : ""
                  }
                />
                <GoGraph className="p-ml-3 navegation-icon-item" />
                {navegationStatus ? (
                  <span className="p-ml-3 navegation-icon-text">Dashboard</span>
                ) : (
                  <></>
                )}
              </Link>
            )}

            {navegationStatus ? (
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
                {navegationStatus ? (
                  <span className="p-ml-3 navegation-icon-text">Pesquisas</span>
                ) : (
                  <></>
                )}
              </Link>
            ) : (
              <Link
                to="/pesquisas"
                className={
                  currentPage === "Pesquisas"
                    ? "p-mt-1 p-ai-center p-d-flex navegation-background-item-selected-closed"
                    : "p-mt-1 p-ai-center p-d-flex navegation-background-item-closed"
                }
              >
                <span
                  className={
                    currentPage === "Pesquisas" ? "navegation-item-line" : ""
                  }
                />
                <AiOutlineFileSearch className="p-ml-3 navegation-icon-item" />
                {navegationStatus ? (
                  <span className="p-ml-3 navegation-icon-text">Pesquisas</span>
                ) : (
                  <></>
                )}
              </Link>
            )}

            {navegationStatus ? (
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
                {navegationStatus ? (
                  <span className="p-ml-3 navegation-icon-text">
                    Relatórios
                  </span>
                ) : (
                  <></>
                )}
              </Link>
            ) : (
              <Link
                to="/relatorios"
                className={
                  currentPage === "Relatórios"
                    ? "p-mt-1 p-ai-center p-d-flex navegation-background-item-selected-closed"
                    : "p-mt-1 p-ai-center p-d-flex navegation-background-item-closed"
                }
              >
                <span
                  className={
                    currentPage === "Relatórios" ? "navegation-item-line" : ""
                  }
                />
                <FaFileAlt className="p-ml-3 navegation-icon-item" />
                {navegationStatus ? (
                  <span className="p-ml-3 navegation-icon-text">
                    Relatórios
                  </span>
                ) : (
                  <></>
                )}
              </Link>
            )}

            {navegationStatus ? (
              <Link
                to="/planos"
                className={
                  currentPage === "Planos"
                    ? "p-mt-1 p-ai-center p-d-flex navegation-background-item-selected"
                    : "p-mt-1 p-ai-center p-d-flex navegation-background-item"
                }
              >
                <span
                  className={
                    currentPage === "Planos" ? "navegation-item-line" : ""
                  }
                />
                <MdMonetizationOn className="p-ml-3 navegation-icon-item" />
                {navegationStatus ? (
                  <span className="p-ml-3 navegation-icon-text">Planos</span>
                ) : (
                  <></>
                )}
              </Link>
            ) : (
              <Link
                to="/planos"
                className={
                  currentPage === "Planos"
                    ? "p-mt-1 p-ai-center p-d-flex navegation-background-item-selected-closed"
                    : "p-mt-1 p-ai-center p-d-flex navegation-background-item-closed"
                }
              >
                <span
                  className={
                    currentPage === "Planos" ? "navegation-item-line" : ""
                  }
                />
                <MdMonetizationOn className="p-ml-3 navegation-icon-item" />
                {navegationStatus ? (
                  <span className="p-ml-3 navegation-icon-text">Planos</span>
                ) : (
                  <></>
                )}
              </Link>
            )}

            {navegationStatus ? (
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
                    currentPage === "Configurações"
                      ? "navegation-item-line"
                      : ""
                  }
                />
                <FaCog className="p-ml-3 navegation-icon-item" />
                {navegationStatus ? (
                  <span className="p-ml-3 navegation-icon-text">
                    Configurações
                  </span>
                ) : (
                  <></>
                )}
              </Link>
            ) : (
              <Link
                to="/configurações"
                className={
                  currentPage === "Configurações"
                    ? "p-mt-1 p-ai-center p-d-flex navegation-background-item-selected-closed"
                    : "p-mt-1 p-ai-center p-d-flex navegation-background-item-closed"
                }
              >
                <span
                  className={
                    currentPage === "Configurações"
                      ? "navegation-item-line"
                      : ""
                  }
                />
                <FaCog className="p-ml-3 navegation-icon-item" />
                {navegationStatus ? (
                  <span className="p-ml-3 navegation-icon-text">
                    Configurações
                  </span>
                ) : (
                  <></>
                )}
              </Link>
            )}
            {navegationStatus ? (
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
                {navegationStatus ? (
                  <span className="p-ml-3 navegation-icon-text">Ajuda</span>
                ) : (
                  <></>
                )}
              </Link>
            ) : (
              <Link
                to="/ajuda"
                className={
                  currentPage === "Ajuda"
                    ? "p-mt-1 p-ai-center p-d-flex navegation-background-item-selected-closed"
                    : "p-mt-1 p-ai-center p-d-flex navegation-background-item-closed"
                }
              >
                <span
                  className={
                    currentPage === "Ajuda" ? "navegation-item-line" : ""
                  }
                />
                <FiHelpCircle className="p-ml-3 navegation-icon-item" />
                {navegationStatus ? (
                  <span className="p-ml-3 navegation-icon-text">Ajuda</span>
                ) : (
                  <></>
                )}
              </Link>
            )}

            {navegationStatus ? (
              <Link
                to="/créditos"
                className={
                  currentPage === "Créditos"
                    ? "p-mt-1 p-ai-center p-d-flex navegation-background-item-selected"
                    : "p-mt-1 p-ai-center p-d-flex navegation-background-item"
                }
              >
                <span
                  className={
                    currentPage === "Créditos" ? "navegation-item-line" : ""
                  }
                />
                <FaGrinHearts className="p-ml-3 navegation-icon-item" />
                {navegationStatus ? (
                  <span className="p-ml-3 navegation-icon-text">Créditos</span>
                ) : (
                  <></>
                )}
              </Link>
            ) : (
              <Link
                to="/créditos"
                className={
                  currentPage === "Créditos"
                    ? "p-mt-1 p-ai-center p-d-flex navegation-background-item-selected-closed"
                    : "p-mt-1 p-ai-center p-d-flex navegation-background-item-closed"
                }
              >
                <span
                  className={
                    currentPage === "Créditos" ? "navegation-item-line" : ""
                  }
                />
                <FaGrinHearts className="p-ml-3 navegation-icon-item" />
                {navegationStatus ? (
                  <span className="p-ml-3 navegation-icon-text">Créditos</span>
                ) : (
                  <></>
                )}
              </Link>
            )}
            {navegationStatus && (
              <h6
                className="p-mt-5 document"
                onClick={() => {
                  window.open(
                    "https://docs.google.com/document/d/1-h1kYYJphg0zbS7Vp26BJNjl2VdbBBpejWeKg9L1NEU/edit?usp=sharing",
                  );
                }}
              >
                Documentação
              </h6>
            )}
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default Navegation;
