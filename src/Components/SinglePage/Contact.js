import React, { useState } from "react";

import { toast } from "react-toastify";

import { ProgressSpinner } from "primereact/progressspinner";

function Contact() {
  const [pending, setPending] = useState(false);

  function handleSendEmail(event) {
    event.preventDefault();
    setPending(true);
    setTimeout(() => {
      setPending(false);
      toast.success(
        "O e-mail foi enviado com sucesso! Obrigado por entrar em contato",
      );
    }, 2000);
  }

  return (
    <div className="gallery-background contact23">
      <div className="p-mt-5 p-d-flex p-jc-center">
        <h2>Contato</h2>
      </div>

      <div className="p-d-flex p-jc-center">
        <div className="p-mt-3 gallery-line"></div>
      </div>

      <div class="container1">
        {pending ? (
          <div
            className="p-d-flex p-as-center p-jc-center"
            style={{ height: "350px" }}
          >
            <div className="spinner-form">
              <ProgressSpinner />
            </div>
          </div>
        ) : (
          <form id="contact" onSubmit={handleSendEmail}>
            <h1
              className="p-text-center p-my-3"
              style={{ fontSize: "1rem", color: "black" }}
            >
              Entre em contato hoje e obtenha resposta em 24 horas!
            </h1>
            <fieldset>
              <input
                placeholder="Seu nome"
                type="text"
                tabindex="1"
                required
                autofocus
              ></input>
            </fieldset>
            <fieldset>
              <input
                placeholder="Seu E-mail"
                type="email"
                tabindex="2"
                required
              ></input>
            </fieldset>
            <fieldset>
              <input
                placeholder="Seu Telefone"
                type="tel"
                tabindex="3"
                required
              ></input>
            </fieldset>
            <fieldset>
              <textarea
                placeholder="Digite a sua mensagem aqui...."
                tabindex="5"
                required
              ></textarea>
            </fieldset>
            <fieldset>
              <button name="submit" type="submit" id="contact-submit">
                Enviar
              </button>
            </fieldset>
          </form>
        )}
      </div>
    </div>
  );
}

export default Contact;
