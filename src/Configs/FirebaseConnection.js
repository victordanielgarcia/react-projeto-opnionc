import firebase from "firebase";
require("firebase/firestore");

const firebaseAuth = firebase.initializeApp({
  apiKey: "AIzaSyD38ppDOIp-1LQv5Nw3ks12GqusRoCeBaI",
  authDomain: "opinionc-33ac0.firebaseapp.com",
  projectId: "opinionc-33ac0",
  storageBucket: "opinionc-33ac0.appspot.com",
  messagingSenderId: "313706835884",
  appId: "1:313706835884:web:a8855406f82d3daaae5409",
});

export const firebaseCreate = firebase.initializeApp(
  {
    apiKey: "AIzaSyD38ppDOIp-1LQv5Nw3ks12GqusRoCeBaI",
    authDomain: "opinionc-33ac0.firebaseapp.com",
    projectId: "opinionc-33ac0",
    storageBucket: "opinionc-33ac0.appspot.com",
    messagingSenderId: "313706835884",
    appId: "1:313706835884:web:a8855406f82d3daaae5409",
  },
  "Create User",
);

export default firebaseAuth;
export const firebaseDB = firebase.firestore();
export const firebaseStorage = firebase.storage();
