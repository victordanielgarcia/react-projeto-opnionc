import React from "react";

import { Link } from "react-router-dom";

import { Button } from "primereact/button";

import { FaRegThumbsUp } from "react-icons/fa";

function Answered() {
  return (
    <div className="p-text-center erro404-display-login">
      <p className="p-my-4 erro404-subTitle">
        Você já respondeu esse Formulário!
      </p>
      <p className="erro404-underSubTitle">
        <FaRegThumbsUp className="error-alert-icon" />
      </p>
      <Link className="erro404-link" to="/">
        <Button label="Sair" icon="pi pi-arrow-left" className="erro404-btn" />
      </Link>
    </div>
  );
}

export default Answered;
