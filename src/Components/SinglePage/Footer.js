import React from "react";

function SinglePage(props) {
  const { scrollToSection } = props;

  return (
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h3>Sobre</h3>
            <p class="text-justify">
              Crie seus próprios formulários de pesquisa, personalizando o
              formulário e os tipos das perguntas como quiser, visualize em
              tempo real as médias das respostas recebidas por formulário.
            </p>
          </div>

          <div class="col-xs-6 col-md-3"></div>

          <div class="col-xs-6 col-md-3">
            <h3>Navegação</h3>
            <ul class="footer-links ">
              <li>
                <span
                  className="cursor"
                  onClick={() => scrollToSection("about23")}
                >
                  Sobre
                </span>
              </li>
              <li>
                <span
                  className="cursor"
                  onClick={() => scrollToSection("contact23")}
                >
                  Contato
                </span>
              </li>
              <li>
                <span
                  className="cursor"
                  onClick={() => scrollToSection("gallery23")}
                >
                  Galeria
                </span>
              </li>
              <li>
                <span
                  className="cursor"
                  onClick={() => scrollToSection("plans23")}
                >
                  Planos
                </span>
              </li>
              <li>
                <a
                  className="cursor"
                  href="http://localhost:3000/politicas_de_privacidade"
                >
                  Políticas de privacidade
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr />
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">
              Copyright © 2021 - Todos os direitos Reservados
            </p>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12"></div>
        </div>
      </div>
    </footer>
  );
}

export default SinglePage;
