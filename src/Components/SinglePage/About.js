import React from "react";

import AboutImage from "../../Assets/about.png";

function About() {
  return (
    <div className="gallery-background about23">
      <div className="p-mt-5 p-d-flex p-jc-center">
        <h2>Sobre</h2>
      </div>
      <div className="p-d-flex p-jc-center">
        <div className="p-mt-3 gallery-line"></div>
      </div>
      <div className="p-my-2 p-d-flex" style={{ width: "100%" }}>
        <div
          className="p-m-5 p-d-flex p-as-center p-jc-center"
          style={{ width: "25%" }}
        >
          <img src={AboutImage} alt="imagem de ajuda" />
        </div>
        <div className="p-d-flex p-as-center" style={{ width: "75%" }}>
          <div className="p-mr-5 p-d-flex p-as-center">
            <h5 className="p-m-5 p-d-flex p-as-center">
              Crie seus próprios formulários de pesquisa, personalizando o
              formulário e os tipos das perguntas como quiser, visualize em
              tempo real as médias das respostas recebidas por formulário.
              <br />
              <br />
              Tudo de maneira gratuita até um limite, tendo a opção de fazer um
              upgrade para um plano sem limites. <br />
              <br />
              Com suporte especializado no Sistema em tempo real e intuitividade
              aplicada, facilitando os processos de criação.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
