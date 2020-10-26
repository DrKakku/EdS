// database/firebaseDb.js

import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCHn1KIUtfMWWH2VrEKTHblUnZ8_kmZn14",
  authDomain: "education-succour.firebaseapp.com",
  databaseURL: "https://education-succour.firebaseio.com",
  projectId: "education-succour",
  storageBucket: "education-succour.appspot.com",
  messagingSenderId: "1098332388287",
  appId: "1:1098332388287:web:cdcf60b393c69d06f93f0a",
  measurementId: "G-2F1QQX4FPL",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
