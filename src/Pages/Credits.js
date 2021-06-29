import React, { useContext, useEffect } from "react";
import { AuthContext } from "../Configs/ContextProvider";

import { Container, Row } from "react-bootstrap";
import caio from "../Assets/caio.png";

function Credits() {
  const { setCurrentPage } = useContext(AuthContext);

  useEffect(() => {
    setCurrentPage("Créditos");
    // eslint-disable-next-line
  }, []);

  return (
    <div className="p-p-3 ">
      <div className="p-p-3 default-container">
        <Container fluid className="text-center">
          <h3 className="p-my-5 p-p-3 header-credits">
            ESSE SISTEMA FOI DESENVOLVIDO POR:
          </h3>
          <Row>
            <div
              className="mx-auto text-center devImg"
              style={{ width: "30%", height: "30%" }}
            >
              <img
                className="mx-auto imgcredits"
                style={{ width: "50%", height: "50%" }}
                alt="img Dev"
                src="https://scontent.fbau1-1.fna.fbcdn.net/v/t31.18172-8/24879817_173899076684820_3071127952040618484_o.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=yIAzQvLJL_cAX8jwYDw&tn=h47We5hzB9yqc94h&_nc_ht=scontent.fbau1-1.fna&oh=08ebbf9755254b6761954c360fcd425e&oe=60DA4E10"
              />
              <h3 className="p-my-2 mx-auto">Victor Daniel</h3>
            </div>
            <div
              className="mx-auto text-center devImg"
              style={{ width: "30%", height: "30%" }}
            >
              <img
                className="mx-auto imgcredits"
                style={{ width: "50%", height: "50%" }}
                alt="img Dev"
                src={caio}
              />
              <h3 className="p-my-2 mx-auto">Caio Fernandes</h3>
            </div>
            <h3 className="p-my-5 p-mx-2 p-p-3 header-credits">
              COM A ORIENTAÇÃO DE:
            </h3>

            <div
              className="mx-auto devImg"
              style={{ width: "30%", height: "30%" }}
            >
              <img
                className="mx-auto text-center imgcredits"
                width="50%"
                height="50%"
                alt="img Dev"
                src="data:image/png;base64,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"
              />
              <h3 className="p-my-2 mx-auto">Vania Teixeira</h3>
              <p className="mx-auto">Professora</p>
            </div>
            <h3 className="p-my-5 p-mx-2 p-p-3 header-credits">
              AGRADECIMENTO ESPECIAL A:
            </h3>

            <div
              className="mx-auto devImg"
              style={{ width: "30%", height: "30%" }}
            >
              <img
                className="mx-auto text-center imgcredits"
                width="50%"
                height="50%"
                alt="img Dev"
                src="https://scontent.fbau1-1.fna.fbcdn.net/v/t1.6435-9/72318719_2391440024287402_4341732321553022976_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=e3f864&_nc_ohc=4oNau5PbDj4AX_WCY8u&_nc_ht=scontent.fbau1-1.fna&oh=57750541abce8fe7bc7f30e1461298eb&oe=60DB6427"
              />
              <h3 className="p-my-2 mx-auto">Wdson Oliver</h3>
              <p className="mx-auto">Animal</p>
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Credits;
