import React, { useContext } from "react";

import { AuthContext } from "../Configs/ContextProvider";

import "../Styles/Footer.css";

function Footer() {
  const { currentUser } = useContext(AuthContext);
  return (
    <>
      {currentUser && (
        <div className="p-d-flex footer-display-menu-extended">
          <p className="p-my-0 p-mx-auto p-text-center p-as-center ">
            <span className="p-d-none p-d-md-inline-flex">
              Copyright © 2021 - Todos os direitos Reservados.
            </span>
          </p>
        </div>
      )}
    </>
  );
}

export default Footer;
