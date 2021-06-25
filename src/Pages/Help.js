import React, { useContext, useEffect, useState } from "react";

import moment from "moment";
import "moment/locale/pt-br";

import { AiOutlineQuestionCircle } from "react-icons/ai";

import { AuthContext } from "../Configs/ContextProvider";

import "../Styles/Help.css";
import { ConfirmDialog } from "primereact/confirmdialog";

function Help() {
  const { setCurrentPage } = useContext(AuthContext);

  const [visible, setVisible] = useState(false);

  const [url, setUrl] = useState("");

  useEffect(() => {
    setCurrentPage("Ajuda");
    // eslint-disable-next-line
  }, []);

  return (
    <div className="p-p-3 ">
      <ConfirmDialog
        visible={visible}
        onHide={() => setVisible(false)}
        message="Você será redirecionado para outro domínio."
        header="Confirmação"
        rejectLabel="Voltar"
        rejectClassName="default-dialog-reject"
        acceptLabel="Continuar"
        acceptClassName="default-dialog-confirm"
        accept={() => {
          window.open(url, "_blank");
        }}
        icon="pi pi-exclamation-triangle"
      />

      <div className="p-p-3 p-text-justify default-container">
        <div className="p-d-flex p-mt-0 p-mb-2">
          <div className="p-d-flex p-my-0 p-mr-2 help-icon-background">
            <AiOutlineQuestionCircle className="p-my-auto p-mx-auto help-icon " />
          </div>
          <span className="p-my-auto help-title">Ajuda</span>
        </div>
        <div className="p-my-0 help-content">
          <div className="p-my-0 help-content-header">
            <p className="p-my-auto">Bem vindo a sua central de Ajuda!</p>
          </div>
          <div className="help-content-body">
            <p className="p-mb-auto">
              Estamos aqui para lhe ajudar, vamos a um passo a passo para
              entender melhor o seu problema:
            </p>
            <div className="p-mb-3">
              <p className="p-mb-2 p-pl-1">Passo 1:</p>
              <p className="p-my-auto p-pl-1">
                O seu problema é relacionado a algum dado ou interface do
                sistema? Se sim tente apertar as teclas ao mesmo tempo CTRL +
                SHIFT + R, se estiver no computador. Verifique se o seu erro foi
                solucionado. Caso não tenha solucionado, vá para o passo 2. Caso
                não seja dado ou interface do sistema, vá direto ao passo 3.
              </p>
            </div>
            <div className="p-mb-3">
              <p className="p-mb-2 p-pl-1">Passo 2:</p>
              <p className="p-my-auto p-pl-1">
                Verifique se a sua conexão com a internet está normal, abra uma
                outra página como por exemplo o Youtube. Por esse
                <span
                  aria-hidden="true"
                  className="link"
                  onClick={() =>
                    setUrl("https://www.youtube.com/watch?v=xcJtL7QggTI") ||
                    setVisible(true)
                  }
                >
                  &nbsp;Link&nbsp;
                </span>
                e verifique se está carregado normalmente, depois realize um
                teste de velocidade, pode ser um teste de sua preferência, mas a
                nossa dica está nesse
                <span
                  aria-hidden="true"
                  className="link"
                  onClick={() =>
                    setUrl("https://fast.com/pt/") || setVisible(true)
                  }
                >
                  &nbsp;Link&nbsp;
                </span>
                . Se caso estiver tudo bem com sua internet reinicie o seu
                navegador, seu computador ou mesmo seu roteador. Se caso nenhum
                desses resolveu, iremos para o próximo passo.
              </p>
            </div>
            <div className="p-mb-4">
              <p className="p-mb-2 p-pl-1">Passo 3:</p>
              <p className="p-my-auto p-pl-1">
                Você será redirecionado para outra página, onde então irá
                selecionar o setor que precisa de ajuda, e inserir um comentário
                sobre o problema, não economize nas palavras, quanto mais
                sabermos melhor. E dessa forma, entrará em contato conosco.
              </p>
            </div>
          </div>
        </div>
        <div className="p-d-flex p-as-center p-jc-center help-navigation">
          <button
            type="button"
            aria-hidden="true"
            className=" p-as-center p-jc-center help-button"
            onClick={() => setUrl("https://tawk.to") || setVisible(true)}
          >
            {moment().isBetween(moment().hour(9), moment().hour(17))
              ? "SUPORTE VIA CHAT"
              : "SUPORTE VIA MENSAGEM"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Help;
