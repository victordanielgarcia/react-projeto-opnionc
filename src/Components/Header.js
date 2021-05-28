import React, { useContext } from "react";

import firebaseConfig from "../Configs/FirebaseConnection";
import { AuthContext } from "../Configs/ContextProvider";

import { CgChevronDoubleLeft } from "react-icons/cg";
import { IoMdExit } from "react-icons/io";
import { BsFillBellFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";

import "../Styles/Header.css";

function Header() {
  const { currentPage } = useContext(AuthContext);
  const { currentUser } = useContext(AuthContext);

  return (
    <>
      {currentUser && (
        <div className="p-d-flex p-ai-center p-jc-between header-background">
          <span className="p-d-flex p-ai-center ">
            <CgChevronDoubleLeft className="p-ml-2 header-button-closed" />
            <span className="p-ml-2 header-text-page">{currentPage}</span>
          </span>
          <span className="p-d-flex p-ai-center ">
            <BsFillBellFill className="p-mr-3 header-button-bell" />
            <FaUserCircle className="p-mr-3 header-button-user" />
            <IoMdExit
              onClick={() => firebaseConfig.auth().signOut()}
              className="p-mr-3 header-button-exit"
            />
          </span>
        </div>
      )}
    </>
  );
}

export default Header;
