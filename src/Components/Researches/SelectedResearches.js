import React, { useContext, useEffect, useRef, useState } from "react";

import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { Menu } from "primereact/menu";

import { FaTimes } from "react-icons/fa";
import { GoDiffAdded } from "react-icons/go";
import { MdCheckBoxOutlineBlank, MdRadioButtonUnchecked } from "react-icons/md";
import { FiAlertTriangle } from "react-icons/fi";
import { IoReloadOutline } from "react-icons/io5";
import { ProgressSpinner } from "primereact/progressspinner";

import { editResearches } from "../../Controllers/ControllerResearches";

import AddEmail from "./AddEmail";
import ViewAnswers from "./ViewAnswers";

import emailjs from "emailjs-com";

import angry from "../../Assets/ANGRY.png";
import happy from "../../Assets/HAPPY.png";
import indiferent from "../../Assets/INDIFERENT.png";
import sad from "../../Assets/SAD.png";
import veryHappy from "../../Assets/VERY HAPPY.png";
import { toast } from "react-toastify";
import { AuthContext } from "../../Configs/ContextProvider";

import { ColorPicker } from "primereact/colorpicker";

function SelectedResearches(props) {
  const {
    setSelectedResearches,
    selectedResearches,
    researchesList,
    getDataFormAnswers,
    getDataResearches,
  } = props;

  const { formAnswersList } = useContext(AuthContext);

  const [toggleList, setToggleList] = useState(false);
  const [toggleEmail, setToggleEmail] = useState(true);

  const [emailList, setEmailList] = useState([]);

  const [inputSearch, setInputSearch] = useState("");

  const [createdForm, setCreatedForm] = useState([]);

  const [pending, setPending] = useState([]);

  const [formSelected, setFormSelected] = useState([]);

  const [color1, setColor1] = useState("#f4f4f4");
  const [color2, setColor2] = useState("363740");

  const [showAddEmailModal, setShowAddEmailModal] = useState(false);
  const [showViewAnswersModal, setShowViewAnswersModal] = useState({
    show: false,
    formAnswers: [],
  });

  function copyResearchesLink() {
    const textArea = document.createElement("textarea");
    textArea.value = `http://localhost:3000/a/${selectedResearches}`;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    textArea.remove();
    if (textArea) {
      toast.success("O link foi copiado para a sua area de transfêrencia!");
    }
  }

  function handleAddOption(index) {
    const newCreatedForm = createdForm.map((item) => {
      if (item.index === index) {
        return {
          ...item,
          options: [
            ...item.options,
            { name: `Opção ${item.options.length + 1}`, disabled: false },
          ],
        };
      }
      return item;
    });
    setCreatedForm(newCreatedForm);
  }

  function handleEditOption(index, value, indexOption) {
    const newCreatedForm = createdForm.map((item) => {
      if (item.index === index) {
        return {
          ...item,
          options: item.options.map((item, index) => {
            if (index === indexOption) {
              return { name: value, disabled: false };
            }
            return item;
          }),
        };
      }
      return item;
    });
    setCreatedForm(newCreatedForm);
  }

  function handleEditTitle(index, value) {
    const newCreatedForm = createdForm.map((item) => {
      if (item.index === index) {
        return { ...item, title: value };
      }
      return item;
    });
    setCreatedForm(newCreatedForm);
  }

  function handleDeleteOption(item2, indexOption) {
    const newCreatedForm = createdForm.map((item) => {
      if (item.index === item2.index) {
        return {
          ...item,
          options: item.options.filter((item, index) => indexOption !== index),
        };
      }
      return item;
    });
    setCreatedForm(newCreatedForm);
  }

  function handleDeleteQuestion(index) {
    const newCreatedForm = createdForm.filter((item) => item.index !== index);

    let count = 0;

    const newCreatedForm2 = newCreatedForm.map((item) => {
      const count2 = { ...item, index: count };
      count++;

      return count2;
    });

    setCreatedForm(newCreatedForm2);
  }

  async function handleAddForms() {
    setPending(false);
    const data = {
      createdForm,
      published: true,
    };
    const response = await editResearches(data, selectedResearches);
    if (response) {
      toast.success("Seu Formulário foi Publicado com Sucesso!");
      setPending(true);
    } else {
      setPending(true);
      toast.error("Algo deu Errado!");
    }
  }

  useEffect(() => {
    getDataFormAnswers();
    const [newData] = researchesList.filter(
      (item) => item.id === selectedResearches,
    );
    if (newData.createdForm) {
      setCreatedForm(newData.createdForm);
    }

    const [newData3] = researchesList.filter(
      (item) => item.id === selectedResearches,
    );
    if (newData3) {
      setFormSelected(newData);
    }

    const [newData2] = researchesList.filter(
      (item) => item.id === selectedResearches,
    );
    if (newData2.emailList) {
      setEmailList(newData2.emailList);
    }
    // eslint-disable-next-line
  }, [researchesList, selectedResearches]);

  const newCreatedFormLink = formAnswersList.filter(
    (item) => item.assessment_key === selectedResearches && !item.email,
  );

  const newCreatedFormEmail = formAnswersList.filter(
    (item) => item.assessment_key === selectedResearches && item.email,
  );

  const menu = useRef(null);

  const items = [
    {
      label: "Perguntas Simples",
      items: [
        {
          label: "Resposta Curta",
          command: () => {
            setCreatedForm([
              ...createdForm,
              {
                type: "shortAnswer",
                title: "",
                answer: "",
                index: createdForm.length,
              },
            ]);
          },
        },
        {
          label: "Paragrafo",
          command: () => {
            setCreatedForm([
              ...createdForm,
              {
                type: "paragraph",
                title: "",
                answer: "",
                index: createdForm.length,
              },
            ]);
          },
        },
        {
          label: "Múltipla Escolha",
          command: () => {
            setCreatedForm([
              ...createdForm,
              {
                type: "multipleChoice",
                title: "",
                index: createdForm.length,
                options: [
                  { name: "Opção 1", disabled: false },
                  { name: "Opção 2", disabled: false },
                ],
              },
            ]);
          },
        },
        {
          label: "Caixa de Seleção",
          command: () => {
            setCreatedForm([
              ...createdForm,
              {
                type: "selectionBox",
                title: "",
                index: createdForm.length,
                options: [
                  { name: "Opção 1", disabled: false },
                  { name: "Opção 2", disabled: false },
                ],
              },
            ]);
          },
        },
      ],
    },
    {
      label: "Perguntas Quantitativas",
      items: [
        {
          label: "Estrelas",
          command: () => {
            setCreatedForm([
              ...createdForm,
              {
                type: "avaliationStars",
                title: "",
                answer: 0,
                index: createdForm.length,
              },
            ]);
          },
        },
        {
          label: "Números",
          command: () => {
            setCreatedForm([
              ...createdForm,
              {
                type: "avaliationNumber",
                title: "",
                answer: 0,
                index: createdForm.length,
              },
            ]);
          },
        },
        {
          label: "Emotes",
          command: () => {
            setCreatedForm([
              ...createdForm,
              {
                type: "avaliationSmiles",
                title: "",
                answer: 0,
                index: createdForm.length,
              },
            ]);
          },
        },
      ],
    },
  ];

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
          toast.success("O E-mail foi reenviado com sucesso!");
        },
        function (err) {
          console.log(err);
          toast.success("Não foi possivel reenviar o E-mail!");
        },
      );
  }

  function reloadItens() {
    getDataFormAnswers();
    getDataResearches();
    setPending(false);
    setTimeout(() => {
      setPending(true);
    }, 1500);
  }

  return (
    <div className="p-p-3 default-container">
      <AddEmail
        showAddEmailModal={showAddEmailModal}
        setShowAddEmailModal={setShowAddEmailModal}
        selectedResearches={selectedResearches}
        researchesList={researchesList}
        getDataFormAnswers={getDataFormAnswers}
        getDataResearches={getDataResearches}
      />
      <ViewAnswers
        showViewAnswersModal={showViewAnswersModal}
        setShowViewAnswersModal={setShowViewAnswersModal}
        formAnswersList={formAnswersList}
      />

      <span className="p-mt-2 p-d-flex p-jc-between">
        <div>
          <Button
            className="research-button-addquestion"
            label="Voltar"
            icon="pi pi-undo"
            onClick={() => {
              setSelectedResearches("");
            }}
          />
          <Button
            className="p-ml-2 research-button-addquestion"
            label="Copiar Link"
            icon="pi pi-copy"
            onClick={() => copyResearchesLink()}
          />
          <Button
            className="p-mx-2 research-button-addquestion"
            label="Compartilhar via E-mail"
            icon="pi pi-share-alt"
            onClick={() => setShowAddEmailModal(true)}
          />
          <IoReloadOutline
            onClick={() => reloadItens()}
            className="p-mx-2 realod-button"
          />
        </div>
        {!toggleList ? (
          <div>
            {formSelected.published ? (
              <></>
            ) : (
              <>
                <span className="p-mx-2">Cor do Fundo:</span>
                <ColorPicker
                  className="p-mx-2"
                  value={color1}
                  onChange={(e) => setColor1(e.value)}
                />
                <span className="p-mx-2">Cor das Letras:</span>
                <ColorPicker
                  className="p-mx-2 p-ml-2 p-mb-1"
                  value={color2}
                  onChange={(e) => setColor2(e.value)}
                />
                <Menu model={items} popup ref={menu} />
                <Button
                  className="research-button-addquestion"
                  label="Adicionar Pergunta"
                  icon="pi pi-bars"
                  onClick={(event) => menu.current.toggle(event)}
                />
              </>
            )}
          </div>
        ) : (
          <div>
            <div className="p-inputgroup">
              <InputText
                className="search-input"
                placeholder="Buscar Respostas..."
                value={inputSearch}
                onChange={(e) => setInputSearch(e.target.value)}
              />
              <Button
                icon="pi pi-search"
                className="researches-button-search"
              />
            </div>
          </div>
        )}
      </span>

      <div className="p-mt-3 p-grid p-px-2 p-py-3 editListItems">
        <div
          className={
            toggleList
              ? "p-col-6 p-d-flex editListItems-tab"
              : "p-col-6 p-d-flex editListItems-active-tab"
          }
          onClick={() => {
            setToggleList(false);
          }}
        >
          <p className="p-mx-auto">Formulário</p>
        </div>
        <div
          className={
            toggleList
              ? "p-col-6 p-d-flex editListItems-active-tab"
              : "p-col-6 p-d-flex editListItems-tab"
          }
          onClick={() => {
            setToggleList(true);
          }}
        >
          {toggleEmail ? (
            <p className="p-mx-auto">
              Respostas via Link
              <span onClick={() => setToggleEmail(!toggleEmail)}>
                {" "}
                (TROCAR)
              </span>
            </p>
          ) : (
            <p className="p-mx-auto">
              Respostas via E-mail
              <span onClick={() => setToggleEmail(!toggleEmail)}>
                {" "}
                (TROCAR)
              </span>
            </p>
          )}
        </div>
      </div>

      {!pending ? (
        <div className="p-p-3 p-d-flex p-ai-center p-jc-center p-flex-column  default-container">
          <div className="spinner-form">
            <ProgressSpinner />
          </div>
        </div>
      ) : (
        <>
          {!toggleList ? (
            <>
              {createdForm.length === 0 && (
                <div className="p-mt-4">
                  <div className="p-mt-5 p-d-flex p-as-center p-jc-center">
                    <FiAlertTriangle className="p-my-5 p-d-flex p-as-center p-jc-center researches-icon-alert" />
                  </div>

                  <div className="p-mt-2 p-d-flex p-as-center p-jc-center p-text-center">
                    Essa Pequisa ainda não possui um Formulário, <br />
                    Crie um agora usando o menu lateral!
                  </div>
                </div>
              )}

              <div>
                {createdForm.map((item) => {
                  if (item.type === "shortAnswer") {
                    return (
                      <>
                        <div className="p-my-2 p-p-3 researches-menu">
                          <div className="p-d-flex p-as-center">
                            <Button
                              className="p-p-0 researches-input-on-button"
                              onClick={() => handleDeleteQuestion(item.index)}
                            >
                              <FaTimes className="p-mx-auto settings-button-icon" />
                            </Button>
                            <div className="p-d-flex p-as-center">
                              &ensp; #{item.index} Resposta Curta
                            </div>
                          </div>
                          <InputText
                            placeholder="Digite um titulo para a pergunta curta..."
                            className="p-my-2 settings-input"
                            type="text"
                            value={item.title}
                            onChange={(e) =>
                              handleEditTitle(item.index, e.target.value)
                            }
                          />
                        </div>
                      </>
                    );
                  }
                  if (item.type === "paragraph") {
                    return (
                      <div className="p-my-2 p-p-3 researches-menu">
                        <div className="p-d-flex p-as-center">
                          <Button
                            className="p-p-0 researches-input-on-button"
                            onClick={() => handleDeleteQuestion(item.index)}
                          >
                            <FaTimes className="p-mx-auto settings-button-icon" />
                          </Button>
                          <div className="p-d-flex p-as-center">
                            &ensp; #{item.index} Paragrafo
                          </div>
                        </div>
                        <InputTextarea
                          placeholder="Digite um titulo para o paragrafo..."
                          autoResize={false}
                          rows={4}
                          cols={30}
                          className=" p-my-2 settings-input"
                          value={item.title}
                          onChange={(e) =>
                            handleEditTitle(item.index, e.target.value)
                          }
                        />
                      </div>
                    );
                  }
                  if (item.type === "multipleChoice") {
                    return (
                      <div className="p-my-2 p-p-3 researches-menu">
                        <div className="p-d-flex p-as-center">
                          <Button
                            className="p-p-0 researches-input-on-button"
                            onClick={() => handleDeleteQuestion(item.index)}
                          >
                            <FaTimes className="p-mx-auto settings-button-icon" />
                          </Button>
                          <div className="p-d-flex p-as-center">
                            &ensp; #{item.index} Múltipla Escolha
                          </div>
                        </div>
                        <InputText
                          placeholder="Digite um titulo para a pergunta de multipla escolha..."
                          className="p-my-2 settings-input"
                          type="text"
                          value={item.title}
                          onChange={(e) =>
                            handleEditTitle(item.index, e.target.value)
                          }
                        />
                        {item.options.map((itemOption, index) => {
                          return (
                            <div className="p-field-checkbox">
                              <MdRadioButtonUnchecked className="p-mx-3 p-p-0 researches-icon-select" />
                              <span className="p-d-flex p-mt-1 p-input-icon-left p-input-icon-right width100">
                                <InputText
                                  className="settings-input"
                                  type="text"
                                  value={itemOption.name}
                                  onChange={(e) =>
                                    handleEditOption(
                                      item.index,
                                      e.target.value,
                                      index,
                                    )
                                  }
                                />
                                <Button
                                  className="p-p-0 settings-input-on-button"
                                  onClick={() =>
                                    handleDeleteOption(item, index)
                                  }
                                >
                                  <FaTimes className="p-mx-auto settings-button-icon" />
                                </Button>
                              </span>
                            </div>
                          );
                        })}
                        <div className="p-field-checkbox">
                          <div
                            className="p-d-flex p-as-center"
                            onClick={() => handleAddOption(item.index)}
                          >
                            <GoDiffAdded className="p-mr-2 p-p-0 p-mx-3 researches-icon-add" />
                            <label className="researches-text-add">
                              Adicionar nova opção
                            </label>
                          </div>
                        </div>
                      </div>
                    );
                  }
                  if (item.type === "selectionBox") {
                    return (
                      <div className="p-my-2 p-p-3 researches-menu">
                        <div className="p-d-flex p-as-center">
                          <Button
                            className="p-p-0 researches-input-on-button"
                            onClick={() => handleDeleteQuestion(item.index)}
                          >
                            <FaTimes className="p-mx-auto settings-button-icon" />
                          </Button>
                          <div className="p-d-flex p-as-center">
                            &ensp; #{item.index} Caixa de seleção
                          </div>
                        </div>
                        <InputText
                          placeholder="Digite um titulo para a caixa de seleção..."
                          className="p-my-2 settings-input"
                          type="text"
                          value={item.title}
                          onChange={(e) =>
                            handleEditTitle(item.index, e.target.value)
                          }
                        />
                        {item.options.map((itemOption, index) => {
                          return (
                            <div className="p-field-checkbox">
                              <MdCheckBoxOutlineBlank className="p-mx-3 p-p-0 researches-icon-select" />
                              <span className="p-d-flex p-mt-1 p-input-icon-left p-input-icon-right width100">
                                <InputText
                                  className="settings-input"
                                  type="text"
                                  value={itemOption.name}
                                  onChange={(e) =>
                                    handleEditOption(
                                      item.index,
                                      e.target.value,
                                      index,
                                    )
                                  }
                                />
                                <Button
                                  className="p-p-0 settings-input-on-button"
                                  onClick={() =>
                                    handleDeleteOption(item, index)
                                  }
                                >
                                  <FaTimes className="p-mx-auto settings-button-icon" />
                                </Button>
                              </span>
                            </div>
                          );
                        })}
                        <div className="p-field-checkbox">
                          <div
                            className="p-mx-3 p-d-flex p-as-center"
                            onClick={() => handleAddOption(item.index)}
                          >
                            <GoDiffAdded className="p-mr-2 p-p-0 researches-icon-add" />
                            <label className="researches-text-add">
                              Adicionar nova opção
                            </label>
                          </div>
                        </div>
                      </div>
                    );
                  }
                  if (item.type === "avaliationStars") {
                    return (
                      <div className="p-my-2 p-p-3 researches-menu">
                        <div className="p-d-flex p-as-center">
                          <Button
                            className="p-p-0 researches-input-on-button"
                            onClick={() => handleDeleteQuestion(item.index)}
                          >
                            <FaTimes className="p-mx-auto settings-button-icon" />
                          </Button>
                          <div className="p-d-flex p-as-center">
                            &ensp; #{item.index} Avaliação(Estrelas)
                          </div>
                        </div>
                        <InputText
                          placeholder="Digite um titulo para a avaliação com estrelas..."
                          className="p-my-2 settings-input"
                          type="text"
                          value={item.title}
                          onChange={(e) =>
                            handleEditTitle(item.index, e.target.value)
                          }
                        />
                        <div id="rating">
                          <span className="rating-in">★</span>
                          <span className="rating-in">★</span>
                          <span className="rating-in">★</span>
                          <span className="rating-in">★</span>
                          <span className="rating-in">★</span>
                        </div>
                      </div>
                    );
                  }
                  if (item.type === "avaliationNumber") {
                    return (
                      <div className="p-my-2 p-p-3 researches-menu">
                        <div className="p-d-flex p-as-center">
                          <Button
                            className="p-p-0 researches-input-on-button"
                            onClick={() => handleDeleteQuestion(item.index)}
                          >
                            <FaTimes className="p-mx-auto settings-button-icon" />
                          </Button>
                          <div className="p-d-flex p-as-center">
                            &ensp; #{item.index} Avaliação(Números)
                          </div>
                        </div>
                        <InputText
                          placeholder="Digite um titulo para a avaliação com estrelas..."
                          className="p-my-2 settings-input"
                          type="text"
                          value={item.title}
                          onChange={(e) =>
                            handleEditTitle(item.index, e.target.value)
                          }
                        />
                        <div className="p-my-5" id="rating">
                          <span className="p-mx-1 researches-rating-in">1</span>
                          <span className="p-mx-1 researches-rating-in">2</span>
                          <span className="p-mx-1 researches-rating-in">3</span>
                          <span className="p-mx-1 researches-rating-in">4</span>
                          <span className="p-mx-1 researches-rating-in">5</span>
                        </div>
                      </div>
                    );
                  }
                  if (item.type === "avaliationSmiles") {
                    return (
                      <div className="p-my-2 p-p-3 researches-menu">
                        <div className="p-d-flex p-as-center">
                          <Button
                            className="p-p-0 researches-input-on-button"
                            onClick={() => handleDeleteQuestion(item.index)}
                          >
                            <FaTimes className="p-mx-auto settings-button-icon" />
                          </Button>
                          <div className="p-d-flex p-as-center">
                            &ensp; #{item.index} Avaliação(Smiles)
                          </div>
                        </div>
                        <InputText
                          placeholder="Digite um titulo para a avaliação com estrelas..."
                          className="p-my-2 settings-input"
                          type="text"
                          value={item.title}
                          onChange={(e) =>
                            handleEditTitle(item.index, e.target.value)
                          }
                        />
                        <div className="p-my-5" id="rating">
                          <img
                            className="p-mx-2 researches-smiles"
                            src={angry}
                            alt=""
                          />
                          <img
                            className="p-mx-2 researches-smiles"
                            src={sad}
                            alt=""
                          />
                          <img
                            className="p-mx-2 researches-smiles"
                            src={indiferent}
                            alt=""
                          />
                          <img
                            className="p-mx-2 researches-smiles"
                            src={happy}
                            alt=""
                          />
                          <img
                            className="p-mx-2 researches-smiles"
                            src={veryHappy}
                            alt=""
                          />
                        </div>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
              {createdForm.length !== 0 && (
                <Button
                  type="submit"
                  className="p-d-flex p-mx-auto p-mt-5 p-px-6 p-py-2 login-button"
                  label="Publicar Formulário"
                  iconPos="right"
                  onClick={() => {
                    handleAddForms();
                  }}
                />
              )}
            </>
          ) : (
            <>
              {toggleEmail ? (
                <>
                  {formAnswersList.filter(
                    (item) =>
                      item.assessment_key === selectedResearches && !item.email,
                  ).length === 0 ? (
                    <div className="p-mt-4">
                      <div className="p-mt-5 p-d-flex p-as-center p-jc-center">
                        <FiAlertTriangle className="p-my-5 p-d-flex p-as-center p-jc-center researches-icon-alert" />
                      </div>

                      <div className="p-mt-2 p-d-flex p-as-center p-jc-center">
                        Você ainda não possui respostas via link para essa
                        pesquisa!
                      </div>
                    </div>
                  ) : (
                    <table>
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Data da Resposta</th>
                          <th scope="col">Ação</th>
                        </tr>
                      </thead>
                      <tbody>
                        {newCreatedFormLink
                          .filter(
                            (item) =>
                              item.date
                                .toUpperCase()
                                .indexOf(inputSearch.toUpperCase()) !== -1,
                          )
                          .map((item, index) => {
                            return (
                              <tr>
                                <td data-label="#">{index + 1}</td>
                                <td data-label="Data">{item.date}</td>
                                <td data-label="Ação">
                                  <Button
                                    type="submit"
                                    className="p-mx-2 researches-button"
                                    label="Visualizar Resposta"
                                    iconPos="right"
                                    onClick={() =>
                                      setShowViewAnswersModal({
                                        show: true,
                                        formAnswers: item,
                                      })
                                    }
                                  />
                                </td>
                              </tr>
                            );
                          })}
                      </tbody>
                    </table>
                  )}
                </>
              ) : (
                <>
                  {emailList.length === 0 ? (
                    <div className="p-mt-4">
                      <div className="p-mt-5 p-d-flex p-as-center p-jc-center">
                        <FiAlertTriangle className="p-my-5 p-d-flex p-as-center p-jc-center researches-icon-alert" />
                      </div>

                      <div className="p-mt-2 p-d-flex p-as-center p-jc-center">
                        Você ainda não possui e-mails cadastrados para essa
                        pesquisa!
                      </div>
                    </div>
                  ) : (
                    <div className="p-mt-3">
                      <table>
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Data da Resposta</th>
                            <th scope="col">E-mail</th>
                            <th scope="col">Ação</th>
                          </tr>
                        </thead>
                        <tbody>
                          {emailList.map((item, index) => (
                            <tr>
                              <td data-label="#">{index + 1}</td>
                              <td data-label="Data">
                                {newCreatedFormEmail.map((answer) => {
                                  if (item === answer.email) {
                                    return answer.date;
                                  }
                                  return null;
                                })}
                              </td>
                              <td data-label="E-mail">{item}</td>
                              <td data-label="Ação">
                                {newCreatedFormEmail.map((answer) => {
                                  if (item === answer.email) {
                                    return (
                                      <Button
                                        type="submit"
                                        className="p-mx-2 researches-button"
                                        label="Visualizar"
                                        iconPos="right"
                                        onClick={() =>
                                          setShowViewAnswersModal({
                                            show: true,
                                            formAnswers: answer,
                                          })
                                        }
                                      />
                                    );
                                  }
                                  return null;
                                })}

                                <Button
                                  type="submit"
                                  className="p-mx-2 researches-button-sended"
                                  label="Reenviar"
                                  iconPos="right"
                                  onClick={() => sendEmail(item)}
                                />
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
}

export default SelectedResearches;
