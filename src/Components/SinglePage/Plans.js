import React from "react";

function Plans() {
  return (
    <div className="gallery-background plans23">
      <div className="p-mt-5 p-d-flex p-jc-center">
        <h2>Planos de uso</h2>
      </div>

      <div className="p-d-flex p-jc-center">
        <div className="p-mt-3 gallery-line"></div>
      </div>

      <div>
        <div class="container">
          <div class="tab-content wow fadeIn">
            <div role="tabpanel" class="tab-pane fade show active" id="yearly">
              <div class="row justify-content-center">
                <div class="p-my-5 p-mx-5 col-md-6 col-lg-4 mb-30">
                  <div class="price-item text-center">
                    <div class="price-top">
                      <h3>Gratuito</h3>
                      <h2 class="mb-0">
                        <sup>R$</sup>0
                      </h2>
                      <span class="text-capitalize">por mês</span>
                    </div>
                    <div class="price-content">
                      <ul class="border-bottom mb-30 mt-md-4 pb-3 text-left">
                        <li>
                          <i class="zmdi zmdi-check mr-2"></i>
                          <span class="c-black">Limite de 3 Formulários</span>
                        </li>
                        <li>
                          <i class="zmdi zmdi-check mr-2"></i>
                          <span class="c-black">
                            Limite diário de 1000 respostas
                          </span>
                        </li>
                        <li>
                          <i class="zmdi zmdi-check mr-2"></i>
                          <span class="c-black">
                            Suporte sómente em horário comercial
                          </span>
                        </li>
                      </ul>
                      <div class="btn btn-custom">Crie uma conta agora!</div>
                    </div>
                  </div>
                </div>

                <div class="p-my-5 p-mx-5 col-md-6 col-lg-4 mb-30">
                  <div class="price-item text-center">
                    <div class="price-top">
                      <h3>Profissional</h3>
                      <h2 class="mb-0">
                        <sup>R$</sup>49
                      </h2>
                      <span class="text-capitalize">por mês</span>
                    </div>
                    <div class="price-content">
                      <ul class="border-bottom mb-30 mt-md-4 pb-3 text-left">
                        <li>
                          <i class="zmdi zmdi-check mr-2"></i>
                          <span class="c-black">
                            Criação de Formulários ilimitados
                          </span>
                        </li>
                        <li>
                          <i class="zmdi zmdi-check mr-2"></i>
                          <span class="c-black">
                            Limite de Respostas: Ilimitado
                          </span>
                        </li>
                        <li>
                          <i class="zmdi zmdi-check mr-2"></i>
                          <span class="c-black">Suporte 24/7</span>
                        </li>
                      </ul>
                      <div href="#" class="btn btn-custom">
                        Faça upgrade agora!
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Plans;
