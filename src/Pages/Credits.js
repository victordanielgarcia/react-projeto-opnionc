import React, { useContext, useEffect } from "react";
import { AuthContext } from "../Configs/ContextProvider";

import { Container, Row } from "react-bootstrap";

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
            ESSE É UM TRABALHO DE TCC DESENVOLVIDO POR:
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
                src="https://www.w3schools.com/w3css/img_avatar3.png"
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
                src="https://www.w3schools.com/w3css/img_avatar3.png"
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
