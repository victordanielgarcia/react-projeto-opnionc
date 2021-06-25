import React from "react";

import { Link } from "react-router-dom";

import { Button } from "primereact/button";

function Error404() {
  return (
    <div className="p-text-center erro404-display-login">
      <p className="p-my-0 erro404-title">404</p>
      <p className="p-my-0 erro404-divisor" />
      <p className="p-my-0 erro404-subTitle">O Formulário </p>
      <p className="p-mt-0 erro404-underSubTitle">Não Foi Encontrado</p>
      <Link className="erro404-link" to="/">
        <Button
          label="Voltar"
          icon="pi pi-arrow-left"
          className="erro404-btn"
        />
      </Link>
    </div>
  );
}

export default Error404;
