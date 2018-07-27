import { createStore } from "redux";
import { rootReducer } from "./reducers/root";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyCOidlnpoTLq4mweCZg6xVjDFsRBhrVN08",
  authDomain: "econ-panel.firebaseapp.com",
  databaseURL: "https://econ-panel.firebaseio.com",
  projectId: "econ-panel",
  storageBucket: "econ-panel.appspot.com",
  messagingSenderId: "381981234226"
};
// Init firebase instance
firebase.initializeApp(firebaseConfig);
// Init firestore
export const firestore = firebase.firestore();

const store = createStore(rootReducer);

export default store;
