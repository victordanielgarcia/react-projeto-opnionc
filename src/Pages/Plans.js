import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Configs/ContextProvider";

import { AiFillStar } from "react-icons/ai";

import "../Styles/Plans.css";
import {
  editUser,
  searchCurrentUser,
} from "../Controllers/ControllerUser";
import { toast } from "react-toastify";

import { ProgressSpinner } from "primereact/progressspinner";

function Plans() {
  const { setCurrentPage, userData, setUserData } = useContext(AuthContext);

  const [pending, setPending] = useState(false);

  const [actualPage, setActualPage] = useState(1);

  async function handleEditUser() {
    setPending(true);
    const data = {
      plan: "Pro",
      Vencimento: "25/07/2021",
    };
    const response = await editUser(data, userData.id);
    if (response) {
      setTimeout(async () => {
        const response = await searchCurrentUser(userData.id);
        if (response) setUserData(response);
        setPending(false);
        setActualPage(1);
        toast.success(
          "Compra concluída com sucesso, Obrigado por nos escolher!",
        );
      }, 3000);
    } else {
      setTimeout(() => {
        setPending(false);
        toast.error("Não foi possível ler os dados.");
      }, 2000);
    }
  }

  useEffect(() => {
    setCurrentPage("Planos");
    // eslint-disable-next-line
  }, []);

  return (
    <div className="p-p-3">
      <div className="p-p-3 default-container">
        {pending ? (
          <div
            className="p-d-flex p-as-center p-jc-center"
            style={{ height: "500px" }}
          >
            <div className="spinner-form">
              <ProgressSpinner />
            </div>
          </div>
        ) : (
          <>
            {actualPage === 1 ? (
              <>
                <div className=" gallery-background">
                  <div>
                    <div class="container">
                      <div class="tab-content wow fadeIn">
                        <div
                          role="tabpanel"
                          class="tab-pane fade show active"
                          id="yearly"
                        >
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
                                    <li>
                                      <i class="zmdi zmdi-check mr-2"></i>
                                      <span class="c-black">
                                        Suporte em horário comercial
                                      </span>
                                    </li>
                                  </ul>
                                  {userData.plan === "free" ? (
                                    <>
                                      <div class="btn btn-custom">
                                        <AiFillStar className="icon-star" />
                                      </div>
                                      <div>Plano Atual</div>
                                    </>
                                  ) : (
                                    <></>
                                  )}
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

                                  {userData.plan === "free" ? (
                                    <div
                                      onClick={() => {
                                        setActualPage(2);
                                      }}
                                      class="btn btn-custom"
                                    >
                                      Comprar Agora!
                                    </div>
                                  ) : (
                                    <>
                                      <div class="btn btn-custom">
                                        <AiFillStar className="icon-star" />
                                      </div>
                                      <div>Plano Atual</div>
                                      <div className="p-mt-2">
                                        Vencimento: {userData.Vencimento}
                                      </div>
                                    </>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                {" "}
                <div class="row">
                  <div class="col-md-5 col-lg-4 order-md-last">
                    <h4 class="d-flex justify-content-between align-items-center mb-3">
                      <span class=" plans-text">Seu carrinho</span>
                      <span class="badge  rounded-pill plans-button">1</span>
                    </h4>
                    <ul class="list-group mb-3">
                      <li class="list-group-item d-flex justify-content-between lh-sm">
                        <div>
                          <h6 class="my-0">Plano de Uso</h6>
                          <small class="text-muted">
                            Upgrade para versão profissional
                          </small>
                        </div>
                        <span class="text-muted">R$ 49</span>
                      </li>
                    </ul>

                    <form class="card p-2">
                      <div class="input-group">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Código Promocional"
                        />
                        <button type="button" class="btn plans-button">
                          Enviar
                        </button>
                      </div>
                    </form>
                  </div>
                  <div class="col-md-7 col-lg-8">
                    <h4 class="mb-3">Informações da compra</h4>
                    <form class="needs-validation" novalidate>
                      <div class="row g-3">
                        <div class="col-12">
                          <label for="email" class="form-label">
                            CPF/CNPJ <span class="text-muted"></span>
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="text"
                            placeholder="00000000-00"
                          />
                        </div>

                        <div class="col-12">
                          <label for="address" class="form-label">
                            Nome completo
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="address"
                            placeholder="Jaiminho"
                            required
                          />
                        </div>

                        <div class="col-12">
                          <label for="address" class="form-label">
                            Endereço
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="address"
                            placeholder="Rua A"
                            required
                          />
                        </div>
                      </div>

                      <hr class="my-4" />

                      <h4 class="mb-3">Pagamento</h4>

                      <div class="my-3">
                        <div class="form-check">
                          <input
                            id="credit"
                            name="paymentMethod"
                            type="radio"
                            class="form-check-input plans-check"
                            checked
                            required
                          />
                          <label class="form-check-label" for="credit">
                            Cartão de Credito
                          </label>
                        </div>
                        <div class="form-check">
                          <input
                            id="debit"
                            name="paymentMethod"
                            type="radio"
                            class="form-check-input plans-check"
                            required
                          />
                          <label class="form-check-label" for="debit">
                            Boleto
                          </label>
                        </div>
                      </div>

                      <div class="row gy-3">
                        <div class="col-md-6">
                          <label for="cc-name" class="form-label">
                            Nome no cartão
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="cc-name"
                            placeholder=""
                            required
                          />
                        </div>

                        <div class="col-md-6">
                          <label for="cc-number" class="form-label">
                            Número do cartão
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="cc-number"
                            placeholder=""
                            required
                          />
                        </div>

                        <div class="col-md-3">
                          <label for="cc-expiration" class="form-label">
                            Validade
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="cc-expiration"
                            placeholder=""
                            required
                          />
                        </div>

                        <div class="col-md-3">
                          <label for="cc-cvv" class="form-label">
                            CVC
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="cc-cvv"
                            placeholder=""
                            required
                          />
                        </div>
                      </div>

                      <hr class="my-4" />

                      <button
                        class="w-100 btn btn-primary btn-lg plans-button"
                        type="button"
                        onClick={() => {
                          handleEditUser();
                        }}
                      >
                        Concluir Compra
                      </button>
                    </form>
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Plans;
