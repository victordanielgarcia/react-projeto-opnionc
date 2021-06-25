import React, { useContext, useEffect } from "react";

import { scroller } from "react-scroll";

import Navegation from "../Components/SinglePage/Navegation";
import Plans from "../Components/SinglePage/Plans";
import Gallery from "../Components/SinglePage/Gallery";
import Footer from "../Components/SinglePage/Footer";
import About from "../Components/SinglePage/About";
import Header from "../Components/SinglePage/Header";
import Contact from "../Components/SinglePage/Contact";

import "../Styles/SinglePage.css";
import { AuthContext } from "../Configs/ContextProvider";

function SinglePage() {
  const { setCurrentPage } = useContext(AuthContext);

  useEffect(() => {
    setCurrentPage("Disabled");
    // eslint-disable-next-line
  }, []);

  const scrollToSection = (item) => {
    scroller.scrollTo(item, {
      duration: 1000,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <>
      <Navegation scrollToSection={scrollToSection} />
      <Header />
      <Plans />
      <About />
      <Gallery />
      <Contact />
      <Footer scrollToSection={scrollToSection} />
    </>
  );
}

export default SinglePage;
