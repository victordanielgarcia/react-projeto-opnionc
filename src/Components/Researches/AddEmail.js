import React, { useEffect, useState } from "react";

import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";

import { ProgressSpinner } from "primereact/progressspinner";

import { AiOutlineShareAlt } from "react-icons/ai";
import { editResearches } from "../../Controllers/ControllerResearches";

import emailjs from "emailjs-com";
import { toast } from "react-toastify";

function AddEmail(props) {
  const {
    showAddEmailModal,
    setShowAddEmailModal,
    selectedResearches,
    researchesList,
    getDataResearches,
    getDataFormAnswers,
  } = props;

  const [emailList, setEmailList] = useState([]);
  const [newEmailList, setNewEmailList] = useState([]);

  const [actualEmail, setActualEmail] = useState("");

  const [pending, setPending] = useState(false);

  function clearFields() {
    setNewEmailList([]);
    setShowAddEmailModal(false);
  }

  async function handleAddResearches() {
    setPending(true);
    const data = {
      emailList: newEmailList,
    };
    const response = await editResearches(data, selectedResearches);
    if (response) {
      clearFields();
      setEmailList(newEmailList);
      sendEmail(actualEmail);
      setPending(false);
      getDataResearches();
      getDataFormAnswers();
      toast.success("O e-mail foi adicionado com sucesso!");
    } else {
      setPending(false);
      toast.error("Algo deu Errado!");
    }
  }

  function sendEmail(e) {
    var data = {
      to_email: e,
      link: selectedResearches,
    };

    emailjs
      .send(
        "service_qo63alm",
        "template_da2q1my",
        data,
        "user_bynkexbAzxrwLiNoexCMm",
      )
      .then(
        function (response) {
          console.log(response.status, response.text);
        },
        function (err) {
          console.log(err);
        },
      );
  }

  useEffect(() => {
    const [newData] = researchesList.filter(
      (item) => item.id === selectedResearches,
    );
    if (newData.emailList) {
      setEmailList(newData.emailList);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Dialog
      header={() => {
        return (
          <div className="p-d-flex">
            <div className="p-p-0 p-mr-2 p-d-flex">
              <AiOutlineShareAlt className="researches-addnew-icon" />
            </div>
            <span className="p-my-auto users-button-text">
              Compartilhar por E-mail
            </span>
          </div>
        );
      }}
      visible={showAddEmailModal}
      breakpoints={{ "960px": "75vw" }}
      style={{ width: "40vw" }}
      footer={() => {
        return (
          <div>
            <Button
              className="researches-button-modal"
              label="Salvar"
              iconPos="right"
              autoFocus={false}
              onClick={() => handleAddResearches()}
            />
          </div>
        );
      }}
      onHide={() => setShowAddEmailModal(false)}
      baseZIndex={0}
    >
      {pending ? (
        <div
          className="p-d-flex p-as-center p-jc-center"
          style={{ height: "200px" }}
        >
          <div className="spinner-form">
            <ProgressSpinner />
          </div>
        </div>
      ) : (
        <>
          <label>Lista de E-mails</label>
          <InputText
            placeholder="Digite um e-mail para compartilhar.."
            className="p-my-2 settings-input"
            type="text"
            onChange={(e) =>
              setNewEmailList([...emailList, e.target.value]) |
              setActualEmail(e.target.value)
            }
          />
        </>
      )}
    </Dialog>
  );
}

export default AddEmail;
