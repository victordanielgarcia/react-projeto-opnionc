import React from "react";

function Header(props) {
  const { userData } = props;
  return (
    <div className="p-grid">
      <div className="p-col-12 p-d-flex dashboard-box-welcome p-mb-3">
        <div className="p-mx-5 p-col-1 p-as-center">
          <img
            alt="Imagem OpinionC"
            className="user-image p-d-none p-d-md-inline-flex"
            src="https://png.pngtree.com/element_our/png_detail/20181227/reports-glyph-black-icon-png_291836.jpg"
          />
        </div>
        <div className="p-col-3 p-as-center">
          <p>
            OPINIONC RELÁTORIOS
            <br />
            {userData.plan === "free" ? (
              <small>Plano de uso: Gratuito</small>
            ) : (
              <small>Plano de uso: Profissional</small>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
