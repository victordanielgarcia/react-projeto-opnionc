import React from "react";

import Mockup from "../../Assets/Mockup.png";

function Header() {
  return (
    <div className="p-d-flex p-as-center p-jc-center single-page-background-banner">
      <div className="p-d-flex p-as-center p-jc-center banner-background">
        <h3 className="p-d-flex p-as-center p-jc-center">
          Crie Formulários Online, <br /> Compartilhe por e-mail e <br /> Colete
          dados em tempo real.
        </h3>
      </div>
      <div className="p-d-flex p-as-center p-jc-center banner-background">
        <div className="p-d-flex p-as-center p-jc-center ">
          <img className="single-page-mockup" src={Mockup} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Header;
