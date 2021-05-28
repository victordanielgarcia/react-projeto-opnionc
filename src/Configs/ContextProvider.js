import React, { useState, useEffect } from "react";
import firebaseAuth from "./FirebaseConnection";

import { searchCurrentUser } from "../Controllers/ControllerUser";

import { ProgressSpinner } from "primereact/progressspinner";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userData, setUserData] = useState(null);

  const [formAnswersList, setFormAnswersList] = useState([]);
  const [researchesList, setResearchesList] = useState([]);

  const [currentPage, setCurrentPage] = useState("Dashboard");
  const [navegationStatus, setNavegationStatus] = useState(false);

  const [pending, setPending] = useState(true);

  useEffect(() => {
    firebaseAuth.auth().onAuthStateChanged(async (user) => {
      setCurrentUser(user);
      if (user) {
        const userDataDB = await searchCurrentUser(user.uid);
        setUserData(userDataDB);
      }
      setPending(false);
    });
  }, []);

  if (pending) {
    return (
      <div className="spinner">
        <ProgressSpinner />
      </div>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        navegationStatus,
        setNavegationStatus,
        currentUser,
        setCurrentUser,
        userData,
        setUserData,
        formAnswersList,
        setFormAnswersList,
        researchesList,
        setResearchesList,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
