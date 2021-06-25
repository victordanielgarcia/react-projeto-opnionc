import React from "react";

import { Link } from "react-router-dom";

function Navegation(props) {
  const { scrollToSection } = props;

  return (
    <div className="p-d-flex p-ai-center p-jc-between single-header-background">
      <span className="p-ml-5 single-opinionc">OPINIONC</span>
      <div className="p-d-flex p-jc-center">
        <div className="p-mx-4 p-mt-2 p-d-flex p-jc-center">
          <h6
            className="p-mx-2 p-d-flex p-as-center cursor "
            onClick={() => scrollToSection("plans23")}
          >
            PLANOS
          </h6>

          <h6
            className="p-mx-3 p-d-flex p-as-center cursor "
            onClick={() => scrollToSection("gallery23")}
          >
            GALERIA
          </h6>
          <h6
            className="p-mx-3 p-d-flex p-as-center cursor "
            onClick={() => scrollToSection("about23")}
          >
            SOBRE
          </h6>

          <h6
            className="p-mx-3 p-d-flex p-as-center cursor "
            onClick={() => scrollToSection("contact23")}
          >
            CONTATO
          </h6>
        </div>

        <div className="p-mr-5 p-d-flex p-ai-center p-jc-center single-acess-background">
          <span>
            <Link itemprop="url" to="/entrar" className="single-header-link">
              Acesso do Cliente
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navegation;
