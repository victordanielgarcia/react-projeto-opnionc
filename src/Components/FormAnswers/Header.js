import React from "react";
import { Link } from "react-router-dom";

import { BiReset } from "react-icons/bi";

function Header(props) {
  const {
    FormSelected,
    setFormActual,
    EMAIL,
    checkEmailPermission,
    ID,
    checkEmailResponse,
  } = props;

  return (
    <div className="p-d-flex p-ai-center p-jc-between formanswers-header">
      <span className="p-mt-3 p-ml-4">OpinionC</span>

      {FormSelected.id === ID ? (
        <>
          {EMAIL ? (
            <>
              {checkEmailPermission === 0 ? (
                <></>
              ) : (
                <>
                  {checkEmailResponse === 0 ? (
                    <div>
                      <BiReset className="p-m-2" />
                      <span className="p-mr-4">
                        <Link
                          className="formanswers-header-link"
                          onClick={() => {
                            setFormActual(1);
                          }}
                        >
                          Resetar Formulario
                        </Link>
                      </span>
                    </div>
                  ) : (
                    <></>
                  )}
                </>
              )}
            </>
          ) : (
            <div>
              <BiReset className="p-m-2" />
              <span className="p-mr-4">
                <Link
                  className="formanswers-header-link"
                  onClick={() => {
                    setFormActual(1);
                  }}
                >
                  Resetar Formulario
                </Link>
              </span>
            </div>
          )}
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Header;
